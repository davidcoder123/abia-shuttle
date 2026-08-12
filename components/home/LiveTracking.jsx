import React, { forwardRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const createBusPin = (busNumber, bgColor) => {
  return L.divIcon({
    className: 'custom-bus-marker',
    html: `
      <div style="background-color: ${bgColor}; color: white; padding: 4px 8px; border-radius: 8px; font-weight: bold; font-size: 11px; box-shadow: 0 4px 6px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 4px; white-space: nowrap; border: 1px solid white;">
        🚌 ${busNumber}
      </div>
    `,
    iconSize: [70, 30],
    iconAnchor: [35, 15],
  });
};

const LiveTracking = forwardRef((props, ref) => {
  const centerPosition = [5.3235, 7.3667];

  const activeBuses = [
    { id: "AB-112", lat: 5.3500, lng: 7.3200, color: "#FF5722", route: "Aba - Umuahia" },
    { id: "AB-205", lat: 5.5400, lng: 7.4900, color: "#3B82F6", route: "Umuahia North Route" },
    { id: "AB-156", lat: 5.4800, lng: 7.5200, color: "#10B981", route: "Central Expressway" },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 my-30  scroll-mt-6" id='live-tracking' >
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Live Bus Tracking</h3>
      
      <div className="w-full h-96 md:h-[480px] bg-white rounded-3xl border-4 border-[#3B82F6] shadow-lg overflow-hidden relative z-10">
        <MapContainer 
          center={centerPosition} 
          zoom={12} 
          scrollWheelZoom={false} 
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {activeBuses.map((bus, index) => (
            <Marker key={index} position={[bus.lat, bus.lng]} icon={createBusPin(bus.id, bus.color)}>
              <Popup>
                <div className="p-1 font-sans">
                  <strong className="text-gray-900 text-sm">Bus ID: {bus.id}</strong>
                  <p className="text-xs text-gray-600 mt-0.5">Route: {bus.route}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </section>
  );
});

export default LiveTracking;