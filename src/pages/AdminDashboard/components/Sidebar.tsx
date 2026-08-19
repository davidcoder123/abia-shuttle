import React from 'react';
import { 
  LayoutDashboard, 
  Bus, 
  Route, 
  Armchair, 
  Wrench, 
  Bell, 
  HelpCircle, 
  Settings, 
  Plus,
  Radio,
  Sparkles
} from 'lucide-react';
import { NavTab } from '../types';
import { USER_AVATAR } from '../data/mockData';

interface SidebarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  unreadNotifsCount: number;
  pendingMaintCount: number;
  onOpenAddBus: () => void;
  onOpenCreateRoute: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentTab,
  onSelectTab,
  unreadNotifsCount,
  pendingMaintCount,
  onOpenAddBus,
  onOpenCreateRoute,
}) => {
  return (
    <aside className="hidden md:flex flex-col bg-[#06080c]/90 border-r border-white/10 backdrop-blur-2xl fixed left-0 top-0 h-full w-[260px] py-5 px-4 z-40 select-none shadow-2xl">
      {/* Brand Header */}
      <div 
        onClick={() => onSelectTab('dashboard')}
        className="flex items-center gap-3 mb-6 px-2 cursor-pointer group"
      >
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-400 to-blue-500 flex items-center justify-center text-black font-black text-sm font-mono shadow-lg shadow-orange-500/25 transition-transform group-hover:scale-105">
          Æ
        </div>
        <div>
          <h1 className="text-[17px] font-bold text-white tracking-tight leading-tight flex items-center gap-1.5">
            SHUTTLE<span className="text-orange-400 font-mono text-[11px] px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">OS</span>
          </h1>
          <p className="text-[10px] font-mono text-slate-500 tracking-wider">TELEMETRY V2.4</p>
        </div>
      </div>

      {/* Quick Action Button */}
      <div className="px-1 mb-5 space-y-2">
        <button
          onClick={onOpenAddBus}
          className="w-full bg-orange-500 hover:bg-orange-400 active:scale-[0.98] text-black py-2.5 px-3 rounded-xl font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4 stroke-[3]" />
          <span>New Dispatch</span>
        </button>
        <button
          onClick={onOpenCreateRoute}
          className="w-full bg-white/5 hover:bg-white/10 active:scale-[0.98] text-slate-300 border border-white/10 hover:border-white/20 py-2 px-3 rounded-xl font-medium text-[12px] flex items-center justify-center gap-2 transition-all cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span>Schedule Route</span>
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex flex-col gap-1 flex-1 overflow-y-auto pr-1">
        <button
          onClick={() => onSelectTab('dashboard')}
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'dashboard'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <LayoutDashboard className={`w-4 h-4 ${currentTab === 'dashboard' ? 'text-orange-400' : 'text-slate-500'}`} />
          <span>Dashboard</span>
        </button>

        <button
          onClick={() => onSelectTab('fleet')}
          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'fleet'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <Bus className={`w-4 h-4 ${currentTab === 'fleet' ? 'text-orange-400' : 'text-slate-500'}`} />
            <span>Fleet</span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-white/10 text-slate-400 px-2 py-0.5 rounded-full">
            42
          </span>
        </button>

        <button
          onClick={() => onSelectTab('routes')}
          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'routes'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <Route className={`w-4 h-4 ${currentTab === 'routes' ? 'text-orange-400' : 'text-slate-500'}`} />
            <span>Routes</span>
          </div>
          <span className="text-[10px] font-mono font-bold bg-white/10 text-slate-400 px-2 py-0.5 rounded-full">
            24
          </span>
        </button>

        <button
          onClick={() => onSelectTab('bookings')}
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'bookings'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <Armchair className={`w-4 h-4 ${currentTab === 'bookings' ? 'text-orange-400' : 'text-slate-500'}`} />
          <span>Bookings</span>
        </button>

        <button
          onClick={() => onSelectTab('maintenance')}
          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'maintenance'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <Wrench className={`w-4 h-4 ${currentTab === 'maintenance' ? 'text-orange-400' : 'text-slate-500'}`} />
            <span>Maintenance</span>
          </div>
          {pendingMaintCount > 0 && (
            <span className="text-[10px] font-mono font-bold bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2 py-0.5 rounded-full">
              {pendingMaintCount}
            </span>
          )}
        </button>

        <button
          onClick={() => onSelectTab('notifications')}
          className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'notifications'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <div className="flex items-center gap-3">
            <Bell className={`w-4 h-4 ${currentTab === 'notifications' ? 'text-orange-400' : 'text-slate-500'}`} />
            <span>Alerts</span>
          </div>
          {unreadNotifsCount > 0 && (
            <span className="text-[10px] font-mono font-bold bg-orange-500 text-black px-2 py-0.5 rounded-full">
              {unreadNotifsCount}
            </span>
          )}
        </button>

        <button
          onClick={() => onSelectTab('support')}
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
            currentTab === 'support'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <HelpCircle className={`w-4 h-4 ${currentTab === 'support' ? 'text-orange-400' : 'text-slate-500'}`} />
          <span>Knowledge Base</span>
        </button>

        <button
          onClick={() => onSelectTab('settings')}
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all mt-auto ${
            currentTab === 'settings'
              ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
              : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200 border border-transparent'
          }`}
        >
          <Settings className={`w-4 h-4 ${currentTab === 'settings' ? 'text-orange-400' : 'text-slate-500'}`} />
          <span>Settings</span>
        </button>
      </nav>

      {/* Admin User Footer Profile Card */}
      <div className="mt-auto pt-4 border-t border-white/10 px-1">
        <div 
          onClick={() => onSelectTab('settings')}
          className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 cursor-pointer transition-all"
        >
          <img
            src={USER_AVATAR}
            alt="Admin Profile"
            className="w-9 h-9 rounded-lg object-cover border border-white/10"
          />
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-white truncate leading-tight">Chief Dispatcher</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              <p className="text-[10px] font-mono text-slate-400 truncate">UMU-STATION-01</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
