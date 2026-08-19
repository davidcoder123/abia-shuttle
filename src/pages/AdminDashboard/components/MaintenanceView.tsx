import React, { useState } from 'react';
import { 
  Wrench, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  Plus, 
  FileText, 
  ShieldAlert, 
  Calendar,
  X,
  Check
} from 'lucide-react';
import { MaintenanceTicket, MaintenanceStatus, MaintenancePriority, Bus } from '../types';

interface MaintenanceViewProps {
  tickets: MaintenanceTicket[];
  buses: Bus[];
  onUpdateTicketStatus: (ticketId: string, newStatus: MaintenanceStatus, notes?: string) => void;
  onAddTicket: (ticket: Partial<MaintenanceTicket>) => void;
}

export const MaintenanceView: React.FC<MaintenanceViewProps> = ({
  tickets,
  buses,
  onUpdateTicketStatus,
  onAddTicket,
}) => {
  const [selectedTicket, setSelectedTicket] = useState<MaintenanceTicket | null>(null);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [newStatus, setNewStatus] = useState<MaintenanceStatus>('In Progress');
  const [notes, setNotes] = useState('');

  const [isNewTicketModalOpen, setIsNewTicketModalOpen] = useState(false);
  const [newBusId, setNewBusId] = useState(buses[0]?.id || 'BUS-052');
  const [newPriority, setNewPriority] = useState<MaintenancePriority>('Medium');
  const [newIssue, setNewIssue] = useState('');

  const handleOpenUpdate = (ticket: MaintenanceTicket) => {
    setSelectedTicket(ticket);
    setNewStatus(ticket.status);
    setNotes(ticket.notes || '');
    setIsUpdateModalOpen(true);
  };

  const handleSaveStatus = () => {
    if (selectedTicket) {
      onUpdateTicketStatus(selectedTicket.id, newStatus, notes);
      setIsUpdateModalOpen(false);
    }
  };

  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIssue.trim()) return;

    const matchedBus = buses.find(b => b.id === newBusId);
    onAddTicket({
      id: `MAINT-${Math.floor(100 + Math.random() * 900)}`,
      busId: newBusId,
      busModel: matchedBus?.model || 'Commercial Minibus',
      priority: newPriority,
      reportedIssue: newIssue,
      dateReported: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      status: 'Awaiting Inspection',
      notes: ''
    });

    setIsNewTicketModalOpen(false);
    setNewIssue('');
  };

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-white tracking-tight">Depot Maintenance & Diagnostics</h2>
          <p className="text-[13px] text-slate-400 mt-1">
            Real-time mechanical logs, part dispatch orders, and inspection clearance protocols.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsNewTicketModalOpen(true)}
            className="bg-orange-500 hover:bg-orange-400 active:scale-95 text-black px-4 py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3]" />
            <span>Report Service Issue</span>
          </button>
        </div>
      </div>

      {/* Maintenance Summary Bar */}
      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 mb-6 flex flex-wrap items-center justify-between gap-4 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/10">
            <Wrench className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[15px] font-bold text-white font-mono">
              {tickets.filter(t => t.status !== 'Resolved').length} Active Diagnostic Tickets
            </p>
            <p className="text-[12px] text-slate-400 mt-0.5">
              Depot bay capacity: 2 bays active, 1 unit queued for initial inspection
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 font-mono">
          <span className="px-3 py-1.5 rounded-xl text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            {tickets.filter(t => t.priority === 'High' && t.status !== 'Resolved').length} HIGH SEVERITY
          </span>
          <span className="px-3 py-1.5 rounded-xl text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            {tickets.filter(t => t.priority === 'Medium' && t.status !== 'Resolved').length} MEDIUM
          </span>
        </div>
      </div>

      {/* Maintenance Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tickets.map((ticket) => {
          const isHigh = ticket.priority === 'High';
          const isMedium = ticket.priority === 'Medium';
          const isResolved = ticket.status === 'Resolved';

          return (
            <div
              key={ticket.id}
              className={`rounded-2xl p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all ${
                isResolved
                  ? 'border border-orange-500/20 bg-orange-500/[0.02] opacity-80'
                  : isHigh
                  ? 'border border-rose-500/30 bg-rose-500/[0.03] shadow-[0_0_20px_rgba(244,63,94,0.1)]'
                  : 'border border-white/10 bg-white/[0.03]'
              }`}
            >
              <div>
                {/* Card Top: Bus ID & Priority Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="font-mono text-[16px] font-bold text-white block">
                      {ticket.busId}
                    </span>
                    <span className="text-[12px] font-mono text-slate-400">{ticket.busModel}</span>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      isHigh
                        ? 'bg-rose-500/15 text-rose-400 border border-rose-500/30'
                        : isMedium
                        ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30'
                        : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                    }`}
                  >
                    {ticket.priority} Severity
                  </span>
                </div>

                {/* Reported Issue */}
                <div className="my-4">
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    DIAGNOSED FAULT
                  </p>
                  <p className="text-[14px] font-semibold text-white leading-relaxed">
                    {ticket.reportedIssue}
                  </p>
                  {ticket.notes && (
                    <p className="text-[12px] text-slate-300 mt-3 italic bg-white/5 p-3 rounded-xl border border-white/10 font-mono">
                      "{ticket.notes}"
                    </p>
                  )}
                </div>

                {/* Date Reported & Status */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{ticket.dateReported}</span>
                  </div>
                  <div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold ${
                        ticket.status === 'Resolved'
                          ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                          : ticket.status === 'Parts on Order'
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                          : ticket.status === 'In Progress'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-white/5 text-slate-300 border border-white/10'
                      }`}
                    >
                      {ticket.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <button
                  onClick={() => handleOpenUpdate(ticket)}
                  className="w-full bg-white/5 hover:bg-white/10 text-slate-200 font-mono font-bold py-2.5 px-3 rounded-xl text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 border border-white/10 transition-colors cursor-pointer"
                >
                  <Wrench className="w-3.5 h-3.5 text-orange-400" />
                  <span>Update Status / Log Work</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Update Status Modal */}
      {isUpdateModalOpen && selectedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl p-6 backdrop-blur-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-[16px] font-bold text-white font-mono">
                  Update Maintenance: {selectedTicket.busId}
                </h3>
                <p className="text-[12px] text-slate-400">{selectedTicket.reportedIssue}</p>
              </div>
              <button
                onClick={() => setIsUpdateModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                  Update Service Status
                </label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value as MaintenanceStatus)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] font-medium text-white outline-none cursor-pointer"
                >
                  <option value="Awaiting Inspection" className="bg-[#0a0c10]">Awaiting Inspection</option>
                  <option value="Parts on Order" className="bg-[#0a0c10]">Parts on Order</option>
                  <option value="In Progress" className="bg-[#0a0c10]">In Progress (Bay Active)</option>
                  <option value="Resolved" className="bg-[#0a0c10]">Resolved & Cleared for Dispatch</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                  Mechanic / Service Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. OEM brake pads installed, test driven 5km without noise."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
              <button
                onClick={() => setIsUpdateModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-[12px] font-mono font-bold cursor-pointer"
              >
                CANCEL
              </button>
              <button
                onClick={handleSaveStatus}
                className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black text-[12px] font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-orange-500/20 cursor-pointer"
              >
                <Check className="w-4 h-4 stroke-[3]" />
                <span>SAVE STATUS</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Maintenance Ticket Modal */}
      {isNewTicketModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-[#0a0c10]/95 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl p-6 backdrop-blur-2xl animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h3 className="text-[16px] font-bold text-white font-mono">Report Maintenance Issue</h3>
                <p className="text-[12px] text-slate-400">Log a fault or schedule maintenance for a bus</p>
              </div>
              <button
                onClick={() => setIsNewTicketModalOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTicket} className="py-4 space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                  Select Vehicle
                </label>
                <select
                  value={newBusId}
                  onChange={(e) => setNewBusId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] font-medium text-white outline-none cursor-pointer"
                >
                  {buses.map((b) => (
                    <option key={b.id} value={b.id} className="bg-[#0a0c10] text-white">
                      {b.id} - {b.name} ({b.model})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                  Priority Level
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['High', 'Medium', 'Low'] as MaintenancePriority[]).map((p) => (
                    <button
                      type="button"
                      key={p}
                      onClick={() => setNewPriority(p)}
                      className={`py-2 px-3 rounded-xl text-[11px] font-mono font-bold border transition-all cursor-pointer ${
                        newPriority === p
                          ? 'border-orange-500 bg-orange-500/20 text-orange-400 shadow-sm'
                          : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-slate-400 uppercase mb-1.5">
                  Reported Fault / Issue *
                </label>
                <textarea
                  required
                  rows={3}
                  value={newIssue}
                  onChange={(e) => setNewIssue(e.target.value)}
                  placeholder="e.g. Engine check light glowing, clutch slipping on gear 2."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white outline-none focus:border-orange-500/50"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsNewTicketModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-slate-400 hover:text-white text-[12px] font-mono font-bold cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black text-[12px] font-mono font-bold flex items-center gap-1.5 shadow-lg shadow-orange-500/20 cursor-pointer"
                >
                  <Plus className="w-4 h-4 stroke-[3]" />
                  <span>SUBMIT TICKET</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
