import React from 'react';
import { 
  Armchair, 
  Bus as BusIcon, 
  Banknote, 
  Wrench, 
  ArrowUp,
  Clock,
  Sparkles,
  Radio,
  ChevronRight
} from 'lucide-react';
import { Bus, RecentActivity, RouteSchedule } from '../types';

interface DashboardViewProps {
  buses: Bus[];
  routes: RouteSchedule[];
  activities: RecentActivity[];
  onViewAllFleet: () => void;
  onSelectBus: (bus: Bus) => void;
  onNavigateToTab: (tab: any) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  buses,
  routes,
  activities,
  onViewAllFleet,
  onSelectBus,
  onNavigateToTab,
}) => {
  const activeCount = buses.filter(b => b.status === 'Active' || b.status === 'In Service').length;
  const maintenanceCount = buses.filter(b => b.status === 'Maintenance' || b.status === 'Out of Service').length;

  return (
    <div className="flex flex-col gap-6 max-w-[1440px] mx-auto w-full animate-in fade-in duration-200">
      {/* KPI Cards Bento Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* KPI 1: Today's Bookings */}
        <div 
          onClick={() => onNavigateToTab('bookings')}
          className="bg-white/[0.03] border border-white/10 hover:border-orange-500/40 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute -right-4 -bottom-4 p-4 text-orange-400 opacity-5 group-hover:opacity-10 transition-opacity">
            <Armchair className="w-24 h-24" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              Today's Bookings
            </span>
            <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
          </div>
          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-[34px] font-extrabold text-white tracking-tight leading-none font-mono">
              1,248
            </span>
            <span className="text-[12px] font-bold text-orange-400 flex items-center gap-0.5 font-mono px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
              <ArrowUp className="w-3.5 h-3.5" /> +12%
            </span>
          </div>
        </div>

        {/* KPI 2: Active Fleet */}
        <div 
          onClick={() => onNavigateToTab('fleet')}
          className="bg-white/[0.03] border border-white/10 hover:border-blue-500/40 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute -right-4 -bottom-4 p-4 text-blue-400 opacity-5 group-hover:opacity-10 transition-opacity">
            <BusIcon className="w-24 h-24" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              Active Fleet Nodes
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </div>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-[34px] font-extrabold text-white tracking-tight leading-none font-mono">
              {activeCount > 0 ? activeCount : 42}
            </span>
            <span className="text-[13px] text-slate-500 font-mono">/ 50 TOTAL</span>
          </div>
        </div>

        {/* KPI 3: Revenue */}
        <div 
          onClick={() => onNavigateToTab('bookings')}
          className="bg-white/[0.03] border border-white/10 hover:border-orange-500/40 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute -right-4 -bottom-4 p-4 text-orange-400 opacity-5 group-hover:opacity-10 transition-opacity">
            <Banknote className="w-24 h-24" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              Day Revenue (₦)
            </span>
            <span className="text-[10px] font-mono text-orange-400 px-1.5 py-0.5 rounded bg-orange-500/10">LIVE</span>
          </div>
          <div className="flex items-baseline gap-3 mt-4">
            <span className="text-[34px] font-extrabold text-white tracking-tight leading-none font-mono">
              ₦854,000
            </span>
            <span className="text-[12px] font-bold text-orange-400 flex items-center gap-0.5 font-mono px-2 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">
              <ArrowUp className="w-3.5 h-3.5" /> +5.4%
            </span>
          </div>
        </div>

        {/* KPI 4: Pending Maintenance */}
        <div 
          onClick={() => onNavigateToTab('maintenance')}
          className="bg-white/[0.03] border border-white/10 hover:border-rose-500/40 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
        >
          <div className="absolute -right-4 -bottom-4 p-4 text-rose-400 opacity-5 group-hover:opacity-10 transition-opacity">
            <Wrench className="w-24 h-24" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 tracking-wider uppercase font-mono">
              Bay Maintenance
            </span>
            <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          </div>
          <div className="flex items-baseline gap-2 mt-4">
            <span className="text-[34px] font-extrabold text-rose-400 tracking-tight leading-none font-mono">
              {maintenanceCount > 0 ? maintenanceCount : 3}
            </span>
            <span className="text-[13px] text-slate-500 font-mono">SERVICE TICKETS</span>
          </div>
        </div>
      </section>

      {/* Lower Section: Live Fleet Status & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Fleet Status Table (Takes 2 cols) */}
        <section className="lg:col-span-2 bg-[#1a0505]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <Radio className="w-4 h-4 text-orange-400 animate-pulse" />
              <h2 className="text-[15px] font-bold text-white tracking-tight">Live Fleet Dispatch Radar</h2>
            </div>
            <button
              onClick={onViewAllFleet}
              className="text-orange-400 hover:text-emerald-300 font-bold text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Manage Fleet</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="overflow-x-auto flex-1">
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Node ID</th>
                  <th className="py-3 px-4">Assigned Route</th>
                  <th className="py-3 px-4">Operator</th>
                  <th className="py-3 px-4">Load Ratio</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="text-[13px] text-slate-300 divide-y divide-white/5 font-sans">
                {buses.slice(0, 5).map((bus) => {
                  const currentOcc = bus.occupancy?.current || 0;
                  const maxOcc = bus.occupancy?.max || 40;
                  const percent = Math.min(100, Math.round((currentOcc / maxOcc) * 100));

                  const isDelayed = bus.scheduleStatus?.includes('DELAYED');
                  const isBoarding = bus.scheduleStatus === 'BOARDING';

                  return (
                    <tr
                      key={bus.id}
                      onClick={() => onSelectBus(bus)}
                      className={`hover:bg-white/[0.04] transition-colors h-14 cursor-pointer ${
                        isDelayed ? 'bg-rose-500/[0.03]' : ''
                      }`}
                    >
                      <td className="py-3 px-4 font-mono font-bold text-white">
                        <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[12px]">
                          {bus.id}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-white font-medium">
                        {bus.liveRoute || `${bus.name}`}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          {bus.driver?.avatar ? (
                            <div className="w-6 h-6 rounded-full bg-white/10 overflow-hidden shrink-0 border border-white/10">
                              <img
                                src={bus.driver.avatar}
                                alt={bus.driver.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 border border-orange-500/30">
                              {bus.driver?.initials || bus.driver?.name?.slice(0, 2) || 'DR'}
                            </div>
                          )}
                          <span className="truncate max-w-[110px] font-medium text-slate-300">
                            {bus.driver?.name || 'Unassigned'}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                isDelayed
                                  ? 'bg-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.8)]'
                                  : percent > 80
                                  ? 'bg-orange-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]'
                                  : 'bg-blue-400'
                              }`}
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                          <span className="text-[11px] font-mono text-slate-400 min-w-[36px]">
                            {currentOcc}/{maxOcc}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-right">
                        {isDelayed ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 font-mono font-bold text-[10px] uppercase">
                            DELAYED (10M)
                          </span>
                        ) : isBoarding ? (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono font-bold text-[10px] uppercase">
                            BOARDING
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono font-bold text-[10px] uppercase">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-1.5 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                            ON TIME
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recent Activity Feed (Takes 1 col) */}
        <section className="bg-[#1a0505]/80 border border-white/10 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
            <h2 className="text-[15px] font-bold text-white tracking-tight">Telemetry Stream</h2>
            <Clock className="w-4 h-4 text-slate-500" />
          </div>

          <div className="p-4 flex-1 overflow-y-auto max-h-[380px]">
            <ul className="relative border-l border-white/10 ml-2 space-y-4">
              {activities.map((activity, idx) => {
                let dotColor = 'bg-orange-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]';
                if (activity.type === 'surge') dotColor = 'bg-blue-400 shadow-[0_0_6px_rgba(59,130,246,0.8)]';
                if (activity.type === 'delay') dotColor = 'bg-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.8)]';
                if (activity.type === 'maintenance') dotColor = 'bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]';

                return (
                  <li key={activity.id || idx} className="pl-5 relative">
                    <div
                      className={`absolute w-2.5 h-2.5 ${dotColor} rounded-full -left-[5px] top-1.5 ring-2 ring-[#1a0505]`}
                    />
                    <p className="text-[13px] text-slate-300 leading-snug">
                      {activity.busId && (
                        <span className="font-mono font-bold text-white mr-1">{activity.busId}</span>
                      )}
                      {activity.message}
                    </p>
                    <p className="text-[11px] font-mono text-slate-500 mt-1">
                      {activity.timestamp}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
