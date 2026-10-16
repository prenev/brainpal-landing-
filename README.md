# Brain Pal Landing

Landing website for **Brain Pal: Mood & Calm**.

- Live site: https://prenev.github.io/brain-pal/
- Repository: https://github.com/prenev/brainpal-landing-

## What this project includes

- Marketing homepage for Brain Pal
- App highlights, screenshots, and FAQ content
- Legal pages rendered from Markdown
- Static-friendly Next.js setup

## Tech stack

- Next.js
- React
- Tailwind CSS
- TypeScript
- Biome

## Local development

Requirements: Node.js 20+ and pnpm.

```bash
git clone https://github.com/prenev/brainpal-landing-.git
cd brainpal-landing-
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Build and lint

```bash
pnpm build
pnpm lint
```

## Content configuration

Core website content and metadata are managed in `src/config.ts`.

Update this file to change:

- Site/app name and description
- Store links and app metadata
- Feature cards
- Screenshot list
- FAQ entries

## Legal pages

- Privacy Policy: `src/app/privacy-policy/privacy.md`
- Terms of Service: `src/app/terms-of-service/terms.md`

## License

MIT — see [LICENSE](LICENSE).
