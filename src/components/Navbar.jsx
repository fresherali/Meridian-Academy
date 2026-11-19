
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Courses", href: "/courses" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Fee Structure", href: "/fees" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex min-h-20 items-center justify-between gap-4">

          {/* Logo and Academy Name */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex min-w-0 items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Academy Logo"
              className="h-15 w-15 shrink-0 rounded-xl object-contain"
            />

            <div className="min-w-0">
              <h1 className="truncate text-lg font-extrabold tracking-wide text-[#102F59] sm:text-xl">
                Meridian Academy
              </h1>

              <p className="text-xs font-medium tracking-widest text-[#AA8935]">
                LEARN • GROW • SUCCEED
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 xl:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `group relative whitespace-nowrap py-2 text-base font-semibold transition-colors duration-200 hover:text-[#AA8935] ${
                    isActive
                      ? "text-[#AA8935]"
                      : "text-[#102F59]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-[#AA8935] transition-all duration-200 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop Enroll Button */}
          <Link
            to="/contact"
            className="hidden shrink-0 items-center rounded-md bg-[#AA8935] px-5 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:bg-[#102F59] hover:shadow-md xl:inline-flex"
          >
            Enroll Now
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#102F59] text-white transition hover:bg-[#AA8935] xl:hidden"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-100 pb-4 pt-2 xl:hidden">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                end={link.href === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-md px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#102F59]/5 hover:text-[#AA8935] ${
                    isActive
                      ? "text-[#AA8935] bg-[#102F59]/5"
                      : "text-[#102F59]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Enroll Button */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-3 flex items-center justify-center rounded-md bg-[#AA8935] px-4 py-3 font-bold text-white transition hover:bg-[#8D7029]"
            >
              Enroll Now →
            </Link>

          </div>
        )}

      </nav>
    </header>
  );
};

export default Navbar;
