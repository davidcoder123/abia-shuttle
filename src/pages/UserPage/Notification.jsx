import {
  FaBell,
  FaCar,
  FaEllipsisV
} from "react-icons/fa";

function Notification() {

  // All our notifications
  const notifications = [
    {
      title: "Cart Updated",
      message: "Your cart has been updated with ₦2,500,000",
      date: "May 25 2025 - 9:45 AM",
      icon: <FaBell />
    },

    {
      title: "Trip Reminder",
      message: "Your trip to Umuahia starts in 30 mins",
      date: "May 25 2025 - 9:45 AM",
      icon: <FaBell />
    },

    {
      title: "Bus Delayed",
      message: "Bus AB12345 is delayed by 15 mins",
      date: "May 25 2025 - 9:45 AM",
      icon: <FaCar />
    },

    {
      title: "Late Bus Alert",
      message: "Your bus trip has been delayed by 20 mins",
      date: "May 25 2025 - 9:45 AM",
      icon: <FaBell />
    },

    {
      title: "New Deals",
      message: "Your cart has been updated with ₦2,500,000",
      date: "May 25 2025 - 9:45 AM",
      icon: <FaBell />
    }
  ];

  return (
    <div className="page">

      {/* Page heading */}
      <div className="heading">

        <h1>Notifications</h1>

        <button className="mark-read">
          Mark all as read
        </button>

      </div>


      {/* Notifications */}

      <div className="notification-container">

        {notifications.map((notification, index) => (

          <div className="notification" key={index}>

            {/* Icon */}
            <div className="notification-icon">
              {notification.icon}
            </div>


            {/* Text */}
            <div className="notification-text">

              <h3>
                {notification.title}
              </h3>

              <p>
                {notification.message}
              </p>

              <h6>
                {notification.date}
              </h6>

            </div>


            {/* Three dots */}
            <div className="more-icon">
              <FaEllipsisV />
            </div>

          </div>

        ))}

      </div>


      {/* Bottom advertisement */}

      <div className="travel-box">

        <div>
          <h2>Ready to travel smarter?</h2>

          <p>
            Join thousands of smart travellers using our GREEN SHUTTLE.
          </p>

          <button>
            Google Play
          </button>

          <button>
            App Store
          </button>
        </div>

        <FaBus className="Group 87.png" />

      </div>

    </div>
  );
}

export default Notification;