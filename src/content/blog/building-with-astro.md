---
title: "Building This Blog with Astro - A Developer's Journey"
description: "My experience building a personal blog with Astro, including the wins, challenges, and lessons learned along the way."
publishDate: 2025-06-31T00:00:00Z
updatedDate: 2025-06-31T00:00:00Z
tags: ["astro", "web-development", "static-sites", "performance"]
draft: false
heroImage: "/images/what-is-astro-cover-image.webp"
author: "Abhisht Singh"
---

# Why I Chose Astro for This Blog

After years of building complex web applications with React, Vue, and Angular, I wanted something different for my personal blog. Something that would prioritize **performance** and **simplicity** over framework complexity.

Enter [Astro](https://astro.build) - a modern static site generator that promised the best of both worlds.

## The Requirements

Before diving into the tech stack, I had a clear list of requirements:

```typescript
interface BlogRequirements {
  performance: 'blazing-fast';
  seo: 'excellent';
  darkMode: boolean;
  markdownSupport: boolean;
  imageOptimization: boolean;
  deploymentComplexity: 'minimal';
}

const myBlog: BlogRequirements = {
  performance: 'blazing-fast',
  seo: 'excellent',
  darkMode: true,
  markdownSupport: true,
  imageOptimization: true,
  deploymentComplexity: 'minimal'
};
```

## What Makes Astro Different

Astro's approach is refreshingly simple: **ship zero JavaScript by default**. Unlike traditional SPAs that load a full framework bundle, Astro generates static HTML and only hydrates components that actually need interactivity.

### The Islands Architecture

One of Astro's killer features is its "Islands Architecture":

- Most of the page is static HTML
- Interactive components are isolated "islands"
- Each island can use any framework (React, Vue, Svelte, etc.)
- Islands only load the JavaScript they need

This means I can have a lightning-fast blog with sprinkles of interactivity exactly where I need them.

## Content Management Strategy

For content, I went with the classic approach:

**Markdown files + Frontmatter = Perfect Developer Experience**

Each blog post is a `.md` file in `src/content/blog/` with YAML frontmatter:

```yaml
---
title: "My Awesome Post"
description: "A description that works great for SEO"
publishDate: 2024-01-20T00:00:00Z
tags: ["javascript", "web-dev"]
draft: false
heroImage: "/images/hero.jpg"
---
```

### Why Not a Headless CMS?

I considered headless CMS options like Strapi, Contentful, or Sanity, but for a personal blog, I wanted:

- **Version control** for my content (everything in Git)
- **Offline writing** capability
- **No external dependencies** or monthly fees
- **Full control** over the content structure

## Adding Images Made Easy

One thing I really wanted was dead-simple image handling. Here's my approach:

1. **Drop images** in `public/images/`
2. **Reference them** in markdown: `![Alt text](/images/my-image.jpg)`
3. **Astro handles the rest** - optimization, lazy loading, responsive images

For blog posts with hero images, I just add the `heroImage` field to the frontmatter, and the template automatically displays it with proper styling.

## Performance Results

The results speak for themselves:

- **Lighthouse Score**: 100/100/100/100 ⭐
- **First Contentful Paint**: ~0.8s
- **Bundle Size**: < 50KB (mostly CSS and fonts)
- **Time to Interactive**: ~1.2s

Compare this to a typical React blog that might ship 200KB+ of JavaScript before showing any content!

## Deployment & Hosting

Deploying is as simple as:

```bash
npm run build
# Upload the dist/ folder anywhere
```

I'm using Vercel for hosting, but you could deploy this to:
- Netlify
- GitHub Pages  
- AWS S3 + CloudFront
- Any static hosting provider

## Lessons Learned

### What Worked Great

- **Developer Experience**: Writing in Markdown feels natural
- **Performance**: The site is genuinely fast
- **Customization**: Full control over styling and behavior
- **SEO**: Built-in sitemap, RSS feed, and meta tag management

### What Was Challenging

- **Learning Curve**: Astro has its own patterns and conventions
- **Ecosystem**: Smaller plugin ecosystem compared to Gatsby/Next.js
- **Advanced Features**: Some complex interactions require more thought

## Would I Choose Astro Again?

**Absolutely.** For content-focused sites like blogs, documentation, or marketing pages, Astro hits the sweet spot between simplicity and power.

The mental model is straightforward: write components, write content, get a fast website. No complex build configurations, no bundle analysis nightmares, no framework lock-in.

## Next Steps

I'm planning to add:

- [ ] Search functionality
- [ ] RSS feed
- [ ] Newsletter subscription
- [ ] Better code syntax highlighting
- [ ] Reading time estimates

If you're considering Astro for your next project, I'd highly recommend giving it a try. The documentation is excellent, and the community is welcoming and helpful.

---

*Have you tried Astro? What's your go-to stack for content sites? I'd love to hear your thoughts!*