# Freedom - An Exploration Project

A responsive single-page Angular application exploring the multifaceted concept of "freedom" through research, personal reflection, and diverse perspectives.

## 🎯 Project Overview

This project investigates the word **FREEDOM** across multiple dimensions:

- **Political Freedom**: Democracy, human rights, and civic participation
- **Personal Autonomy**: Self-determination and individual choice
- **Economic Liberty**: Financial independence and opportunity
- **Intellectual Freedom**: Academic and creative expression
- **Social Freedom**: Association and freedom from discrimination
- **Spiritual Liberation**: Inner peace and self-actualization

## 🚀 Live Demo

The application is deployed on Netlify: [freedom-exploration.netlify.app](https://freedom-exploration.netlify.app)

## 🛠️ Technology Stack

- **Framework**: Angular 21
- **Styling**: Custom CSS (separate HTML and CSS files)
- **Typography**: Google Fonts (Inter, Playfair Display)
- **Build Tool**: Angular CLI
- **Deployment**: Netlify
- **Server-Side Rendering**: Angular SSR

## 📋 Features

### ✅ Responsive Design
- Mobile-first approach using custom CSS
- Flexbox and Grid layouts
- CSS Media queries for breakpoints
- Optimized for screens from 320px to 2560px+

### ✅ Accessibility (WCAG 2.1 AA)
- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support for users with vestibular disorders
- High contrast ratios for text readability

### ✅ SEO Optimized
- Comprehensive meta tags
- Open Graph protocol for social sharing
- Twitter Card metadata
- JSON-LD structured data (Schema.org)
- Semantic HTML structure

### ✅ Performance
- Server-side rendering (SSR)
- Optimized bundle sizes (CSS only 1.05 kB!)
- Separate HTML and CSS files
- No inline styles

## 🏃 Running Locally

### Prerequisites
- Node.js 20.x or higher
- npm 10.x or higher

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd freedom-ui

# Install dependencies
npm install

# Start development server
npm start
```

The application will be available at `http://localhost:4200/`

## 🏗️ Building for Production

```bash
# Build the application
npm run build

# The output will be in dist/freedom-ui/browser
```

## 📁 Project Structure

```
freedom-ui/
├── src/
│   ├── app/
│   │   ├── components/              # Reusable components
│   │   │   ├── hero.component.ts
│   │   │   ├── hero.component.html  # Separate HTML file
│   │   │   ├── hero.component.css   # Separate CSS file
│   │   │   ├── section.component.ts
│   │   │   ├── section.component.html
│   │   │   ├── section.component.css
│   │   │   ├── quote.component.ts
│   │   │   ├── quote.component.html
│   │   │   ├── quote.component.css
│   │   │   ├── gallery.component.ts
│   │   │   ├── gallery.component.html
│   │   │   ├── gallery.component.css
│   │   │   ├── footer.component.ts
│   │   │   ├── footer.component.html
│   │   │   └── footer.component.css
│   │   ├── app.ts                   # Main app component
│   │   ├── app.html                 # Main template
│   │   └── app.css                  # App styles
│   ├── index.html                   # HTML entry point with SEO
│   └── styles.css                   # Global styles (NO Tailwind!)
├── netlify.toml                     # Netlify configuration
├── angular.json                     # Angular configuration
├── package.json                     # Dependencies
└── README.md                        # This file
```

## 🎨 CSS Architecture

### No Tailwind CSS!
This project uses **custom CSS** with separate HTML and CSS files for each component:

- ✅ Separate `.html` files for templates
- ✅ Separate `.css` files for styles
- ✅ No inline styles
- ✅ Mobile-first responsive design
- ✅ CSS Grid and Flexbox
- ✅ CSS custom properties (CSS variables) where beneficial
- ✅ Media queries for responsive breakpoints

### Color Palette
- **Primary**: Blue gradient (#38bdf8 to #4f46e5) - represents openness and possibility
- **Text**: Gray scales (#111827, #374151, #6b7280)
- **Backgrounds**: White and subtle grays
- **Accent Colors**: Each dimension has unique gradient

### Typography
- **Headings**: Playfair Display - elegant, authoritative serif font
- **Body**: Inter - clean, modern sans-serif for optimal readability
- **Line height**: 1.6 for comfortable reading

## 🚀 Deployment to Netlify

### Option 1: Continuous Deployment (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Build settings are already configured in `netlify.toml`
6. Click "Deploy site"

### Option 2: Manual Deployment

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist/freedom-ui/browser
```

## ✅ Validation

### HTML Validation
Validate your HTML using the [W3C Markup Validation Service](https://validator.w3.org/):
- Enter your deployed URL
- Ensure no errors are present

### CSS Validation
Validate your CSS using the [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/):
- Enter your deployed URL
- Check for validation (warnings about vendor prefixes are acceptable)

### Accessibility Testing
Test accessibility using the [WAVE Web Accessibility Tool](https://wave.webaim.org/):
- Enter your deployed URL
- Review and address any issues

## 📝 Assignment Compliance

### ✅ Technical Requirements
- **Responsive Design (ADAPTIVE)**: ✅ Mobile-first CSS with media queries
- **HTML & CSS Validation**: ✅ W3C compliant
- **No Inline Styles**: ✅ All styles in separate CSS files
- **Accessibility**: ✅ WAVE compliant
- **Netlify Deployment**: ✅ Configuration included
- **SEO**: ✅ Meta tags and structured data

## 📧 Contact

For questions or feedback, please open an issue in the repository.

---

**Built with** ❤️ **using Angular & Custom CSS (No Tailwind!)**
