import React from "react";
import mary1 from "../assets/Mary1.png";
import Bus1 from "../assets/Bus1.png";
import Daniel from "../assets/Daniel.png";
import Kings from "../assets/Kings.png";

const Testimonial = () => {
  return (
    <>
      <section className="px-4 md:px-8 py-6">
        <div className="border-2 border-blue-500 bg-white px-6 md:px-10 py-3">
          <div className=" bg-white mb-4 text-center">
            <p className="text-orange-500 text-sm mb-1">What Our Riders Say </p>
            <h2 className="text-xl md:text-2xl font-bold">
              Loved by Thousands of Commuters
            </h2>
          </div>

          {/* card 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {" "}
            <div className="bg-white p-4 rounded-xl shadow-md grid">
              <div className="text-orange-500 text-xl">★★★★★</div>
              <p className="mt-3 text-sm">
                "ABIA Green Shuttle has completely changed how I commute.
                Tracking buses in real time saves me so much time"
              </p>
              <div className="mt-4 flex items-center">
                <div>
                  <img
                    src={mary1}
                    alt="Mary1"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="mt-2 font-bold text-sm">Mary A.</h3>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 rounded-xl shadow-md grid">
              <div className="text-orange-500 text-xl">★★★★★</div>
              <p className="mt-3 text-sm font-sans">
                "Cashless payment is simple and secure. The buses are always
                clean and comfortable
              </p>
              <div className="mt-4 flex items-center">
                <div>
                  <img
                    src={Daniel}
                    alt="Daniel"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="mt-4 font-bold">Daniel U.</h3>
                  <p className="text-xs text-gray-500">Civil Servant</p>
                </div>
              </div>

              {/* Card 3 */}
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md grid">
              <div className="text-orange-500 text-xl">★★★★★</div>

              <p className="mt-3 text-sm font-sans">
                "The app makes transportation stress-free. Kudos to the entire
                ABIA Green Shuttle team!"
              </p>

              <div className="mt-4 flex items-center">
                <div>
                  <img
                    src={Kings}
                    alt="Kings"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mt-4 font-bold">Kingsley O.</h3>
                  <p className="text-xs text-gray-500">Farmer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="w-full bg-white rounded-2xl shadow-md p-6 mt-10">
          <div className="bg-orange-500 rounded-2xl min-h-[300px] md:h-[160px] flex flex-col md:flex-row items-center justify-between overflow-hidden px-5 md:px-10 py-5 md:py-0">
            {/* Bus card */}
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to travel smarter?
              </h2>

              <p className="text-center ">
                Join thousands of smart commuters using ABIA GREEN SHUTTLE.
              </p>
            </div>

            {/* Bus Image */}

            <div className="h-full flex items-center">
              <img
                src={Bus1}
                alt="Abia Green Shuttle bus"
                className="w-[300px] md:w-[390px] h-[120px] object-contain"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Testimonial;
