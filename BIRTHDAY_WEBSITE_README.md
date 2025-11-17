# 🎂 Romantic Birthday Surprise Website

A beautiful, interactive birthday surprise website with a press-and-hold unlock mechanism, romantic animations, photo carousel, and background music.

## ✨ Features

### 🔓 Landing Page
- **Soft pastel pink gradient background** with dreamy colors
- **Floating hearts animation** throughout the page
- **Interactive "Press & Hold to Unlock My Heart" button** with:
  - 3-second hold requirement
  - Animated progress circle during hold
  - Heart unlock animation with confetti burst
  - Smooth transition to birthday page

### 🎉 Birthday Page
- **Elegant typography** using Playfair Display (serif) and Inter (sans-serif)
- **Typewriter animation** displaying your romantic birthday message
- **Photo carousel** with 8 romantic photos:
  - Smooth slide transitions
  - Navigation arrows (left/right)
  - Dot indicators
  - Individual photo captions
- **Glassmorphism card** with final romantic message
- **Continuous floating hearts** background animation

### 🎵 Background Music
- **Auto-plays** after unlock (at 60% volume)
- **Toggle button** in bottom-right corner (Play/Pause)
- **Loops continuously** for ambient romantic atmosphere

### 📱 Responsive Design
- Works perfectly on desktop, tablet, and mobile
- Adaptive button text for smaller screens
- Mobile-optimized layouts and spacing

---

## 🎨 Design System

### Color Palette (Soft Pastel Pink Theme)
- **Primary:** Rose Pink (#FFB7C5)
- **Secondary:** Lavender Blush
- **Accent:** Peachy Rose
- **Background:** Soft cream/pink gradient
- **Text:** Dark rose brown for contrast

### Typography
- **Headings:** Playfair Display (elegant serif)
- **Body Text:** Inter (clean, readable sans-serif)

### Animations
- Floating hearts with random movement
- Smooth fade-in transitions
- Pulsing heart icon
- Typewriter text effect
- Confetti burst on unlock
- Progress circle during button hold

---

## 📁 Project Structure

```
/app/frontend/
├── public/
│   ├── music/
│   │   └── blue-instrumental.mp3  ← ADD YOUR AUDIO FILE HERE
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BackgroundMusic.jsx      # Music player with toggle
│   │   ├── FloatingHearts.jsx       # Animated floating hearts
│   │   ├── UnlockButton.jsx         # Press & hold unlock button
│   │   ├── TypewriterText.jsx       # Typewriter animation
│   │   └── PhotoCarousel.jsx        # Image carousel with 8 photos
│   ├── pages/
│   │   ├── LandingPage.jsx          # Initial unlock screen
│   │   └── BirthdayPage.jsx         # Main birthday content
│   ├── App.js                        # Main app logic
│   ├── index.css                     # Design system & tokens
│   └── index.js                      # App entry point
└── tailwind.config.js                # Tailwind configuration
```

---

## 🚀 Setup & Deployment

### Prerequisites
All dependencies are already installed:
- React 19.0.0
- Framer Motion (for animations)
- Canvas Confetti (for confetti effect)
- React Type Animation (for typewriter effect)
- Lucide React (for icons)
- Tailwind CSS (for styling)

### Adding the Music File

**IMPORTANT:** The website will work without the audio file, but music won't play.

1. Get the "Blue - Yung Kai Instrumental" MP3 file
2. Place it at: `/app/frontend/public/music/blue-instrumental.mp3`
3. Restart frontend: `sudo supervisorctl restart frontend`

### Running the Website

The website is already running at:
- **Local:** http://localhost:3000
- **External:** Check your .env file for `REACT_APP_BACKEND_URL`

To restart:
```bash
sudo supervisorctl restart frontend
```

To check status:
```bash
sudo supervisorctl status frontend
```

---

## 🎯 How It Works

### User Flow

1. **Landing Page** - User sees "A Special Surprise" with unlock button
2. **Press & Hold** - User presses and holds button for 3 seconds
3. **Progress Circle** - Animated circle fills up during hold
4. **Confetti Burst** - Beautiful pink confetti explosion on unlock
5. **Transition** - Smooth fade to birthday page
6. **Music Starts** - Background music begins playing automatically
7. **Typewriter Message** - Romantic message types out letter by letter
8. **Photo Carousel** - User can browse through 8 romantic photos
9. **Final Message** - Closing romantic message in glassmorphism card

### Interactive Elements

- **Unlock Button:** Must be held for 3 seconds; releasing early resets
- **Carousel Navigation:** Click arrows or dots to change photos
- **Music Toggle:** Click button in bottom-right to play/pause
- **Floating Hearts:** Continuous ambient animation throughout

---

## 🖼️ Customizing Photos

The carousel currently uses beautiful romantic Unsplash photos. To use your own:

1. Open `/app/frontend/src/components/PhotoCarousel.jsx`
2. Replace the `photos` array URLs with your own:

```jsx
const photos = [
  {
    url: 'YOUR_PHOTO_URL_1',
    caption: 'Custom caption 1'
  },
  {
    url: 'YOUR_PHOTO_URL_2',
    caption: 'Custom caption 2'
  },
  // Add more photos...
];
```

You can use:
- External URLs (https://...)
- Local files in `/public/images/` folder
- Any number of photos (currently 8)

---

## 📝 Customizing the Message

To change the birthday message:

1. Open `/app/frontend/src/components/TypewriterText.jsx`
2. Edit the `message` variable:

```jsx
const message = `Your custom birthday message here...`;
```

**Note:** Use `\\n\\n` for line breaks in the message.

---

## 🎨 Customizing Colors

To change the color scheme:

1. Open `/app/frontend/src/index.css`
2. Edit the CSS variables under `:root`:

```css
:root {
  --primary: 340 82% 75%;        /* Main pink color */
  --secondary: 320 60% 85%;      /* Lavender blush */
  --accent: 350 100% 88%;        /* Peachy rose */
  /* ... more colors ... */
}
```

Colors are in HSL format: `hue saturation% lightness%`

---

## 🐛 Troubleshooting

### Music Not Playing
- **Check:** File is at `/app/frontend/public/music/blue-instrumental.mp3`
- **Check:** File name is exactly `blue-instrumental.mp3` (case-sensitive)
- **Check:** Browser console for audio errors
- **Try:** Restart frontend: `sudo supervisorctl restart frontend`

### Unlock Button Not Working
- **Check:** Browser console for JavaScript errors
- **Try:** Clear browser cache and refresh
- **Try:** Test on different browser

### Photos Not Loading
- **Check:** URLs are accessible
- **Check:** No CORS issues in console
- **Try:** Use different image URLs

### Animations Stuttering
- **Try:** Close other browser tabs
- **Try:** Test on device with better performance
- **Check:** Browser hardware acceleration is enabled

---

## 🌐 Browser Support

- ✅ Chrome/Edge (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Some older browsers may not support all CSS features like backdrop-filter (glassmorphism).

---

## 📸 Testing Checklist

- [ ] Landing page loads with pink gradient
- [ ] Floating hearts animate smoothly
- [ ] Unlock button shows progress circle when held
- [ ] Releasing early resets the progress
- [ ] Holding for 3+ seconds triggers unlock
- [ ] Confetti appears on unlock
- [ ] Birthday page loads smoothly
- [ ] Typewriter animation displays message
- [ ] Photo carousel navigation works
- [ ] Music plays after unlock (if file added)
- [ ] Music toggle button works
- [ ] Responsive design works on mobile

---

## 💝 The Birthday Message

Current message (can be customized):

> My love, today is your day — the day the world was blessed with you.
> 
> Every moment with you feels softer than a sunrise and sweeter than a slow song.
> 
> You bring light into my darkest times, laughter into my silent days, and peace into my restless nights.
> 
> Thank you for loving me, for choosing me, and for being the most beautiful part of my life.
> 
> On your birthday, I promise to hold your heart gently, love you endlessly, and stand by you always — today, tomorrow, and every day after.
> 
> Happy Birthday, my heart. You deserve happiness that never ends. ❤️

---

## 🎁 Deployment Options

### Option 1: Current Setup
The site is already running and accessible. Just add the music file!

### Option 2: Build for Production
```bash
cd /app/frontend
yarn build
```
The production build will be in `/app/frontend/build/`

### Option 3: Deploy to Hosting
You can deploy the `build` folder to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

---

## 👨‍💻 Technical Details

### Libraries Used
- **React 19.0.0** - UI framework
- **Framer Motion** - Smooth animations
- **Canvas Confetti** - Confetti effects
- **React Type Animation** - Typewriter effect
- **Lucide React** - Beautiful icons
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - UI component primitives

### Performance
- Optimized animations using GPU acceleration
- Lazy loading where appropriate
- Minimal bundle size
- Smooth 60fps animations

---

## 📧 Credits

**Made with ❤️ by Sharukesh**

---

## 🎉 Final Notes

This website is designed to be a memorable, romantic birthday surprise. The attention to detail in the animations, colors, and interactions creates an immersive experience that shows genuine care and effort.

**Key Features:**
✨ Interactive unlock mechanism
🎨 Beautiful pastel pink design
💝 Romantic typewriter message
🖼️ Photo carousel with memories
🎵 Background music
📱 Fully responsive
🎊 Confetti celebration

**Enjoy surprising your special someone!** 🎂❤️
