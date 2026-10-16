<div align="center">

<img src="public/icon-192.png" alt="App Landing" width="96" height="96">

# app-landing

[![Stars](https://img.shields.io/github/stars/bohd4nx/app-landing?style=flat&color=7c3aed&label=Stars)](https://github.com/bohd4nx/app-landing/stargazers)
[![Forks](https://img.shields.io/github/forks/bohd4nx/app-landing?style=flat&color=7c3aed&label=Forks)](https://github.com/bohd4nx/app-landing/forks)
[![License](https://img.shields.io/github/license/bohd4nx/app-landing?style=flat&color=7c3aed)](LICENSE)

100% vibe-coded mobile app landing page template — built with Next.js, React, and Tailwind CSS. Drop in your app's content, deploy, done.

**[Live Demo](https://landing.bohd4n.dev)** · **[Report Bug](https://github.com/bohd4nx/app-landing/issues)**

</div>

---

## Features

- Hero section with App Store & Google Play buttons, rating, version, and OS info
- Screenshot gallery with always-visible violet scrollbar
- Pricing tiers (Free / Pro / Teams) with highlighted card
- Feature cards, customer reviews with star ratings, and FAQ accordion
- 4-column desktop footer with Legal, Product, and Follow Us sections
- Light / Dark / System theme toggle with localStorage persistence
- Privacy Policy and Terms of Service pages rendered from Markdown
- Dot grid background via CSS `body::before` pseudo-element
- Static export (`output: 'export'`) — deploy anywhere, no server needed
- App Store metadata auto-fetch at build time (optional)

---

## Quick Start

**Requires:** Node.js 20+, pnpm

```bash
git clone https://github.com/bohd4nx/app-landing.git
cd app-landing
pnpm install
pnpm dev
```

Open `http://localhost:3000` — live reload included.

```bash
pnpm build   # static export → out/
pnpm lint    # biome check --write
```

---

## Configuration

Everything is in one file: **`src/config.ts`**

```ts
export const site = {
  name: "Your App Name",
  description: "...",
  logo: "/icon-192.png",
  storeLinks: { apple: "#", google: "#" },
  rating: { score: 4.8, count: "1.2K" },
  version: "1.0.0",
  minimumOS: "13.0",
  releaseDate: "Jan 10, 2026",
  social: [...],
}
```

| Key                         | Description                                                   |
| --------------------------- | ------------------------------------------------------------- |
| `site.name`                 | App name shown in header, footer, and tab title               |
| `site.logo`                 | Path to app icon (used everywhere, SVG recommended)           |
| `site.storeLinks`           | Apple and Google Play deep links                              |
| `site.social`               | Social icons in footer — supports any `react-icons` icon      |
| `storeConfig.fetchRealData` | Set to `true` to pull live data from App Store at build time  |
| `storeConfig.appStoreAppId` | Numeric App Store ID (from the app URL)                       |
| `features`                  | Feature cards array — title, description, icon                |
| `screenshots`               | Array of image paths in `/public/assets/screenshots/`         |
| `pricingTiers`              | Pricing cards — add `highlighted: true` for the featured tier |
| `reviews`                   | Customer testimonials with author and star rating             |
| `faqs`                      | FAQ items — question and answer                               |

---

## Legal Pages

Edit the Markdown files directly — they auto-render on the page:

- **Privacy Policy:** `src/app/privacy-policy/privacy.md`
- **Terms of Service:** `src/app/terms-of-service/terms.md`

---

## Interest form (email sign-ups)

The "Join the waitlist" form on the home page (`src/components/InterestForm`) uses
[react-hook-form](https://react-hook-form.com) + [zod](https://zod.dev) and posts to
[Web3Forms](https://web3forms.com), which emails every submission to you.

1. Create a free access key at web3forms.com (enter the email that should get the sign-ups).
2. If your Web3Forms plan allows it, restrict the key to `wobbi.app` in its dashboard.
3. (Optional override; the deploy workflow already has a default key.) In GitHub: **Settings → Secrets and variables → Actions → Variables → New repository variable**,
   name `WEB3FORMS_KEY`, value = your access key. (It is a public key by design, so a variable is fine.)
4. Re-run **Deploy to GitHub Pages**. Without the variable the form shows "Sign-ups aren't switched on yet".

Locally: `NEXT_PUBLIC_WEB3FORMS_KEY=your-key pnpm dev`.

## Phone mockups

The iPhone images in `public/assets/mockups/` are generated, not hand-made:

```bash
python3 scripts/make-mockups.py public/assets/screens public/assets/mockups   # needs Pillow
```

`public/assets/screens/` holds the bare app screens; the script draws the frame, Dynamic Island,
status bar and home indicator around each one.

---

## SEO and social sharing

Everything is generated at build time from `src/config.ts` (`site.title`, `site.description`, `site.ogImage`, FAQs):

- title, description, canonical URL, robots, Open Graph and Twitter card tags (`src/app/layout.tsx`)
- JSON-LD structured data: Organization, WebSite, MobileApplication and FAQPage (`src/app/page.tsx`)
- `sitemap.xml` and `robots.txt` (`src/app/sitemap.ts`, `src/app/robots.ts`)
- 1200x630 share image `public/og-share.png`, favicons and a web manifest

After the first deploy, tell search engines about the site:

1. Google Search Console: add `wobbi.app` as a property, then submit `https://wobbi.app/sitemap.xml`.
   For the HTML-tag method, set `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (and `NEXT_PUBLIC_BING_SITE_VERIFICATION`
   for Bing Webmaster Tools) as repo variables and pass them to the build step.
2. Check link previews with the Facebook Sharing Debugger and the LinkedIn Post Inspector (X and iMessage read the same tags).

---

## Deploy

### GitHub Pages (included)

This repo includes `.github/workflows/deploy-pages.yml` which deploys on every push to `main`.

1. Go to **Settings → Pages**.
2. Set **Source** to **GitHub Actions**.
3. Push to `main` and wait for the **Deploy to GitHub Pages** workflow.

The workflow builds `out/` and publishes to:

- `https://<your-user-or-org>.github.io/<repository-name>/`

### Custom domain: `wobbi.app` (Namecheap)

This repo includes `public/CNAME` set to `wobbi.app`.

In Namecheap **Advanced DNS**, set:

| Type  | Host | Value                  | TTL     |
| ----- | ---- | ---------------------- | ------- |
| A     | @    | 185.199.108.153        | Automatic |
| A     | @    | 185.199.109.153        | Automatic |
| A     | @    | 185.199.110.153        | Automatic |
| A     | @    | 185.199.111.153        | Automatic |
| CNAME | www  | prenev.github.io       | Automatic |

Then in GitHub:

1. Go to **Settings → Pages**.
2. Set **Custom domain** to `wobbi.app`.
3. Enable **Enforce HTTPS** after DNS is verified.

### Other static hosts

Build output is generated in `out/`, so you can also deploy it to Netlify, Vercel (static), Cloudflare Pages, or any static hosting provider.

---

## License

MIT — see [LICENSE](LICENSE)
