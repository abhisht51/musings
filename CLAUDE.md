# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Direct Astro CLI access
npm run astro
```

## Architecture Overview

This is an **Astro 5.10.1** blog with server-side rendering using the Node.js adapter. The project emphasizes performance, developer experience, and content-first architecture.

### Content System Architecture

**Content Collections**: Uses Astro's Content Collections API with Zod schema validation in `src/content/config.ts`. All blog posts are Markdown files in `src/content/blog/` with strict frontmatter schema:

```typescript
{
  title: string;
  description: string;
  publishDate: date;
  updatedDate?: date;
  tags: string[] (default: []);
  draft: boolean (default: false);
  heroImage?: string;
}
```

**Content Workflow**: Create `.md` files in `src/content/blog/`, add YAML frontmatter, write Markdown content. Posts with `draft: true` are filtered out in production.

### Routing Structure

- **Static**: `/` (homepage), `/blog` (blog listing)
- **Dynamic**: `/blog/[slug]` uses `getStaticPaths()` with `prerender: true` for static generation
- Individual posts are generated from content collection with draft filtering

### Layout System

**BaseLayout** (`src/layouts/BaseLayout.astro`) is the main template with:
- Dark mode toggle with localStorage persistence and system preference detection
- Google Fonts integration (Inter + JetBrains Mono)
- Responsive header/footer
- Client-side dark mode script

### Styling Architecture

**Tailwind CSS** with key customizations:
- Class-based dark mode (`darkMode: 'class'`)
- Custom typography plugin configuration for code-centric content
- Font stack: Inter (body), JetBrains Mono (code)
- Custom prose styles for light/dark themes in blog posts

### Key Components

**Homepage** (`src/pages/index.astro`): Hero section + recent posts (latest 3)
**Blog Listing** (`src/pages/blog/index.astro`): Complete post grid with client-side tag filtering
**Blog Post** (`src/pages/blog/[slug].astro`): Full article layout with custom prose styling

## Image Management

Images are stored in `public/images/` and referenced as `/images/filename.jpg` in Markdown. Hero images are specified in frontmatter and automatically displayed in both listing and individual post layouts.

## Configuration Notes

- **Output**: Server mode with Node.js adapter
- **TypeScript**: Strict mode enabled
- **Integrations**: MDX + Tailwind CSS
- **Performance**: Static generation with minimal JavaScript

## Content Creation

1. Create `.md` file in `src/content/blog/`
2. Add required frontmatter (title, description, publishDate)
3. Optional: Add heroImage, tags, updatedDate
4. Use `draft: true` while writing, `draft: false` to publish
5. Images go in `public/images/`, reference as `/images/name.jpg`

## Development Patterns

The codebase follows content-first architecture with Git-based version control for posts. No external CMS dependencies. Dark mode is implemented as a first-class feature with system preference integration. Typography system uses font feature settings for optimal code display.