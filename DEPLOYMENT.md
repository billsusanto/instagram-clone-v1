# 🚀 Deployment Guide - Netlify

This guide walks you through deploying your Instagram Clone to Netlify step-by-step.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ GitHub account with push access to this repository
- ✅ Netlify account (free tier works great) - [Sign up here](https://app.netlify.com/signup)
- ✅ Your application built and ready (React, Next.js, Vite, etc.)
- ✅ `package.json` with build scripts configured

## 🎯 Deployment Methods

### Method 1: Automatic Deploy via GitHub (Recommended)

This method auto-deploys whenever you push to the `main` branch.

#### Step 1: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select repository: `billsusanto/instagram-clone-v1`

#### Step 2: Configure Build Settings

Netlify will auto-detect settings from `netlify.toml`, but verify:

```yaml
Base directory:        (leave empty unless monorepo)
Build command:         npm run build
Publish directory:     dist          # or 'build' for CRA
Functions directory:   netlify/functions (optional)
```

**Framework Detection:**
- Vite → `dist`
- Create React App → `build`
- Next.js → Requires `@netlify/plugin-nextjs`

#### Step 3: Environment Variables (Optional)

If your app needs environment variables:

1. Go to **Site settings** → **Environment variables**
2. Click **"Add a variable"**
3. Add your variables:

```bash
VITE_API_BASE_URL=https://api.example.com
VITE_APP_NAME=Instagram Clone
VITE_ENABLE_ANALYTICS=true
```

**Note:** For Vite, use `VITE_` prefix. For CRA, use `REACT_APP_` prefix. For Next.js, use `NEXT_PUBLIC_` prefix.

#### Step 4: Deploy!

1. Click **"Deploy [site-name]"**
2. Wait for build to complete (usually 1-3 minutes)
3. ✅ Your site is live! You'll get a URL like: `https://random-name-123456.netlify.app`

#### Step 5: Custom Domain (Optional)

1. Go to **Domain settings** → **Add custom domain**
2. Enter your domain (e.g., `instagram-clone.example.com`)
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)
5. Wait for DNS propagation (up to 24 hours)

---

### Method 2: Manual Deploy with Netlify CLI

For one-time deployments or testing.

#### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

#### Step 2: Build Your Project

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

#### Step 3: Login to Netlify

```bash
netlify login
```

This will open a browser window to authorize the CLI.

#### Step 4: Initialize Site

```bash
netlify init
```

Follow the prompts:
- **Create & configure a new site:** Yes
- **Team:** Select your team
- **Site name:** Enter a unique name (or leave blank for random)
- **Build command:** `npm run build`
- **Directory to deploy:** `dist` (or `build`)

#### Step 5: Deploy

```bash
# Deploy to production
netlify deploy --prod

# Or deploy to preview first
netlify deploy
```

---

### Method 3: Drag & Drop Deploy

For quick testing without Git integration.

1. Build your project locally: `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag your `dist` or `build` folder to the dropzone
4. ✅ Instant deployment! (No auto-updates)

**Note:** This method doesn't support continuous deployment.

---

## 🔧 Configuration Details

### netlify.toml Explanation

The `netlify.toml` file in this repo configures:

```toml
[build]
  command = "npm run build"    # Build command
  publish = "dist"             # Output directory
  functions = "netlify/functions"  # Serverless functions
  
[build.environment]
  NODE_VERSION = "18"          # Node.js version
```

**Redirects:**
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
This ensures client-side routing works (SPA support).

**Security Headers:**
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    # ... more security headers
```

**Caching Strategy:**
- Static assets (JS, CSS, images): 1 year cache
- HTML files: No cache (always fresh)

---

## 🌐 Post-Deployment Checklist

After deploying, verify everything works:

### Functional Tests
- [ ] Homepage loads correctly
- [ ] Navigation works (all links/routes)
- [ ] Images load properly
- [ ] Forms submit correctly
- [ ] API calls work (if applicable)
- [ ] Error pages display (404, 500)

### Responsive Design
- [ ] Test on mobile device (320px - 767px)
- [ ] Test on tablet (768px - 1023px)
- [ ] Test on desktop (1024px+)

### Performance
- [ ] Run [Lighthouse audit](https://web.dev/measure/)
  - Target: Performance > 90
  - Target: Accessibility > 90
  - Target: Best Practices > 90
  - Target: SEO > 90

### Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Color contrast meets WCAG AA
- [ ] Focus indicators visible

### Security
- [ ] HTTPS enabled (automatic with Netlify)
- [ ] Security headers present (check in DevTools)
- [ ] No sensitive data exposed

---

## 🔄 Continuous Deployment

Once connected to GitHub, Netlify automatically:

✅ **Deploys on push to `main`**
- Every commit to main triggers a production build

✅ **Creates preview deployments for PRs**
- Pull requests get unique preview URLs
- Test changes before merging

✅ **Provides deploy previews for branches**
- Each branch gets its own deploy URL

### Deploy Notifications

Enable Slack/Discord notifications:
1. Go to **Site settings** → **Build & deploy** → **Deploy notifications**
2. Add notification for:
   - Deploy started
   - Deploy succeeded
   - Deploy failed

---

## 🛠️ Troubleshooting

### Build Failed

**Error: `Command failed with exit code 1`**

**Solutions:**
1. Check build logs in Netlify dashboard
2. Verify `package.json` scripts are correct
3. Ensure all dependencies are in `dependencies` (not just `devDependencies`)
4. Try building locally first: `npm run build`

**Error: `Module not found`**

**Solutions:**
1. Clear cache: **Deploys** → **Trigger deploy** → **Clear cache and deploy**
2. Check import paths (case-sensitive in production)
3. Verify all imports use correct file extensions

### 404 on Page Refresh

**Cause:** SPA routing not configured

**Solution:** Ensure `netlify.toml` has:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Environment Variables Not Working

**Solutions:**
1. Verify variable names match your framework:
   - Vite: `VITE_*`
   - CRA: `REACT_APP_*`
   - Next.js: `NEXT_PUBLIC_*`
2. Rebuild after adding variables
3. Check variables are set in correct context (production/preview)

### Slow Build Times

**Solutions:**
1. Enable caching in build settings
2. Upgrade to Node.js 18 or 20
3. Use `npm ci` instead of `npm install` (faster)
4. Consider build plugins for optimization

---

## 📊 Monitoring & Analytics

### Netlify Analytics (Optional, Paid)

Enable in **Site settings** → **Analytics** for:
- Page views
- Unique visitors
- Top pages
- Bandwidth usage
- No JavaScript required (server-side)

### Custom Analytics

Add Google Analytics, Plausible, or similar:

```javascript
// In your app
if (import.meta.env.PROD) {
  // Initialize analytics
}
```

---

## 🚀 Performance Optimization

### Image Optimization

Use Netlify Image CDN or optimize before deploy:

```bash
# Install sharp for image optimization
npm install sharp --save-dev
```

### Asset Optimization

The `netlify.toml` already includes:
- ✅ Asset minification
- ✅ Gzip/Brotli compression
- ✅ CDN caching

### Code Splitting

Ensure your bundler (Vite/Webpack) is configured for code splitting:

```javascript
// Dynamic imports
const Component = lazy(() => import('./Component'));
```

---

## 🔐 Security Best Practices

1. **Enable security headers** (already in `netlify.toml`)
2. **Use environment variables** for secrets (never commit `.env`)
3. **Enable HTTPS** (automatic)
4. **Set up Netlify Forms** with spam protection
5. **Use Netlify Functions** for sensitive API calls

---

## 💰 Cost Considerations

### Netlify Free Tier Includes:
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ HTTPS included
- ✅ CDN included
- ✅ Form submissions (100/month)
- ✅ Serverless functions (125k requests/month)

### When to Upgrade:
- Need more bandwidth (>100 GB/month)
- Need more build minutes (>300/month)
- Want Netlify Analytics
- Need priority support

---

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Netlify Community Forums](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)
- [Netlify CLI Docs](https://cli.netlify.com/)

---

## 🆘 Need Help?

If you encounter issues:

1. **Check build logs** in Netlify dashboard
2. **Search Netlify forums** for similar issues
3. **Review this repository's issues** on GitHub
4. **Contact Netlify support** (even on free tier)

---

## ✅ Quick Reference

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy to preview
netlify deploy

# Deploy to production
netlify deploy --prod

# Open site in browser
netlify open:site

# View site logs
netlify logs

# Link to existing site
netlify link
```

---

<div align="center">
  <p><strong>Happy Deploying! 🎉</strong></p>
  <p>Your Instagram Clone is ready for the world!</p>
</div>
