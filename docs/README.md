# EcoNanoMed Website — Vanilla HTML/CSS/JS Multi-Page Structure

## Overview
This is a clean, semantic, fully responsive vanilla HTML/CSS/JavaScript website for EcoNanoMed Packaging Ltd. It's designed to be static-only initially but structured to support dynamic features in the future.

## 📁 Project Structure
```
public/
├── favicon.ico                    # Favicon
├── logo.png                       # Logo used in nav/footer
└── site/
    ├── index.html                 # Home page
    ├── about.html                 # About & mission
    ├── innovation.html            # Innovation & tech roadmap
    ├── solution.html              # Solutions & market
    ├── team.html                  # Team & founders
    ├── contact.html               # Contact form
    ├── css/
    │   └── main.css               # Main stylesheet (improved with breadcrumbs, form validation styles)
    └── js/
        └── main.js                # Vanilla JS (nav, form validation, scroll effects)
```

## 🎨 Key Features

### 1. **Responsive Design**
- Mobile-first approach with breakpoints at 640px, 768px, 1024px
- Touch-friendly navigation with hamburger menu
- All pages work perfectly on mobile, tablet, and desktop

### 2. **Navigation & UX**
- Fixed navbar with scroll shadow effect
- Mobile menu toggle with smooth animation
- Active page indicators in navigation
- Breadcrumb navigation on all pages
- Footer with logo and links on every page

### 3. **Form Validation (Contact Page)**
- Real-time field validation (required, email format)
- Error messages displayed per field
- Submit button disabled state
- Success feedback after submission
- Accessible form with proper labels

### 4. **Animations**
- Smooth scroll behavior
- Reveal animations on scroll (Intersection Observer)
- Hover effects on cards and buttons
- Respects `prefers-reduced-motion` for accessibility

### 5. **Accessibility**
- Semantic HTML5 structure
- ARIA labels and attributes
- Keyboard navigation support
- Color contrast compliant
- Reduced motion support

### 6. **Logo & Favicon Integration**
- Logo appears in navbar and footer on every page
- Favicon displays in browser tabs
- Both referenced from `../` (public folder) for easy access

## 🚀 How to Use

### View Locally
Simply open any `.html` file in a browser:
```bash
# Option 1: Direct file open
file:///d:/Portfolio/2026/Eco/public/site/index.html

# Option 2: Use a local server (recommended for better compatibility)
python -m http.server 8000
# Then visit: http://localhost:8000/public/site/
```

### Edit Content
- Edit any `.html` file directly
- Update `css/main.css` for styling changes
- Modify `js/main.js` for behavior changes
- All CSS variables defined at the top for easy theme tweaking

## 🔧 Future Enhancement: Making it Dynamic

This structure is ready for future enhancements:

### **Option 1: Add a Simple Backend** (PHP/Node.js)
```javascript
// Replace form submission in js/main.js with:
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Object.fromEntries(new FormData(form)))
  });
  // handle response...
});
```

### **Option 2: Add a CMS** (Headless CMS, Contentful, etc.)
- Keep the same page structure
- Fetch content from API
- Inject HTML from the CMS
- Minimal changes needed

### **Option 3: Convert to Static Site Generator** (Hugo, 11ty, etc.)
- Content in Markdown files
- HTML templates already semantic
- Automatic builds and deployments
- Same output structure maintained

### **Option 4: Add Build Tool** (if needed)
- Install CSS minification, JS bundling
- Add preprocessors (SASS, PostCSS)
- No changes to current file structure needed

## 📋 CSS Architecture

**CSS Variables** (easily update globally):
- Colors: `--green-900`, `--green-700`, `--sage`, `--bg`, `--white`, `--ink`, etc.
- Typography: `--serif`, `--sans`, `--maxw`
- Spacing: consistent padding/margin patterns
- Shadows, borders, transitions defined as variables

**Utility Classes**:
- `.container` - max-width wrapper
- `.grid`, `.grid--2`, `.grid--3`, `.grid--4` - responsive grids
- `.reveal` - scroll reveal animation
- `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--ghost` - button variants
- `.section`, `.section--light`, `.section--dark`, `.section--white`, `.section--sage` - section backgrounds

## 🎯 Mobile-First Implementation

All responsive behavior is mobile-first:
1. Mobile styles are default (100% width, single column)
2. Tablet breakpoints (768px+) add 2-column layouts
3. Desktop breakpoints (1024px+) enable 3-4 column grids

## ✨ Improvements Made

✅ Multi-page structure instead of single-page  
✅ Form validation with real-time feedback  
✅ Better mobile navigation  
✅ Breadcrumb navigation on all pages  
✅ Logo/favicon properly integrated  
✅ Improved button styling with secondary button variant  
✅ Error messages in forms  
✅ Active navigation indicators  
✅ Cleaner JavaScript organization  
✅ Removed React/TypeScript dependencies  

## 🔗 Page Navigation

- **Home** (`index.html`) - Overview of the company
- **About** (`about.html`) - Mission, challenge, approach
- **Innovation** (`innovation.html`) - Tech details, roadmap, material science
- **Solution** (`solution.html`) - Applications, impact, market
- **Team** (`team.html`) - Founders and leadership
- **Contact** (`contact.html`) - Contact form with validation

## 📝 Notes

- All links use relative paths (works with any deployment)
- No external dependencies (fully vanilla)
- Total page load is fast (no frameworks, no build process needed)
- CSS is minifiable but kept readable for easy editing
- JavaScript is organized with clear sections (comments separate features)

## 🎓 Best Practices Applied

- Semantic HTML5
- Mobile-first responsive design
- Accessibility standards (WCAG 2.1 AA)
- Performance optimized (no render-blocking resources)
- Progressive enhancement (forms work even without JS)
- Clean separation of concerns (HTML, CSS, JS)
- Future-proof architecture

---

**Ready to deploy!** Simply upload the `public/site/` folder to your hosting provider.
