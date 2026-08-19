/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';
import { NavTab, Bus, RouteSchedule, MaintenanceTicket, NotificationItem, RecentActivity, BookingRecord, MaintenanceStatus } from './types';
import { 
  INITIAL_BUSES, 
  INITIAL_ROUTES, 
  INITIAL_MAINTENANCE_TICKETS, 
  INITIAL_NOTIFICATIONS, 
  INITIAL_ACTIVITIES, 
  INITIAL_BOOKINGS 
} from './data/mockData';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardView } from './components/DashboardView';
import { FleetView } from './components/FleetView';
import { RoutesView } from './components/RoutesView';
import { BusFormModal } from './components/BusFormModal';
import { CreateRouteModal } from './components/CreateRouteModal';
import { MaintenanceView } from './components/MaintenanceView';
import { NotificationsView } from './components/NotificationsView';
import { SupportView } from './components/SupportView';
import { BookingsView } from './components/BookingsView';
import { SettingsView } from './components/SettingsView';
import { LayoutDashboard, Bus as BusIcon, Route, Armchair, Wrench, Bell, HelpCircle, Settings, Plus, X } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('dashboard');
  const [buses, setBuses] = useState<Bus[]>(INITIAL_BUSES);
  const [routes, setRoutes] = useState<RouteSchedule[]>(INITIAL_ROUTES);
  const [maintenanceTickets, setMaintenanceTickets] = useState<MaintenanceTicket[]>(INITIAL_MAINTENANCE_TICKETS);
  const [notifications, setNotifications] = useState<NotificationItem[]>(INITIAL_NOTIFICATIONS);
  const [activities, setActivities] = useState<RecentActivity[]>(INITIAL_ACTIVITIES);
  const [bookings, setBookings] = useState<BookingRecord[]>(INITIAL_BOOKINGS);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch routes from Supabase on mount
  useEffect(() => {
    async function fetchRoutes() {
      const { data, error } = await supabase.from('routes').select('*').order('created_at', { ascending: false });
      if (data && !error) {
        const formattedRoutes = data.map((r: any) => ({
          id: r.id,
          origin: r.origin,
          destination: r.destination,
          departureTime: r.departure_time,
          departureDate: r.departure_date,
          frequency: r.frequency,
          busAssignedId: r.bus_assigned_id,
          busAssignedName: r.bus_assigned_name,
          pricePerSeat: r.price_per_seat,
          totalCapacity: r.total_capacity,
          seatsBooked: r.seats_booked,
          stops: r.stops,
          km: r.km,
          duration: r.duration,
          status: r.status
        }));
        setRoutes(formattedRoutes);
      }
    }
    fetchRoutes();
  }, []);

  // Modals state
  const [isBusModalOpen, setIsBusModalOpen] = useState(false);
  const [busToEdit, setBusToEdit] = useState<Bus | null>(null);

  const [isRouteModalOpen, setIsRouteModalOpen] = useState(false);
  const [routeToEdit, setRouteToEdit] = useState<RouteSchedule | null>(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Unread counters
  const unreadNotifsCount = notifications.filter(n => !n.read).length;
  const pendingMaintCount = maintenanceTickets.filter(t => t.status !== 'Resolved').length;

  // Fleet handlers
  const handleOpenAddBus = () => {
    setBusToEdit(null);
    setIsBusModalOpen(true);
  };

  const handleEditBus = (bus: Bus) => {
    setBusToEdit(bus);
    setIsBusModalOpen(true);
  };

  const handleSaveBus = (busData: Partial<Bus>) => {
    if (busToEdit) {
      setBuses(prev => prev.map(b => b.id === busToEdit.id ? { ...b, ...busData } as Bus : b));
      setActivities(prev => [
        {
          id: `act-${Date.now()}`,
          busId: busToEdit.id,
          message: `Vehicle details updated.`,
          timestamp: 'Just now',
          type: 'arrival'
        },
        ...prev
      ]);
    } else {
      const newBus: Bus = {
        id: busData.id || `BUS-${Math.floor(100 + Math.random() * 900)}`,
        name: busData.name || 'New Shuttle Bus',
        model: busData.model || 'Toyota HiAce',
        plateNumber: busData.plateNumber || 'LG-100-AB',
        capacity: busData.capacity || 14,
        features: busData.features || ['AC', 'Charging Ports'],
        status: busData.status || 'Active',
        occupancy: { current: 0, max: busData.capacity || 14 },
        liveRoute: 'Depot Idle',
        scheduleStatus: 'ON TIME'
      };
      setBuses(prev => [newBus, ...prev]);
      setActivities(prev => [
        {
          id: `act-${Date.now()}`,
          busId: newBus.id,
          message: `Vehicle ${newBus.name} added to fleet.`,
          timestamp: 'Just now',
          type: 'arrival'
        },
        ...prev
      ]);
    }
    setIsBusModalOpen(false);
    setBusToEdit(null);
  };

  const handleDeleteBus = (busId: string) => {
    setBuses(prev => prev.filter(b => b.id !== busId));
  };

  // Route handlers
  const handleOpenCreateRoute = () => {
    setRouteToEdit(null);
    setIsRouteModalOpen(true);
  };

  const handleEditRoute = (route: RouteSchedule) => {
    setRouteToEdit(route);
    setIsRouteModalOpen(true);
  };

  const handleSaveRoute = async (routeData: Partial<RouteSchedule>) => {
    const dbPayload = {
      origin: routeData.origin || 'Umuahia',
      destination: routeData.destination || 'Lagos',
      departure_time: routeData.departureTime || '07:30 AM',
      departure_date: routeData.departureDate || new Date().toISOString().slice(0, 10),
      frequency: routeData.frequency || 'Daily',
      bus_assigned_id: routeData.busAssignedId || 'BUS-014',
      bus_assigned_name: routeData.busAssignedName || 'Abia Express Line',
      price_per_seat: routeData.pricePerSeat || 3500,
      total_capacity: routeData.totalCapacity || 14,
      stops: routeData.stops || 0,
      km: routeData.km || 0,
      duration: routeData.duration || '',
      status: routeData.status || 'Scheduled'
    };

    if (routeToEdit && routeToEdit.id) {
      // Update existing route
      const { data, error } = await supabase.from('routes').update(dbPayload).eq('id', routeToEdit.id).select();
      if (data && !error) {
        setRoutes(prev => prev.map(r => r.id === routeToEdit.id ? { ...r, ...routeData } as RouteSchedule : r));
      }
    } else {
      // Insert new route
      const { data, error } = await supabase.from('routes').insert(dbPayload).select();
      if (data && !error) {
        const r = data[0];
        const newRoute: RouteSchedule = {
          id: r.id,
          origin: r.origin,
          destination: r.destination,
          departureTime: r.departure_time,
          departureDate: r.departure_date,
          frequency: r.frequency,
          busAssignedId: r.bus_assigned_id,
          busAssignedName: r.bus_assigned_name,
          pricePerSeat: r.price_per_seat,
          totalCapacity: r.total_capacity,
          seatsBooked: r.seats_booked,
          stops: r.stops,
          km: r.km,
          duration: r.duration,
          status: r.status as any
        };
        setRoutes(prev => [newRoute, ...prev]);
      }
    }
    setIsRouteModalOpen(false);
    setRouteToEdit(null);
  };

  const handleDeleteRoute = async (routeId: string) => {
    const { error } = await supabase.from('routes').delete().eq('id', routeId);
    if (!error) {
      setRoutes(prev => prev.filter(r => r.id !== routeId));
    }
  };

  // Maintenance handlers
  const handleUpdateTicketStatus = (ticketId: string, newStatus: MaintenanceStatus, notes?: string) => {
    setMaintenanceTickets(prev =>
      prev.map(t => (t.id === ticketId ? { ...t, status: newStatus, notes: notes || t.notes } : t))
    );
    // If resolved, update bus status if in maintenance
    if (newStatus === 'Resolved') {
      const ticket = maintenanceTickets.find(t => t.id === ticketId);
      if (ticket) {
        setBuses(prev => prev.map(b => b.id === ticket.busId ? { ...b, status: 'Active' } : b));
        setActivities(prev => [
          {
            id: `act-${Date.now()}`,
            busId: ticket.busId,
            message: `Maintenance completed for ${ticket.busId}. Vehicle cleared.`,
            timestamp: 'Just now',
            type: 'maintenance'
          },
          ...prev
        ]);
      }
    }
  };

  const handleAddTicket = (newTicket: Partial<MaintenanceTicket>) => {
    setMaintenanceTickets(prev => [newTicket as MaintenanceTicket, ...prev]);
    if (newTicket.busId) {
      setBuses(prev => prev.map(b => b.id === newTicket.busId ? { ...b, status: 'Maintenance' } : b));
    }
  };

  // Notification handlers
  const handleMarkAllNotifsAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleMarkNotifAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // Booking handlers
  const handleAddBooking = (newBooking: BookingRecord) => {
    setBookings(prev => [newBooking, ...prev]);
    // update seats booked on route
    setRoutes(prev => prev.map(r => r.id === newBooking.routeId ? { ...r, seatsBooked: r.seatsBooked + newBooking.seats.length } : r));
    // Add notification
    setNotifications(prev => [
      {
        id: `notif-${Date.now()}`,
        type: 'booking',
        category: 'booking',
        title: `New Reservation: ${newBooking.passengerName}`,
        description: `${newBooking.seats.join(', ')} booked for ${newBooking.routeName} (${newBooking.departureTime}). Total: ₦${newBooking.totalAmount.toLocaleString()}`,
        timestamp: 'Just now',
        read: false,
        priority: 'normal'
      },
      ...prev
    ]);
  };

  const handleCancelBooking = (bookingId: string) => {
    setBookings(prev => prev.map(b => b.id === bookingId ? { ...b, status: 'Cancelled' } : b));
  };

  return (
    <div className="min-h-screen bg-[#110303] text-slate-300 flex flex-col antialiased relative selection:bg-orange-500 selection:text-black overflow-x-hidden">
      {/* Immersive Ambient Gradient Glows in Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] w-[650px] h-[650px] bg-orange-500/[0.08] rounded-full blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[550px] h-[550px] bg-blue-600/[0.08] rounded-full blur-[130px]" />
        <div className="absolute top-[40%] right-[15%] w-[400px] h-[400px] bg-orange-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* Desktop Left Sidebar */}
      <Sidebar
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          setSearchQuery('');
        }}
        unreadNotifsCount={unreadNotifsCount}
        pendingMaintCount={pendingMaintCount}
        onOpenAddBus={handleOpenAddBus}
        onOpenCreateRoute={handleOpenCreateRoute}
      />

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-md flex">
          <div className="bg-[#1a0505]/95 border-r border-white/10 w-72 h-full p-5 flex flex-col justify-between shadow-2xl animate-in slide-in-from-left duration-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-gradient-to-tr from-orange-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
                    <span className="text-black font-black text-xs">Æ</span>
                  </div>
                  <h2 className="text-[17px] font-bold text-white tracking-tight">SHUTTLE<span className="text-orange-400 font-mono text-[13px] ml-1">CONTROL</span></h2>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="space-y-1">
                {[
                  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
                  { id: 'fleet', label: 'Fleet', icon: BusIcon },
                  { id: 'routes', label: 'Routes', icon: Route },
                  { id: 'bookings', label: 'Bookings', icon: Armchair },
                  { id: 'maintenance', label: 'Maintenance', icon: Wrench },
                  { id: 'notifications', label: 'Notifications', icon: Bell },
                  { id: 'support', label: 'Help Center', icon: HelpCircle },
                  { id: 'settings', label: 'Settings', icon: Settings },
                ].map((item) => {
                  const Icon = item.icon;
                  const isActive = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentTab(item.id as NavTab);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[13px] font-medium transition-all ${
                        isActive
                          ? 'bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold shadow-[0_0_12px_rgba(16,185,129,0.15)]'
                          : 'text-slate-400 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  handleOpenAddBus();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-400 text-black py-2.5 rounded-xl font-bold text-[12px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transition-all"
              >
                <Plus className="w-4 h-4 stroke-[3]" />
                <span>Add Vehicle</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area (offset by sidebar width 260px on desktop) */}
      <div className="flex-1 md:pl-[260px] flex flex-col min-h-screen relative z-10">
        {/* Header */}
        <Header
          currentTab={currentTab}
          onSelectTab={setCurrentTab}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          unreadCount={unreadNotifsCount}
          onToggleMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* Dynamic Main View */}
        <main className="flex-1 p-4 md:p-8">
          {currentTab === 'dashboard' && (
            <DashboardView
              buses={buses}
              routes={routes}
              activities={activities}
              onViewAllFleet={() => setCurrentTab('fleet')}
              onSelectBus={(bus) => handleEditBus(bus)}
              onNavigateToTab={(tab) => setCurrentTab(tab)}
            />
          )}

          {currentTab === 'fleet' && (
            <FleetView
              buses={buses}
              onOpenAddBus={handleOpenAddBus}
              onEditBus={handleEditBus}
              onDeleteBus={handleDeleteBus}
              searchQuery={searchQuery}
            />
          )}

          {currentTab === 'routes' && (
            <RoutesView
              routes={routes}
              onOpenCreateRoute={handleOpenCreateRoute}
              onEditRoute={handleEditRoute}
              onDeleteRoute={handleDeleteRoute}
              searchQuery={searchQuery}
            />
          )}

          {currentTab === 'bookings' && (
            <BookingsView
              bookings={bookings}
              routes={routes}
              buses={buses}
              searchQuery={searchQuery}
              onAddBooking={handleAddBooking}
              onCancelBooking={handleCancelBooking}
            />
          )}

          {currentTab === 'maintenance' && (
            <MaintenanceView
              tickets={maintenanceTickets}
              buses={buses}
              onUpdateTicketStatus={handleUpdateTicketStatus}
              onAddTicket={handleAddTicket}
            />
          )}

          {currentTab === 'notifications' && (
            <NotificationsView
              notifications={notifications}
              onMarkAllAsRead={handleMarkAllNotifsAsRead}
              onMarkAsRead={handleMarkNotifAsRead}
              onNavigateToTab={(tab) => setCurrentTab(tab)}
            />
          )}

          {currentTab === 'support' && (
            <SupportView />
          )}

          {currentTab === 'settings' && (
            <SettingsView />
          )}
        </main>

        {/* Immersive Telemetry Footer Bar */}
        <footer className="h-11 border-t border-white/5 px-6 md:px-8 flex items-center justify-between bg-black/40 backdrop-blur-xl z-10 text-[11px] font-mono text-slate-500">
          <div className="flex gap-6 tracking-wider">
            <span>NODES: 42 ACTIVE</span>
            <span className="hidden sm:inline">SAT-SYNC: 99.8%</span>
            <span className="hidden md:inline">FREQ: 5.8 GHz</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Encrypted Telemetry Active</span>
          </div>
        </footer>
      </div>

      {/* Bus Form Modal (Add / Edit) */}
      <BusFormModal
        isOpen={isBusModalOpen}
        busToEdit={busToEdit}
        onClose={() => {
          setIsBusModalOpen(false);
          setBusToEdit(null);
        }}
        onSave={handleSaveBus}
      />

      {/* Create / Edit Route Modal */}
      <CreateRouteModal
        isOpen={isRouteModalOpen}
        buses={buses}
        routeToEdit={routeToEdit}
        onClose={() => {
          setIsRouteModalOpen(false);
          setRouteToEdit(null);
        }}
        onSave={handleSaveRoute}
      />
    </div>
  );
}
