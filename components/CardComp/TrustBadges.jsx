import { ShieldCheck, CreditCard, Bell } from "lucide-react";

const badges = [
  {
    id: "secure-transactions",
    icon: ShieldCheck,
    title: "Secure Transactions",
    description: "Your payments and data are always protected.",
  },
  {
    id: "easy-top-up",
    icon: CreditCard,
    title: "Easy Top Up",
    description: "Top up instantly using your preferred payment method.",
  },
  {
    id: "support",
    icon: Bell,
    title: "24/7 Support",
    description: "Our support team is always ready to help.",
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-[#FFF5ED] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl bg-[#FDF5F1] rounded-2xl px-5 py-6 sm:px-8 sm:py-10 grid grid-cols-1 sm:grid-cols-3 sm:mx-auto gap-5 sm:gap-8 border border-[#FF6200]">
        {badges.map(({ id, icon: Icon, title, description }) => (
          <div key={id} className="flex items-start gap-3 sm:gap-4">
            <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#FFCBAA] flex items-center justify-center">
              <Icon
                className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600"
                strokeWidth={2}
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 leading-snug text-sm sm:text-base">
                {title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-snug">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
