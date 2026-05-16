import React, { useState } from 'react'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, title: 'Salon Interior', category: 'interior', src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=500&fit=crop', description: 'Modern and welcoming salon space' },
    { id: 2, title: 'Haircut Style 1', category: 'styles', src: 'https://images.unsplash.com/photo-1534585409754-4fcd1c4e79f5?w=500&h=500&fit=crop', description: 'Classic modern cut' },
    { id: 3, title: 'Haircut Style 2', category: 'styles', src: 'https://images.unsplash.com/photo-1599351751644-f7cadba8f84f?w=500&h=500&fit=crop', description: 'Fade with pattern' },
    { id: 4, title: 'Styling Chair', category: 'equipment', src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=500&fit=crop', description: 'Premium barber chair' },
    { id: 5, title: 'Beard Work', category: 'styles', src: 'https://images.unsplash.com/photo-1621905167918-48416bd8575a?w=500&h=500&fit=crop', description: 'Beard styling expertise' },
    { id: 6, title: 'Salon View', category: 'interior', src: 'https://images.unsplash.com/photo-1576091160550-112173e7f9db?w=500&h=500&fit=crop', description: 'Complete salon overview' },
    { id: 7, title: 'Color Treatment', category: 'services', src: 'https://images.unsplash.com/photo-1562322503-76b16f4ee8f5?w=500&h=500&fit=crop', description: 'Professional coloring service' },
    { id: 8, title: 'Team Photo', category: 'team', src: 'https://images.unsplash.com/photo-1597382985956-190db08121bc?w=500&h=500&fit=crop', description: 'Our expert team' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-center mb-4 text-white">Gallery</h1>
        <p className="text-center text-gray-400 mb-12">Showcase of our salon and expert work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition flex items-end p-4">
                <div className="text-white opacity-0 group-hover:opacity-100 transition">
                  <h3 className="font-bold">{image.title}</h3>
                  <p className="text-sm text-gray-300">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-amber-500 transition"
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h2 className="text-2xl font-bold text-amber-500">{selectedImage.title}</h2>
                <p className="text-gray-300 mt-2">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}