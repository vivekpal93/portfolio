# Vivek Pal — Personal Developer Portfolio

A modern, minimalist, dark-themed personal developer portfolio built for **Vivek Pal**, Computer Science Engineering student at REC Mainpuri, Uttar Pradesh, India.

Designed with subtle typography, electric indigo accents, clean architectural layout, responsive CSS, accessible interactive controls, and an authentic journey-focused narrative.

---

## 🚀 Live Local Preview

You can run and test this website immediately on your computer:

### Option 1: Double-click to open
Simply double-click `index.html` in your file browser (Finder on Mac) to open it directly in Safari, Chrome, Edge, or Firefox.

### Option 2: Using Python (Built into macOS)
Open your terminal in this directory and run:
```bash
python3 -m http.server 3000
```
Then visit [http://localhost:3000](http://localhost:3000) in your web browser.

### Option 3: Using VS Code Live Server
If you use VS Code:
1. Open this folder in VS Code (`code .`).
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and choose **"Open with Live Server"**.

### Option 4: Using Node / npx
```bash
npx serve .
```

---

## 📁 Project Structure

```
portfoliooo/
├── index.html               # Main semantic HTML5 webpage with accessible structure & metadata
├── css/
│   ├── style.css            # Design tokens, CSS variables, typography, reset, grid & reveal effects
│   └── components.css       # Navigation, hero, cards, custom CSS mockups, form & footer styles
├── js/
│   ├── portfolio-data.js    # Centralized data configuration for quick updates
│   └── main.js              # Interactivity: sticky header, scrollspy, mobile drawer, 1-click copy, contact handler
├── assets/
│   └── favicon.svg          # Custom dark minimalist SVG monogram favicon
└── README.md                # Documentation, customization guide & deployment instructions
```

---

## ✏️ How to Customize Your Details

All personal content is clearly structured so you can customize it as you grow.

### 1. Update Your Email & Social Links
Open `index.html` and search for `EDIT HERE`:
- **Email**: Update `vivekpal.dev@example.com` with your real email address.
- **GitHub**: Update `https://github.com/vivekpal` with your real GitHub profile link.
- **LinkedIn**: Update `https://linkedin.com/in/vivekpal` with your LinkedIn profile link.
- **Instagram**: Update `https://instagram.com/vivekpal` with your Instagram handle or remove it if preferred.

> **Tip:** Also update `js/portfolio-data.js` under the `contact` section so the JavaScript copy buttons and mailto handlers use your new email.

### 2. Update Your Skills
In `index.html` (under `<section id="skills">`) or in `js/portfolio-data.js`:
- To add a new skill chip:
  ```html
  <div class="skill-chip">
    <span class="chip-dot"></span>
    <span>Your Skill</span>
  </div>
  ```
- To mark a skill that you are currently learning (shows an amber status tag):
  ```html
  <div class="skill-chip is-learning">
    <span class="chip-dot"></span>
    <span>React</span>
    <span class="skill-badge-tag">Learning</span>
  </div>
  ```

### 3. Update or Add Projects
In `index.html` under `<section id="projects">`:
- Each project card is an `<article class="project-card">`.
- When you build a live project with a public URL:
  1. Change the status pill to `<span class="project-status-pill live">● Live</span>`.
  2. Replace the action button with:
     ```html
     <a href="https://your-live-link.com" target="_blank" rel="noopener noreferrer" class="project-link">
       View Live Project
       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
         <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
         <polyline points="15 3 21 3 21 9"></polyline>
         <line x1="10" y1="14" x2="21" y2="3"></line>
       </svg>
     </a>
     ```

### 4. Update "Currently in the Lab"
In `index.html` under `<section id="lab">`:
- Update the **Learning**, **Building**, and **Exploring** cards to reflect your real-time academic topics and experiments.

---

## 🌐 How to Publish for Free on GitHub Pages

Publishing your portfolio on GitHub Pages is free, reliable, and takes under 3 minutes:

### Step 1: Initialize Git and Commit
In your terminal, navigate to this project folder:
```bash
cd /Users/vivekpal/Desktop/portfoliooo
git init
git add .
git commit -m "Initial commit: Vivek Pal personal portfolio"
```

### Step 2: Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com) and click **"New repository"**.
2. Name the repository:
   - Either `portfolio` (will be accessible at `https://<your-username>.github.io/portfolio/`),
   - OR `<your-username>.github.io` (will be accessible directly at `https://<your-username>.github.io/`).
3. Set the repository to **Public**.
4. Leave "Add a README" unchecked (since we already have one).
5. Click **Create repository**.

### Step 3: Push Your Code
Run the commands GitHub gives you:
```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. On GitHub, open your repository's **Settings** tab.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`.
5. Click **Save**.

Within 1–2 minutes, GitHub will give you a live URL where your portfolio is live worldwide!

---

## 🌟 Highlights of the Implementation

- **Authentic & Honest**: Communicates your genuine path as a CS student at REC Mainpuri without fabricated titles or fake metrics.
- **Zero Build Friction**: 100% self-contained standard HTML5, modern modular CSS3, and vanilla ES6+ JavaScript. No broken `node_modules` or complex build dependencies.
- **Dark Minimal Design**: Charcoal canvas (`#090A0F`), subtle borders, electric indigo/cyan gradients, and clean typography.
- **Interactive Code Window**: Desktop hero preview showcasing a syntax-highlighted TypeScript config with 1-click snippet copy.
- **CSS-Based Project Mockups**: High-craft mockups for portfolio wireframes, AI conversational chats, task checklists, and audio/motion waveforms.
- **Smart Contact Handling**: Respects user privacy and reliability by pre-filling messages into standard `mailto:` links with a 1-click draft copy fallback.
- **Accessibility & Performance**: Semantic HTML, skip link, ARIA attributes, keyboard accessibility, and respect for `prefers-reduced-motion`.

