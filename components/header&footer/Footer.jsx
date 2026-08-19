import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#110303] text-white pt-12 pb-16 px-6 lg:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {/* COLUMN 1: BRAND & SOCIALS */}
        <div className="flex flex-col space-y-4">
          {/* Logo Placeholder */}
          <div className=" flex items-center justify-center shadow-md hover:opacity-80 transition-opacity">
            <Link to="/admin">
              <img src="abia-logo.png" alt="abia logo" className="h-18 w-18 rounded-full" title="Secret Admin Link" />
            </Link>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
            Smart Travel for a better city <br />
            Track, Plan, and travel with ease
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#FFD9C0] text-[#FF6200] flex items-center justify-center hover:bg-[#FF6200] hover:text-white transition-colors duration-200"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#FFD9C0] text-[#FF6200] flex items-center justify-center hover:bg-[#FF6200] hover:text-white transition-colors duration-200"
            >
              <FaTwitter className="w-4 h-4" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#FFD9C0] text-[#FF6200] flex items-center justify-center hover:bg-[#FF6200] hover:text-white transition-colors duration-200"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#FFD9C0] text-[#FF6200] flex items-center justify-center hover:bg-[#FF6200] hover:text-white transition-colors duration-200"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-base font-semibold text-white mb-1">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <Link
                to="/home"
                className="hover:text-[#FF6200] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/bus-schedule"
                className="hover:text-[#FF6200] transition-colors"
              >
                Bus schedule
              </Link>
            </li>
            <li>
              <Link
                to="/my-card"
                className="hover:text-[#FF6200] transition-colors"
              >
                My Card
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                className="hover:text-[#FF6200] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-[#FF6200] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: SUPPORT */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-base font-semibold text-white mb-1">Support</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li>
              <Link
                to="/help-center"
                className="hover:text-[#FF6200] transition-colors"
              >
                Help Center
              </Link>
            </li>
            <li>
              <Link
                to="/faqs"
                className="hover:text-[#FF6200] transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-[#FF6200] transition-colors"
              >
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-[#FF6200] transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/report-issue"
                className="hover:text-[#FF6200] transition-colors"
              >
                Report an issue
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4: CONTACT US */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-base font-semibold text-white mb-1">
            Contact Us
          </h3>
          <div className="space-y-2 text-sm text-slate-300">
            <p>0810 963 1236</p>
            <p className="break-all">support@abgss.com</p>
          </div>
        </div>

        {/* COLUMN 5: NEWSLETTER */}
        <div className="flex flex-col space-y-3 sm:col-span-2 lg:col-span-1">
          <h3 className="text-base font-semibold text-white mb-1">
            Newsletter
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Subscribe to get updates on new routes, features, and offers.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
              className="bg-[#525252] text-white placeholder-slate-300 text-sm px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-[#FF6200] w-full"
            />
            <button
              type="submit"
              className="bg-[#FF6200] hover:bg-[#e05600] active:scale-95 text-white font-medium text-sm px-6 py-2.5 rounded-xl transition-all duration-150 cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
