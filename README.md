# Cynthia Ugwu Portfolio Website

A visually interactive, smooth-scrolling portfolio website showcasing the work of Cynthia Ugwu, a product and motion designer. This project features modern web animations using GSAP, smooth scrolling with Locomotive Scroll, and interactive mouse-following effects for enhanced user experience.

---

## Features

- **Smooth Scrolling:** Implemented with Locomotive Scroll for a sleek and modern scroll effect.
- **GSAP Animations:** Timeline animations for hero section headings, elements, and footer.
- **Interactive Cursor:** Custom cursor with a small circle that follows the mouse and scales dynamically.
- **Image Hover Effects:** Hovering over project items reveals a preview image that follows the cursor with rotation effect.
- **Responsive Design:** Fully responsive layout for desktop and mobile devices.
- **Portfolio Showcase:** Sections for projects, about me, and social media links.

---

## Technologies Used

- **HTML5:** Semantic structure and content.
- **CSS3:** Styling, Flexbox layout, and transitions.
- **JavaScript (ES6):** DOM manipulation, cursor animations, and hover effects.
- **GSAP :** Smooth animations and hover effects.
- **Locomotive Scroll:** Smooth scrolling and scroll-based animations.

---

## Folder Structure

```Cynthia/
├── index.html          # Main HTML file
├── style.css           # Main CSS styling
├── locomotive.css      # Locomotive Scroll CSS
├── index.js            # Optional JS (can include scroll initialization)
├── script.js           # Main JS for animations and cursor effects
├── lucid-motors.webp   # Project image
├── baron-capital.webp
├── nfl.webp
├── cynthia.webp        # About section image
└── .git/               # Git repository folder
```


---


## Usage

1. Clone the repository:

```bash
git clone <https://github.com/Uzmaa7/CynthiaUgwu>


Open index.html in your browser to view the portfolio.

Hover over projects to see interactive image previews.

Scroll down to experience smooth scroll and section animations.

Custom Cursor & Image Hover Logic

The project uses a custom circular cursor that follows the mouse.

Each project item (.elem) shows an image preview on hover that:

Follows the mouse.

Rotates based on mouse speed.

Centers the image on the cursor using transform: translate(-50%, -50%).

Uses pointer-events: none; to ensure the image does not block mouse interactions.
---





