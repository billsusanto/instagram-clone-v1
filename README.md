# Instagram Clone - Web Edition

![Instagram Clone](https://img.shields.io/badge/React-18.2.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.8-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.6-cyan)
![License](https://img.shields.io/badge/License-MIT-green)

A modern, production-ready Instagram clone built with React, Vite, and Tailwind CSS. This web-optimized version emphasizes desktop experience while maintaining full mobile responsiveness.

## 🌟 Features

### Core Functionality
- ✅ **Photo Feed** - Infinite scroll with lazy loading
- ✅ **Stories** - Horizontal scrollable stories with gradient rings
- ✅ **Post Interactions** - Like, comment, save, and share posts
- ✅ **User Suggestions** - Discover and follow new users
- ✅ **Search** - Search for users with real-time results
- ✅ **Create Posts** - Upload and share photos with captions
- ✅ **Responsive Design** - Fully responsive from mobile to desktop
- ✅ **Persistent State** - Local storage for likes, saves, and follows

### UI/UX Features
- 🎨 Pixel-perfect Instagram design recreation
- ⚡ Smooth animations and transitions
- ♿️ WCAG 2.1 AA accessibility compliant
- 🌙 Light theme (dark mode ready)
- 📱 Mobile-first responsive design
- ⌛ Loading states and error handling
- ✨ Hover effects and micro-interactions

### Technical Features
- ⚙️ React 18 with hooks (useState, useEffect, useCallback, useMemo)
- 🚀 Vite for lightning-fast builds
- 🎨 Tailwind CSS with custom design system
- 📦 Component-based architecture
- 🧩 Custom React hooks for reusable logic
- 🔍 ESLint for code quality
- 💾 LocalStorage for state persistence
- 🎯 Performance optimized (React.memo, lazy loading)

## 🖥️ Screenshots

### Desktop View
- Full three-column layout with feed, stories, and sidebar
- Persistent navigation header
- User suggestions and profile stats

### Mobile View
- Single-column optimized layout
- Bottom navigation bar
- Touch-optimized interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/billsusanto/instagram-clone-v1.git
   cd instagram-clone-v1
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
   Navigate to `http://localhost:3000`

### Build for Production

```bash
# Build the application
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
instagram-clone-v1/
├── public/              # Static assets
├── src/
│   ├── components/     # React components
│   │   ├── features/   # Feature-specific components
│   │   │   ├── Post.jsx
│   │   │   ├── Story.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── layout/     # Layout components
│   │   │   └── Header.jsx
│   │   └── ui/         # Reusable UI components
│   │       ├── Avatar.jsx
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       └── Spinner.jsx
│   ├── hooks/          # Custom React hooks
│   │   ├── useClickOutside.js
│   │   ├── useDebounce.js
│   │   ├── useLocalStorage.js
│   │   ├── useMediaQuery.js
│   │   ├── useToggle.js
│   │   └── useIntersectionObserver.js
│   ├── utils/          # Utility functions
│   │   ├── helpers.js
│   │   └── mockData.js
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── netlify.toml        # Netlify deployment config
└── README.md           # This file
```

## 🎨 Design System

### Color Palette

```javascript
// Primary Colors
Primary Blue: #0095F6
Dark Blue: #0077CC
Light Blue: #33AAFF

// Accent Colors
Like Red: #ED4956
Gradient: #F58529 → #DD2A7B → #8134AF

// Background
White: #FFFFFF
Light Gray: #FAFAFA
Gray: #F5F5F5

// Text
Primary: #262626
Secondary: #8E8E8E
Muted: #BDBDBD

// Borders
Light: #EFEFEF
Medium: #DBDBDB
Dark: #A8A8A8
```

### Typography

- **Primary Font**: System UI (native fonts)
- **Display Font**: Inter (Google Fonts)
- **Monospace**: SF Mono, Monaco, Cascadia Code

### Spacing Scale

- xs: 4px
- sm: 8px
- md: 12px
- lg: 16px
- xl: 20px
- 2xl: 24px
- 3xl: 32px
- 4xl: 40px

## 🛠️ Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint to check code quality
npm run lint
```

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📚 Tech Stack

- **Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Styling**: Tailwind CSS 3.3.6
- **Icons**: Lucide React 0.294.0
- **Utilities**: clsx 2.0.0
- **Language**: JavaScript (ES6+)

## 📦 Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "lucide-react": "^0.294.0",
  "clsx": "^2.0.0"
}
```

### Development Dependencies
```json
{
  "vite": "^5.0.8",
  "@vitejs/plugin-react": "^4.2.1",
  "tailwindcss": "^3.3.6",
  "autoprefixer": "^10.4.16",
  "postcss": "^8.4.32",
  "eslint": "^8.55.0"
}
```

## ♿️ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators on interactive elements
- Color contrast WCAG AA compliant
- Alt text for images
- Screen reader friendly

## 🚀 Deployment

### Deploy to Netlify

#### Method 1: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

#### Method 2: Manual Deployment via CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Deploy to GitHub Pages

1. Update `vite.config.js` with base path
2. Run `npm run build`
3. Deploy `dist` folder to GitHub Pages

## 💡 Key Features Explained

### State Management

The app uses React hooks and localStorage for state management:

- `useLocalStorage` - Persists likes, saves, and follows
- `useToggle` - Manages modal open/close states
- `useMediaQuery` - Handles responsive breakpoints
- `useDebounce` - Optimizes search performance
- `useClickOutside` - Closes dropdowns when clicking outside

### Performance Optimizations

- **React.memo()** - Prevents unnecessary re-renders
- **useCallback** - Memoizes callback functions
- **useMemo** - Memoizes expensive calculations
- **Lazy Loading** - Images load only when visible
- **Code Splitting** - Vendor chunks separated for optimal caching

### Component Architecture

- **Atomic Design** - Small, reusable components
- **Single Responsibility** - Each component has one purpose
- **Props Validation** - Type checking with ESLint
- **Error Boundaries** - Graceful error handling

## 📝 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3001
VITE_API_KEY=your_api_key_here
VITE_ENABLE_STORIES=true
VITE_ENABLE_DIRECT_MESSAGES=true
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Bill Susanto**
- GitHub: [@billsusanto](https://github.com/billsusanto)
- Repository: [instagram-clone-v1](https://github.com/billsusanto/instagram-clone-v1)

## 🚀 Future Enhancements

- [ ] Dark mode support
- [ ] Real-time messaging with WebSockets
- [ ] Video posts and Reels
- [ ] Stories viewer modal
- [ ] Profile pages
- [ ] Explore page with grid layout
- [ ] Authentication (Login/Register)
- [ ] Backend API integration
- [ ] Image filters and editing
- [ ] Notifications system
- [ ] Comment threads
- [ ] Direct messaging

## ✨ Acknowledgments

- Design inspiration from Instagram
- Icons from [Lucide Icons](https://lucide.dev/)
- Images from [Unsplash](https://unsplash.com/) and [Pravatar](https://pravatar.cc/)
- Fonts from [Google Fonts](https://fonts.google.com/)

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/billsusanto/instagram-clone-v1/issues) page
2. Create a new issue with detailed information
3. Contact via GitHub

---

<div align="center">

**Made with ❤️ by Bill Susanto**

[View Demo](https://instagram-clone-v1.netlify.app) | [Report Bug](https://github.com/billsusanto/instagram-clone-v1/issues) | [Request Feature](https://github.com/billsusanto/instagram-clone-v1/issues)

</div>