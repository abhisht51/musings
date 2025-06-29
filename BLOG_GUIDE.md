# 📝 Blog Writing Guide

## Quick Start

### 1. Create a New Post

1. Navigate to `src/content/blog/`
2. Create a new `.md` file (e.g., `my-awesome-post.md`)
3. Add frontmatter and content (see template below)

### 2. Blog Post Template

```markdown
---
title: "Your Amazing Blog Post Title"
description: "A compelling description that will be used for SEO and social sharing"
publishDate: 2024-01-20T00:00:00Z
updatedDate: 2024-01-22T00:00:00Z  # Optional - only if you update the post
tags: ["javascript", "web-development", "tutorial"]
draft: false  # Set to true while writing, false to publish
heroImage: "/images/my-post-hero.jpg"  # Optional but recommended
---

# Your Main Heading

Your content goes here! You can use all standard Markdown features.

## Code Examples

```javascript
const greeting = "Hello, World!";
console.log(greeting);
```

## Images

![Alt text for accessibility](/images/your-image.jpg)

## Links

Check out [Astro's documentation](https://docs.astro.build) for more info.
```

### 3. Adding Images

**Step 1:** Add your images to `public/images/`
```bash
# Copy your image
cp ~/Downloads/my-awesome-screenshot.png public/images/
```

**Step 2:** Reference in your markdown
```markdown
![Screenshot of the feature](/images/my-awesome-screenshot.png)
```

**For hero images:** Add to frontmatter
```yaml
heroImage: "/images/my-post-hero.jpg"
```

### 4. Previewing Your Post

```bash
# Start development server
npm run dev

# Visit your post at:
# http://localhost:4321/blog/your-post-slug
```

## Advanced Features

### Tags

Tags help organize your content:
```yaml
tags: ["react", "typescript", "performance", "tutorial"]
```

### Draft Posts

Keep posts private while writing:
```yaml
draft: true  # Won't appear on the site
```

### Updated Dates

Track when you make significant updates:
```yaml
publishDate: 2024-01-20T00:00:00Z
updatedDate: 2024-01-25T00:00:00Z  # Shows "Updated" label
```

## Content Guidelines

### Writing Tips

1. **Start with a hook** - Make the first paragraph compelling
2. **Use subheadings** - Break up long content
3. **Include code examples** - Show, don't just tell
4. **Add images** - Visual content keeps readers engaged
5. **End with a call-to-action** - Ask questions, invite discussion

### SEO Best Practices

1. **Title:** 50-60 characters, include main keyword
2. **Description:** 150-160 characters, summarize the post
3. **Headings:** Use H2, H3 properly for structure
4. **Images:** Always include alt text
5. **Links:** Link to relevant resources

### Code Formatting

**Inline code:** Use `backticks` for short code snippets

**Code blocks:** Use triple backticks with language
```javascript
// This gets syntax highlighting
function myFunction() {
  return "Hello!";
}
```

**Supported languages:**
- `javascript` / `js`
- `typescript` / `ts`
- `python`
- `bash` / `shell`
- `json`
- `yaml`
- `html`
- `css`
- `markdown`

## File Organization

```
src/content/blog/
├── building-with-astro.md
├── my-new-post.md
└── tutorial-series/
    ├── part-1.md
    └── part-2.md

public/images/
├── astro-blog-hero.jpg
├── my-new-post-screenshot.png
└── tutorial-series/
    ├── part-1-diagram.png
    └── part-2-results.png
```

## Publishing Workflow

### 1. Write Your Post
```markdown
---
title: "My Post"
draft: true  # Keep as draft while writing
---
```

### 2. Preview Locally
```bash
npm run dev
```

### 3. Add Images
- Upload to `public/images/`
- Reference in markdown
- Test image loading

### 4. Publish
```markdown
---
draft: false  # Change to false
publishDate: 2024-01-20T00:00:00Z  # Set publish date
---
```

### 5. Build & Deploy
```bash
npm run build  # Test the build
# Deploy to your hosting platform
```

## Troubleshooting

### Images Not Loading?

1. **Check the path:** Images should be in `public/images/`
2. **Verify filename:** Case-sensitive, match exactly
3. **File size:** Keep under 2MB for web performance
4. **Format:** Use `.jpg`, `.png`, or `.webp`

### Post Not Appearing?

1. **Check draft status:** Must be `draft: false`
2. **Verify frontmatter:** YAML syntax must be correct
3. **Filename:** Should end with `.md`
4. **Location:** Must be in `src/content/blog/`

### Build Errors?

1. **Frontmatter format:** Check YAML syntax
2. **Date format:** Use ISO format `2024-01-20T00:00:00Z`
3. **Missing fields:** Title and description are required

## Content Ideas

### Technical Posts
- Tutorial series
- Code reviews
- Tool comparisons
- Performance optimizations
- Architecture decisions

### Personal Posts
- Learning journeys
- Project retrospectives
- Industry observations
- Book/course reviews
- Conference notes

## Example Posts Structure

### Tutorial Post
```markdown
---
title: "Building a React Component Library from Scratch"
description: "Step-by-step guide to creating, testing, and publishing your own React component library"
tags: ["react", "component-library", "npm", "tutorial"]
---

# Introduction
Why build your own component library?

## Prerequisites
What you'll need to follow along

## Step 1: Project Setup
[Code examples and explanations]

## Step 2: Creating Components
[More detailed content]

## Conclusion
What we learned and next steps
```

### Opinion/Analysis Post
```markdown
---
title: "Why I Switched from Next.js to SvelteKit"
description: "My experience migrating a production app and lessons learned"
tags: ["nextjs", "sveltekit", "migration", "opinion"]
---

# The Problem
What led me to consider switching

## The Migration Process
Challenges and solutions

## Results
Performance, DX, and other improvements

## Would I Do It Again?
Final thoughts and recommendations
```

Happy blogging! 🚀