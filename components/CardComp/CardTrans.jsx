import { ArrowUp, ArrowDown, LifeBuoy } from "lucide-react";
import { useNavigate } from "react-router-dom";
// import topUpWallet from "../assets/card images/TopUpWallet.png"; // <- your wallet image

const transactions = [
  {
    id: "txn-1",
    type: "topup",
    label: "Top Up",
    description: "Card Top Up",
    amount: "+ ₦2,000.00",
    date: "May 12,2026 - 09:30 AM",
    status: "Successful",
  },
  {
    id: "txn-2",
    type: "trip",
    label: "Trip",
    description: "Umuahia → Aba",
    amount: "- ₦800.00",
    date: "May 12,2026 - 07:12 AM",
    status: "Successful",
  },
  {
    id: "txn-3",
    type: "trip",
    label: "Trip",
    description: "Aba → Umuahia",
    amount: "- ₦800.00",
    date: "May 11,2026 - 05:45 PM",
    status: "Successful",
  },
  {
    id: "txn-4",
    type: "topup",
    label: "Top Up",
    description: "Card Top Up",
    amount: "+ ₦1,000.00",
    date: "May 10,2026 - 11:00 AM",
    status: "Successful",
  },
  {
    id: "txn-5",
    type: "trip",
    label: "Trip",
    description: "Umuahia → Aba",
    amount: "- ₦800.00",
    date: "May 10,2026 - 08:00 AM",
    status: "Successful",
  },
];

function TypeIcon({ type }) {
  const isTopUp = type === "topup";
  return (
    <span
      className={`w-7 h-7 sm:w-8 sm:h-8 shrink-0 rounded-full flex items-center justify-center ${
        isTopUp ? "bg-green-100" : "bg-red-100"
      }`}
    >
      {isTopUp ? (
        <ArrowUp
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-600"
          strokeWidth={2.5}
        />
      ) : (
        <ArrowDown
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500"
          strokeWidth={2.5}
        />
      )}
    </span>
  );
}

function StatusBadge({ status }) {
  return (
    <span className="inline-flex min-w-22 items-center justify-center rounded-full bg-green-100 px-3 py-1 text-center text-xs font-medium text-green-700 whitespace-nowrap sm:min-w-24 sm:text-sm">
      {status}
    </span>
  );
}

function TransactionRow({
  type,
  label,
  description,
  amount,
  date,
  status,
  isLast,
}) {
  return (
    <div className={`py-4 ${!isLast ? "border-b border-gray-200" : ""}`}>
      {/* Mobile: stacked card layout */}
      <div className="sm:hidden flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <TypeIcon type={type} />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900">{label}</p>
            <p className="text-sm text-gray-700 truncate">{description}</p>
            <p className="text-xs text-gray-500 mt-1">{date}</p>
          </div>
        </div>
        <div className="text-right shrink-0">
          <p
            className={`text-sm font-semibold ${
              amount.startsWith("+") ? "text-green-600" : "text-gray-900"
            }`}
          >
            {amount}
          </p>
          <div className="mt-2">
            <StatusBadge status={status} />
          </div>
        </div>
      </div>

      {/* sm and up: grid table row */}
      <div className="hidden sm:grid sm:grid-cols-[110px_1fr_140px_220px_130px] sm:items-center sm:gap-4">
        <div className="flex items-center gap-2">
          <TypeIcon type={type} />
          <span className="font-medium text-gray-900">{label}</span>
        </div>
        <span className="text-gray-800">{description}</span>
        <span
          className={`font-medium ${
            amount.startsWith("+") ? "text-green-600" : "text-gray-900"
          }`}
        >
          {amount}
        </span>
        <span className="text-gray-600">{date}</span>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

export default function CardTransactionHistory() {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-50 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-4 sm:gap-6 items-start">
        {/* Transaction history */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900">
              Transaction History
            </h2>
            <button
              type="button"
              onClick={() => navigate("/history")}
              className="text-sm sm:text-base font-semibold text-[#FF6200] shrink-0"
            >
              View All
            </button>
          </div>

          {/* Column headers, desktop only */}
          <div className="hidden sm:grid sm:grid-cols-[110px_1fr_140px_220px_130px] sm:gap-4 pb-12 border-b border-gray-300">
            <span className="font-bold text-gray-900">Type</span>
            <span className="font-bold text-gray-900">Description</span>
            <span className="font-bold text-gray-900">Amount</span>
            <span className="font-bold text-gray-900">Date</span>
            <span className="font-bold text-gray-900">Status</span>
          </div>

          <div className="mb-4 sm:mb-0">
            {transactions.map((txn, i) => (
              <TransactionRow
                key={txn.id}
                {...txn}
                isLast={i === transactions.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right rail */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Top up promo */}
          <div className="bg-white rounded-2xl p-4 sm:rounded-3xl sm:p-8">
            <div className="grid grid-cols-[minmax(0,1fr)_6rem] items-center gap-3 sm:block">
              <div className="min-w-0">
                <h3 className="text-base sm:text-xl font-bold text-gray-900 leading-snug">
                  Top up your card
                </h3>
                <p className="text-lg sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2 leading-tight">
                  Anytime, Anywhere!
                </p>
                <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4 leading-relaxed">
                  Enjoy stress-free rides by keeping your card funded.
                </p>
              </div>

              {/* Swap the src below for your imported wallet image (e.g. src={topUpWallet}) */}
              <img
                src="/src/assets/card images/TopUpImage.png"
                alt="Wallet with Abia Connect card and coins"
                className="w-24 h-auto justify-self-end sm:w-48 sm:mx-auto sm:mt-2"
              />
            </div>

            <button
              type="button"
              onClick={() => navigate("/fund-load")}
              className="mt-4 w-full rounded-2xl bg-[#FF6200] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 sm:mt-2 sm:py-3.5 sm:text-base"
            >
              Top Up Now
            </button>
          </div>

          {/* Need help */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <LifeBuoy className="w-5 h-5 text-[#FF6200]" strokeWidth={2} />
              Need Help?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mt-2">
              We're here to assist you 24/7
            </p>
            <button
              type="button"
              onClick={() => navigate("/help-center")}
              className="w-full border border-[#FF6200] text-[#FF6200] font-semibold text-sm sm:text-base rounded-full py-3 sm:py-3.5 mt-4 sm:mt-5 hover:bg-orange-50 transition-colors"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
