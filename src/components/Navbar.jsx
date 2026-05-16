import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-90 backdrop-blur z-50 border-b border-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              J S Ramesh
            </h1>
            <span className="ml-2 text-xs text-gray-400">Hair Salon</span>
          </Link>

          <div className="hidden md:flex space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/gallery">Gallery</NavLink>
            <NavLink to="/booking">Book Now</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-amber-600 hover:text-amber-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/services">Services</MobileNavLink>
            <MobileNavLink to="/gallery">Gallery</MobileNavLink>
            <MobileNavLink to="/booking">Book Now</MobileNavLink>
            <MobileNavLink to="/contact">Contact</MobileNavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-amber-500 hover:bg-gray-800 transition"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-amber-500 hover:bg-gray-800 transition"
    >
      {children}
    </Link>
  )
}