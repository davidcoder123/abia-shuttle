import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabase';

// Helper function to generate GSB + 8-character random code
const generateBookingRef = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomCode = '';
  for (let i = 0; i < 8; i++) {
    randomCode += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `GSB-${randomCode}`;
};

export default function ShuttleBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const directRouteId = location.state?.routeId;

  const [dbRoutes, setDbRoutes] = useState([]);
  const [dbBuses, setDbBuses] = useState([]);

  const getTodayString = () => new Date().toISOString().split('T')[0];
  
  const getTomorrowString = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const todayStr = getTodayString();
  const tomorrowStr = getTomorrowString();

  const [step, setStep] = useState(1);
  const [selectedRoute, setSelectedRoute] = useState('');
  const [travelDate, setTravelDate] = useState(todayStr);
  const [seatCount, setSeatCount] = useState(1);
  const [selectedBus, setSelectedBus] = useState(null);
  
  const [passengers, setPassengers] = useState([{ name: '', phone: '' }]);
  const [contactEmail, setContactEmail] = useState('');
  
  const [bookingRef, setBookingRef] = useState('');
  const [isPaid, setIsPaid] = useState(false);

  useEffect(() => {
    const fetchRoutes = async () => {
      const { data, error } = await supabase
        .from('routes')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching routes:', error);
        return;
      }

      // Map raw DB data to our unique Routes array
      const uniqueRoutesMap = new Map();
      const mappedBuses = [];

      data.forEach(r => {
        const routeId = `${r.origin}-${r.destination}`;
        if (!uniqueRoutesMap.has(routeId)) {
          uniqueRoutesMap.set(routeId, {
            id: routeId,
            origin: r.origin,
            destination: r.destination
          });
        }
        
        mappedBuses.push({
          id: r.id, // The raw UUID
          routeId: routeId,
          operator: r.bus_assigned_name,
          busNumber: r.bus_assigned_id, // we use ID as number here for display
          departureTime: r.departure_time,
          departureDate: r.departure_date,
          type: 'Standard Shuttle', // Fallback
          price: r.price_per_seat,
          availableSeats: r.total_capacity - r.seats_booked,
        });
      });

      setDbRoutes(Array.from(uniqueRoutesMap.values()));
      setDbBuses(mappedBuses);

      // Direct booking flow logic
      if (directRouteId) {
        const targetBus = mappedBuses.find(b => b.id === directRouteId);
        if (targetBus) {
          setSelectedRoute(targetBus.routeId);
          setTravelDate(targetBus.departureDate || todayStr);
          setSelectedBus(targetBus);
          setStep(1); // Land on Step 1 so they can pick seat count, but everything is pre-filled
        }
      }
    };
    fetchRoutes();
  }, [directRouteId]);

  const availableBuses = dbBuses
    .filter((bus) => bus.routeId === selectedRoute && bus.departureDate === travelDate)
    .filter((bus) => (directRouteId ? bus.id === directRouteId : true));

  const handleSeatCountChange = (count) => {
    const numSeats = Math.max(1, Math.min(6, parseInt(count) || 1));
    setSeatCount(numSeats);
    
    setPassengers((prev) => {
      const updated = [...prev];
      if (numSeats > updated.length) {
        while (updated.length < numSeats) {
          updated.push({ name: '', phone: '' });
        }
      } else {
        updated.splice(numSeats);
      }
      return updated;
    });
  };

  const handlePassengerChange = (index, field, value) => {
    setPassengers((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const canNavigateTo = (targetStep) => {
    if (targetStep === 1) return true;
    if (targetStep === 2) return Boolean(selectedRoute && travelDate && seatCount > 0);
    if (targetStep === 3) return Boolean(selectedBus);
    if (targetStep === 4) return isPaid;
    return false;
  };

  const handleStepClick = (targetStep) => {
    if (canNavigateTo(targetStep)) {
      setStep(targetStep);
    }
  };

  const handleRouteSearch = (e) => {
    e.preventDefault();
    if (!selectedRoute || !travelDate) {
      alert('Please select both route and travel date.');
      return;
    }
    setStep(2);
  };

  const handleSelectBus = (bus) => {
    if (bus.availableSeats < seatCount) {
      alert(`This bus only has ${bus.availableSeats} seat(s) available.`);
      return;
    }
    setSelectedBus(bus);
    setStep(3);
  };

  const handleProcessPayment = (e) => {
    e.preventDefault();
    
    const missingDetails = passengers.some((p) => !p.name.trim() || !p.phone.trim());
    if (missingDetails) {
      alert('Please fill in the required details for all passengers.');
      return;
    }
    
    // Generate unique code (e.g., GSB-8X9K2P1L)
    const newRef = generateBookingRef();
    setBookingRef(newRef);
    setIsPaid(true);
    setStep(4);
  };

  const handlePrint = () => {
    window.print();
  };

  const resetBooking = () => {
    setStep(1);
    setSelectedRoute('');
    setTravelDate(todayStr);
    setSeatCount(1);
    setSelectedBus(null);
    setPassengers([{ name: '', phone: '' }]);
    setContactEmail('');
    setIsPaid(false);
  };

  const routeObj = dbRoutes.find((r) => r.id === selectedRoute);
  const totalFare = selectedBus ? selectedBus.price * seatCount : 0;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden">
        
        {/* Header Banner */}
        <div className="bg-[#ff6200] text-white p-6 print:hidden">
          <h1 className="text-2xl font-bold">Abia Shuttle Express</h1>
          <p className="text-orange-100 text-sm">Fast, reliable, and secure online seat reservation</p>
          
          <div className="flex items-center justify-between mt-6 text-xs font-semibold text-orange-200">
            <button
              type="button"
              onClick={() => handleStepClick(1)}
              className={`transition-all duration-200 ${
                step === 1 ? 'text-white font-bold underline scale-105' : 'hover:text-white cursor-pointer'
              }`}
            >
              1. Route
            </button>
            <span>→</span>
            <button
              type="button"
              disabled={!canNavigateTo(2)}
              onClick={() => handleStepClick(2)}
              className={`transition-all duration-200 ${
                step === 2
                  ? 'text-white font-bold underline scale-105'
                  : canNavigateTo(2)
                  ? 'hover:text-white cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              2. Bus
            </button>
            <span>→</span>
            <button
              type="button"
              disabled={!canNavigateTo(3)}
              onClick={() => handleStepClick(3)}
              className={`transition-all duration-200 ${
                step === 3
                  ? 'text-white font-bold underline scale-105'
                  : canNavigateTo(3)
                  ? 'hover:text-white cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              3. Details
            </button>
            <span>→</span>
            <button
              type="button"
              disabled={!canNavigateTo(4)}
              onClick={() => handleStepClick(4)}
              className={`transition-all duration-200 ${
                step === 4
                  ? 'text-white font-bold underline scale-105'
                  : canNavigateTo(4)
                  ? 'hover:text-white cursor-pointer'
                  : 'opacity-40 cursor-not-allowed'
              }`}
            >
              4. Receipt
            </button>
          </div>
        </div>

        <div className="p-6">
          {/* STEP 1: ROUTE, DATE & SEAT COUNT */}
          {step === 1 && (
            <form onSubmit={handleRouteSearch} className="space-y-4">
              <h2 className="text-lg font-bold text-slate-800">Select Travel Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Route</label>
                <select
                  value={selectedRoute}
                  onChange={(e) => setSelectedRoute(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#ff6200] outline-none transition-all duration-200"
                  required
                >
                  <option value="">-- Choose Departure & Destination --</option>
                  {dbRoutes.map((route) => (
                    <option key={route.id} value={route.id}>
                      {route.origin} to {route.destination}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Travel Date</label>
                  <input
                    type="date"
                    value={travelDate}
                    min={todayStr}
                    max={tomorrowStr}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#ff6200] outline-none transition-all duration-200"
                    required
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Bookings are open for today and tomorrow only.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Number of Passengers / Seats</label>
                  <select
                    value={seatCount}
                    onChange={(e) => handleSeatCountChange(e.target.value)}
                    className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#ff6200] outline-none transition-all duration-200"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Passenger (1 Seat)' : 'Passengers (' + num + ' Seats)'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ff6200] text-white py-3 rounded-lg font-semibold hover:bg-[#803100] transition-colors duration-200 mt-2"
              >
                Find Available Buses
              </button>
            </form>
          )}

          {/* STEP 2: BUS SELECTION */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-[#ff6200] transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Route
                </button>
                <h2 className="text-lg font-bold text-slate-800">Available Buses</h2>
              </div>

              <div className="bg-orange-50/60 border border-orange-100 p-3 rounded-lg text-xs md:text-sm text-slate-600 flex justify-between items-center">
                <span>Route: <strong>{routeObj?.origin} → {routeObj?.destination}</strong></span>
                <span>Seats Needed: <strong className="text-[#ff6200]">{seatCount}</strong></span>
              </div>

              {availableBuses.length === 0 ? (
                <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-lg border border-slate-200">
                  No buses scheduled for this route on the selected date.
                </div>
              ) : (
                <div className="space-y-3">
                  {availableBuses.map((bus) => {
                    const hasCapacity = bus.availableSeats >= seatCount;
                    return (
                      <div
                        key={bus.id}
                        className={`border rounded-lg p-4 flex flex-col md:flex-row justify-between md:items-center gap-3 transition-colors duration-200 ${
                          hasCapacity ? 'border-slate-200 hover:border-[#ff6200]' : 'border-red-200 bg-red-50/30 opacity-75'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-800">{bus.operator}</div>
                          <div className="text-xs text-slate-500">{bus.type} • {bus.busNumber}</div>
                          <div className="text-sm text-[#ff6200] font-semibold mt-1">
                            Departs: {bus.departureTime}
                          </div>
                        </div>

                        <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                          <div className="text-right">
                            <span className="text-lg font-bold text-slate-900">₦{bus.price.toLocaleString()}</span>
                            <span className="text-xs text-slate-500"> / seat</span>
                            <span className={`block text-xs font-semibold ${hasCapacity ? 'text-emerald-600' : 'text-red-600'}`}>
                              {bus.availableSeats} seat(s) left
                            </span>
                          </div>

                          <button
                            onClick={() => handleSelectBus(bus)}
                            disabled={!hasCapacity}
                            className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                              hasCapacity
                                ? 'bg-[#ff6200] text-white hover:bg-[#803100]'
                                : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                            }`}
                          >
                            {hasCapacity ? `Select (${seatCount} Seats)` : 'Not Enough Seats'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* STEP 3: PASSENGER DETAILS & PAYMENT */}
          {step === 3 && selectedBus && (
            <form onSubmit={handleProcessPayment} className="space-y-5">
              <div className="flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-[#ff6200] transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Buses
                </button>
                <h2 className="text-lg font-bold text-slate-800">Passenger Details</h2>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg text-sm space-y-1">
                <div className="flex justify-between">
                  <span><strong>Trip:</strong> {routeObj?.origin} → {routeObj?.destination}</span>
                  <span><strong>Date:</strong> {travelDate}</span>
                </div>
                <div><strong>Bus:</strong> {selectedBus.operator} ({selectedBus.departureTime})</div>
                <div className="flex justify-between items-center pt-2 border-t border-orange-200 mt-2">
                  <span>Fare: ₦{selectedBus.price.toLocaleString()} × {seatCount} seat(s)</span>
                  <span className="text-base text-[#803100] font-bold">Total: ₦{totalFare.toLocaleString()}</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Passenger Information ({seatCount})
                </h3>

                {passengers.map((p, idx) => (
                  <div key={idx} className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-3">
                    <div className="text-xs font-semibold text-[#ff6200] uppercase">
                      Passenger {idx + 1} {idx === 0 ? '(Primary Contact)' : ''}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={p.name}
                          onChange={(e) => handlePassengerChange(idx, 'name', e.target.value)}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#ff6200] outline-none text-sm transition-all duration-200"
                          placeholder="e.g. Chukwuemeka Obi"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={p.phone}
                          onChange={(e) => handlePassengerChange(idx, 'phone', e.target.value)}
                          className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#ff6200] outline-none text-sm transition-all duration-200"
                          placeholder="08012345678"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Notification Email (Optional)</label>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#ff6200] outline-none text-sm transition-all duration-200"
                    placeholder="receipts@example.com"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
                >
                  Pay ₦{totalFare.toLocaleString()} & Confirm Booking
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: RECEIPT / TICKET DISPLAY */}
          {step === 4 && isPaid && (
            <div className="space-y-6">
              <div id="printable-receipt" className="border-2 border-dashed border-slate-300 p-6 rounded-xl bg-slate-50 space-y-4">
                <div className="flex justify-between items-start border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">ABIA SHUTTLE TICKET</h3>
                    <p className="text-xs text-slate-500">Official Group / Individual Boarding Pass</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold uppercase">
                      Confirmed
                    </span>
                    <p className="text-xs font-mono font-bold text-slate-700 mt-1">{bookingRef}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-xs text-slate-500">Route</p>
                    <p className="font-semibold text-slate-800">{routeObj?.origin} → {routeObj?.destination}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Travel Date & Time</p>
                    <p className="font-semibold text-slate-800">{travelDate} @ {selectedBus?.departureTime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Bus Operator & Plate</p>
                    <p className="font-semibold text-slate-800">{selectedBus?.operator} ({selectedBus?.busNumber})</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Seats Reserved</p>
                    <p className="font-bold text-[#ff6200]">{seatCount} Seat(s)</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-600 uppercase mb-2">Passenger Manifest</p>
                  <div className="space-y-1.5">
                    {passengers.map((p, i) => (
                      <div key={i} className="flex justify-between text-xs bg-white p-2 rounded border border-slate-200">
                        <span className="font-semibold text-slate-800">{i + 1}. {p.name}</span>
                        <span className="text-slate-500">{p.phone}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-2 text-sm font-bold border-t border-slate-200">
                  <span>Total Amount Paid:</span>
                  <span className="text-emerald-700 text-base">₦{totalFare.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-500">
                    Present this ticket or Ref <strong>{bookingRef}</strong> at the park loading bay.
                  </div>
                  <div className="w-16 h-16 bg-slate-900 flex items-center justify-center text-white text-[10px] font-mono rounded">
                    [QR CODE]
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 print:hidden">
                <button
                  onClick={handlePrint}
                  className="flex-1 bg-slate-800 text-white py-2.5 rounded-lg font-semibold hover:bg-slate-900 transition-colors duration-200"
                >
                  Print / Save Receipt
                </button>
                <button
                  onClick={resetBooking}
                  className="flex-1 border border-slate-300 text-slate-700 py-2.5 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200"
                >
                  Book Another Ride
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}