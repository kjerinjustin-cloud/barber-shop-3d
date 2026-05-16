import React, { useState } from 'react'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Classic Haircut',
    date: '',
    time: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const services = [
    'Classic Haircut',
    'Premium Haircut',
    'Beard Trim',
    'Head Massage',
    'Hair Coloring',
    'Straight Shave',
    'Hair Treatment',
    'Full Package'
  ]

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
    '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM'
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Classic Haircut',
        date: '',
        time: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">Book Your Appointment</h1>
        <p className="text-center text-gray-400 mb-12">Schedule your visit at J S Ramesh Hair Salon</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-gray-800 border border-amber-600 rounded-lg p-8">
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Service</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-600 focus:outline-none"
                >
                  {services.map(svc => (
                    <option key={svc} value={svc}>{svc}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Time</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-amber-600 focus:outline-none"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Additional Notes</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="Any special requests or notes..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition"
              >
                Confirm Booking
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-900 border border-green-600 rounded-lg text-green-200 text-center">
                  ✓ Booking submitted! Check your email for confirmation.
                </div>
              )}
            </form>
          </div>

          <div>
            <div className="bg-gray-800 border border-amber-600 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-amber-500 mb-4">📍 Salon Info</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white mb-1">Address</p>
                  <p>J S Ramesh Hair Salon, Bangalore, India</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Hours</p>
                  <p>Mon - Sun: 9:00 AM - 8:00 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">Contact</p>
                  <p>📞 +91-XXXX-XXXX-XX</p>
                  <p>✉️ info@jsramesh.com</p>
                </div>
                <div className="pt-4 border-t border-gray-700">
                  <p className="font-semibold text-amber-500 mb-2">💡 Pro Tip</p>
                  <p className="text-sm">Book on weekday mornings for shorter wait times!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}