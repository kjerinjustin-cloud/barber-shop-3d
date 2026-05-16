import React from 'react'
import { Link } from 'react-router-dom'

export default function Services() {
  const services = [
    { id: 1, name: 'Classic Haircut', price: '₹300', duration: '30 min', description: 'Clean and classic haircut with expert styling.' },
    { id: 2, name: 'Premium Haircut', price: '₹500', duration: '45 min', description: 'Premium haircut with personalized consultation.' },
    { id: 3, name: 'Beard Trim', price: '₹200', duration: '20 min', description: 'Professional beard trimming and shaping.' },
    { id: 4, name: 'Head Massage', price: '₹250', duration: '30 min', description: 'Relaxing head and neck massage.' },
    { id: 5, name: 'Hair Coloring', price: '₹800', duration: '60 min', description: 'Professional hair coloring service.' },
    { id: 6, name: 'Straight Shave', price: '₹150', duration: '15 min', description: 'Traditional straight razor shave.' },
    { id: 7, name: 'Hair Treatment', price: '₹600', duration: '45 min', description: 'Therapeutic hair treatment for health.' },
    { id: 8, name: 'Full Package', price: '₹1200', duration: '90 min', description: 'Haircut + Shave + Massage combo.' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">Our Services</h1>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Premium grooming services tailored to your needs. Book your appointment today.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-800 border border-amber-600 rounded-lg p-6 hover:shadow-lg hover:shadow-amber-600/50 transition">
              <h3 className="text-2xl font-bold text-amber-500 mb-2">{service.name}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-white">{service.price}</p>
                  <p className="text-sm text-gray-400">{service.duration}</p>
                </div>
                <Link
                  to="/booking"
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition font-semibold"
                >
                  Book
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 border border-amber-600 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Special Offers</h2>
          <p className="text-gray-300 mb-6">Get 20% discount on your first booking! Use code: WELCOME20</p>
          <Link
            to="/booking"
            className="inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition"
          >
            Book Your First Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}