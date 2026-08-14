import { useState, useEffect, useRef } from "react";
import {
  FaBell,
  FaCar,
  FaEllipsisV,
  FaTrash
} from "react-icons/fa";

// Initial state defined outside component
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

  // Ref to track active dropdown wrapper element
  const dropdownRef = useRef(null);

  // Toggle the popover for the clicked notification
  const toggleDropdown = (id) => {
    setActiveDropdown((prevId) => (prevId === id ? null : id));
  };

  // Delete the specific notification by ID
  const handleDelete = (id) => {
    setNotifications((prevList) => prevList.filter((item) => item.id !== id));
    setActiveDropdown(null);
  };

  // Handle clicking outside active dropdown menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    }

    // Bind event listeners when dropdown is open
    if (activeDropdown !== null) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div className="pt-7 bg-[#fffbf5] min-h-screen">

      {/* Page heading */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex justify-end mb-4">
          <button 
            onClick={() => setNotifications([])}
            className="text-orange-500 hover:text-orange-600 text-base sm:text-lg font-medium cursor-pointer transition-colors"
          >
            Delete All
          </button>
        </div>

        <div className="mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Notifications
          </h1>
        </div>
      </section>

      {/* Notifications List */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-4 pb-12">
        {notifications.map((notification) => (
          <div
            className="bg-white p-5 sm:p-6 shadow-md hover:shadow-lg transition-shadow rounded-2xl flex justify-between items-start gap-4 relative"
            key={notification.id}
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              {/* Icon */}
              <div className="bg-orange-100 text-[#FF6200] rounded-2xl w-12 h-12 sm:w-14 sm:h-14 text-xl sm:text-2xl flex justify-center items-center shrink-0">
                {notification.icon}
              </div>

              {/* Notification Details */}
              <div className="space-y-1">
                <h2 className="font-bold text-lg sm:text-xl text-slate-900">
                  {notification.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-700">
                  {notification.message}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 pt-1">
                  {notification.date}
                </p>
              </div>
            </div>

            {/* Three dots menu container */}
            <div 
              className="relative"
              ref={activeDropdown === notification.id ? dropdownRef : null}
            >
              <button
                onClick={() => toggleDropdown(notification.id)}
                className="text-slate-400 hover:text-slate-700 p-2 rounded-lg cursor-pointer transition-colors"
                aria-label="Options"
              >
                <FaEllipsisV className="text-lg sm:text-xl" />
              </button>

              {/* Delete Popover */}
              {activeDropdown === notification.id && (
                <div className="absolute right-0 top-10 bg-white border border-slate-100 shadow-xl rounded-xl p-1.5 z-20 w-36 animate-in fade-in zoom-in-95 duration-100">
                  <button
                    onClick={() => handleDelete(notification.id)}
                    className="flex items-center gap-2.5 w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-sm font-semibold cursor-pointer transition-colors"
                  >
                    <FaTrash className="text-red-500 text-xs" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {notifications.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-xs">
            <p className="text-slate-400 text-lg font-medium">
              No notifications left.
            </p>
          </div>
        )}
      </section>

    </div>
  );
}

export default Notification;




// import { useState } from "react";
// import {
//   FaBell,
//   FaCar,
//   FaEllipsisV,
//   FaTrash
// } from "react-icons/fa";

// // Moving initial state outside component or into useState
// const initialNotifications = [
//   {
//     id: 1,
//     title: "Cart Updated",
//     message: "Your cart has been updated with ₦2,500,000",
//     date: "May 25 2025 - 9:45 AM",
//     icon: <FaBell />,
//   },
//   {
//     id: 2,
//     title: "Trip Reminder",
//     message: "Your trip to Umuahia starts in 30 mins",
//     date: "May 25 2025 - 9:45 AM",
//     icon: <FaBell />,
//   },
//   {
//     id: 3,
//     title: "Bus Delayed",
//     message: "Bus AB12345 is delayed by 15 mins",
//     date: "May 25 2025 - 9:45 AM",
//     icon: <FaCar />,
//   },
//   {
//     id: 4,
//     title: "Late Bus Alert",
//     message: "Your bus trip has been delayed by 20 mins",
//     date: "May 25 2025 - 9:45 AM",
//     icon: <FaBell />,
//   },
//   {
//     id: 5,
//     title: "New Deals",
//     message: "Your cart has been updated with ₦2,500,000",
//     date: "May 25 2025 - 9:45 AM",
//     icon: <FaBell />
//   }
// ];

// function Notification() {
//   const [notifications, setNotifications] = useState(initialNotifications);
//   const [activeDropdown, setActiveDropdown] = useState(null);

//   // Toggle the popover for the clicked notification
//   const toggleDropdown = (id) => {
//     setActiveDropdown((prevId) => (prevId === id ? null : id));
//   };

//   // Delete the specific notification by ID
//   const handleDelete = (id) => {
//     setNotifications((prevList) => prevList.filter((item) => item.id !== id));
//     setActiveDropdown(null);
//   };

//   return (
//     <div className="pt-7 bg-[#fffbf5] min-h-screen">

//       {/* Page heading */}
//       <section>
//         <div>
//           <button className="text-orange-400 flex justify-self-end text-lg pr-5 pb-15 lg:pr-80 md:pr-50 cursor-pointer">
//             Mark all as read
//           </button>
//         </div>

//         <div>
//           <h1 className="text-3xl lg:text-4xl md:text-3xl font-bold pl-10 md:pl-50 lg:pl-51 pb-2">
//             Notifications
//           </h1>
//         </div>
//       </section>

//       {/* Notifications */}
//       <section className="space-y-4">
//         {notifications.map((notification) => (
//           <div
//             className="bg-white mb-7 w-80 lg:w-250 md:w-150 lg:ml-50 md:ml-50 ml-10 p-6 mx-6 my-6 shadow-lg h-full flex justify-between rounded-2xl relative"
//             key={notification.id}
//           >
//             <div className="flex lg:flex-row md:flex-row flex-col gap-7">
//               {/* Icon */}
//               <div className="bg-orange-300 text-orange-500 rounded-full w-15 h-15 text-2xl flex justify-center items-center shrink-0">
//                 {notification.icon}
//               </div>

//               <div className="flex justify-items-center">
//                 {/* Text */}
//                 <div>
//                   <h1 className="font-bold text-2xl pb-5 lg:pb-5 md:pb-3">
//                     {notification.title}
//                   </h1>

//                   <p className="text-base pb-5 lg:pb-5 md:pb-3">
//                     {notification.message}
//                   </p>

//                   <p className="text-xl text-gray-500">{notification.date}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Three dots menu container */}
//             <div className="relative">
//               <button
//                 onClick={() => toggleDropdown(notification.id)}
//                 className="font-bold text-2xl md:text-3xl lg:text-3xl text-gray-600 hover:text-black p-2 cursor-pointer"
//                 aria-label="Options"
//               >
//                 <FaEllipsisV />
//               </button>

//               {/* Delete Popup */}
//               {activeDropdown === notification.id && (
//                 <div className="absolute right-0 top-10 bg-white border border-gray-100 shadow-xl rounded-xl p-2 z-20 w-36">
//                   <button
//                     onClick={() => handleDelete(notification.id)}
//                     className="flex items-center gap-2 w-full text-left px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-lg font-medium cursor-pointer transition-colors"
//                   >
//                     <FaTrash className="text-red-500" />
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}

//         {notifications.length === 0 && (
//           <p className="text-center text-gray-400 text-xl py-12">
//             No notifications left.
//           </p>
//         )}
//       </section>

//     </div>
//   );
// }

// export default Notification;