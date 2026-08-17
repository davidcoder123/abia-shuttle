import React from "react";
import mary1 from "../assets/Mary2.png";
import Kings from "../assets/Kingsley2.png";
import Daniel from "../assets/Daniel2.png";
import Bus1 from "../assets/Bus1.png";

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
        </div>

        

        {/* Testimonial Carousel */}
        <div className="overflow-hidden">
          <div className="testimonial-track flex gap-5 w-max">
            {/* First set */}
            <div className="bg-white p-4 rounded-xl shadow-md w-[280px] md:w-[320px] flex-shrink-0">
              <div className="text-orange-500 text-xl">★★★★★</div>

              <p className="mt-3 text-sm">
                "ABIA Green Shuttle has completely changed how I commute.
                Tracking buses in real time saves me so much time"
              </p>

              <div className="mt-4 flex items-center">
                <img
                  src={mary1}
                  alt="Mary"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <h3 className="font-bold text-sm">Mary A.</h3>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md w-[280px] md:w-[320px] flex-shrink-0">
              <div className="text-orange-500 text-xl">★★★★★</div>

              <p className="mt-3 text-sm">
                "Cashless payment is simple and secure. The buses are always
                clean and comfortable"
              </p>

              <div className="mt-4 flex items-center">
                <img
                  src={Daniel}
                  alt="Daniel"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <h3 className="font-bold text-sm">Daniel U.</h3>
                  <p className="text-xs text-gray-500">Civil Servant</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md w-[280px] md:w-[320px] flex-shrink-0">
              <div className="text-orange-500 text-xl">★★★★★</div>

              <p className="mt-3 text-sm">
                "The app makes transportation stress-free. Kudos to the entire
                ABIA Green Shuttle team!"
              </p>

              <div className="mt-4 flex items-center">
                <img
                  src={Kings}
                  alt="Kingsley"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <h3 className="font-bold text-sm">Kingsley O.</h3>
                  <p className="text-xs text-gray-500">Farmer</p>
                </div>
              </div>
            </div>

            {/* Duplicate set for continuous scrolling */}
            <div className="bg-white p-4 rounded-xl shadow-md w-[280px] md:w-[320px] flex-shrink-0">
              <div className="text-orange-500 text-xl">★★★★★</div>
              <p className="mt-3 text-sm">
                "ABIA Green Shuttle has completely changed how I commute.
                Tracking buses in real time saves me so much time"
              </p>

              <div className="mt-4 flex items-center">
                <img
                  src={mary1}
                  alt="Mary"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <h3 className="font-bold text-sm">Mary A.</h3>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md w-[280px] md:w-[320px] flex-shrink-0">
              <div className="text-orange-500 text-xl">★★★★★</div>
              <p className="mt-3 text-sm">
                "Cashless payment is simple and secure. The buses are always
                clean and comfortable"
              </p>

              <div className="mt-4 flex items-center">
                <img
                  src={Daniel}
                  alt="Daniel"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <h3 className="font-bold text-sm">Daniel U.</h3>
                  <p className="text-xs text-gray-500">Civil Servant</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md w-[280px] md:w-[320px] flex-shrink-0">
              <div className="text-orange-500 text-xl">★★★★★</div>
              <p className="mt-3 text-sm">
                "The app makes transportation stress-free. Kudos to the entire
                ABIA Green Shuttle team!"
              </p>

              <div className="mt-4 flex items-center">
                <img
                  src={Kings}
                  alt="Kingsley"
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div className="ml-3">
                  <h3 className="font-bold text-sm">Kingsley O.</h3>
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
