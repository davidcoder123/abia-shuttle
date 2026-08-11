import {
  FaBell,
  FaCar,
  FaEllipsisV,
  FaBus
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
      icon: <FaBell className="" />
    }
  ];

  return (
    <div className=" pt-7  bg-[#fffbf5] ">

      {/* Page heading */}
      <section >
        <div>
          <button className="text-orange-400 flex justify-self-end text-lg pr-5 pb-15 lg:pr-80 md:pr-50">
            Mark all as read
          </button>
        </div>

        <div className="">
          <h1 className=" text-3xl lg:text-4xl md:text-3xl  font-bold lg:font-bold md:font-bold pl-10 md:pl-50 lg:pl-51 pb-2 ">Notifications</h1>
        </div>

      </section>

      {/* Notifications */}

      <section className=" space-y-4  ">

        {notifications.map((notification, index) => (

          <div className="bg-white mb-7  w-80 lg:w-250 md:w-150   lg:ml-50 md:ml-50  ml-10 p-6 mx-6  my-6  shadow-lg h-full flex justify-between rounded-2xl " key={index}>

            <div className="flex lg:flex-row  md:flex-row flex-col gap-7">

              {/* Icon */}

              <div className=" bg-orange-300 text-orange-500 rounded-full w-15 h-15 text-2xl flex justify-center items-center">
                {notification.icon}
              </div>

              <div className="flex justify-items-center ">
                {/* Text */}

                <div className="">
                  <h1 className=" font-bold lg:text-3xl text-2xl pb-5 lg:pb-5 md:pb-3">
                    {notification.title}
                  </h1>

                  <p className=" lg:text-xl md:text-xl sm:text-sm pb-5 lg:pb-5 md:pb-3">
                    {notification.message}
                  </p>

                  <p className="text-xl text-gray-500">
                    {notification.date}
                  </p>
                </div>
              </div>
            </div>


            {/* Three dots or more icone */}
            <div className=" font-bold text-2xl md:text-3xl lg:text-3xl">
              <FaEllipsisV />
            </div>

          </div>

        ))}

      </section>




    </div>
  );
}

export default Notification;