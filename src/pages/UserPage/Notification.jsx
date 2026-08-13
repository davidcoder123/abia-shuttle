import { useState } from "react";
import {
  FaBell,
  FaCar,
  FaEllipsisV,
  FaTrash
} from "react-icons/fa";

// Moving initial state outside component or into useState
const initialNotifications = [
  {
    id: 1,
    title: "Cart Updated",
    message: "Your cart has been updated with ₦2,500,000",
    date: "May 25 2025 - 9:45 AM",
    icon: <FaBell />,
  },
  {
    id: 2,
    title: "Trip Reminder",
    message: "Your trip to Umuahia starts in 30 mins",
    date: "May 25 2025 - 9:45 AM",
    icon: <FaBell />,
  },
  {
    id: 3,
    title: "Bus Delayed",
    message: "Bus AB12345 is delayed by 15 mins",
    date: "May 25 2025 - 9:45 AM",
    icon: <FaCar />,
  },
  {
    id: 4,
    title: "Late Bus Alert",
    message: "Your bus trip has been delayed by 20 mins",
    date: "May 25 2025 - 9:45 AM",
    icon: <FaBell />,
  },
  {
    id: 5,
    title: "New Deals",
    message: "Your cart has been updated with ₦2,500,000",
    date: "May 25 2025 - 9:45 AM",
    icon: <FaBell />
  }
];

function Notification() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Toggle the popover for the clicked notification
  const toggleDropdown = (id) => {
    setActiveDropdown((prevId) => (prevId === id ? null : id));
  };

  // Delete the specific notification by ID
  const handleDelete = (id) => {
    setNotifications((prevList) => prevList.filter((item) => item.id !== id));
    setActiveDropdown(null);
  };

  return (
    <div className="pt-7 bg-[#fffbf5] min-h-screen">

      {/* Page heading */}
      <section>
        <div>
          <button className="text-orange-400 flex justify-self-end text-lg pr-5 pb-15 lg:pr-80 md:pr-50 cursor-pointer">
            Mark all as read
          </button>
        </div>

        <div>
          <h1 className="text-3xl lg:text-4xl md:text-3xl font-bold pl-10 md:pl-50 lg:pl-51 pb-2">
            Notifications
          </h1>
        </div>
      </section>

      {/* Notifications */}
      <section className="space-y-4">
        {notifications.map((notification) => (
          <div
            className="bg-white mb-7 w-80 lg:w-250 md:w-150 lg:ml-50 md:ml-50 ml-10 p-6 mx-6 my-6 shadow-lg h-full flex justify-between rounded-2xl relative"
            key={notification.id}
          >
            <div className="flex lg:flex-row md:flex-row flex-col gap-7">
              {/* Icon */}
              <div className="bg-orange-300 text-orange-500 rounded-full w-15 h-15 text-2xl flex justify-center items-center shrink-0">
                {notification.icon}
              </div>

              <div className="flex justify-items-center">
                {/* Text */}
                <div>
                  <h1 className="font-bold lg:text-3xl text-2xl pb-5 lg:pb-5 md:pb-3">
                    {notification.title}
                  </h1>

                  <p className="lg:text-xl md:text-xl sm:text-sm pb-5 lg:pb-5 md:pb-3">
                    {notification.message}
                  </p>

                  <p className="text-xl text-gray-500">
                    {notification.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Three dots menu container */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown(notification.id)}
                className="font-bold text-2xl md:text-3xl lg:text-3xl text-gray-600 hover:text-black p-2 cursor-pointer"
                aria-label="Options"
              >
                <FaEllipsisV />
              </button>

              {/* Delete Popup */}
              {activeDropdown === notification.id && (
                <div className="absolute right-0 top-10 bg-white border border-gray-100 shadow-xl rounded-xl p-2 z-20 w-36">
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="flex items-center gap-2 w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-lg font-medium cursor-pointer transition-colors"
                  >
                    <FaTrash className="text-red-500" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <p className="text-center text-gray-400 text-xl py-12">
            No notifications left.
          </p>
        )}
      </section>

    </div>
  );
}

export default Notification;