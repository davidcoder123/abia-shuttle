import React, { useState } from 'react';
import { 
  Bell, 
  Armchair, 
  Wrench, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Check, 
  Settings, 
  Trash2,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { NotificationItem, NavTab } from '../types';

interface NotificationsViewProps {
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onMarkAsRead: (id: string) => void;
  onNavigateToTab: (tab: NavTab) => void;
}

export const NotificationsView: React.FC<NotificationsViewProps> = ({
  notifications,
  onMarkAllAsRead,
  onMarkAsRead,
  onNavigateToTab,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'unread' | 'high' | 'maintenance'>('all');
  const [bookingAlerts, setBookingAlerts] = useState(true);
  const [maintAlerts, setMaintAlerts] = useState(true);
  const [systemAlerts, setSystemAlerts] = useState(false);
  const [smsAlerts, setSmsAlerts] = useState(true);

  const unreadList = notifications.filter(n => !n.read);
  const highPriorityList = notifications.filter(n => n.priority === 'high');
  const maintenanceList = notifications.filter(n => n.category === 'maintenance');

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case 'unread':
        return unreadList;
      case 'high':
        return highPriorityList;
      case 'maintenance':
        return maintenanceList;
      default:
        return notifications;
    }
  };

  const filtered = getFilteredNotifications();

  return (
    <div className="flex flex-col max-w-[1440px] mx-auto w-full animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h2 className="text-[24px] font-bold text-white tracking-tight">Real-Time Telemetry & Alert Stream</h2>
          <p className="text-[13px] text-slate-400 mt-1">
            Live incident alerts, automated dispatch confirmations, and passenger ticketing events.
          </p>
        </div>
        <button
          onClick={onMarkAllAsRead}
          className="bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 px-4 py-2.5 rounded-xl font-mono text-[12px] font-bold flex items-center gap-2 transition-all shadow-lg cursor-pointer"
        >
          <Check className="w-4 h-4 text-orange-400 stroke-[3]" />
          <span>MARK ALL DISMISSED</span>
        </button>
      </div>

      {/* Grid Layout: Main List (2/3) + Settings Sidebar (1/3) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Notifications Column */}
        <div className="lg:col-span-2 space-y-4">
          {/* Tabs */}
          <div className="flex items-center gap-2 border-b border-white/10 pb-3 overflow-x-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-[12px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              ALL ({notifications.length})
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`px-3.5 py-1.5 rounded-xl text-[12px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'unread'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              UNREAD ({unreadList.length})
            </button>
            <button
              onClick={() => setActiveTab('high')}
              className={`px-3.5 py-1.5 rounded-xl text-[12px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'high'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              HIGH PRIORITY ({highPriorityList.length})
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`px-3.5 py-1.5 rounded-xl text-[12px] font-mono font-bold transition-all shrink-0 cursor-pointer ${
                activeTab === 'maintenance'
                  ? 'bg-orange-500 text-black shadow-lg shadow-orange-500/20'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              MAINTENANCE ({maintenanceList.length})
            </button>
          </div>

          {/* Cards List */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 text-center text-slate-500 backdrop-blur-xl">
                <Bell className="w-8 h-8 mx-auto text-slate-600 mb-3" />
                <p className="font-bold text-[14px] text-slate-300 font-mono">No active alerts in this stream filter</p>
                <p className="text-[12px] text-slate-500 mt-1">All telemetry systems running within standard operating thresholds</p>
              </div>
            ) : (
              filtered.map((item) => {
                const isBooking = item.category === 'booking';
                const isMaint = item.category === 'maintenance';
                const isSystem = item.category === 'system';
                const isDelay = item.category === 'delay';

                return (
                  <div
                    key={item.id}
                    onClick={() => onMarkAsRead(item.id)}
                    className={`rounded-2xl p-5 shadow-xl transition-all cursor-pointer flex items-start gap-4 backdrop-blur-xl ${
                      !item.read
                        ? 'border border-orange-500/30 bg-orange-500/[0.03] shadow-[0_0_15px_rgba(16,185,129,0.05)]'
                        : 'border border-white/10 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Icon container */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border ${
                        isBooking
                          ? 'bg-orange-500/10 border-orange-500/30 text-orange-400'
                          : isMaint
                          ? 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                          : isSystem
                          ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                          : 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                      }`}
                    >
                      {isBooking && <Armchair className="w-5 h-5" />}
                      {isMaint && <Wrench className="w-5 h-5" />}
                      {isSystem && <CheckCircle2 className="w-5 h-5" />}
                      {isDelay && <Clock className="w-5 h-5" />}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2.5">
                          <h4 className="text-[14px] font-bold text-white tracking-tight">{item.title}</h4>
                          {item.priority === 'high' && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-500/15 text-rose-400 border border-rose-500/30">
                              HIGH SEVERITY
                            </span>
                          )}
                          {!item.read && (
                            <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_#FF6200]" />
                          )}
                        </div>
                        <span className="text-[11px] font-mono text-slate-500 shrink-0">
                          {item.timestamp}
                        </span>
                      </div>

                      <p className="text-[13px] text-slate-300 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Action buttons */}
                      <div className="mt-3.5 flex items-center gap-2">
                        {isBooking && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigateToTab('bookings');
                            }}
                            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-orange-400 border border-orange-500/20 text-[11px] font-mono font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>VIEW PASSENGER MANIFEST</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {isMaint && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigateToTab('maintenance');
                            }}
                            className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-[11px] font-mono font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <span>DISPATCH SERVICE BAY</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Sidebar Notifications Settings & Preferences */}
        <div className="space-y-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10 mb-4">
              <Settings className="w-4 h-4 text-orange-400" />
              <h3 className="text-[14px] font-bold text-white font-mono">Stream Subscriptions</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold text-white">Booking Push Triggers</p>
                  <p className="text-[11px] text-slate-400">Instant telemetry for seat reservation</p>
                </div>
                <button
                  type="button"
                  onClick={() => setBookingAlerts(!bookingAlerts)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                    bookingAlerts ? 'bg-orange-500 shadow-md shadow-orange-500/30' : 'bg-white/10 border border-white/10'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      bookingAlerts ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold text-white">Telemetry & Fault Alerts</p>
                  <p className="text-[11px] text-slate-400">Warning on engine sensor anomaly</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMaintAlerts(!maintAlerts)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                    maintAlerts ? 'bg-orange-500 shadow-md shadow-orange-500/30' : 'bg-white/10 border border-white/10'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      maintAlerts ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold text-white">System Fleet Broadcasts</p>
                  <p className="text-[11px] text-slate-400">Nightly dispatch health summaries</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSystemAlerts(!systemAlerts)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                    systemAlerts ? 'bg-orange-500 shadow-md shadow-orange-500/30' : 'bg-white/10 border border-white/10'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      systemAlerts ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[13px] font-semibold text-white">Driver GSM Dispatch SMS</p>
                  <p className="text-[11px] text-slate-400">Forward schedule changes via SMS gateway</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSmsAlerts(!smsAlerts)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 cursor-pointer ${
                    smsAlerts ? 'bg-orange-500 shadow-md shadow-orange-500/30' : 'bg-white/10 border border-white/10'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      smsAlerts ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/[0.04] to-orange-500/[0.05] border border-orange-500/20 text-white rounded-2xl p-6 shadow-xl backdrop-blur-xl">
            <h4 className="text-[14px] font-mono font-bold text-orange-400 mb-1">TELEMETRY MESH STATUS</h4>
            <p className="text-[12px] text-slate-300 leading-relaxed mb-4">
              All 42 active GPS tracker pods reporting healthy ping cadence across Eastern corridor corridors.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-orange-400 bg-black/40 border border-orange-500/30 px-3.5 py-2 rounded-xl">
              <span className="w-2 h-2 rounded-full bg-orange-400 shadow-[0_0_8px_#FF6200] animate-pulse" />
              <span>MESH STATUS: 100% OPERATIONAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
