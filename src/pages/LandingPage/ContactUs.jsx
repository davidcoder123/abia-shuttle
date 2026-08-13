import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  FileText,
  MessageSquare,
  Send,
  MapPin,
  Clock,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

import ReadyToTravel from "../../../components/ReadyToTravel";

const faqs = [
  {
    q: "How do I get a travel card?",
    a: "You can get a travel card, by registering on the app or visiting the Abia Green Shuttle Bus terminal.",
  },
  {
    q: "Can I track my bus?",
    a: "Yes. You can track your bus in real time using the Live Tracking feature on our app.",
  },
  {
    q: "How do I top up my card?",
    a: "Top up your card easily via the app, USSD, or at any approved top-up terminal.",
  },
  {
    q: "Are the buses electric?",
    a: "Yes. All our buses are 100% electric and eco-friendly, helping us build a cleaner Abia.",
  },
];

function InputField({ icon: Icon, placeholder, type = "text" }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-neutral-300 bg-white px-4 py-3.5">
      <Icon size={18} className="shrink-0 text-neutral-400" />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-sm text-neutral-700 placeholder-neutral-400 outline-none"
      />
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }) {
  return (
    <div className="flex-1 min-w-50 rounded-2xl border border-neutral-200 bg-white p-5">
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-orange-100">
        <Icon size={16} className="text-orange-500" />
      </div>
      <p className="mb-1 text-base font-bold text-neutral-900">{title}</p>
      <div className="text-sm leading-relaxed text-neutral-500">{children}</div>
    </div>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-5 py-4">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="pr-4 text-sm font-semibold text-neutral-900">
          {item.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-neutral-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-xs leading-relaxed text-neutral-500">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function ContactUs() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen bg-[#FDF1EC] px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-neutral-800 sm:text-5xl">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base font-medium text-neutral-600">
            Have questions about routes, schedule, cards, or partnerships? Reach
            out to our team anytime
          </p>
          <span className="mt-4 inline-block rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-500">
            We are here to help you!
          </span>
        </div>

        {/* Get in touch */}
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-neutral-900">
            Get in Touch
          </h2>
          <p className="mt-1 text-base font-medium text-neutral-600">
            Send us a message and we'll respond as soon as possible.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField icon={User} placeholder="Enter Full Name" />
              <InputField
                icon={Mail}
                placeholder="Enter Email Address"
                type="email"
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InputField
                icon={Phone}
                placeholder="Enter Phone Number"
                type="tel"
              />
              <InputField icon={FileText} placeholder="Subject" />
            </div>

            <div className="flex items-start gap-3 rounded-xl border border-neutral-300 bg-white px-4 py-3.5">
              <MessageSquare
                size={18}
                className="mt-0.5 shrink-0 text-neutral-400"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full resize-none bg-transparent text-sm text-neutral-700 placeholder-neutral-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 text-sm font-semibold text-white transition-colors cursor-pointer hover:bg-[#803100]"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>
        </div>

        {/* Info cards */}
        <div className="mt-8 flex flex-wrap gap-4">
          <InfoCard icon={MapPin} title="Office Address">
            Abia Green Shuttle Services Headquarters
            <br />
            Umuahia, Abia State, Nigeria
          </InfoCard>
          <InfoCard icon={Phone} title="Phone">
            +234 803 000 0000
            <br />
            +234 803 000 0000
          </InfoCard>
          <InfoCard icon={Mail} title="Email">
            support@abiagreenshuttle.ng
            <br />
            info@abiagreenshuttle.ng
          </InfoCard>
          <InfoCard icon={Clock} title="Email">
            Monday - Friday
            <br />
            8:00 Am - 5:00PM
            <br />
            <br />
            Saturday
            <br />
            9:00AM - 2:00PM
          </InfoCard>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-center text-2xl font-extrabold text-neutral-900">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                item={item}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>

        {/* CTA banner */}
        <div className="mt-8 flex flex-col items-start justify-between gap-6 rounded-2xl bg-orange-500 p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-bold text-white">
              Need immediate Assistance?
            </p>
            <p className="mt-1 max-w-md text-sm text-orange-50">
              Our customer support team is available during working hours to
              help with more information, lost item, and card issues.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-orange-500 cursor-pointer">
              <Phone size={14} />
              Call Now
            </button>
            <button className="flex items-center gap-2 rounded-full bg-orange-600/40 px-5 py-2.5 text-xs font-semibold text-white ring-1 ring-inset ring-white/40 cursor-pointer">
              <MessageCircle size={14} />
              Live Chat
            </button>
          </div>
        </div>
      </div>
      <ReadyToTravel />
    </div>
  );
}
