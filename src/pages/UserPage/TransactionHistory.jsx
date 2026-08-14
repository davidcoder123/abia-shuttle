import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import {
  MdArrowBackIos,
  MdArrowForwardIos,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "May 31, 2026",
      month: "May 2026",
      description: "Card Funding",
      amount: "+ $2,000.00",
      type: "credit",
      status: "Successful",
      balance: "$2,450.00",
    },
    {
      id: 2,
      date: "May 31, 2026",
      month: "May 2026",
      description: "Card Funding",
      amount: "+ $2,000.00",
      type: "credit",
      status: "Successful",
      balance: "$2,450.00",
    },
    {
      id: 3,
      date: "May 31, 2026",
      month: "May 2026",
      description: "Card Funding",
      amount: "+ $2,000.00",
      type: "credit",
      status: "Successful",
      balance: "$2,450.00",
    },
    {
      id: 4,
      date: "May 31, 2026",
      month: "May 2026",
      description: "Trip to Absu",
      amount: "- 500.00",
      type: "debit",
      status: "Successful",
      balance: "$2,450.00",
    },
    {
      id: 5,
      date: "May 31, 2026",
      month: "May 2026",
      description: "Trip to Ariria",
      amount: "- 500.00",
      type: "debit",
      status: "Successful",
      balance: "$2,450.00",
    },
    {
      id: 6,
      date: "Apr 15, 2026",
      month: "April 2026",
      description: "Card Funding",
      amount: "+ $2,000.00",
      type: "credit",
      status: "Successful",
      balance: "$2,450.00",
    },
    {
      id: 7,
      date: "Mar 10, 2026",
      month: "March 2026",
      description: "Trip to Umuahia",
      amount: "- 500.00",
      type: "debit",
      status: "Successful",
      balance: "$2,450.00",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Number of transactions to show per page

  // 1. Filter logic
  const filteredTransactions = transactions.filter((tx) => {
    const matchesSearch =
      tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.amount.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesMonth =
      selectedMonth === "All Months" || tx.month === selectedMonth;

    return matchesSearch && matchesMonth;
  });

  // 2. Pagination Logic: Calculate total pages and slice transactions for current page
  const totalPages = Math.ceil(filteredTransactions.length / rowsPerPage) || 1;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentTransactions = filteredTransactions.slice(
    indexOfFirstRow,
    indexOfLastRow,
  );

  const handleDownloadStatement = () => {
    alert("Downloading statement...");
  };

  return (
    <section className="ml-4 md:ml-4 lg:ml-40 my-10 md:my-20 md:flex md:flex-col items-start font-sans">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Transaction History
        </h1>
        <p className="text-gray-500 text-sm mt-1">View all your transactions</p>
      </div>

      {/* Filters & Actions Bar */}
      <div className="flex flex-wrap mt-6 gap-6 items-center">
        <p className="font-bold text-gray-900">Filter</p>

        {/* Month Dropdown */}
        <div className="flex relative">
          <select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              setCurrentPage(1); // Reset to page 1 on filter change
            }}
            className="text-sm shadow-sm shadow-gray-200 border border-gray-200 pl-3 pr-10 py-2 text-gray-600 rounded-[8px] appearance-none bg-white outline-none cursor-pointer"
          >
            <option value="All Months">All Months</option>
            <option value="May 2026">May 2026</option>
            <option value="April 2026">April 2026</option>
            <option value="March 2026">March 2026</option>
          </select>
          <MdKeyboardArrowDown className="absolute right-3 top-3 text-gray-500 pointer-events-none" />
        </div>

        {/* Search Input */}
        <div className="flex relative items-center">
          <input
            type="text"
            placeholder="Search description, date, amount..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to page 1 on search
            }}
            className="shadow-sm shadow-gray-200 border border-gray-200 text-sm pl-9 pr-4 py-2 rounded-[8px] w-full md:w-[280px] outline-none"
          />
          <CiSearch className="absolute left-3 text-gray-400 text-[18px]" />
        </div>

        {/* Download Statement Button */}
        <div className="flex relative text-center">
          <button
            onClick={handleDownloadStatement}
            className="text-[12px] font-semibold shadow-md px-6 py-2.5 pl-10 text-white bg-[#ff7c2a] hover:bg-[#e06a20] transition-colors rounded-[8px] flex items-center gap-2 cursor-pointer"
          >
            Download Statement
          </button>
          <RiDownload2Fill className="absolute left-4 top-3 text-white text-[14px]" />
        </div>
      </div>

      {/* Transactions Table (Renders only currentTransactions slice) */}
      <section className="mt-6 md:overflow-hidden w-full lg:w-[80vw] rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-gray-200 text-[14px] font-bold text-gray-800 bg-gray-50/50">
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Description</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Balance</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentTransactions.length > 0 ? (
              currentTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="text-[14px] font-medium text-gray-700 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="px-6 py-4">{tx.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {tx.description}
                  </td>
                  <td
                    className={`px-6 py-4 font-bold ${tx.type === "credit" ? "text-green-500" : "text-red-500"}`}
                  >
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-[#E7F6ED] py-1 px-3 rounded-full text-[#0F5132] text-[12px] font-medium border border-[#D1E7DD] inline-flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#198754]"></span>
                      {tx.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900">
                    {tx.balance}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-400">
                  No matching transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Functional Pagination Bar */}
      <div className="mt-8 flex items-center justify-center lg:justify-center lg:-ml-21 gap-2 w-full">
        {/* Previous Arrow */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="border border-gray-200 p-2 rounded-[8px] text-gray-500 hover:bg-[#ff7c2a] hover:text-white hover:border-[#ff7c2a] transition-colors shadow-sm bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <MdArrowBackIos className="text-[12px]" />
        </button>

        {/* Dynamic Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => {
          const pageNum = index + 1;
          return (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`border px-3.5 py-1.5 text-[14px] font-medium rounded-[8px] shadow-sm transition-colors cursor-pointer ${
                currentPage === pageNum
                  ? "bg-[#ff7c2a] text-white border-[#ff7c2a]"
                  : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
              }`}
            >
              {pageNum}
            </button>
          );
        })}

        {/* Next Arrow */}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="border border-gray-200 p-2 rounded-[8px] text-gray-500 hover:bg-[#ff7c2a] hover:text-white hover:border-[#ff7c2a] transition-colors shadow-sm bg-white cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <MdArrowForwardIos className="text-[12px]" />
        </button>
      </div>
    </section>
  );
}

export default TransactionHistory;
