# 🦁 Go Lion Website - Quick Setup Guide

## Prerequisites Check

Before you begin, make sure you have:
- **Node.js** version 16 or higher
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## Installation Steps

### 1. Navigate to Project Directory
```bash
cd /home/seedslayer/go-lion-website
```

### 2. Install Dependencies
This will install React, Vite, Tailwind CSS, and all required packages:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

You should see output like:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4. Open in Browser
Open your browser and navigate to:
```
http://localhost:5173
```

## 🎉 That's It!

You should now see the Go Lion website running locally with:
- ✨ Live hot-reload (changes update automatically)
- 🎨 Full Pan-African color scheme
- 🔥 Animated fire particles
- 🎵 Interactive music player
- 📱 Responsive design

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically try the next available port.

### Installation Errors
If you encounter dependency issues:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found
Make sure all dependencies are installed:
```bash
npm install
```

## Next Steps

1. **Customize Content** - Edit component files in `src/components/`
2. **Change Colors** - Modify `tailwind.config.js`
3. **Add Images** - Replace placeholder images with actual band photos
4. **Deploy** - Build and deploy to your hosting service

## Production Build

When ready to deploy:
```bash
npm run build
```

This creates an optimized build in the `dist/` folder ready for deployment.

---

**The revolution awaits! 🔥**
