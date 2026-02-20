import { Link } from "react-router-dom";
import { FaHome, FaStar, FaDollarSign, FaTachometerAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">AI SaaS</h1>

        <div className="space-x-6 hidden md:flex items-center">
          <Link to="/" className="flex items-center gap-2 hover:text-indigo-600">
            <FaHome /> Home
          </Link>

          <Link to="/features" className="flex items-center gap-2 hover:text-indigo-600">
            <FaStar /> Features
          </Link>

          <Link to="/pricing" className="flex items-center gap-2 hover:text-indigo-600">
            <FaDollarSign /> Pricing
          </Link>

          <Link to="/dashboard" className="flex items-center gap-2 hover:text-indigo-600">
            <FaTachometerAlt /> Dashboard
          </Link>

          <Link to="/contact" className="flex items-center gap-2 hover:text-indigo-600">
            <FaEnvelope /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}