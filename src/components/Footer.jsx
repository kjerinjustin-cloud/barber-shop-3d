import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-amber-600 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-4">J S Ramesh Hair Salon</h3>
            <p className="text-gray-400">Premium barbershop experience with a 3D interactive tour.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-amber-500 transition">Home</a></li>
              <li><a href="/services" className="hover:text-amber-500 transition">Services</a></li>
              <li><a href="/gallery" className="hover:text-amber-500 transition">Gallery</a></li>
              <li><a href="/booking" className="hover:text-amber-500 transition">Book Now</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <p className="text-gray-400 mb-2">📍 Bangalore, India</p>
            <p className="text-gray-400 mb-2">📞 +91-XXXX-XXXX-XX</p>
            <p className="text-gray-400">✉️ info@jsramesh.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} J S Ramesh Hair Salon. All rights reserved.</p>
          <p className="text-sm mt-2">Designed with ❤️ using React & Three.js</p>
        </div>
      </div>
    </footer>
  )
}