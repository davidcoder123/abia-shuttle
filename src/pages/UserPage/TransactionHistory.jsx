import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";

function TransactionHistory() {
  return (
      <section className=" ml-40 my-20 flex flex-col  items-start ">
        <div>
          <h1 className="text-3xl font-bold">Transaction History</h1>
          <p>View all your transactions</p>
        </div>
        
        <div className="flex mt-5 gap-6 items-center">
          <p className="font-bold">Filter</p>
          <div className="flex relative">
            <select
              name=""
              id=""
              className="text-sm shadow-sm shadow-gray-400 pl-2 pr-10 py-2 text-gray-500 rounded-[7px] appearance-none"
            >
              <option value="">This Month </option>
              <option value="">Last Month</option>
            </select>
            <MdKeyboardArrowDown className="absolute right-2 top-2.5 text-gray-500" />
          </div>
          
          <div className="flex relative items-center">
            <input
              type="text"
              placeholder="Search transaction..."
              className="shadow-sm shadow-gray-400  text-sm px-7 py-2 rounded-[7px] w-[20vw]"
            />
            <CiSearch className="absolute left-2 top-2.5 text-[19px]" />
          </div>
          <div className="flex relative text-center">
            <button className="text-[12px] shadow-sm shadow-gray-400 px-7 py-2 pl-10 text-white bg-[#ff7c2a] rounded-[5px]">
              {" "}
              Download Statement
            </button>
            <RiDownload2Fill className="absolute left-6 top-3  text-white text-[12px]" />
          </div>
        </div>

        <section className="mt-5 overflow-hidden w-[50vw] rounded-2xl border border-gray-700 ">
          <table className="w-[50vw] border-collapse">
            <thead className="text-left">
              <tr className="border-b-2 border-gray-600 text-[15px] font-bold">
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2 ">May 31, 2026</td>
                <td className="px-4 py-2 ">Card funding</td>
                <td className="px-4 py-2  text-green-400 text-[14px] font-sans font-medium">
                  + $2,000.00
                </td>
                <td className="px-4 py-2 ">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2 ">May 31, 2026</td>
                <td className="px-4 py-2 ">Card funding</td>
                <td className="px-4 py-2  text-green-400 text-[14px] font-sans font-medium">
                  + $2,000.00
                </td>
                <td className="px-4 py-2 ">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2 ">May 31, 2026</td>
                <td className="px-4 py-2 ">Card funding</td>
                <td className="px-4 py-2  text-green-400 text-[14px] font-sans font-medium">
                  + $2,000.00
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2 ">May 31, 2026</td>
                <td className="px-4 py-2 ">Trip to Absu</td>
                <td className="px-4 py-2  text-red-400 text-[14px] font-sans font-medium">
                  - 500.00
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2">May 31, 2026</td>
                <td className="px-4 py-2">Trip to Ariria</td>
                <td className="px-4 py-2 text-red-400 text-[14px] font-sans font-medium">
                  - 500.00
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2">May 31, 2026</td>
                <td className="px-4 py-2">Card funding</td>
                <td className="px-4 py-2 text-green-400 text-[14px] font-sans font-medium">
                  + $2,000.00
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="border-b-2 border-gray-600 text-[14px] font-medium">
                <td className="px-4 py-2 ">May 31, 2026</td>
                <td className="px-4 py-2 ">Card funding</td>
                <td className="px-4 py-2 text-green-400 text-[14px] font-sans font-medium">
                  + $2,000.00
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className=" text-[14px] font-medium border-b-2 border-gray-600">
                <td className="px-4 py-2">May 31, 2026</td>
                <td className="px-4 py-2">Trip to Umuahia</td>
                <td className="px-4 py-2 text-red-400 text-[14px] font-sans font-medium">
                  - 500.00
                </td>
                <td className="px-4 py-2 ">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
              <tr className="text-[14px] font-medium">
                <td className="px-4 py-2 ">May 31, 2026</td>
                <td className="px-4 py-2 ">Card funding</td>
                <td className="px-4 py-2  text-green-400 text-[14px] font-sans font-medium">
                  + $2,000.00
                </td>
                <td className="px-4 py-2">
                  <span className="bg-green-200 py-1.5 px-4 rounded-md text-green-700 text-[12px] border border-green-500 inline-block">
                    Successful
                  </span>
                </td>
                <td className="px-4 py-2">$2,450.00</td>
              </tr>
            </tbody>
          </table>
        </section>

        <div className="mt-6 space-x-2 flex ml-50">
          <button className="border border-gray-500 px-1 py-1 min-w-5 rounded-[5px] text-center shadow-sm hover:bg-[#fd680b] ">
            <MdArrowBackIos className=" pl-1 text-[#fd680b] font-bold text-[14px ]  hover:text-white" />
          </button>
          <button className="border border-gray-500 px-2 text-[14px] min-w-5 rounded-[5px] shadow-sm hover:bg-[#fd680b] hover:text-white">
            1
          </button>
          <button className="border border-gray-500 px-2 text-[14px]  rounded-[5px] min-w-5 shadow-sm hover:bg-[#fd680b]  hover:text-white">
            2
          </button>
          <button className="border border-gray-500 px-2 rounded-[5px] text-[14px] min-w-5 shadow-sm hover:bg-[#fd680b]  hover:text-white">
            3
          </button>
          <button className="border border-gray-500 px-2 rounded-[5px] text-[14px] min-w-5 shadow-sm hover:bg-[#fd680b]  hover:text-white">
            ...
          </button>
          <button className="border border-gray-500 px-2  rounded-[5px] text-[14px] min-w-5 shadow-sm hover:bg-[#fd680b]  hover:text-white">
            10
          </button>
          <button className="border border-gray-500 px-1 py-1 min-w-5 rounded-[5px] shadow-sm hover:bg-[#fd680b] ">
            <MdArrowForwardIos className="pl-1 text-[#fd680b] font-bold text-[14px]  hover:text-white" />
          </button>
        </div>
      </section>
  );
}

export default TransactionHistory;
