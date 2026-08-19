import { useState, useMemo, useEffect } from "react";
import { Search, MapPin, Navigation, Clock, ChevronDown } from "lucide-react";
import { supabase } from "../../utils/supabase";

function RouteCard({ route, onViewRoutes }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-5 bg-white flex flex-col">
      <h3 className="text-lg font-bold text-gray-900">
        {route.from} <span className="text-gray-400 font-normal">-</span>{" "}
        <span>{route.to}</span>
      </h3>
      <p className="text-orange-500 font-semibold mt-1">${route.price.toFixed(2)}</p>

      <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          <MapPin size={14} className="text-orange-500" />
          {route.stops} Stops
        </span>
        <span className="flex items-center gap-1">
          <Navigation size={14} className="text-orange-500" />
          {route.km} Km
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} className="text-orange-500" />
          {route.duration}
        </span>
      </div>

      <p className="mt-4 text-sm text-gray-700">
        <span className="font-semibold">Next Bus:</span>{" "}
        <span className="font-semibold">{route.nextBus}</span>
      </p>

      <button
        onClick={() => onViewRoutes(route)}
        className="mt-5 w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white font-semibold py-3 rounded-xl"
      >
        View Routes
      </button>
    </div>
  );
}

export default function BusRoute() {
  const [routesData, setRoutesData] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All Routes");
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    async function fetchRoutes() {
      const { data, error } = await supabase.from('routes').select('*').order('created_at', { ascending: false });
      if (data && !error) {
        const formatted = data.map(r => ({
          id: r.id,
          from: r.origin,
          to: r.destination,
          price: r.price_per_seat,
          stops: r.stops || 0,
          km: r.km || 0,
          duration: r.duration || "TBD",
          nextBus: r.departure_time
        }));
        setRoutesData(formatted);
      }
    }
    fetchRoutes();
  }, []);

  const destinations = ["All Routes", ...new Set(routesData.map((r) => r.to))];

  const filteredRoutes = useMemo(() => {
    return routesData.filter((r) => {
      const matchesFilter = filter === "All Routes" || r.to === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        !q ||
        r.from.toLowerCase().includes(q) ||
        r.to.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  const handleViewRoutes = (route) => {
    console.log("View routes for", route);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">Bus Routes</h1>
        <p className="text-gray-500 mt-1">Choose a route and book your trip with ease</p>

        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <div className="flex-1 flex items-center gap-2 border border-gray-200 bg-white rounded-xl px-4 py-3 shadow-sm">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search route or destination..."
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="relative">
            <button
              onClick={() => setFilterOpen((o) => !o)}
              className="w-full sm:w-48 flex items-center justify-between gap-2 border border-gray-200 bg-white rounded-xl px-4 py-3 text-gray-700 shadow-sm"
            >
              {filter}
              <ChevronDown size={16} className="text-gray-400" />
            </button>
            {filterOpen && (
              <div className="absolute right-0 mt-2 w-full sm:w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                {destinations.map((d) => (
                  <button
                    key={d}
                    onClick={() => {
                      setFilter(d);
                      setFilterOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-orange-50 ${
                      filter === d ? "text-orange-500 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
          {filteredRoutes.map((route) => (
            <RouteCard key={route.id} route={route} onViewRoutes={handleViewRoutes} />
          ))}
        </div>

        {filteredRoutes.length === 0 && (
          <p className="text-center text-gray-400 mt-16">No routes match your search.</p>
        )}
      </div>
    </div>
  );
}
