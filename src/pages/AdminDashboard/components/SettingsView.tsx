import React, { useState } from 'react';
import { Settings, Shield, User, Bell, Check, Save } from 'lucide-react';
import { USER_AVATAR } from '../data/mockData';

export const SettingsView: React.FC = () => {
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [companyName, setCompanyName] = useState('ShuttleAdmin Transport Network Ltd.');
  const [currencySymbol, setCurrencySymbol] = useState('₦ (NGN)');
  const [defaultTerminal, setDefaultTerminal] = useState('Umuahia Central Terminal');
  const [autoInspectionDays, setAutoInspectionDays] = useState('30');
  const [speedLimit, setSpeedLimit] = useState('90');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col max-w-[1000px] mx-auto w-full animate-in fade-in duration-200">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[24px] font-bold text-white tracking-tight">System Preferences & Operations Config</h2>
        <p className="text-[13px] text-slate-400 mt-1">
          Configure operations telemetry parameters, fleet inspection intervals, and company profile.
        </p>
      </div>

      {savedSuccess && (
        <div className="mb-5 p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-400 flex items-center gap-3 font-mono font-bold text-[12px] animate-in fade-in duration-150 shadow-lg shadow-orange-500/10">
          <Check className="w-5 h-5 text-orange-400 stroke-[3]" />
          <span>OPERATIONAL TELEMETRY PARAMETERS SYNCHRONIZED ACROSS ALL CORRIDORS!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        {/* Company Profile Card */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2 pb-3.5 border-b border-white/10 mb-5">
            <User className="w-5 h-5 text-orange-400" />
            <h3 className="text-[16px] font-bold text-white tracking-tight">Company & Central Dispatch Node</h3>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <img
              src={USER_AVATAR}
              alt="Admin Profile"
              className="w-16 h-16 rounded-2xl object-cover border-2 border-orange-500 shadow-lg shadow-orange-500/20"
            />
            <div>
              <p className="text-[15px] font-bold text-white">Chief Operations Dispatcher</p>
              <p className="text-[12px] font-mono text-slate-400">admin@shuttle.co • Super Administrator Role</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">
                Operating Fleet Entity Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">
                Primary Headquarters Terminal Hub
              </label>
              <input
                type="text"
                value={defaultTerminal}
                onChange={(e) => setDefaultTerminal(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50"
              />
            </div>
          </div>
        </div>

        {/* Fleet & Telemetry Rules */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl">
          <div className="flex items-center gap-2 pb-3.5 border-b border-white/10 mb-5">
            <Shield className="w-5 h-5 text-orange-400" />
            <h3 className="text-[16px] font-bold text-white tracking-tight">Fleet Safety Governors & Telemetry Rules</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">
                Default Currency
              </label>
              <input
                type="text"
                value={currencySymbol}
                disabled
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-orange-400 font-mono font-bold opacity-80"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">
                Max Highway Speed Limit (km/h)
              </label>
              <input
                type="number"
                value={speedLimit}
                onChange={(e) => setSpeedLimit(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white font-mono outline-none focus:border-orange-500/50"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-2">
                Service Bay Interval (Days)
              </label>
              <input
                type="number"
                value={autoInspectionDays}
                onChange={(e) => setAutoInspectionDays(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white font-mono outline-none focus:border-orange-500/50"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            className="px-6 py-3 bg-orange-500 hover:bg-orange-400 active:scale-95 text-black font-mono font-bold text-[12px] uppercase tracking-wider rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Save className="w-4 h-4 stroke-[2.5]" />
            <span>APPLY & BROADCAST CONFIG</span>
          </button>
        </div>
      </form>
    </div>
  );
};
