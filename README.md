# Go Lion - Burn the Throne 🦁🔥

A revolutionary single-page website for Go Lion, a conscious reggae band promoting their debut album "Burn the Throne". This immersive web experience captures the spirit of roots reggae activism meets modern design.

![Go Lion](https://img.shields.io/badge/Status-Revolutionary-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎵 Features

### Complete Website Sections
- **Hero Section** - Full-screen with animated particles, lion logo, and call-to-action
- **About Section** - Band origin story with parallax scrolling and band member grid
- **Album Section** - "Burn the Throne" complete tracklist with hover effects
- **Music Player** - Custom-styled audio player with waveform visualization
- **Video Section** - Featured video and categorized video gallery
- **Tour Dates** - Interactive tour listings with request form
- **Merch Preview** - Product grid with hover effects and quick view
- **Lyrics/Message** - Rotating quotes and featured lyrics display
- **Newsletter** - Email signup with "Join the Pride" theme
- **Contact** - Booking form, press kit download, and social links
- **Footer** - Complete site navigation with final quote

### Design Features
- ✨ Pan-African color palette (Red, Gold, Green, Black)
- 🔥 Fire particle effects in hero section
- 📜 Parallax scrolling effects
- 🎨 Smooth scroll animations with Intersection Observer
- 📱 Fully responsive (mobile, tablet, desktop)
- ♿ Accessible (ARIA labels, keyboard navigation)
- 🎭 Texture overlays for organic feel
- ⚡ Fast loading with optimized images
- 🎯 SEO-friendly structure

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to project directory**
   ```bash
   cd go-lion-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Color Palette

The website uses a revolutionary Pan-African color scheme:

```css
Pan Red:    #C41E3A
Pan Gold:   #FFD700
Pan Green:  #228B22
Pan Black:  #0D0D0D
Earth Brown: #8B4513
Earth Tan:   #D2B48C
```

## 📂 Project Structure

```
go-lion-website/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with particles
│   │   ├── Particles.jsx       # Fire particle animation
│   │   ├── About.jsx           # Band info and members
│   │   ├── Album.jsx           # Album showcase and tracklist
│   │   ├── MusicPlayer.jsx     # Custom audio player
│   │   ├── VideoSection.jsx    # Video gallery
│   │   ├── TourDates.jsx       # Tour schedule
│   │   ├── MerchPreview.jsx    # Merchandise grid
│   │   ├── LyricsMessage.jsx   # Rotating lyrics quotes
│   │   ├── Newsletter.jsx      # Email signup
│   │   ├── Contact.jsx         # Contact form and info
│   │   ├── Footer.jsx          # Site footer
│   │   └── ScrollToTop.jsx     # Scroll to top button
│   ├── App.jsx                 # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles and utilities
├── index.html                 # HTML template
├── tailwind.config.js         # Tailwind configuration
├── vite.config.js            # Vite configuration
└── package.json              # Dependencies

```

## 🎯 Key Components

### Hero Section
- Animated fire particles rising
- 3D interactive lion logo
- Sound wave visualization
- Smooth scroll indicators

### Music Player
- Interactive waveform visualization
- Track progression
- Volume controls
- Play/pause/skip functionality

### Album Section
- Full 13-track listing with durations
- Hover effects revealing lyric excerpts
- Streaming platform links
- Pre-order vinyl button

### Tour Dates
- Upcoming show listings
- Past shows toggle
- Request show form
- Map integration placeholder

## 🔧 Customization

### Updating Album Tracks
Edit the tracks array in `src/components/Album.jsx`:

```jsx
const tracks = [
  { number: 1, title: 'Track Name', duration: '3:45', lyric: 'Sample lyric...' },
  // Add more tracks
];
```

### Changing Colors
Modify `tailwind.config.js`:

```js
extend: {
  colors: {
    'pan-red': '#C41E3A',
    'pan-gold': '#FFD700',
    // Add your colors
  }
}
```

### Adding Tour Dates
Edit the arrays in `src/components/TourDates.jsx`:

```jsx
const upcomingShows = [
  {
    date: '2026-04-15',
    displayDate: 'APR 15',
    venue: 'Venue Name',
    city: 'City, State',
    status: 'on-sale',
  },
];
```

## 🎵 Track Listing - "Burn the Throne"

1. **The Awakening (Intro)** — 2:47
2. **Burn the Throne** — 5:42
3. **Breadline** — 4:24
4. **Digital Babylon** — 4:56
5. **Mama's Hands** — 4:08
6. **Passport to Nowhere** — 5:12
7. **Concrete Garden** — 3:58
8. **The Algorithm** — 4:33
9. **Rise Again** — 5:04
10. **Battlefield** — 4:47
11. **Holy Ground** — 5:21
12. **The Children's Eyes** — 4:44
13. **Liberation Day** — 6:33

**Total Duration:** 61:13

## 🌟 Key Phrases Featured

- "Burn the Throne"
- "Rise Again"
- "The throne is empty now. Take your seat, my people."
- "We come to burn the throne. Not with hate, but love alone."
- "Liberation Day"
- "The revolution is love"

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- High contrast color ratios
- Focus indicators
- Alt text for images
- Screen reader friendly

## 🚀 Performance Optimizations

- Lazy loading for images
- Intersection Observer for scroll animations
- Optimized particle count
- CSS animations over JavaScript
- Efficient re-renders with React

## 📄 License

© 2026 Go Lion / Burning Throne Records

## 🔥 The Revolution

> "We come to burn the throne. Not with hate, but love alone."

---

**Made with ❤️ and revolution**

For booking inquiries: booking@golion.com
