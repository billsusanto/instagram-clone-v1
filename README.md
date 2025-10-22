# Instagram Clone - Web Edition

<div align="center">
  <h3>A modern, web-optimized social media platform inspired by Instagram</h3>
  <p>Full-featured Instagram clone with enhanced desktop experience and responsive design</p>
  <p>
    <strong>⚡ Ready for Netlify deployment</strong>
  </p>
</div>

---

## 🎨 Design Overview

This project is a comprehensive Instagram-like web application optimized for desktop browsing while maintaining mobile responsiveness. Unlike the mobile-first Instagram app, this version takes advantage of larger screen real estate with a three-column layout, persistent navigation, and enhanced productivity features.

### Key Features

- 📱 **Responsive Design** - Mobile-first approach with desktop enhancements
- 🎯 **Content-First** - Clean, minimalist interface that highlights user content
- ♿ **Accessible** - WCAG AA compliant with keyboard navigation support
- 🚀 **Performance** - Optimized for fast loading and smooth interactions
- 🌓 **Dark Mode Ready** - Complete dark mode color palette included
- 📦 **Component Library** - Comprehensive design system with reusable components
- ☁️ **Netlify Ready** - Pre-configured for seamless deployment

## 📋 Design Specification

The complete design specification is available in [`design-specification.json`](./design-specification.json), which includes:

- **Color Palette** - Light and dark themes with WCAG AA compliant colors
- **Typography System** - Font families, scales, weights, and line heights
- **Layout & Spacing** - Grid system, breakpoints, and spacing scale
- **Component Library** - 15+ UI components with states and variants
- **User Flows** - Detailed interaction patterns and user journeys
- **Accessibility** - ARIA labels, keyboard navigation, and screen reader support
- **Deployment Configuration** - Complete Netlify setup instructions

## 🎨 Color Palette

### Light Mode
```
Primary:    #0095F6  (Instagram Blue)
Secondary:  #262626  (Deep Charcoal)
Accent:     #ED4956  (Like Red)
Background: #FFFFFF / #FAFAFA / #F5F5F5
Text:       #262626 / #8E8E8E / #BDBDBD
```

### Dark Mode
```
Background: #000000 / #121212 / #1A1A1A
Text:       #FFFFFF / #A8A8A8 / #737373
```

### Instagram Gradient (Stories)
```css
linear-gradient(45deg, #F58529, #DD2A7B, #8134AF)
```

## 🏗️ Technology Stack

### Recommended Frontend Stack
```json
{
  "framework": "React 18+ or Next.js 14+",
  "styling": "Tailwind CSS or Styled Components",
  "stateManagement": "Zustand or Redux Toolkit",
  "routing": "React Router v6 or Next.js App Router",
  "forms": "React Hook Form + Zod",
  "http": "Axios or TanStack Query",
  "animations": "Framer Motion"
}
```

## 📦 Components

The design system includes the following components:

- **Navigation** - Top bar, sidebar, bottom bar (mobile)
- **Buttons** - Primary, secondary, text, danger variants
- **Forms** - Input fields, search, text areas
- **Cards** - Post cards, profile cards, story rings
- **Modal** - Post view, forms, confirmations
- **Dropdown** - Context menus, select options
- **Toast** - Success, error, info notifications
- **Avatar** - Multiple sizes with story indicators
- **Badge** - Notification counters
- **Loader** - Spinners and skeleton screens

## 🚀 Deployment on Netlify

This project is fully configured for seamless deployment on Netlify with optimized settings for performance and security.

### Quick Deploy (Recommended)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

**OR Manual Steps:**

1. **Connect Repository**
   - Log in to [Netlify](https://app.netlify.com)
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect to GitHub and select `billsusanto/instagram-clone-v1`

2. **Configure Build Settings** (Auto-detected via `netlify.toml`)
   ```
   Build command:    npm run build
   Publish directory: dist (or build for CRA)
   Node version:     18.x
   ```

3. **Set Environment Variables** (Optional)
   ```bash
   VITE_API_BASE_URL=your_api_url
   VITE_APP_NAME=Instagram Clone
   ```

4. **Deploy**
   - Click **"Deploy site"**
   - ✅ Automatic deployments on every push to `main`
   - ✅ Preview deployments for pull requests

### Manual Deploy with Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project (once you have source code)
npm install
npm run build

# Login to Netlify
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

### Build Configuration

The `netlify.toml` file includes:
- ✅ SPA routing support (client-side routing)
- ✅ Security headers (XSS, CSRF, CSP protection)
- ✅ Aggressive caching for static assets (1 year)
- ✅ No caching for HTML files (always fresh)
- ✅ Node.js 18.x environment
- ✅ Environment-specific configurations

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones) */
@media (min-width: 640px) { /* sm */ }

/* Medium devices (tablets) */
@media (min-width: 768px) { /* md */ }

/* Large devices (desktops) */
@media (min-width: 1024px) { /* lg */ }

/* Extra large devices */
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

## ♿ Accessibility

- **WCAG AA Compliant** - All color contrasts meet 4.5:1 ratio
- **Keyboard Navigation** - Full keyboard support with visible focus indicators
- **Screen Readers** - Proper ARIA labels and semantic HTML
- **Motion Preferences** - Respects `prefers-reduced-motion`
- **Skip Links** - Skip to main content functionality
- **Focus Management** - Proper tab order and focus trapping in modals

## 🎯 User Flows

The design specification includes detailed user flows for:

1. **Authentication** - Login, signup, password reset
2. **Create Post** - Upload, edit, caption, publish
3. **Engagement** - Like, comment, share, save
4. **Profile** - View, edit, follow/unfollow
5. **Explore** - Discover content, search
6. **Messaging** - Direct messages, conversations

## 📊 Mock Data Structure

```javascript
// User
{
  id: "user123",
  username: "johndoe",
  fullName: "John Doe",
  avatar: "https://via.placeholder.com/150",
  bio: "Photographer | Traveler | Coffee lover ☕",
  followers: 1234,
  following: 567,
  posts: 89,
  verified: false
}

// Post
{
  id: "post456",
  userId: "user123",
  images: ["https://via.placeholder.com/600"],
  caption: "Beautiful sunset 🌅 #sunset",
  likes: 342,
  comments: 28,
  timestamp: "2024-01-15T18:30:00Z",
  location: "Malibu Beach, CA"
}

// Comment
{
  id: "comment789",
  postId: "post456",
  userId: "user456",
  text: "Stunning capture! 📸",
  likes: 12,
  timestamp: "2024-01-15T19:00:00Z"
}
```

## 🛠️ Getting Started

```bash
# Clone the repository
git clone https://github.com/billsusanto/instagram-clone-v1.git

# Navigate to project directory
cd instagram-clone-v1

# Install dependencies (once you add package.json)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📐 Layout Structure

### Desktop (1024px+)
```
┌─────────────────────────────────────────┐
│  Header (Logo | Search | Actions)      │
├────────┬─────────────────┬──────────────┤
│ Side   │                 │  Suggested   │
│ Nav    │   Main Feed     │  Users &     │
│ Menu   │   (630px max)   │  Stories     │
│        │                 │              │
└────────┴─────────────────┴──────────────┘
```

### Mobile (0-639px)
```
┌─────────────────────────┐
│  Header (Logo | Actions)│
├─────────────────────────┤
│                         │
│     Main Feed           │
│     (Full Width)        │
│                         │
├─────────────────────────┤
│  Bottom Nav (5 icons)   │
└─────────────────────────┘
```

## 📝 Design Principles

1. **Content First** - Let user content shine
2. **Simplicity** - Remove unnecessary complexity
3. **Consistency** - Predictable patterns throughout
4. **Accessibility** - Inclusive by default
5. **Performance** - Fast and responsive

## 🔮 Future Enhancements

- [ ] Dark mode implementation (design tokens ready)
- [ ] Advanced search with filters
- [ ] Video post support with player controls
- [ ] Live streaming interface
- [ ] Shopping integration
- [ ] Creator analytics dashboard
- [ ] PWA support for offline functionality
- [ ] Netlify Functions for backend API
- [ ] Real-time notifications with WebSockets
- [ ] Image optimization pipeline

## 📁 Project Structure

```
instagram-clone-v1/
├── design-specification.json  # Complete design system
├── netlify.toml              # Netlify configuration
├── README.md                 # This file
├── .gitignore               # Git ignore rules
└── src/                     # Source code (to be implemented)
    ├── components/          # React components
    ├── styles/             # CSS/styling files
    ├── utils/              # Helper functions
    ├── hooks/              # Custom React hooks
    ├── pages/              # Page components
    └── assets/             # Images, icons, fonts
```

## 🧪 Testing Checklist

When implementing, ensure you test:

- [ ] Responsive design on multiple devices
- [ ] Keyboard navigation throughout the app
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG AA
- [ ] Form validation and error states
- [ ] Loading states for async operations
- [ ] Cross-browser compatibility
- [ ] Performance (Lighthouse score > 90)

## 📄 License

This is a design mockup project for educational and portfolio purposes.

## 🤝 Contributing

This is a personal project, but feedback and suggestions are welcome! Feel free to:

- Open an issue for bugs or suggestions
- Submit a pull request with improvements
- Star the repo if you find it useful

## 📧 Contact

For questions or feedback, please open an issue in this repository.

---

<div align="center">
  <p>Built with ❤️ for learning and portfolio purposes</p>
  <p>Design inspired by Instagram | Deployed on Netlify</p>
  <p><strong>Ready to deploy! Just add your implementation.</strong></p>
</div>
