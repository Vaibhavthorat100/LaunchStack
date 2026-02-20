import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaStar,
  FaDollarSign,
  FaTachometerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Features", path: "/features", icon: <FaStar /> },
    { name: "Pricing", path: "/pricing", icon: <FaDollarSign /> },
    { name: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          LaunchStack
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="flex items-center gap-2 hover:text-indigo-600 transition"
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-2xl text-indigo-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-lg hover:text-indigo-600 transition"
            >
              <span className="text-indigo-600 text-xl">
                {link.icon}
              </span>
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}