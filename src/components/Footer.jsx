
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#071A32] px-5 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* LOGO & DESCRIPTION */}
        <div>
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Academy logo"
              className="h-12 w-12 rounded-full bg-white object-contain"
            />
            <span className="text-xl font-extrabold">Your Academy</span>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
            Academic support for Matric and Intermediate students through
            campus classes, home tuition, and online learning.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-bold text-[#E7CC7B]">
            Quick Links
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link className="hover:text-white" to="/">Home</Link></li>
            <li><Link className="hover:text-white" to="/services">Services</Link></li>
            <li><Link className="hover:text-white" to="/courses">Courses</Link></li>
            <li><Link className="hover:text-white" to="/about">About Us</Link></li>
            <li><Link className="hover:text-white" to="/fees">Fee Structure</Link></li>
            <li><Link className="hover:text-white" to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* LEARNING MODES */}
        <div>
          <h3 className="text-lg font-bold text-[#E7CC7B]">
            Learning Modes
          </h3>

          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link className="hover:text-white" to="/services">Campus Classes</Link></li>
            <li><Link className="hover:text-white" to="/services">Home Tuition</Link></li>
            <li><Link className="hover:text-white" to="/services">Online Classes</Link></li>
          </ul>
        </div>

        {/* CONTACT INFORMATION */}
        <div>
          <h3 className="text-lg font-bold text-[#E7CC7B]">
            Contact Us
          </h3>

          <div className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            <p>Phone: Add your phone number</p>
            <p>Email: Add your email address</p>
            <p>Address: Add your campus address</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="hover:text-[#E7CC7B]">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:text-[#E7CC7B]">Instagram</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="hover:text-[#E7CC7B]">YouTube</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-[#E7CC7B]">LinkedIn</a>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex font-bold text-[#E7CC7B] hover:text-white"
          >
            Send an Inquiry →
          </Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Academy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
