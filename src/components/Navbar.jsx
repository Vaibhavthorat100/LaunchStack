import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">
          LaunchStack
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/features" className="hover:text-indigo-600">Features</Link>
          <Link to="/pricing" className="hover:text-indigo-600">Pricing</Link>
          <Link to="/dashboard" className="hover:text-indigo-600">Dashboard</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          {isOpen ? (
            <FaTimes onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/features" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}