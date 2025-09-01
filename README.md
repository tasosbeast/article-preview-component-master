# Frontend Mentor - Article Preview Component Solution

This is an enhanced solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Enhanced Features](#enhanced-features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Enhanced Implementation](#enhanced-implementation)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon
- See hover states for all interactive elements on the page

### Enhanced Features

Beyond the basic requirements, this solution includes:

**🎨 Visual Enhancements:**

- Smooth entry animations with slide-up effect
- Card hover effects with subtle lift and shadow changes
- Image zoom on card hover
- Professional micro-interactions on all interactive elements
- CSS custom properties for maintainable color system
- Enhanced typography with proper spacing and hover effects

**⚡ Advanced Functionality:**

- **Real Social Sharing**: Functional Facebook, Twitter, and Pinterest sharing
- **Toast Notifications**: User feedback for all interactions
- **Interactive Elements**: Clickable article title and author with visual feedback
- **Native Share API**: Uses device's native sharing when available (mobile)
- **Copy to Clipboard**: Advanced clipboard functionality

**♿ Accessibility Improvements:**

- Full keyboard navigation support (Tab, Enter, Space, Escape)
- ARIA labels and proper semantic markup
- Focus management with visible focus states
- Screen reader friendly with proper roles and live regions
- Reduced motion support for users who prefer it

**📱 Mobile Optimizations:**

- Responsive design with different popup behaviors for mobile/desktop
- Touch-friendly interactions with haptic feedback
- Mobile-optimized toast notifications
- Smooth transitions between breakpoints

**🔧 Technical Excellence:**

- Modern ES6+ JavaScript with class-based architecture
- CSS Grid and Flexbox for layout
- Progressive enhancement principles
- Clean, maintainable code structure
- Error handling and graceful fallbacks

### Screenshot

![Article Preview Component - Desktop View](./design/desktop-preview.jpg)

_Desktop view showing the article card with hover effects and share popup_

### Links

- Solution URL: [GitHub Repository](https://github.com/yourusername/article-preview-component)
- Live Site URL: [Live Demo](https://yourusername.github.io/article-preview-component)

## My process

### Built with

- **Semantic HTML5 markup** with proper ARIA attributes
- **CSS custom properties** for maintainable theming
- **Flexbox** for component layout
- **CSS Grid** for responsive design
- **Mobile-first workflow** with progressive enhancement
- **Vanilla JavaScript ES6+** with modern class syntax
- **CSS Animations** with hardware acceleration
- **Web APIs**: Clipboard API, Share API, Vibration API

### What I learned

This project was an excellent opportunity to go beyond basic requirements and implement professional-level features:

**Advanced CSS Techniques:**

```css
:root {
  --very-dark-grayish-blue: hsl(217, 19%, 35%);
  --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 50px 50px -10px var(--shadow-color);
}
```

**Modern JavaScript Patterns:**

```js
class ArticleComponent {
  constructor() {
    this.shareBtn = document.getElementById("shareBtn");
    this.init();
  }

  async handleSocialShare(platform) {
    try {
      if (navigator.share && platform === "twitter") {
        await navigator.share({
          title: this.articleData.title,
          url: this.currentUrl,
        });
      } else {
        window.open(shareUrls[platform], "_blank");
      }
      this.showToast(`Sharing on ${platform}...`);
    } catch (error) {
      console.log("Share failed:", error);
    }
  }
}
```

**Accessibility Implementation:**

```html
<button
  class="share-btn"
  id="shareBtn"
  aria-label="Share article"
  aria-expanded="false"
>
  <img src="./images/icon-share.svg" alt="Share" class="share-icon" />
</button>

<div
  class="share-popup"
  id="sharePopup"
  role="dialog"
  aria-label="Share options"
></div>
```

### Enhanced Implementation

**Progressive Enhancement Strategy:**

1. **Base Layer**: Semantic HTML that works without CSS/JS
2. **Enhancement Layer**: CSS animations and hover effects
3. **Interaction Layer**: JavaScript functionality with fallbacks
4. **Advanced Features**: Modern Web APIs with graceful degradation

**Performance Optimizations:**

- Hardware-accelerated animations using `transform` and `opacity`
- Efficient event delegation and cleanup
- Minimal repaints and reflows
- Optimized asset loading with preconnect hints

**Mobile-First Responsive Design:**

```css
/* Mobile default */
.share-popup {
  position: absolute;
  transform: translateY(100%);
}

/* Desktop enhancement */
@media (min-width: 768px) {
  .share-popup {
    bottom: 92px;
    right: -68px;
    width: 248px;
  }
}
```

### Continued development

Areas I want to continue focusing on in future projects:

- **Advanced Animations**: Exploring more complex CSS animations and transitions
- **Web Components**: Converting reusable components to custom elements
- **TypeScript Integration**: Adding type safety to JavaScript projects
- **Testing Strategies**: Implementing unit and integration tests
- **Performance Metrics**: Measuring and optimizing Core Web Vitals

### Useful resources

- [MDN Web Docs - Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share) - Essential for implementing native sharing
- [CSS Tricks - CSS Custom Properties](https://css-tricks.com/a-complete-guide-to-custom-properties/) - Comprehensive guide to CSS variables
- [Web.dev - Accessible to All](https://web.dev/accessible/) - Excellent accessibility implementation guide
- [Cubic Bezier Generator](https://cubic-bezier.com/) - Perfect for creating custom easing functions
- [Can I Use](https://caniuse.com/) - Browser compatibility checker for modern features

## Author

- Website - [Your Name](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
- LinkedIn - [Your Name](https://www.linkedin.com/in/yourprofile)

---

## 🚀 Quick Start

1. Clone the repository
2. Open `index.html` in your browser
3. Test the interactive features:
   - Click the share button to see the popup
   - Click social icons to test real sharing
   - Try keyboard navigation (Tab, Enter, Escape)
   - Test on different screen sizes

## 🎯 Key Features Demo

- **Hover Effects**: Hover over the card, title, author, and buttons
- **Share Functionality**: Click social icons for real sharing
- **Keyboard Navigation**: Use Tab to navigate, Enter/Space to activate
- **Mobile Responsive**: Test on different screen sizes
- **Accessibility**: Works with screen readers and keyboard-only navigation

## 💡 Implementation Highlights

This solution demonstrates professional frontend development practices including:

- Clean, maintainable code architecture
- Modern CSS and JavaScript techniques
- Comprehensive accessibility implementation
- Progressive enhancement principles
- Mobile-first responsive design
- Performance optimization strategies
