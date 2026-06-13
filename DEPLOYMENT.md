# Deployment & SEO Guide - Aarush Singh Portfolio

This guide covers deployment procedures, build steps, and search engine optimization (SEO) tasks for Aarush Singh's portfolio website.

---

## 1. Build Verification

Before deploying your portfolio, compile the source files locally to ensure that everything is error-free:

```bash
# Install dependencies
npm install

# Run development server to inspect
npm run dev

# Compile production-ready assets
npm run build
```

This compiles static assets into the `dist/` directory.

---

## 2. Deployment Strategies

### Option A: Vercel (Recommended)

Vercel provides immediate updates, fast CDNs, and seamless custom domain setups.

1. **Upload your code** to a GitHub repository.
2. **Import your project** on the [Vercel Dashboard](https://vercel.com/new).
3. **Configure Project Settings**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy**: Click **Deploy**. Vercel will build and host your portfolio.
5. **Custom Domain**: Connect a domain under **Project Settings > Domains**.

---

### Option B: GitHub Pages

For hosting directly from your GitHub repository:

1. **Install the `gh-pages` deployment package**:
   ```bash
   npm install -D gh-pages
   ```
2. **Add deployment scripts** in your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. **Configure the Base URL** in `vite.config.js` if deploying to a subpath (e.g. `https://<username>.github.io/<repo-name>/`):
   ```javascript
   export default defineConfig({
     base: '/<repo-name>/', // Remove or set to '/' if using a custom root domain
     plugins: [react(), tailwindcss()],
   });
   ```
4. **Run deployment**:
   ```bash
   npm run deploy
   ```
5. **Refreshes**: Since this portfolio is a single-page site using hash-anchors (`#home`, `#about`, etc.), standard reloads on GitHub Pages work seamlessly without requiring 404.html redirection hacks.

---

## 3. Google Search Console & Indexing Setup

To ensure recruiters searching for **"Aarush Singh Software Engineer Melbourne"** find your website:

1. **Verify Ownership**:
   - Go to [Google Search Console](https://search.google.com/search-console/about).
   - Enter your site domain (e.g., `https://aarushsingh.com` or `https://aarushsingh0059.github.io/`).
   - Choose the **HTML Tag** verification method, copy the `<meta name="google-site-verification" content="..." />` tag, and add it inside the `<head>` of your `index.html`.
   - Redeploy the site and click **Verify** in Search Console.
2. **Submit Sitemap**:
   - Navigate to **Sitemaps** on the left menu.
   - Enter `sitemap.xml` and click **Submit**. Google will read this file to crawl your page.
3. **Request Indexing**:
   - Paste your home page URL into the Search Console search bar.
   - Click **Request Indexing** to prioritize Google's crawler visiting your site.

---

## 4. Launch SEO Checklist

- [x] **Meta Title & Description**: Verified in `index.html` head.
- [x] **Open Graph & Twitter Cards**: Metadata injected to display visual preview cards on LinkedIn and Twitter.
- [x] **Structured Schema Data**: Person/Graduate Software Engineer JSON-LD schema injected.
- [x] **robots.txt**: Created to authorize search engine crawlers.
- [x] **sitemap.xml**: Configured for search engines.
