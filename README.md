# Dharmendra Sarswat - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design, dark mode support, and a blog section.

## Features

- 🎨 Modern and responsive design
- 🌓 Dark mode support
- ⚡ Fast performance with Next.js
- 📱 Mobile-first approach
- 🔍 SEO optimized
- 📊 Analytics integration
- 📝 Blog section with MDX support
- 🎭 Smooth animations with Framer Motion

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode support
- [Vercel Analytics](https://vercel.com/analytics) - Analytics

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/dharmasarswat/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
- `pnpm analyze` - Analyze bundle size

## Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── home/             # Home page components
│   ├── providers/        # Context providers
│   ├── shared/           # Shared components
│   └── ui/               # UI components
├── content/              # Blog content
├── data/                 # Static data
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com). Simply push to your repository and Vercel will automatically deploy your site.

## License

MIT
