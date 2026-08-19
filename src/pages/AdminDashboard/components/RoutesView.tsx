import React, { useState } from 'react';
import { 
  Route as RouteIcon, 
  Clock, 
  Armchair, 
  Plus, 
  Calendar, 
  Filter, 
  Edit3, 
  Trash2, 
  ArrowRight,
  Radio
} from 'lucide-react';
import { RouteSchedule, RouteStatus } from '../types';

interface RoutesViewProps {
  routes: RouteSchedule[];
  onOpenCreateRoute: () => void;
  onEditRoute: (route: RouteSchedule) => void;
  onDeleteRoute: (routeId: string) => void;
  searchQuery: string;
}

export const RoutesView: React.FC<RoutesViewProps> = ({
  routes,
  onOpenCreateRoute,
  onEditRoute,
  onDeleteRoute,
  searchQuery,
}) => {
  const [selectedDate, setSelectedDate] = useState('2023-10-27');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredRoutes = routes.filter((r) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      r.origin.toLowerCase().includes(query) ||
      r.destination.toLowerCase().includes(query) ||
      r.id.toLowerCase().includes(query) ||
      r.busAssignedName.toLowerCase().includes(query) ||
      r.busAssignedId.toLowerCase().includes(query);

    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && r.status.toLowerCase() === statusFilter.toLowerCase();
  });

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full animate-in fade-in duration-200">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-white tracking-tight">Route & Scheduling Matrix</h2>
          <p className="text-[13px] text-slate-400 mt-1">
            Configure interstate transit corridors, departure frequencies, and bus assignments.
          </p>
        </div>
        <button
          onClick={onOpenCreateRoute}
          className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-black px-4 py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Create New Route</span>
        </button>
      </div>

      {/* 3 Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Active Routes */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Active Corridors</span>
            <RouteIcon className="w-4 h-4 text-orange-400" />
          </div>
          <div className="mt-3">
            <div className="text-[34px] font-mono font-bold text-white leading-none">24</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1.5">Across 8 interstate terminals</div>
          </div>
        </div>

        {/* Daily Departures */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Daily Departures</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="mt-3">
            <div className="text-[34px] font-mono font-bold text-blue-400 leading-none">142</div>
            <div className="text-[11px] font-mono font-semibold text-orange-400 flex items-center gap-1 mt-1.5">
              <span>✓</span> 98.4% on-time dispatch
            </div>
          </div>
        </div>

        {/* Avg Seat Occupancy */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Avg. Load Efficiency</span>
            <Armchair className="w-4 h-4 text-orange-400" />
          </div>
          <div className="mt-3">
            <div className="text-[34px] font-mono font-bold text-orange-400 leading-none">86%</div>
            <div className="text-[11px] font-mono font-semibold text-orange-400 flex items-center gap-1 mt-1.5">
              <span>↗</span> +4.2% demand surge
            </div>
          </div>
        </div>
      </div>

      {/* Today's Schedule Table Section */}
      <div className="bg-[#1a0505]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col">
        {/* Table Header & Controls */}
        <div className="p-4 border-b border-white/10 bg-white/[0.02] flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Radio className="w-4 h-4 text-orange-400 animate-pulse" />
            <h3 className="text-[15px] font-bold text-white tracking-tight">Active Departure Schedule</h3>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            {/* Date filter */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[12px] text-slate-300 font-medium">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="outline-none bg-transparent text-[12px] text-slate-300 font-mono cursor-pointer"
              />
            </div>

            {/* Status dropdown filter */}
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5 text-[12px] text-slate-300 font-medium">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="outline-none bg-transparent text-[12px] text-slate-300 font-medium cursor-pointer"
              >
                <option value="all" className="bg-[#0a0c10] text-slate-200">All Statuses</option>
                <option value="scheduled" className="bg-[#0a0c10] text-slate-200">Scheduled</option>
                <option value="boarding" className="bg-[#0a0c10] text-slate-200">Boarding</option>
                <option value="en route" className="bg-[#0a0c10] text-slate-200">En Route</option>
                <option value="completed" className="bg-[#0a0c10] text-slate-200">Completed</option>
                <option value="delayed" className="bg-[#0a0c10] text-slate-200">Delayed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[750px]">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02] text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Route Corridor</th>
                <th className="py-3 px-4">Departure Time</th>
                <th className="py-3 px-4">Assigned Vehicle</th>
                <th className="py-3 px-4">Fare / Seat</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-slate-300 divide-y divide-white/5 font-sans">
              {filteredRoutes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 font-mono">
                    No route departures scheduled for this selection.
                  </td>
                </tr>
              ) : (
                filteredRoutes.map((route) => {
                  return (
                    <tr key={route.id} className="hover:bg-white/[0.04] transition-colors h-14">
                      <td className="py-3 px-4">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <span>{route.origin}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                          <span>{route.destination}</span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400">{route.id} • {route.frequency}</div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2 font-mono font-bold text-white">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              route.status === 'Completed'
                                ? 'bg-orange-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]'
                                : route.status === 'Delayed'
                                ? 'bg-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.8)]'
                                : route.status === 'Boarding'
                                ? 'bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]'
                                : 'bg-slate-400'
                            }`}
                          />
                          <span>{route.departureTime}</span>
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="font-bold text-white">{route.busAssignedName}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{route.busAssignedId} ({route.seatsBooked}/{route.totalCapacity} Booked)</div>
                      </td>

                      <td className="py-3 px-4 font-mono font-bold text-orange-400">
                        ₦{route.pricePerSeat.toLocaleString()}
                      </td>

                      <td className="py-3 px-4">
                        {route.status === 'Scheduled' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-white/5 border border-white/10 text-slate-300">
                            SCHEDULED
                          </span>
                        )}
                        {route.status === 'Boarding' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            BOARDING
                          </span>
                        )}
                        {route.status === 'En Route' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                            EN ROUTE
                          </span>
                        )}
                        {route.status === 'Completed' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-1.5" />
                            COMPLETED
                          </span>
                        )}
                        {route.status === 'Delayed' && (
                          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            DELAYED
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end items-center gap-1.5">
                          <button
                            onClick={() => onEditRoute(route)}
                            className="px-2.5 py-1 text-[11px] font-mono font-bold text-orange-400 bg-orange-500/10 hover:bg-orange-500/20 rounded-lg transition-colors cursor-pointer"
                          >
                            EDIT
                          </button>
                          <button
                            onClick={() => onDeleteRoute(route.id)}
                            className="p-1.5 text-slate-400 hover:text-rose-400 rounded-lg hover:bg-rose-500/10 transition-colors cursor-pointer"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
