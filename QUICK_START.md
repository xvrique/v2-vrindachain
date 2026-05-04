# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd vrindachain-landing
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open your browser to `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## 📝 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  'saffron': '#your-color',
  'gold': '#your-color',
  // ... etc
}
```

### Update Content
Edit component files in `src/components/`:
- `Hero.tsx` - Hero section
- `Technologies.tsx` - Tech cards
- `Tokenomics.tsx` - Token distribution
- `Roadmap.tsx` - Roadmap phases
- `Community.tsx` - Social links
- `Footer.tsx` - Footer content

### Add New Sections
1. Create a new component in `src/components/`
2. Import it in `src/App.tsx`
3. Add it to the JSX

## 🎨 Design Features

- ✨ Smooth animations with Framer Motion
- 🎭 Glassmorphism effects
- 🌈 Gradient borders and backgrounds
- 📱 Fully responsive design
- ⚡ Fast performance
- 🎯 Interactive hover effects

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── WhyVrindachain.tsx
│   ├── Technologies.tsx
│   ├── Tokenomics.tsx
│   ├── Roadmap.tsx
│   ├── Community.tsx
│   ├── Footer.tsx
│   └── ParticleBackground.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## 🔗 Links & Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
# Push dist folder to gh-pages branch
```

## 💡 Tips

- Use `npm run dev` for development
- Use `npm run build` before deploying
- Test on mobile devices
- Check browser console for errors
- Use Chrome DevTools for debugging

## ❓ Troubleshooting

**Port 5173 already in use?**
```bash
npm run dev -- --port 3000
```

**Build fails?**
```bash
rm -rf node_modules dist
npm install
npm run build
```

**Styles not loading?**
- Clear browser cache
- Restart dev server
- Check `src/index.css` is imported

## 📞 Support

For issues or questions:
1. Check the README.md
2. Review component files
3. Check browser console for errors
4. Verify all dependencies are installed

## 🎉 You're Ready!

Your Vrindachain landing page is ready to go. Customize it, deploy it, and share it with the world!

Happy coding! 🙏
