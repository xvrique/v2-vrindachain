# Deployment Guide

## Quick Start

### Local Development
```bash
npm install
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

The optimized build will be in the `dist/` folder.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### GitHub Pages
1. Update `vite.config.ts` to add base path if needed
2. Run `npm run build`
3. Push the `dist` folder to your `gh-pages` branch

### Traditional Hosting (Nginx, Apache, etc.)
1. Run `npm run build`
2. Upload the contents of the `dist/` folder to your web server
3. Configure your server to serve `index.html` for all routes (SPA routing)

## Environment Variables

No environment variables are required for this project. All configuration is static.

## Performance Optimization

The build includes:
- Code splitting
- CSS minification
- JavaScript minification
- Asset optimization

Current bundle size: ~687 KB (199 KB gzipped)

## SEO

The `index.html` includes:
- Meta description
- Open Graph tags
- Theme color
- Viewport settings

Update these in `index.html` as needed.

## Custom Domain

After deployment, configure your custom domain through your hosting provider's DNS settings.

## Troubleshooting

### Build fails
- Clear `node_modules` and `dist` folders
- Run `npm install` again
- Check Node.js version (18+ required)

### Styles not loading
- Ensure Tailwind CSS is properly configured
- Check that `src/index.css` is imported in `src/main.tsx`

### Animations not smooth
- Check browser compatibility (modern browsers required)
- Ensure hardware acceleration is enabled
- Test in different browsers

## Monitoring

After deployment, monitor:
- Page load performance
- User interactions
- Browser console for errors
- Mobile responsiveness

Use tools like:
- Google PageSpeed Insights
- Lighthouse
- WebPageTest
