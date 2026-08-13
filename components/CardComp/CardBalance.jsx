import { useState } from "react";
import {
  CreditCard,
  History,
  Settings,
  Lock,
  Wifi,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const quickActions = [
  {
    id: "fund-load",
    label: "Top Up Card",
    to: "/fund-load",
    icon: CreditCard,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    action: "route",
  },
  {
    id: "transactions",
    label: "View Transaction History",
    to: "/history",
    icon: History,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    action: "route",
  },
  {
    id: "manage-card",
    label: "Manage Card",
    icon: Settings,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
    action: "flip",
  },
  {
    id: "lock-card",
    label: "Lock Card",
    icon: Lock,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    action: "flip",
  },
];

function QuickActionItem({
  id,
  label,
  to,
  icon: Icon,
  iconBg,
  iconColor,
  isLast,
  action,
  onFlip,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (action === "flip") {
      onFlip(id);
    } else {
      navigate(to);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`flex min-h-24 w-full flex-col items-start justify-between gap-3 rounded-2xl border border-gray-200 p-3 text-left transition-colors hover:bg-orange-50 sm:min-h-0 sm:flex-row sm:items-center sm:justify-start sm:gap-4 sm:rounded-none sm:border-0 sm:px-0 sm:py-4 ${
        !isLast ? "sm:border-b sm:border-gray-200" : ""
      }`}
    >
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-11 sm:w-11 ${iconBg}`}
      >
        <Icon
          className={`w-4 h-4 sm:w-5 sm:h-5 ${iconColor}`}
          strokeWidth={2}
        />
      </span>
      <span className="text-[13px] font-semibold leading-snug text-gray-900 sm:text-base">
        {label}
      </span>
    </button>
  );
}

function BackShell({ title, onBack, children }) {
  return (
    <div className="h-full flex flex-col">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-gray-500 font-medium mb-4 text-sm sm:text-base"
      >
        <ArrowLeft className="w-4 h-4" /> Back
      </button>
      <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function ManageCardBack({ onBack }) {
  return (
    <BackShell title="Manage Card" onBack={onBack}>
      <label className="flex items-center justify-between py-3 border-b border-gray-200">
        <span className="text-gray-700 text-sm sm:text-base">
          Enable notifications
        </span>
        <input
          type="checkbox"
          defaultChecked
          className="w-5 h-5 accent-orange-500"
        />
      </label>
      <label className="flex items-center justify-between py-3 border-b border-gray-200">
        <span className="text-gray-700 text-sm sm:text-base">Auto top-up</span>
        <input type="checkbox" className="w-5 h-5 accent-orange-500" />
      </label>
      <button
        type="button"
        className="mt-6 w-full bg-orange-500 text-white font-semibold rounded-xl py-3 text-sm sm:text-base"
      >
        Save changes
      </button>
    </BackShell>
  );
}

function LockCardBack({ onBack }) {
  const [locked, setLocked] = useState(false);
  return (
    <BackShell title="Lock Card" onBack={onBack}>
      <div className="flex flex-col items-center text-center py-2 sm:py-4">
        <span
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center ${
            locked ? "bg-rose-100" : "bg-emerald-100"
          }`}
        >
          {locked ? (
            <Lock
              className="w-6 h-6 sm:w-7 sm:h-7 text-rose-500"
              strokeWidth={2}
            />
          ) : (
            <ShieldCheck
              className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-500"
              strokeWidth={2}
            />
          )}
        </span>
        <p className="mt-4 text-gray-700 text-sm sm:text-base">
          {locked
            ? "Your card is locked. No transactions can go through."
            : "Your card is active and ready to use."}
        </p>
        <button
          type="button"
          onClick={() => setLocked((v) => !v)}
          className={`mt-6 w-full font-semibold rounded-xl py-3 text-white text-sm sm:text-base ${
            locked ? "bg-emerald-500" : "bg-rose-500"
          }`}
        >
          {locked ? "Unlock Card" : "Lock Card"}
        </button>
      </div>
    </BackShell>
  );
}

function QuickActionsPanel() {
  const [flippedTo, setFlippedTo] = useState(null); // null | "manage-card" | "lock-card"
  const isFlipped = flippedTo !== null;

  return (
    <div className="perspective-distant">
      <div
        className="relative min-h-88 sm:min-h-105 transition-transform duration-700 transform-3d"
        style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl border border-orange-400 p-4 sm:pt-6 sm:p-6 backface-hidden">
          <h2 className="mb-4 text-lg font-bold text-gray-900 sm:mb-0 sm:text-2xl">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:block">
            {quickActions.map((action, i) => (
              <QuickActionItem
                key={action.id}
                {...action}
                isLast={i === quickActions.length - 1}
                onFlip={setFlippedTo}
              />
            ))}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-white rounded-2xl sm:rounded-3xl border border-orange-400 p-4 sm:p-6 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          {flippedTo === "manage-card" && (
            <ManageCardBack onBack={() => setFlippedTo(null)} />
          )}
          {flippedTo === "lock-card" && (
            <LockCardBack onBack={() => setFlippedTo(null)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default function CardBalancePanel() {
  const navigate = useNavigate();

  return (
    <div className="bg-orange-50 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-4 sm:gap-6 items-start">
        {/* Balance card */}
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 md:min-h-105 bg-linear-to-br from-amber-400 via-orange-500 to-red-500">
          {/* Header row: keeps wifi icon clear of the balance text at every size */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-white/90 font-medium text-xs sm:text-base">
                Card Balance
              </p>
              <p className="text-white text-2xl sm:text-4xl font-bold mt-1 sm:mt-2">
                ₦2,000.00
              </p>
            </div>
            <Wifi
              className="w-5 h-5 sm:w-8 sm:h-8 text-white rotate-90 shrink-0 mt-1"
              strokeWidth={2.5}
            />
          </div>

          <div className="mt-4 sm:mt-6 bg-white rounded-xl sm:rounded-2xl px-4 py-3 sm:py-8 flex items-center justify-between w-full max-w-55 sm:w-[40%] sm:max-w-none">
            <button
              type="button"
              onClick={() => navigate("/fund-load")}
              className="font-semibold text-gray-900 text-sm sm:text-base"
            >
              Top Up Card
            </button>
            <span className="w-9 h-5 sm:w-11 sm:h-6 rounded-full bg-orange-200 flex items-center px-1 shrink-0 ml-3">
              <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-orange-400" />
            </span>
          </div>

          <div className="mt-6 sm:mt-10 mb-1 md:mb-0">
            <p className="text-white/90 font-medium text-xs sm:text-base">
              Card Number
            </p>
            <p className="text-white text-base sm:text-xl font-bold tracking-wider mt-1">
              **** **** **** 2345
            </p>
          </div>

          {/* Bus art is a desktop-only flourish — hidden below md so the card stays clean and compact on phones */}
          {/* Swap the src below for your imported BRT bus image (e.g. src={brtBus}) */}
          <img
            src="src/assets/card images/BRTBus.png"
            alt="Abia BRT electric bus"
            className="hidden md:block pointer-events-none select-none md:absolute md:bottom-0 md:right-0 md:w-[60%] md:max-w-md h-auto md:translate-y-2"
          />
        </div>

        {/* Quick actions */}
        <QuickActionsPanel />
      </div>
    </div>
  );
}
