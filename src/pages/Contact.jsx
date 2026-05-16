import React, { useState } from 'react'

export default function Contact() {
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Message:', message)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setMessage('')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">Contact Us</h1>
        <p className="text-center text-gray-400 mb-12">Get in touch with J S Ramesh Hair Salon</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-amber-500 mb-4">Get In Touch</h2>
              <p className="text-gray-300 mb-6">
                Have questions or want to book? Reach out to us through any of these channels.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">📍 Address</h3>
                <p className="text-gray-300">J S Ramesh Hair Salon</p>
                <p className="text-gray-300">Bangalore, India 560001</p>
              </div>

              <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">📞 Phone</h3>
                <p className="text-gray-300">+91-XXXX-XXXX-XX</p>
                <p className="text-gray-300">Available: 9:00 AM - 8:00 PM</p>
              </div>

              <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">✉️ Email</h3>
                <p className="text-gray-300">info@jsramesh.com</p>
                <p className="text-gray-300">support@jsramesh.com</p>
              </div>

              <div className="bg-gray-800 border border-amber-600 rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">⏰ Hours</h3>
                <div className="text-gray-300 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                  <p>Saturday: 8:00 AM - 9:00 PM</p>
                  <p>Sunday: 9:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-gray-800 border border-amber-600 rounded-lg p-8">
              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="+91-XXXXXXXXXX"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="What is this about?"
                />
              </div>

              <div className="mb-6">
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows="5"
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-amber-600 focus:outline-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition"
              >
                Send Message
              </button>

              {submitted && (
                <div className="mt-4 p-4 bg-green-900 border border-green-600 rounded-lg text-green-200 text-center">
                  ✓ Message sent! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}