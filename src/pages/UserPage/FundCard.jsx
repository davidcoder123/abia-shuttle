import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Check,
  ChevronRight,
  CreditCard,
  Landmark,
  Smartphone,
  ShieldCheck,
} from "lucide-react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const CURRENT_BALANCE = 2000;
const MIN_TOP_UP = 100;
const PRESET_AMOUNTS = [1000, 2000, 5000, 10000];

const PAYMENT_METHODS = [
  {
    id: "card",
    title: "Debit / Credit Card",
    description: "Pay securely with your bank card",
    icon: CreditCard,
  },
  {
    id: "transfer",
    title: "Bank Transfer",
    description: "Transfer directly from your bank account",
    icon: Landmark,
  },
  {
    id: "ussd",
    title: "USSD",
    description: "Pay using your bank's USSD service",
    icon: Smartphone,
  },
];

const formatNaira = (value) =>
  `₦${Number(value || 0).toLocaleString("en-NG")}.00`;

function FundCard() {
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [message, setMessage] = useState("");
  const [showBalance, setShowBalance] = useState(true);

  const userName = "John Adebayo Ojo";

  const numericAmount = Number(amount) || 0;
  const isValidAmount = numericAmount >= MIN_TOP_UP;
  const newBalance = CURRENT_BALANCE + numericAmount;

  const handleAmountChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, "");

    setAmount(value);
    setMessage("");
  };

  const handlePayNow = () => {
    if (!isValidAmount) {
      setMessage(
        `Enter at least ${formatNaira(MIN_TOP_UP)} to continue.`
      );
      return;
    }

    setMessage(
      `Ready to pay ${formatNaira(
        numericAmount
      )} using ${
        PAYMENT_METHODS.find((method) => method.id === paymentMethod)?.title
      }. Payment integration can be connected here.`
    );
  };

  return (
    <div>
      <main className="min-h-screen bg-white text-gray-950 pb-28 sm:pb-10">
        {/* ================= HEADER ================= */}
        <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:h-18 sm:px-6">
            <h1 className="text-lg font-bold tracking-tight sm:text-xl">
              Checkout
            </h1>
          </div>
        </header>

        {/* ================= MAIN CONTENT ================= */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* ================= FUND ACCOUNT ================= */}
          <section className="pt-7 text-center sm:pt-9">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Fund your Account
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Add funds to your Abia Connect card.
              </p>
            </div>

            {/* BIGGER CENTERED CARD */}
            <div className="mt-6 flex justify-center px-2">
              <div className="w-full max-w-125">
                <div className="flex min-h-52.5 w-full flex-col justify-between rounded-2xl border border-orange-400/30 bg-[#FF6200] p-6 text-left font-sans text-white shadow-2xl sm:min-h-57.5 sm:p-7">
                  <div>
                    <div className="mb-1 text-sm opacity-90">
                      Current Balance
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold sm:text-4xl">
                        {showBalance
                          ? formatNaira(CURRENT_BALANCE)
                          : "₦••••••••"}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setShowBalance((visible) => !visible)
                        }
                        className="cursor-pointer text-white transition-opacity hover:opacity-80 focus:outline-none"
                        aria-label={
                          showBalance
                            ? "Hide balance"
                            : "Reveal balance"
                        }
                      >
                        {showBalance ? (
                          <FiEyeOff size={20} />
                        ) : (
                          <FiEye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                    <div>
                      <div className="mb-0.5 text-xs opacity-80">
                        Card Number
                      </div>

                      <div className="text-base tracking-widest sm:text-lg">
                        **** **** **** 2345
                      </div>
                    </div>

                    <div className="sm:text-right">
                      <div className="mb-0.5 text-xs opacity-80">
                        Card Holder
                      </div>

                      <div className="text-sm font-bold uppercase">
                        {userName}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ACTIVE CARD INDICATOR */}
            <div className="flex items-center justify-center pt-4">
              <span className="h-1.5 w-10 rounded-full bg-[#FF6200]" />
            </div>
          </section>

          {/* ================= TOP UP AMOUNT ================= */}
          <section className="mt-8 text-center sm:mt-10">
            <div className="flex flex-col items-center">
              <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">
                Top Up Amount
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Enter the amount you want to add to your account.
              </p>
            </div>

            {/* AMOUNT INPUT */}
            <div className="relative mt-5 text-left">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-extrabold text-gray-400">
                ₦
              </span>

              <input
                value={amount}
                onChange={handleAmountChange}
                inputMode="numeric"
                type="text"
                placeholder="0.00"
                aria-label="Top up amount"
                className="h-16 w-full rounded-2xl border-2 border-gray-200 bg-gray-50 pl-11 pr-5 text-2xl font-extrabold outline-none transition focus:border-[#FF6200] focus:bg-white focus:ring-4 focus:ring-orange-100 placeholder:text-gray-300"
              />
            </div>

            {/* PRESET AMOUNTS */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {PRESET_AMOUNTS.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(String(value));
                    setMessage("");
                  }}
                  className={`rounded-xl border px-3 py-3 text-sm font-bold transition ${
                    numericAmount === value
                      ? "border-[#FF6200] bg-orange-50 text-[#FF6200]"
                      : "border-gray-200 bg-white text-gray-700 hover:border-orange-300"
                  }`}
                >
                  ₦{value.toLocaleString("en-NG")}
                </button>
              ))}
            </div>
          </section>

          {/* ================= PAYMENT METHODS ================= */}
          <section className="mt-9 sm:mt-11">
            <h2 className="text-center text-xl font-extrabold tracking-tight sm:text-2xl">
              Other Methods
            </h2>

            <div className="mt-4 divide-y divide-gray-100 rounded-2xl border border-gray-100 bg-white shadow-sm">
              {PAYMENT_METHODS.map((method) => {
                const Icon = method.icon;
                const selected = paymentMethod === method.id;

                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className="flex w-full items-center gap-4 px-4 py-4 text-left transition hover:bg-gray-50 sm:px-5"
                  >
                    {/* ICON */}
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        selected
                          ? "bg-orange-100 text-[#FF6200]"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    {/* TEXT */}
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2">
                        <span className="text-sm font-bold sm:text-base">
                          {method.title}
                        </span>

                        {method.id === "card" && selected && (
                          <span className="rounded-md bg-gray-900 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                            Default
                          </span>
                        )}
                      </span>

                      <span className="mt-1 block truncate text-xs text-gray-400 sm:text-sm">
                        {method.description}
                      </span>
                    </span>

                    {/* SELECTED INDICATOR */}
                    {selected ? (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FF6200] text-white">
                        <Check
                          className="h-4 w-4"
                          strokeWidth={3}
                        />
                      </span>
                    ) : (
                      <ChevronRight className="h-5 w-5 shrink-0 text-gray-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ================= SECURITY + BALANCE ================= */}
          <section className="mt-6 grid gap-4 sm:grid-cols-2">
            {/* SECURITY */}
            <div className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />

              <div>
                <p className="text-sm font-bold text-green-800">
                  Secure payment
                </p>

                <p className="mt-1 text-xs leading-5 text-green-700">
                  Your payment details are protected and handled securely.
                </p>
              </div>
            </div>

            {/* NEW BALANCE */}
            <div className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                New card balance
              </p>

              <p className="mt-1 text-xl font-extrabold text-gray-950">
                {formatNaira(newBalance)}
              </p>
            </div>
          </section>

          {/* ================= MESSAGE ================= */}
          {message && (
            <p
              className="mt-4 rounded-xl bg-orange-50 p-3 text-sm font-medium text-orange-800"
              role="status"
            >
              {message}
            </p>
          )}
        </div>

        {/* ================= BOTTOM CHECKOUT BAR ================= */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 p-3 shadow-[0_-8px_25px_rgba(0,0,0,0.08)] backdrop-blur sm:static sm:mx-auto sm:mt-8 sm:max-w-4xl sm:rounded-2xl sm:border sm:border-gray-100 sm:p-4 sm:shadow-sm">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-1 sm:px-2">
            {/* TOTAL */}
            <div>
              <p className="text-xs font-semibold text-gray-400">
                Total
              </p>

              <p className="mt-0.5 text-xl font-extrabold tracking-tight sm:text-2xl">
                {formatNaira(numericAmount)}
              </p>
            </div>

            {/* PAY BUTTON */}
            <button
              type="button"
              onClick={handlePayNow}
              className="flex min-w-37.5 items-center justify-center gap-2 rounded-2xl bg-[#FF6200] px-6 py-4 text-sm font-extrabold text-white shadow-sm transition hover:bg-orange-600 active:scale-[0.98] sm:min-w-47.5"
            >
              Pay Now

              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default FundCard;