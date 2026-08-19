import React, { useState, useEffect } from 'react';
import { X, Check, Bus, Wifi, Zap, Wind, Disc, Tv, ShieldAlert } from 'lucide-react';
import { Bus as BusType, BusStatus } from '../types';

interface BusFormModalProps {
  isOpen: boolean;
  busToEdit?: BusType | null;
  onClose: () => void;
  onSave: (busData: Partial<BusType>) => void;
}

const ALL_AMENITIES = [
  { id: 'AC', label: 'Air Conditioning', icon: Wind },
  { id: 'WiFi', label: 'High-speed Wi-Fi', icon: Wifi },
  { id: 'Charging Ports', label: 'USB Charging Ports', icon: Zap },
  { id: 'Reclining Seats', label: 'Reclining Seats', icon: Bus },
  { id: 'Luggage Compartment', label: 'Luggage Compartment', icon: Disc },
  { id: 'Entertainment System', label: 'Entertainment Screen', icon: Tv },
];

export const BusFormModal: React.FC<BusFormModalProps> = ({
  isOpen,
  busToEdit,
  onClose,
  onSave,
}) => {
  const isEditing = Boolean(busToEdit);

  const [name, setName] = useState('');
  const [model, setModel] = useState('');
  const [plateNumber, setPlateNumber] = useState('');
  const [capacity, setCapacity] = useState<number>(14);
  const [status, setStatus] = useState<BusStatus>('Active');
  const [features, setFeatures] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (busToEdit) {
      setName(busToEdit.name);
      setModel(busToEdit.model);
      setPlateNumber(busToEdit.plateNumber);
      setCapacity(busToEdit.capacity);
      setStatus(busToEdit.status);
      setFeatures(busToEdit.features || []);
    } else {
      setName('');
      setModel('');
      setPlateNumber('');
      setCapacity(14);
      setStatus('Active');
      setFeatures(['AC', 'Charging Ports']);
    }
    setErrors({});
  }, [busToEdit, isOpen]);

  if (!isOpen) return null;

  const toggleFeature = (featId: string) => {
    if (features.includes(featId)) {
      setFeatures(features.filter(f => f !== featId));
    } else {
      setFeatures([...features, featId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Bus name is required';
    if (!model.trim()) newErrors.model = 'Bus model is required';
    if (!plateNumber.trim()) newErrors.plateNumber = 'Plate number is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave({
      id: busToEdit ? busToEdit.id : `BUS-${Math.floor(100 + Math.random() * 900)}`,
      name,
      model,
      plateNumber: plateNumber.toUpperCase(),
      capacity,
      status,
      features,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden backdrop-blur-2xl animate-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div>
            <h2 className="text-[18px] font-bold text-white font-mono">
              {isEditing ? 'Bus Fleet Configuration' : 'Register Vehicle to Fleet'}
            </h2>
            <p className="text-[12px] text-slate-400 mt-0.5">
              {isEditing
                ? `Update specifications and operational status for unit ${busToEdit?.id}`
                : 'Enter the vehicle specifications, telemetry ID, and onboard amenities'}
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
          {/* Bus Name & Plate */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Bus / Line Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Abia Express Line"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-[13px] text-white outline-none transition-all ${
                  errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-orange-500/50 focus:bg-white/10'
                }`}
              />
              {errors.name && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                License Plate Number *
              </label>
              <input
                type="text"
                value={plateNumber}
                onChange={(e) => setPlateNumber(e.target.value)}
                placeholder="e.g. AB-204-UM"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-[13px] font-mono text-white outline-none transition-all ${
                  errors.plateNumber ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-orange-500/50 focus:bg-white/10'
                }`}
              />
              {errors.plateNumber && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.plateNumber}</p>}
            </div>
          </div>

          {/* Model & Capacity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Bus Model / Maker *
              </label>
              <input
                type="text"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="e.g. Toyota HiAce 2.7L"
                className={`w-full px-3.5 py-2.5 rounded-xl bg-white/5 border text-[13px] text-white outline-none transition-all ${
                  errors.model ? 'border-rose-500 ring-1 ring-rose-500' : 'border-white/10 focus:border-orange-500/50 focus:bg-white/10'
                }`}
              />
              {errors.model && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.model}</p>}
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Total Seating Capacity
              </label>
              <select
                value={capacity}
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50 transition-all cursor-pointer"
              >
                <option value={14} className="bg-[#0a0c10]">14 Seats (Minibus)</option>
                <option value={18} className="bg-[#0a0c10]">18 Seats (Sprinter)</option>
                <option value={24} className="bg-[#0a0c10]">24 Seats (Transit)</option>
                <option value={40} className="bg-[#0a0c10]">40 Seats (Coach)</option>
                <option value={45} className="bg-[#0a0c10]">45 Seats (Interstate Bus)</option>
                <option value={50} className="bg-[#0a0c10]">50 Seats (Large Luxury)</option>
              </select>
            </div>
          </div>

          {/* Operational Status Radio */}
          <div>
            <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Operational Status
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {(['Active', 'In Service', 'Maintenance', 'Out of Service'] as BusStatus[]).map((st) => (
                <button
                  type="button"
                  key={st}
                  onClick={() => setStatus(st)}
                  className={`p-3 rounded-xl border text-left flex flex-col justify-between transition-all cursor-pointer ${
                    status === st
                      ? 'border-orange-500 bg-orange-500/20 text-orange-400 font-bold'
                      : 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-400'
                  }`}
                >
                  <span className="text-[12px] font-mono font-bold">{st}</span>
                  <span className="text-[10px] text-slate-400 mt-1">
                    {st === 'Active' ? 'Ready for routes' : st === 'Maintenance' ? 'In depot repairs' : st === 'In Service' ? 'On active trip' : 'Not operational'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Amenities & Onboard Features */}
          <div>
            <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2">
              Onboard Features & Amenities
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {ALL_AMENITIES.map((amenity) => {
                const isChecked = features.includes(amenity.id);
                const IconComponent = amenity.icon;
                return (
                  <button
                    type="button"
                    key={amenity.id}
                    onClick={() => toggleFeature(amenity.id)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isChecked
                        ? 'border-orange-500/50 bg-orange-500/10 text-orange-400 font-semibold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComponent className="w-4 h-4 text-orange-400" />
                      <span className="text-[12px] font-medium">{amenity.label}</span>
                    </div>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                        isChecked ? 'bg-orange-500 border-orange-500 text-black' : 'border-white/20 bg-white/5'
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

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
              <span>{isEditing ? 'SAVE VEHICLE SPEC' : 'CONFIRM VEHICLE ENTRY'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
