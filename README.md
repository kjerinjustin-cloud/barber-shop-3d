# J S Ramesh Hair Salon - 3D Interactive Website

A modern 3D interactive barber shop website built with React and Three.js, featuring an interactive 3D salon tour, services menu, booking system, and gallery.

## Features

✨ **Interactive 3D Tour**
- Explore the salon with mouse controls
- Drag to rotate, scroll to zoom
- Realistic 3D models of barber chairs, mirrors, and equipment
- Professional lighting and materials

🛎️ **Services & Pricing**
- Comprehensive service menu with pricing
- Duration information for each service
- Easy booking integration

📅 **Online Booking System**
- Select service, date, and time
- Customer information form
- Time slot availability
- Confirmation messages

📸 **Gallery**
- Before/after photos
- Salon interior showcase
- Lightbox image viewer
- Multiple categories

📞 **Contact Information**
- Location with map link
- Phone and email
- Business hours
- Social media links

📱 **Fully Responsive**
- Mobile-friendly design
- Touch controls for 3D scene
- Optimized for all screen sizes

## Tech Stack

- **Frontend:** React 18 + Vite
- **3D Graphics:** Three.js
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **Build Tool:** Vite

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/kjerinjustin-cloud/barber-shop-3d.git
cd barber-shop-3d
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm run preview
```

## Deployment

Easy deployment to Vercel:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
barber-shop-3d/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero3D.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Services.jsx
│   │   ├── Booking.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Customization

### Update Business Information
- Edit salon name, address, and contact in components
- Update services and pricing in `src/pages/Services.jsx`
- Modify business hours in `src/pages/Contact.jsx`

### 3D Scene
- Modify colors and materials in `src/components/Hero3D.jsx`
- Add more 3D models as needed
- Adjust lighting for different effects

### Styling
- Colors are defined in `tailwind.config.js`
- Primary color: `#d4a574` (Amber/Gold)
- Background: `#1a1a1a` (Dark Gray)

## License

MIT License - Feel free to use this project

---

Made with ❤️ using React & Three.js