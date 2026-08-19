import React, { useState } from 'react';
import { X, Check, MapPin, Clock, Calendar, Bus as BusIcon, Banknote } from 'lucide-react';
import { Bus, RouteSchedule, RouteStatus } from '../types';

interface CreateRouteModalProps {
  isOpen: boolean;
  buses: Bus[];
  routeToEdit?: RouteSchedule | null;
  onClose: () => void;
  onSave: (routeData: Partial<RouteSchedule>) => void;
}

// Removed hardcoded TERMINAL_LOCATIONS since admin will enter them manually

export const CreateRouteModal: React.FC<CreateRouteModalProps> = ({
  isOpen,
  buses,
  routeToEdit,
  onClose,
  onSave,
}) => {
  const isEditing = Boolean(routeToEdit);

  const [origin, setOrigin] = useState(routeToEdit?.origin || '');
  const [destination, setDestination] = useState(routeToEdit?.destination || '');
  const [departureTime, setDepartureTime] = useState(routeToEdit?.departureTime || '07:30 AM');
  const [stops, setStops] = useState<number>(routeToEdit?.stops || 0);
  const [km, setKm] = useState<number>(routeToEdit?.km || 0);
  const [duration, setDuration] = useState(routeToEdit?.duration || '');
  const [frequency, setFrequency] = useState<'Daily' | 'Weekdays Only' | 'Weekends Only' | 'Custom'>(
    routeToEdit?.frequency || 'Daily'
  );
  const [selectedBusId, setSelectedBusId] = useState(routeToEdit?.busAssignedId || (buses[0]?.id || 'BUS-014'));
  const [pricePerSeat, setPricePerSeat] = useState<number>(routeToEdit?.pricePerSeat || 3500);
  const [status, setStatus] = useState<RouteStatus>(routeToEdit?.status || 'Scheduled');
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const availableBuses = buses.filter(b => 
    b.status === 'Active' || (routeToEdit && b.id === routeToEdit.busAssignedId)
  );

  const selectedBus = availableBuses.find(b => b.id === selectedBusId) || availableBuses[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) {
      setErrors({ location: 'Both origin and destination are required.' });
      return;
    }
    if (origin === destination) {
      setErrors({ location: 'Origin and destination cannot be identical.' });
      return;
    }

    onSave({
      id: routeToEdit ? routeToEdit.id : '', // Let DB handle ID, or pass empty string for new
      origin: origin.trim(),
      destination: destination.trim(),
      departureTime,
      departureDate: routeToEdit?.departureDate || new Date().toISOString().slice(0, 10),
      frequency,
      busAssignedId: selectedBus?.id || 'BUS-014',
      busAssignedName: selectedBus?.name || 'Abia Express Line',
      pricePerSeat: Number(pricePerSeat) || 3000,
      totalCapacity: selectedBus?.capacity || 14,
      seatsBooked: routeToEdit?.seatsBooked || 0,
      stops,
      km,
      duration: duration.trim(),
      status,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden backdrop-blur-2xl animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div>
            <h2 className="text-[18px] font-bold text-white font-mono">
              {isEditing ? 'Edit Transit Corridor' : 'Establish Route Corridor'}
            </h2>
            <p className="text-[12px] text-slate-400 mt-0.5">
              Configure interstate origin-destination nodes, departure timetable, and vehicle assignment.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
          {/* Origin & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Origin Terminal *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-orange-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  placeholder="e.g. Umuahia Terminal"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Destination Terminal *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-rose-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Lagos (Jibowu)"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>
          </div>

          {errors.location && <p className="text-[11px] text-rose-400 font-mono">{errors.location}</p>}

          {/* Departure Time & Frequency */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Departure Time
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <input
                  type="text"
                  value={departureTime}
                  onChange={(e) => setDepartureTime(e.target.value)}
                  placeholder="e.g. 07:30 AM"
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] font-mono font-medium text-white outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Operating Frequency
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={frequency}
                  onChange={(e) => setFrequency(e.target.value as any)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                >
                  <option value="Daily" className="bg-[#0a0c10]">Daily Schedule</option>
                  <option value="Weekdays Only" className="bg-[#0a0c10]">Weekdays Only (Mon-Fri)</option>
                  <option value="Weekends Only" className="bg-[#0a0c10]">Weekends Only (Sat-Sun)</option>
                  <option value="Custom" className="bg-[#0a0c10]">Custom On-Demand</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stops, Distance, and Duration */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Number of Stops
              </label>
              <input
                type="number"
                min="0"
                value={stops}
                onChange={(e) => setStops(Number(e.target.value))}
                placeholder="e.g. 2"
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Distance (Km)
              </label>
              <input
                type="number"
                min="0"
                value={km}
                onChange={(e) => setKm(Number(e.target.value))}
                placeholder="e.g. 18"
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Est. Duration
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="e.g. 45 mins"
                className="w-full px-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all"
              />
            </div>
          </div>

          {/* Vehicle Assignment & Price */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Assign Vehicle
              </label>
              <div className="relative">
                <BusIcon className="w-4 h-4 text-orange-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={selectedBusId}
                  onChange={(e) => setSelectedBusId(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
                >
                  {availableBuses.length === 0 ? (
                    <option value="" disabled className="bg-[#0a0c10]">No active vehicles available</option>
                  ) : (
                    availableBuses.map((b) => (
                      <option key={b.id} value={b.id} className="bg-[#0a0c10]">
                        {b.name} ({b.id}) - {b.capacity} Seats
                      </option>
                    ))
                  )}
                </select>
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-1.5">
                Vehicle model: {selectedBus?.model || 'Toyota HiAce'} ({selectedBus?.capacity || 14} seats total)
              </p>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Fare / Seat (₦)
              </label>
              <div className="relative">
                <span className="text-[13px] font-bold text-orange-400 absolute left-3.5 top-2.5 pointer-events-none">₦</span>
                <input
                  type="number"
                  value={pricePerSeat}
                  onChange={(e) => setPricePerSeat(Number(e.target.value))}
                  placeholder="3500"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] font-mono font-bold text-orange-400 outline-none focus:border-orange-500/50 transition-all"
                />
              </div>
              <p className="text-[11px] font-mono text-slate-500 mt-1.5">
                Estimated route gross: ₦{((selectedBus?.capacity || 14) * (pricePerSeat || 0)).toLocaleString()}
              </p>
            </div>
          </div>

          {/* Status selector (if editing) */}
          {isEditing && (
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Route Status
              </label>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value as RouteStatus)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
              >
                <option value="Scheduled" className="bg-[#0a0c10]">Scheduled</option>
                <option value="Boarding" className="bg-[#0a0c10]">Boarding</option>
                <option value="En Route" className="bg-[#0a0c10]">En Route</option>
                <option value="Completed" className="bg-[#0a0c10]">Completed</option>
                <option value="Delayed" className="bg-[#0a0c10]">Delayed</option>
              </select>
            </div>
          )}

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-[12px] font-mono font-bold transition-colors cursor-pointer"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black text-[12px] font-mono font-bold shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Check className="w-4 h-4 stroke-[3]" />
              <span>{isEditing ? 'SAVE CHANGES' : 'CREATE ROUTE DISPATCH'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
