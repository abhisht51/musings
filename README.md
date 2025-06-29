# 🌟 Musings - Personal Blog

A modern, fast, and developer-friendly personal blog built with Astro. Features dark mode, coder-centric typography, and easy content management through Markdown files.

## ✨ Features

- **⚡ Lightning Fast**: Built with Astro for optimal performance
- **🌙 Dark Mode**: Toggle between light and dark themes
- **👨‍💻 Coder-Centric**: JetBrains Mono font and syntax highlighting
- **📝 Markdown Content**: Write posts in Markdown with frontmatter
- **🏷️ Tag System**: Organize and filter posts by tags  
- **📱 Responsive**: Looks great on all devices
- **🎨 Tailwind CSS**: Modern, utility-first styling
- **🖼️ Image Support**: Easy image integration in posts
- **🔍 SEO Optimized**: Proper meta tags and structured data
- **🚀 SSR Ready**: Configured for server-side rendering

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321` to see your blog!

## 📝 Adding New Blog Posts

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with post metadata:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
publishDate: 2024-01-15T00:00:00Z
updatedDate: 2024-01-16T00:00:00Z  # Optional
tags: ["javascript", "web-dev", "tutorial"]
draft: false  # Set to true to hide from public
heroImage: "/images/your-hero-image.jpg"  # Optional
---
```

3. Write your content in Markdown below the frontmatter
4. Save and your post will automatically appear on the blog!

## 🖼️ Adding Images

### Method 1: Static Images
1. Place images in `public/images/`
2. Reference in Markdown: `![Alt text](/images/your-image.jpg)`

### Method 2: Hero Images
Add to frontmatter: `heroImage: "/images/hero.jpg"`

## 🎨 Customization

### Colors & Styling
- Edit `tailwind.config.mjs` for theme customization
- Modify `src/layouts/BaseLayout.astro` for layout changes
- Update CSS custom properties in the base layout

### Typography
- Primary font: Inter (sans-serif)
- Monospace font: JetBrains Mono
- Configured in `tailwind.config.mjs`

### Dark Mode
Dark mode is handled automatically with:
- System preference detection
- Local storage persistence  
- Smooth transitions

## 📁 Project Structure

```
musings/
├── src/
│   ├── content/
│   │   ├── blog/          # Your blog posts (.md files)
│   │   └── config.ts      # Content configuration
│   ├── layouts/
│   │   └── BaseLayout.astro  # Main layout template
│   └── pages/
│       ├── index.astro       # Homepage
│       └── blog/
│           ├── index.astro   # Blog listing page
│           └── [...slug].astro  # Dynamic blog post pages
├── public/
│   └── images/            # Static images
├── astro.config.mjs       # Astro configuration
└── tailwind.config.mjs    # Tailwind configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options

**Vercel** (Recommended)
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

**Static Hosting**
Upload the `dist/` folder to any static host (GitHub Pages, AWS S3, etc.)

## 🎯 Content Best Practices

### SEO-Friendly Posts
- Always include `title` and `description` in frontmatter
- Use descriptive `tags` for better categorization
- Add `heroImage` for social media sharing
- Keep descriptions under 160 characters

### Writing Tips
- Use proper heading hierarchy (# ## ###)
- Include code blocks with language specification
- Add alt text to images
- Use bullet points and numbered lists for readability

### Image Guidelines
- Optimize images before adding (recommended: < 1MB)
- Use descriptive filenames
- Include alt text for accessibility
- Consider using WebP format for better compression

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

---

Built with ❤️ using Astro
