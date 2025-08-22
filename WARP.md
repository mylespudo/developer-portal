# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Core Development
- **Start development server**: `npm run dev` or `yarn dev`
  - Runs Next.js dev server on http://localhost:3000
  - Includes hot reload and file watching
- **Build production**: `npm run build` or `yarn build`
  - Creates static export in `out/` directory
  - Uses Next.js static export feature
- **Start production server**: `npm start` or `yarn start`
- **Lint code**: `npm run lint` or `yarn lint`

### Deployment
- **Deploy to Firebase**: `npm run deploy` or `yarn deploy`
  - Automatically builds and deploys to Firebase Hosting
  - Uses hardcoded Firebase token in package.json script
  - Deploys to project "myles-developer" (default environment)

### Package Management
- **Install dependencies**: `npm install` or `yarn install`
- Uses Yarn as the primary package manager (yarn.lock present)

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 13.4.2 with static export configuration
- **Content**: Markdoc for documentation processing
- **Styling**: Tailwind CSS with custom theme and typography plugin
- **Search**: FlexSearch with custom indexing system
- **Hosting**: Firebase Hosting
- **Package Manager**: Yarn

### Project Structure
```
src/
├── components/          # Reusable React components
├── constants/          # Application constants
├── markdoc/           # Markdoc configuration and search system
├── pages/             # Next.js pages and documentation files
└── styles/            # CSS files and Tailwind configuration
```

### Key Architectural Patterns

#### Documentation System
- **Content Format**: Documentation written in Markdown with Markdoc extensions
- **File Location**: Documentation files are in `src/pages/*.md` and `src/pages/docs/*.md`
- **Front Matter**: Each page uses YAML frontmatter for title, description, and URL
- **Custom Tags**: Supports custom Markdoc tags like `{% callout %}`, `{% figure %}`, and `{% quick-links %}`

#### Search Implementation
- **Engine**: Custom FlexSearch implementation in `src/markdoc/search.mjs`
- **Indexing**: Automatically scans all `.md` files in `src/pages/` directory
- **Features**: Full-text search with context-aware results and section-level indexing
- **Access**: Available via search input or `⌘K` keyboard shortcut

#### Navigation System
- **Configuration**: Hardcoded navigation structure in `src/components/Layout.jsx`
- **Structure**: Hierarchical navigation with sections and links
- **Features**: Mobile-responsive with hamburger menu, automatic previous/next page linking

#### Styling Architecture
- **Framework**: Tailwind CSS with custom configuration
- **Fonts**: Inter (sans-serif) and Lexend (display font)
- **Theme**: Supports dark/light mode switching
- **Components**: Headless UI for accessible interactive components

### Content Management

#### Adding New Documentation Pages
1. Create `.md` file in `src/pages/` or `src/pages/docs/`
2. Add YAML frontmatter with title, description, and URL
3. Update navigation structure in `src/components/Layout.jsx`
4. Content is automatically indexed for search

#### Custom Markdoc Components
- **Callouts**: `{% callout title="Title" type="note|warning" %}`
- **Figures**: `{% figure src="/path" alt="text" caption="text" %}`
- **Quick Links**: `{% quick-links %}{% quick-link title="Title" href="/path" %}{% /quick-links %}`

#### Navigation Structure
Navigation is defined in `src/components/Layout.jsx` with three main sections:
- Introduction (Getting started, FAQs)
- API Reference (Countries, regions, cities, billing, orders, payments)
- Advanced guides (Versioning, rate limiting)

### Build and Deployment System

#### Next.js Configuration
- **Static Export**: Uses `output: 'export'` for static site generation
- **Markdoc Integration**: Custom webpack loader processes Markdoc files
- **Search Building**: Search index is built at compile time
- **Page Extensions**: Supports `.js`, `.jsx`, and `.md` files as pages

#### Firebase Hosting
- **Output Directory**: `out/` (Next.js static export output)
- **Rewrite Rules**: All routes redirect to `/index.html` for SPA behavior
- **Project**: "myles-developer" Firebase project

### Development Workflow

#### File Watching and Hot Reload
- Next.js dev server watches all files in `src/`
- Markdoc files trigger rebuild of search index
- Tailwind classes are purged and rebuilt automatically

#### Content Development
- Documentation changes reflect immediately in dev mode
- Search index rebuilds automatically when content changes
- Navigation and table of contents generate automatically from headings

### Search System Deep Dive

The search system is a custom implementation that:
1. Scans all `.md` files in `src/pages/` at build time
2. Parses Markdoc content and extracts sections based on headings
3. Builds FlexSearch index with document-level and section-level entries
4. Provides contextual search results with page titles and section titles
5. Supports full-text search with fuzzy matching and context-aware ranking

### Styling System

#### Tailwind Configuration
- Custom font sizes and line heights
- Extended color palette for dark/light modes
- Typography plugin for prose content styling
- Custom max-width utilities (8xl: 88rem)

#### Component Styling Patterns
- Uses `clsx` for conditional class composition
- Dark mode classes applied via `dark:` prefix
- Responsive design with mobile-first approach
- Focus management for accessibility

This is a sophisticated documentation site built for the Myles API, designed to be maintainable, searchable, and user-friendly with both developer experience and end-user experience in mind.
