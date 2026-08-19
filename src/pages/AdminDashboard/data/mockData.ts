import { Bus, RouteSchedule, MaintenanceTicket, NotificationItem, RecentActivity, BookingRecord } from '../types';

export const INITIAL_BUSES: Bus[] = [
  {
    id: 'BUS-014',
    name: 'Abia Express Line',
    model: '14-Seater AC Toyota HiAce',
    plateNumber: 'AB-204-UM',
    capacity: 14,
    features: ['AC', 'WiFi', 'Charging Ports', 'Reclining Seats'],
    status: 'Active',
    driver: {
      name: 'O. Adebayo',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9weLCFMuOWvYcVUMW9bvVaOH18OrU7lf81rgIUjsMUEwz6aQGYHITwbJ0bBZ8z1JOWRQEpubvVKaBxoCOP7hABbt6q34nS728M5tAM07dKOVGhDm3ZicGjfcYrFdTs5DTRxbxRXvwB-ZGYp4D8R_oUn-pp4BtaMNPMDqGsr9aLWEaq4YWdDHMoIyrKAApel9RTRWs4G7o40ND2XyOwzFHD2gBNN04q-iZKl8qrgjU6rRREbIEstCI',
    },
    occupancy: { current: 34, max: 40 },
    liveRoute: 'VI ↔ Lekki Ph 1',
    scheduleStatus: 'ON TIME'
  },
  {
    id: 'BUS-022',
    name: 'Lagos Metro 1',
    model: 'Volvo 9900 Coach',
    plateNumber: 'LA-992-GZ',
    capacity: 45,
    features: ['AC', 'WiFi', 'Entertainment System', 'Reclining Seats', 'Luggage Compartment'],
    status: 'In Service',
    driver: {
      name: 'E. Nwachukwu',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnPY4KdJlrHZYo6I6wcAgB9QbJf3JJ2CL6-0ChGSo7MzYo9g7EpXd-vK99npIpTdD6w6Ttdhy1he2W-D7Z5x_sYQXhB7nREedUAkDSHc7oHTNL7V1WSll3dXTUlu5HSUm9LNO0ehB8Q3BxE8AGEPaQQLgZdm9ilq-OFtUkkXU5RiPpr9LVDGgLnqU0lZgL3Wa5sGDU-G2x6ScHVYaD67nUcfHB_CSawsG5wClbQnQR00CMSy_f1hCA',
    },
    occupancy: { current: 18, max: 40 },
    liveRoute: 'Ikeja ↔ Oshodi',
    scheduleStatus: 'ON TIME'
  },
  {
    id: 'BUS-008',
    name: 'Abuja Shuttle B',
    model: 'Mercedes-Benz Sprinter',
    plateNumber: 'ABJ-441-KD',
    capacity: 18,
    features: ['AC', 'Charging Ports', 'Luggage Compartment'],
    status: 'Maintenance',
    driver: {
      name: 'F. Okafor',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDB_JZvvzwqynmLaFI9gu939zUte9NCH6lAelGhIS0YF1HMTk1Gpjo6XffVSoE6EqTC_2EyY7it6rDgXSdE15223DLGWK7uqaBOIzpRhT-pXhbIXIXuXXJUY6rsptCHq5cRBj2wgdBlpEj3WfopDewqihJtugkyYNs1fJZxFtg-oGV-lPizpCaafDtng-1kFPHOPnv4JJW7mSZhpmGOgJ46rHVBY0ufw1ewRhUKL9MCMDQ8p0x2gY2t',
    },
    occupancy: { current: 38, max: 40 },
    liveRoute: 'Yaba ↔ CMS',
    scheduleStatus: 'DELAYED (10m)'
  },
  {
    id: 'BUS-031',
    name: 'Coastal Sprinter',
    model: 'Ford Transit',
    plateNumber: 'EN-819-PH',
    capacity: 24,
    features: ['AC', 'Reclining Seats', 'Charging Ports'],
    status: 'Active',
    driver: {
      name: 'M. Bello',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCG5M5BBgHFo0KLSEVR7QrwGLIIg-ZlWzJ9HkjOcvToMjOU1yrs9SInNSyfanpA8uUQsfoahLD1upV-e_oCZ8nXjoBzrebiOEi6_qqM3qrJ9eXxC1A7BKVC5qi0TW2byFlNjjnhXg5B8RhBrX7QOOdnTGwi_N_Rh08XGiyMArds3e1NHFW74-z-QJHJ0JqIA_bwrTiA58MM4J0Whc6cokjihykDyAH8QFdTQCYJvuY-hYfCA-f59izy',
    },
    occupancy: { current: 24, max: 40 },
    liveRoute: 'Surulere ↔ Marina',
    scheduleStatus: 'ON TIME'
  },
  {
    id: 'BUS-045',
    name: 'Capital Cruiser',
    model: 'Toyota HiAce',
    plateNumber: 'KT-302-LA',
    capacity: 14,
    features: ['AC', 'Luggage Compartment'],
    status: 'Active',
    driver: {
      name: 'S. Abdullahi',
      initials: 'SA'
    },
    occupancy: { current: 8, max: 40 },
    liveRoute: 'Ajah ↔ VI',
    scheduleStatus: 'BOARDING'
  },
  {
    id: 'BUS-052',
    name: 'Eko Transit 9',
    model: 'Toyota HiAce',
    plateNumber: 'LA-108-EK',
    capacity: 14,
    features: ['AC', 'Charging Ports'],
    status: 'Out of Service',
    driver: {
      name: 'T. Adeleke',
      initials: 'TA'
    },
    occupancy: { current: 0, max: 14 },
    liveRoute: 'Maintenance Dock',
    scheduleStatus: 'ON TIME'
  },
  {
    id: 'BUS-112',
    name: 'Garden City Bus',
    model: 'Ford Transit',
    plateNumber: 'PH-409-KD',
    capacity: 18,
    features: ['AC', 'WiFi'],
    status: 'Maintenance',
    driver: {
      name: 'J. Danjuma',
      initials: 'JD'
    },
    occupancy: { current: 0, max: 18 },
    liveRoute: 'Depot Repair Yard',
    scheduleStatus: 'ON TIME'
  }
];

export const INITIAL_ROUTES: RouteSchedule[] = [
  {
    id: 'RT-101',
    origin: 'Umuahia',
    destination: 'Lagos',
    departureTime: '07:30 AM',
    departureDate: '2023-10-27',
    frequency: 'Daily',
    busAssignedId: 'BUS-014',
    busAssignedName: 'Abia Express Line',
    pricePerSeat: 3500,
    totalCapacity: 50,
    seatsBooked: 42,
    status: 'Scheduled'
  },
  {
    id: 'RT-102',
    origin: 'Abuja',
    destination: 'Kano',
    departureTime: '08:15 AM',
    departureDate: '2023-10-27',
    frequency: 'Daily',
    busAssignedId: 'BUS-022',
    busAssignedName: 'Capital Motors (NG-88)',
    pricePerSeat: 5200,
    totalCapacity: 45,
    seatsBooked: 39,
    status: 'Boarding'
  },
  {
    id: 'RT-103',
    origin: 'Port Harcourt',
    destination: 'Enugu',
    departureTime: '09:00 AM',
    departureDate: '2023-10-27',
    frequency: 'Daily',
    busAssignedId: 'BUS-031',
    busAssignedName: 'Garden City Transit',
    pricePerSeat: 2800,
    totalCapacity: 24,
    seatsBooked: 24,
    status: 'Completed'
  },
  {
    id: 'RT-104',
    origin: 'Lagos',
    destination: 'Ibadan',
    departureTime: '10:30 AM',
    departureDate: '2023-10-27',
    frequency: 'Daily',
    busAssignedId: 'BUS-008',
    busAssignedName: 'Eko Lines Fleet 4',
    pricePerSeat: 1500,
    totalCapacity: 40,
    seatsBooked: 38,
    status: 'Delayed'
  },
  {
    id: 'RT-105',
    origin: 'Lekki Ph 1',
    destination: 'Victoria Island',
    departureTime: '11:45 AM',
    departureDate: '2023-10-27',
    frequency: 'Daily',
    busAssignedId: 'BUS-014',
    busAssignedName: 'Abia Express Line',
    pricePerSeat: 1200,
    totalCapacity: 14,
    seatsBooked: 12,
    status: 'En Route'
  }
];

export const INITIAL_MAINTENANCE_TICKETS: MaintenanceTicket[] = [
  {
    id: 'MAINT-001',
    busId: 'BUS-052',
    busModel: 'Toyota HiAce',
    priority: 'High',
    reportedIssue: 'Brake pad wear - heavy squealing',
    dateReported: 'Oct 24, 2023',
    status: 'Awaiting Inspection',
    notes: 'Driver reported front disc pad vibrations during high speed slowdowns.'
  },
  {
    id: 'MAINT-002',
    busId: 'BUS-008',
    busModel: 'Mercedes-Benz Sprinter',
    priority: 'Medium',
    reportedIssue: 'AC compressor failure',
    dateReported: 'Oct 22, 2023',
    status: 'Parts on Order',
    notes: 'Replacement OEM compressor unit expected from distributor within 48 hours.'
  },
  {
    id: 'MAINT-003',
    busId: 'BUS-112',
    busModel: 'Ford Transit',
    priority: 'Low',
    reportedIssue: 'Oil leak near transmission',
    dateReported: 'Oct 20, 2023',
    status: 'Parts on Order',
    notes: 'Gasket seal replacement scheduled for routine bay maintenance.'
  }
];

export const INITIAL_ACTIVITIES: RecentActivity[] = [
  {
    id: 'act-1',
    busId: 'BUS-014',
    message: 'arrived at Lekki Ph 1 terminal.',
    timestamp: '2 mins ago',
    type: 'arrival'
  },
  {
    id: 'act-2',
    route: 'Yaba ↔ CMS',
    message: 'New booking surge detected on Yaba ↔ CMS route.',
    timestamp: '15 mins ago',
    type: 'surge'
  },
  {
    id: 'act-3',
    busId: 'BUS-008',
    message: 'reported minor delay due to traffic.',
    timestamp: '28 mins ago',
    type: 'delay'
  },
  {
    id: 'act-4',
    busId: 'BUS-052',
    message: 'Maintenance ticket closed for BUS-052.',
    timestamp: '1 hour ago',
    type: 'maintenance'
  },
  {
    id: 'act-5',
    message: 'Driver shift change completed successfully.',
    timestamp: '2 hours ago',
    type: 'shift'
  }
];

export const INITIAL_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    type: 'booking',
    category: 'booking',
    title: 'New Booking: Abia Express Line',
    description: 'Seat 4 and 5 booked for the 07:30 AM departure to Lagos. Total passengers: 2.',
    timestamp: '2 mins ago',
    read: false,
    priority: 'normal'
  },
  {
    id: 'notif-2',
    type: 'maintenance',
    category: 'maintenance',
    title: 'Fleet Maintenance Alert',
    description: 'Vehicle BUS-042 (Toyota Hiace) requires scheduled oil change. Mileage limit exceeded by 200km.',
    timestamp: '45 mins ago',
    read: false,
    priority: 'high'
  },
  {
    id: 'notif-3',
    type: 'system',
    category: 'system',
    title: 'System Update Complete',
    description: 'Route optimization algorithms have been updated. Expect faster loading times on the Routes dashboard.',
    timestamp: '3 hours ago',
    read: true,
    priority: 'normal'
  },
  {
    id: 'notif-4',
    type: 'delay',
    category: 'delay',
    title: 'Departure Delayed',
    description: 'The 14:00 Express to Abuja has been delayed by 30 minutes due to traffic conditions at the terminal.',
    timestamp: 'Yesterday, 14:20',
    read: true,
    priority: 'normal'
  }
];

export const INITIAL_BOOKINGS: BookingRecord[] = [
  {
    id: 'BKG-8891',
    passengerName: 'Chidinma Eze',
    passengerEmail: 'c.eze@gmail.com',
    passengerPhone: '+234 803 123 4567',
    routeId: 'RT-101',
    routeName: 'Umuahia → Lagos',
    departureDate: '2023-10-27',
    departureTime: '07:30 AM',
    seats: ['Seat 4', 'Seat 5'],
    totalAmount: 7000,
    busId: 'BUS-014',
    status: 'Confirmed',
    bookingTime: 'Today, 06:15 AM'
  },
  {
    id: 'BKG-8892',
    passengerName: 'Babatunde Johnson',
    passengerEmail: 'b.johnson@yahoo.com',
    passengerPhone: '+234 802 987 6543',
    routeId: 'RT-102',
    routeName: 'Abuja → Kano',
    departureDate: '2023-10-27',
    departureTime: '08:15 AM',
    seats: ['Seat 12'],
    totalAmount: 5200,
    busId: 'BUS-022',
    status: 'Confirmed',
    bookingTime: 'Today, 06:45 AM'
  },
  {
    id: 'BKG-8893',
    passengerName: 'Emeka Nwosu',
    passengerEmail: 'emeka.nw@outlook.com',
    passengerPhone: '+234 814 555 0192',
    routeId: 'RT-104',
    routeName: 'Lagos → Ibadan',
    departureDate: '2023-10-27',
    departureTime: '10:30 AM',
    seats: ['Seat 1', 'Seat 2'],
    totalAmount: 3000,
    busId: 'BUS-008',
    status: 'Boarded',
    bookingTime: 'Today, 07:30 AM'
  }
];

export const USER_AVATAR = "https://lh3.googleusercontent.com/aida-public/AB6AXuCsh9oCcvmCL3yvRz4ufn3tjw6jNDMenobW_sAhpQ-UwQ2XVLIv7A3DL4NtPP-v86QqkRKxK54AsupoedlgnjKDRcimmJ7KCndrWKL5fG2yzXx6ErK3kP99Si1yCWYdjF5mvuUIIxzqSru3mb2DyRiBASMYi42crZCHH-sFe-SX5uMuGV2hSlZN7FKMW4j4i8TlQCWD7wx3coDSbNrjBMe1sKU0Aji4512QnltXJ_qnpBk52W0BQJ6z";
export const LOGO_ICON = "https://lh3.googleusercontent.com/aida-public/AB6AXuCX9G8Id4hLhIhX81nR4gG0qp_T069kxrXiKXLO9XqMfCKxJnkDfULsIeN1c1zhiZHN3g85uZD-6ZVlQT3Ebwdx8gsGSva2UbP2Vbt2Lhxwmb0lsN9WVvbHvu_aDYanGl-6Qyw1Qe68xCfzXBredr2CuBnyn400H2RXpIgxYYpjSiXEg3ll9cidjhBsYz8DHLvVny0B26qafiy90dWRZU6TQwrGd23AnORBtzHV9oPaUHrRb74ssBjl";
