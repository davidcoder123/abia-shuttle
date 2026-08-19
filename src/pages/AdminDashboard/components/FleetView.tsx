import React, { useState } from 'react';
import { 
  Bus as BusIcon, 
  CheckCircle, 
  Wrench, 
  AlertTriangle, 
  Plus, 
  Filter, 
  ArrowUpDown, 
  Download, 
  Edit3, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  Radio
} from 'lucide-react';
import { Bus, BusStatus } from '../types';

interface FleetViewProps {
  buses: Bus[];
  onOpenAddBus: () => void;
  onEditBus: (bus: Bus) => void;
  onDeleteBus: (busId: string) => void;
  searchQuery: string;
}

export const FleetView: React.FC<FleetViewProps> = ({
  buses,
  onOpenAddBus,
  onEditBus,
  onDeleteBus,
  searchQuery,
}) => {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortField, setSortField] = useState<'name' | 'capacity' | 'status'>('name');
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalCount = buses.length;
  const activeCount = buses.filter(b => b.status === 'Active').length;
  const inServiceCount = buses.filter(b => b.status === 'In Service').length;
  const maintenanceCount = buses.filter(b => b.status === 'Maintenance').length;
  const outOfServiceCount = buses.filter(b => b.status === 'Out of Service').length;

  const filteredBuses = buses.filter(b => {
    const matchesSearch = 
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.plateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.model.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (statusFilter === 'all') return matchesSearch;
    return matchesSearch && b.status.toLowerCase() === statusFilter.toLowerCase();
  }).sort((a, b) => {
    let comparison = 0;
    if (sortField === 'name') comparison = a.name.localeCompare(b.name);
    else if (sortField === 'capacity') comparison = a.capacity - b.capacity;
    else if (sortField === 'status') comparison = a.status.localeCompare(b.status);
    return sortAsc ? comparison : -comparison;
  });

  const totalPages = Math.ceil(filteredBuses.length / itemsPerPage) || 1;
  const paginatedBuses = filteredBuses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["Bus ID,Bus Name,Model,Plate Number,Capacity,Status", ...buses.map(b => `${b.id},"${b.name}","${b.model}",${b.plateNumber},${b.capacity},${b.status}`)].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `shuttle_fleet_export_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full animate-in fade-in duration-200">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-white tracking-tight">Fleet Asset Control</h2>
          <p className="text-[13px] text-slate-400 mt-1">
            Monitor and manage telemetry, active interstate shuttles, and maintenance nodes.
          </p>
        </div>
        <button
          onClick={onOpenAddBus}
          className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-black px-4 py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>Add New Vehicle</span>
        </button>
      </div>

      {/* Metrics Summary Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Fleet */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Total Fleet Nodes</span>
            <BusIcon className="w-4 h-4 text-slate-500" />
          </div>
          <div className="mt-3">
            <div className="text-[32px] font-mono font-bold text-white leading-none">{totalCount}</div>
            <div className="text-[11px] font-mono font-semibold text-orange-400 flex items-center gap-1 mt-1.5">
              <span>↗</span> +3 this cycle
            </div>
          </div>
        </div>

        {/* Active Status */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Active Status</span>
            <CheckCircle className="w-4 h-4 text-orange-400" />
          </div>
          <div className="mt-3">
            <div className="text-[32px] font-mono font-bold text-orange-400 leading-none">
              {activeCount + inServiceCount}
            </div>
            <div className="text-[11px] font-mono text-slate-400 mt-1.5">Currently Operational</div>
          </div>
        </div>

        {/* In Maintenance */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">In Service Bay</span>
            <Wrench className="w-4 h-4 text-amber-400" />
          </div>
          <div className="mt-3">
            <div className="text-[32px] font-mono font-bold text-amber-400 leading-none">{maintenanceCount}</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1.5">Scheduled Repairs</div>
          </div>
        </div>

        {/* Out of Service */}
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col justify-between backdrop-blur-xl shadow-xl">
          <div className="flex justify-between items-start">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">Out of Service</span>
            <AlertTriangle className="w-4 h-4 text-rose-400" />
          </div>
          <div className="mt-3">
            <div className="text-[32px] font-mono font-bold text-rose-400 leading-none">{outOfServiceCount}</div>
            <div className="text-[11px] font-mono text-rose-400 mt-1.5 flex items-center gap-1">
              <span>!</span> Requires Attention
            </div>
          </div>
        </div>
      </div>

      {/* Data Table Section */}
      <div className="bg-[#1a0505]/80 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl flex flex-col">
        {/* Table Toolbar */}
        <div className="px-4 py-3 border-b border-white/10 bg-white/[0.02] flex flex-wrap justify-between items-center gap-3">
          <div className="flex items-center gap-2 relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`px-3 py-1.5 border border-white/10 rounded-xl bg-white/5 text-slate-300 text-[12px] font-medium hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer ${
                statusFilter !== 'all' ? 'border-orange-500/50 text-orange-400 bg-orange-500/10' : ''
              }`}
            >
              <Filter className="w-3.5 h-3.5" />
              <span>Filter {statusFilter !== 'all' ? `(${statusFilter})` : ''}</span>
            </button>

            {filterOpen && (
              <div className="absolute top-10 left-0 bg-[#0a0c10]/95 border border-white/10 rounded-2xl shadow-2xl p-3 z-30 w-48 space-y-1 backdrop-blur-2xl">
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase px-2 mb-1">Filter by Status</p>
                {['all', 'Active', 'In Service', 'Maintenance', 'Out of Service'].map((st) => (
                  <button
                    key={st}
                    onClick={() => {
                      setStatusFilter(st);
                      setFilterOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-2 py-1.5 rounded-lg text-[12px] font-medium transition-colors ${
                      statusFilter === st ? 'bg-orange-500/20 text-orange-400 font-bold' : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    {st === 'all' ? 'All Vehicles' : st}
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                if (sortField === 'name') setSortAsc(!sortAsc);
                else {
                  setSortField('name');
                  setSortAsc(true);
                }
              }}
              className="px-3 py-1.5 border border-white/10 rounded-xl bg-white/5 text-slate-300 text-[12px] font-medium hover:bg-white/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort: {sortField} ({sortAsc ? 'A-Z' : 'Z-A'})</span>
            </button>
          </div>

          <button
            onClick={handleExport}
            className="text-slate-400 hover:text-white text-[12px] font-mono font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>EXPORT CSV</span>
          </button>
        </div>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/10 text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4 w-1/4">
                  Vehicle / Model
                </th>
                <th className="py-3 px-4">
                  Plate Number
                </th>
                <th className="py-3 px-4">
                  Capacity
                </th>
                <th className="py-3 px-4">
                  Amenities
                </th>
                <th className="py-3 px-4">
                  Status
                </th>
                <th className="py-3 px-4 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-[13px] text-slate-300 divide-y divide-white/5">
              {paginatedBuses.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500 font-mono">
                    No vehicles found matching criteria.
                  </td>
                </tr>
              ) : (
                paginatedBuses.map((bus) => (
                  <tr
                    key={bus.id}
                    className="hover:bg-white/[0.04] transition-colors group h-14"
                  >
                    <td className="py-2.5 px-4">
                      <div className="font-bold text-white">{bus.name}</div>
                      <div className="text-slate-400 text-[11px] font-mono">{bus.model} ({bus.id})</div>
                    </td>
                    <td className="py-2.5 px-4 font-mono font-bold text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                        {bus.plateNumber}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 font-mono">
                      {bus.capacity} Seats
                    </td>
                    <td className="py-2.5 px-4">
                      <div className="flex gap-1.5 flex-wrap">
                        {bus.features.map((feat) => (
                          <span
                            key={feat}
                            className="px-1.5 py-0.5 bg-white/5 text-slate-300 rounded text-[10px] font-mono border border-white/10"
                          >
                            {feat}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-2.5 px-4">
                      {bus.status === 'Active' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                          ACTIVE
                        </span>
                      )}
                      {bus.status === 'In Service' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          IN SERVICE
                        </span>
                      )}
                      {bus.status === 'Maintenance' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          MAINTENANCE
                        </span>
                      )}
                      {bus.status === 'Out of Service' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                          OUT OF SERVICE
                        </span>
                      )}
                    </td>
                    <td className="py-2.5 px-4 text-right">
                      <div className="flex justify-end gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => onEditBus(bus)}
                          className="text-slate-400 hover:text-white p-1.5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => onDeleteBus(bus.id)}
                          className="text-slate-400 hover:text-rose-400 p-1.5 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 py-3 border-t border-white/10 bg-white/[0.01] flex items-center justify-between">
          <span className="text-[12px] font-mono text-slate-400">
            Showing {filteredBuses.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{' '}
            {Math.min(currentPage * itemsPerPage, filteredBuses.length)} of {filteredBuses.length} records
          </span>
          <div className="flex gap-1.5">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white disabled:opacity-30 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
              <button
                key={pg}
                onClick={() => setCurrentPage(pg)}
                className={`w-8 h-8 flex items-center justify-center rounded-xl text-[12px] font-mono font-bold transition-all cursor-pointer ${
                  currentPage === pg
                    ? 'border border-orange-500/50 bg-orange-500/20 text-orange-400 shadow-[0_0_8px_rgba(16,185,129,0.2)]'
                    : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {pg}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white disabled:opacity-30 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
