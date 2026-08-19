import React, { useState } from 'react';
import { Search, Bell, HelpCircle, LayoutGrid, Menu, ChevronDown, Check, Sparkles, Radio } from 'lucide-react';
import { NavTab } from '../types';
import { USER_AVATAR } from '../data/mockData';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  searchQuery: string;
  onSearchChange: (val: string) => void;
  unreadCount: number;
  onToggleMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  searchQuery,
  onSearchChange,
  unreadCount,
  onToggleMobileMenu,
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const getPageTitle = () => {
    switch (currentTab) {
      case 'dashboard':
        return 'System Overview';
      case 'fleet':
        return 'Fleet Management';
      case 'routes':
        return 'Route & Scheduling';
      case 'bookings':
        return 'Passenger Bookings';
      case 'maintenance':
        return 'Maintenance & Bay Logistics';
      case 'notifications':
        return 'Alerts & Telemetry';
      case 'support':
        return 'Knowledge & Protocols';
      case 'settings':
        return 'Terminal Settings';
      default:
        return 'Overview';
    }
  };

  return (
    <header className="bg-[#06080c]/80 border-b border-white/10 backdrop-blur-xl sticky top-0 w-full z-30 flex items-center justify-between px-4 md:px-8 py-2.5 h-16 shadow-2xl">
      {/* Mobile Menu & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2.5">
          <h1 className="text-[17px] md:text-[19px] font-bold text-white tracking-tight">
            {getPageTitle()}
          </h1>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-[10px] font-mono text-orange-400">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
            LIVE LINK
          </span>
        </div>
      </div>

      {/* Search Input & Actions */}
      <div className="flex items-center gap-3 md:gap-4">
        <div className="relative hidden sm:flex items-center">
          <Search className="w-3.5 h-3.5 absolute left-3.5 text-slate-500 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={`Search ${currentTab === 'fleet' ? 'fleet / plate...' : currentTab === 'routes' ? 'routes or departures...' : 'terminal, routes, buses...'}`}
            className="pl-9 pr-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.07] focus:bg-white/[0.08] border border-white/10 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20 text-[12px] text-slate-200 w-48 md:w-64 lg:w-72 outline-none transition-all placeholder:text-slate-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 text-slate-500 hover:text-white text-xs font-semibold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Notifications Icon Button */}
        <button
          onClick={() => onSelectTab('notifications')}
          title="Notifications"
          className="relative p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Bell className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
          )}
        </button>

        {/* Help Center Button */}
        <button
          onClick={() => onSelectTab('support')}
          title="Help & Tutorials"
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all hidden sm:flex"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* Quick App Modules Switcher */}
        <button
          onClick={() => onSelectTab('fleet')}
          title="Operations View"
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all hidden sm:flex"
        >
          <LayoutGrid className="w-4 h-4" />
        </button>

        <div className="h-5 w-px bg-white/10 hidden sm:block"></div>

        {/* User Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center gap-2 p-1 pr-2.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-orange-500/40 hover:bg-white/[0.06] transition-all cursor-pointer"
          >
            <img
              src={USER_AVATAR}
              alt="Admin Headshot"
              className="w-7 h-7 rounded-full object-cover border border-white/10"
            />
            <span className="text-[12px] font-semibold text-slate-200 hidden md:inline-block">
              Dispatcher
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:inline-block" />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#0a0c10]/95 border border-white/10 rounded-2xl shadow-2xl py-2 z-50 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-150">
              <div className="px-4 py-2 border-b border-white/10">
                <p className="text-[13px] font-bold text-white">Chief Dispatcher</p>
                <p className="text-[11px] font-mono text-slate-400">admin@shuttle.co</p>
              </div>
              <button
                onClick={() => {
                  onSelectTab('settings');
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[12px] text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                Profile & Settings
              </button>
              <button
                onClick={() => {
                  onSelectTab('notifications');
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[12px] text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                Alert Configurations
              </button>
              <button
                onClick={() => {
                  onSelectTab('support');
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[12px] text-slate-300 hover:bg-white/5 hover:text-white transition-colors"
              >
                Operational Guides
              </button>
              <div className="border-t border-white/10 my-1"></div>
              <button
                onClick={() => {
                  setProfileDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-[12px] text-orange-400 hover:bg-orange-500/10 transition-colors font-medium flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5" /> Telemetry Signal 100%
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
