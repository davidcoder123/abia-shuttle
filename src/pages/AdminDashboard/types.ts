export type NavTab = 
  | 'dashboard'
  | 'fleet'
  | 'routes'
  | 'bookings'
  | 'maintenance'
  | 'notifications'
  | 'support'
  | 'settings';

export type BusStatus = 'Active' | 'In Service' | 'Maintenance' | 'Out of Service';

export interface Bus {
  id: string; // e.g. "BUS-014"
  name: string; // e.g. "Abia Express Line"
  model: string; // e.g. "Toyota HiAce"
  plateNumber: string; // e.g. "AB-204-UM"
  capacity: number; // e.g. 14
  features: string[]; // e.g. ["AC", "WiFi", "Charging Ports", "Reclining Seats", "Luggage Compartment", "Entertainment System"]
  status: BusStatus;
  driver?: {
    name: string;
    avatar?: string;
    initials?: string;
  };
  occupancy?: {
    current: number;
    max: number;
  };
  liveRoute?: string;
  scheduleStatus?: 'ON TIME' | 'DELAYED (10m)' | 'BOARDING' | 'EN ROUTE';
}

export type RouteStatus = 'Scheduled' | 'Boarding' | 'En Route' | 'Completed' | 'Delayed';

export interface RouteSchedule {
  id: string;
  origin: string;
  destination: string;
  departureTime: string;
  departureDate: string;
  frequency: 'Daily' | 'Weekdays Only' | 'Weekends Only' | 'Custom';
  busAssignedId: string;
  busAssignedName: string;
  pricePerSeat: number;
  totalCapacity: number;
  seatsBooked: number;
  stops: number;
  km: number;
  duration: string;
  status: RouteStatus;
}

export type MaintenancePriority = 'High' | 'Medium' | 'Low';
export type MaintenanceStatus = 'Awaiting Inspection' | 'Parts on Order' | 'In Progress' | 'Resolved';

export interface MaintenanceTicket {
  id: string;
  busId: string;
  busModel: string;
  priority: MaintenancePriority;
  reportedIssue: string;
  dateReported: string;
  status: MaintenanceStatus;
  notes?: string;
}

export interface NotificationItem {
  id: string;
  type: 'booking' | 'maintenance' | 'system' | 'delay';
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
  priority: 'high' | 'normal';
  category: 'booking' | 'maintenance' | 'system' | 'delay';
}

export interface BookingRecord {
  id: string;
  passengerName: string;
  passengerEmail: string;
  passengerPhone: string;
  routeId: string;
  routeName: string;
  departureDate: string;
  departureTime: string;
  seats: string[];
  totalAmount: number;
  busId: string;
  status: 'Confirmed' | 'Boarded' | 'Cancelled';
  bookingTime: string;
}

export interface RecentActivity {
  id: string;
  busId?: string;
  route?: string;
  message: string;
  timestamp: string;
  type: 'arrival' | 'surge' | 'delay' | 'maintenance' | 'shift';
}
