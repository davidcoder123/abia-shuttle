import React, { useState } from 'react';
import { Armchair, Search, Filter, Download, Plus, CheckCircle, Clock, XCircle, ChevronRight, X, Calendar, User, Phone, Mail, Radio } from 'lucide-react';
import { BookingRecord, RouteSchedule, Bus } from '../types';

interface BookingsViewProps {
  bookings: BookingRecord[];
  routes: RouteSchedule[];
  buses: Bus[];
  searchQuery: string;
  onAddBooking: (booking: BookingRecord) => void;
  onCancelBooking: (id: string) => void;
}

export const BookingsView: React.FC<BookingsViewProps> = ({
  bookings,
  routes,
  buses,
  searchQuery,
  onAddBooking,
  onCancelBooking,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [activeBookingModal, setActiveBookingModal] = useState<BookingRecord | null>(null);
  const [isNewBookingOpen, setIsNewBookingOpen] = useState(false);

  // New Booking form state
  const [passengerName, setPassengerName] = useState('');
  const [passengerEmail, setPassengerEmail] = useState('');
  const [passengerPhone, setPassengerPhone] = useState('+234 ');
  const [selectedRouteId, setSelectedRouteId] = useState(routes[0]?.id || 'RT-101');
  const [selectedSeat, setSelectedSeat] = useState('Seat 7');

  const filteredBookings = bookings.filter((b) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      b.passengerName.toLowerCase().includes(query) ||
      b.id.toLowerCase().includes(query) ||
      b.routeName.toLowerCase().includes(query) ||
      b.passengerPhone.toLowerCase().includes(query);

    if (selectedStatus === 'all') return matchesSearch;
    return matchesSearch && b.status.toLowerCase() === selectedStatus.toLowerCase();
  });

  const totalRevenue = bookings
    .filter(b => b.status !== 'Cancelled')
    .reduce((sum, b) => sum + b.totalAmount, 0);

  const handleCreateBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim()) return;

    const matchedRoute = routes.find(r => r.id === selectedRouteId) || routes[0];

    const newBooking: BookingRecord = {
      id: `BKG-${Math.floor(1000 + Math.random() * 9000)}`,
      passengerName,
      passengerEmail: passengerEmail || `${passengerName.toLowerCase().replace(/\s+/g, '.')}@email.com`,
      passengerPhone,
      routeId: matchedRoute.id,
      routeName: `${matchedRoute.origin} → ${matchedRoute.destination}`,
      departureDate: matchedRoute.departureDate,
      departureTime: matchedRoute.departureTime,
      seats: [selectedSeat],
      totalAmount: matchedRoute.pricePerSeat,
      busId: matchedRoute.busAssignedId,
      status: 'Confirmed',
      bookingTime: 'Just now'
    };

    onAddBooking(newBooking);
    setIsNewBookingOpen(false);
    setPassengerName('');
    setPassengerEmail('');
  };

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-white tracking-tight">Passenger Reservations & Manifest</h2>
          <p className="text-[13px] text-slate-400 mt-1">
            Real-time reservations, ticket allocations, and passenger manifests across all schedules.
          </p>
        </div>
        <button
          onClick={() => setIsNewBookingOpen(true)}
          className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-black px-4 py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>New Reservation</span>
        </button>
      </div>

      {/* Bento Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-xl">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Total Reservations</span>
          <div className="text-[34px] font-mono font-bold text-white mt-2 leading-none">{bookings.length}</div>
          <p className="text-[11px] font-mono text-slate-500 mt-1.5">Confirmed ticket manifests</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-xl">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Manifest Revenue (₦)</span>
          <div className="text-[34px] font-mono font-bold text-orange-400 mt-2 leading-none">
            ₦{totalRevenue.toLocaleString()}
          </div>
          <p className="text-[11px] font-mono text-orange-400/80 mt-1.5">Settled fares today</p>
        </div>
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-xl">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Boarding Clearance</span>
          <div className="text-[34px] font-mono font-bold text-blue-400 mt-2 leading-none">94.8%</div>
          <p className="text-[11px] font-mono text-slate-500 mt-1.5">Gate QR verification rate</p>
        </div>
      </div>

      {/* Data Table */}
      <div className="bg-[#1a0505]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl">
        {/* Table Toolbar */}
        <div className="p-4 border-b border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[12px] text-slate-300 font-medium outline-none cursor-pointer"
            >
              <option value="all" className="bg-[#0a0c10] text-slate-200">All Reservation Statuses</option>
              <option value="confirmed" className="bg-[#0a0c10] text-slate-200">Confirmed</option>
              <option value="boarded" className="bg-[#0a0c10] text-slate-200">Boarded</option>
              <option value="cancelled" className="bg-[#0a0c10] text-slate-200">Cancelled</option>
            </select>
          </div>
          <span className="text-[12px] font-mono text-slate-400">
            Showing {filteredBookings.length} records
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/10 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Booking ID</th>
                <th className="py-3 px-4">Passenger</th>
                <th className="py-3 px-4">Route & Departure</th>
                <th className="py-3 px-4">Seat Allocation</th>
                <th className="py-3 px-4">Amount Paid</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-slate-300 divide-y divide-white/5 font-sans">
              {filteredBookings.map((b) => (
                <tr key={b.id} className="hover:bg-white/[0.04] transition-colors h-14">
                  <td className="py-3 px-4 font-mono font-bold text-white">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {b.id}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-bold text-white">{b.passengerName}</div>
                    <div className="text-[11px] font-mono text-slate-400">{b.passengerPhone}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="font-medium text-white">{b.routeName}</div>
                    <div className="text-[11px] font-mono text-slate-400">{b.departureDate} at {b.departureTime}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-1 flex-wrap">
                      {b.seats.map(s => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-orange-400 font-mono text-[11px] font-bold">
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-4 font-mono font-bold text-orange-400">
                    ₦{b.totalAmount.toLocaleString()}
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                        b.status === 'Confirmed'
                          ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                          : b.status === 'Boarded'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                      }`}
                    >
                      {b.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => setActiveBookingModal(b)}
                      className="px-3 py-1 bg-white/5 hover:bg-white/10 text-slate-200 text-[11px] font-mono font-bold rounded-lg border border-white/10 transition-colors cursor-pointer"
                    >
                      VIEW TICKET
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Ticket Details Modal */}
      {activeBookingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl p-6 backdrop-blur-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-400 uppercase tracking-wider">Boarding Pass Manifest</span>
                <h3 className="text-[18px] font-mono font-bold text-white">{activeBookingModal.id}</h3>
              </div>
              <button
                onClick={() => setActiveBookingModal(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3 text-[13px]">
              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/10 space-y-2.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Passenger:</span>
                  <span className="font-bold text-white">{activeBookingModal.passengerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Phone:</span>
                  <span className="font-mono text-slate-200">{activeBookingModal.passengerPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Route:</span>
                  <span className="font-bold text-white">{activeBookingModal.routeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Departure:</span>
                  <span className="font-mono text-slate-200">{activeBookingModal.departureDate} @ {activeBookingModal.departureTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Assigned Seat:</span>
                  <span className="font-mono font-bold text-orange-400">{activeBookingModal.seats.join(', ')}</span>
                </div>
                <div className="flex justify-between pt-2.5 border-t border-white/10">
                  <span className="font-bold text-white">Total Fare:</span>
                  <span className="font-mono font-bold text-[16px] text-orange-400">₦{activeBookingModal.totalAmount.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              {activeBookingModal.status !== 'Cancelled' ? (
                <button
                  onClick={() => {
                    onCancelBooking(activeBookingModal.id);
                    setActiveBookingModal(null);
                  }}
                  className="px-3 py-1.5 rounded-xl text-rose-400 hover:bg-rose-500/10 text-[11px] font-mono font-bold transition-colors cursor-pointer"
                >
                  CANCEL BOOKING
                </button>
              ) : (
                <span className="text-[11px] font-mono text-rose-400 font-bold">RESERVATION CANCELLED</span>
              )}
              <button
                onClick={() => setActiveBookingModal(null)}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-[12px] font-mono font-bold rounded-xl transition-colors cursor-pointer"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Reservation Modal */}
      {isNewBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl p-6 backdrop-blur-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-[18px] font-bold text-white">Book Passenger Ticket</h3>
              <button onClick={() => setIsNewBookingOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateBooking} className="py-4 space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Passenger Name *</label>
                <input
                  required
                  type="text"
                  value={passengerName}
                  onChange={(e) => setPassengerName(e.target.value)}
                  placeholder="e.g. Amaka Obi"
                  className="w-full px-3.5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-white text-[13px] outline-none focus:border-orange-500/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Phone Number *</label>
                <input
                  required
                  type="text"
                  value={passengerPhone}
                  onChange={(e) => setPassengerPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-white text-[13px] font-mono outline-none focus:border-orange-500/50"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Select Route Corridor</label>
                <select
                  value={selectedRouteId}
                  onChange={(e) => setSelectedRouteId(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-slate-200 text-[13px] outline-none cursor-pointer focus:border-orange-500/50"
                >
                  {routes.map(r => (
                    <option key={r.id} value={r.id} className="bg-[#0a0c10] text-white">
                      {r.origin} → {r.destination} ({r.departureTime}) - ₦{r.pricePerSeat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1">Select Seat</label>
                <select
                  value={selectedSeat}
                  onChange={(e) => setSelectedSeat(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-white/5 rounded-xl border border-white/10 text-slate-200 text-[13px] outline-none cursor-pointer focus:border-orange-500/50"
                >
                  {['Seat 1 (Window)', 'Seat 2', 'Seat 3', 'Seat 4 (Aisle)', 'Seat 5', 'Seat 6', 'Seat 7', 'Seat 8', 'Seat 9', 'Seat 10'].map(s => (
                    <option key={s} value={s} className="bg-[#0a0c10] text-white">{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsNewBookingOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-[12px] font-mono font-bold cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-orange-500 hover:bg-orange-400 text-black text-[12px] font-mono font-bold rounded-xl shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  CONFIRM RESERVATION
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
