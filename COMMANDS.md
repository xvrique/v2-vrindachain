# 🎯 Vrindachain - Essential Commands

## 📍 Navigate to Project
```bash
cd vrindachain-landing
```

## 🚀 Development

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Opens at: `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output: `dist/` folder

### Preview Production Build
```bash
npm run preview
```

### Run Linter
```bash
npm run lint
```

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages
```bash
npm run build
# Then push dist folder to gh-pages branch
```

## 🧹 Cleanup

### Remove Node Modules
```bash
rm -rf node_modules
```

### Remove Build Folder
```bash
rm -rf dist
```

### Clean Install
```bash
rm -rf node_modules dist
npm install
npm run build
```

## 🔍 Debugging

### Check for Errors
```bash
npm run lint
```

### Build with Verbose Output
```bash
npm run build -- --debug
```

### Check Bundle Size
```bash
npm run build
# Check dist folder size
```

## 📦 Package Management

### Update Dependencies
```bash
npm update
```

### Check Outdated Packages
```bash
npm outdated
```

### Install Specific Package
```bash
npm install package-name
```

### Remove Package
```bash
npm uninstall package-name
```

## 🎨 Development Workflow

### 1. Start Development
```bash
npm run dev
```

### 2. Make Changes
Edit files in `src/` folder

### 3. Test Changes
View in browser at `http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```

### 5. Preview Build
```bash
npm run preview
```

### 6. Deploy
```bash
vercel
# or
netlify deploy --prod --dir=dist
```

## 🔧 Customization Commands

### Edit Colors
```bash
# Edit tailwind.config.js
nano tailwind.config.js
```

### Edit Content
```bash
# Edit component files
nano src/components/Hero.tsx
nano src/components/Technologies.tsx
# etc...
```

### Edit Styles
```bash
# Edit global styles
nano src/index.css
```

## 📊 Project Info

### Check Node Version
```bash
node --version
```

### Check NPM Version
```bash
npm --version
```

### List Installed Packages
```bash
npm list
```

### Check Package Versions
```bash
npm list --depth=0
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Clear Cache
```bash
npm cache clean --force
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Fix Build Issues
```bash
npm run build -- --force
```

## 📱 Testing

### Test on Mobile
```bash
# Get your local IP
ipconfig getifaddr en0  # macOS
hostname -I            # Linux
ipconfig               # Windows

# Then visit: http://YOUR_IP:5173
```

### Test Production Build
```bash
npm run build
npm run preview
```

## 🚀 Quick Start (All in One)

```bash
# Navigate to project
cd vrindachain-landing

# Install and start
npm install
npm run dev

# In another terminal, build
npm run build

# Preview build
npm run preview
```

## 📝 File Editing

### Edit Hero Section
```bash
nano src/components/Hero.tsx
```

### Edit Technologies
```bash
nano src/components/Technologies.tsx
```

### Edit Tokenomics
```bash
nano src/components/Tokenomics.tsx
```

### Edit Roadmap
```bash
nano src/components/Roadmap.tsx
```

### Edit Community
```bash
nano src/components/Community.tsx
```

### Edit Footer
```bash
nano src/components/Footer.tsx
```

### Edit Navbar
```bash
nano src/components/Navbar.tsx
```

### Edit Styles
```bash
nano src/index.css
```

### Edit Tailwind Config
```bash
nano tailwind.config.js
```

## 🎯 Common Workflows

### Update Content
1. Edit component file
2. Save changes
3. Dev server auto-reloads
4. View changes in browser

### Change Colors
1. Edit `tailwind.config.js`
2. Update color values
3. Dev server auto-reloads
4. View changes in browser

### Add New Section
1. Create new component in `src/components/`
2. Import in `src/App.tsx`
3. Add to JSX
4. Dev server auto-reloads

### Deploy Changes
1. Make changes locally
2. Test with `npm run dev`
3. Build with `npm run build`
4. Deploy with `vercel` or `netlify deploy`

## 📚 Documentation Files

- `README.md` - Project overview
- `QUICK_START.md` - Quick start guide
- `ENHANCEMENTS.md` - All improvements
- `IMPROVEMENTS_SUMMARY.md` - Detailed improvements
- `VISUAL_GUIDE.md` - Design system
- `DEPLOYMENT.md` - Deployment guide
- `FINAL_SUMMARY.md` - Complete summary
- `COMMANDS.md` - This file

## 🎉 You're Ready!

Use these commands to develop, test, and deploy your Vrindachain landing page!

---

**Happy coding! 🙏✨**
