/**
 * ==========================================================================
 * VIVEK PAL — PORTFOLIO DATA CONFIGURATION
 * ==========================================================================
 * This file serves as a centralized, easily editable content configuration.
 * You can customize your name, college, email, social links, skills,
 * and projects here whenever you want to update your portfolio!
 */

const PORTFOLIO_DATA = {
  // Personal & Educational Profile
  profile: {
    name: "Vivek Pal",
    brandLogo: "Vivek.",
    role: "Computer Science Engineering Student",
    college: "REC Mainpuri",
    location: "Uttar Pradesh, India",
    statusBadge: "CS Student • Building & Learning",
    heroGreeting: "Hey, I'm Vivek.",
    heroHeadline: "I turn curiosity into code.",
    heroDescription:
      "I'm a Computer Science Engineering student exploring software development, AI, and creative technology. I enjoy learning how things work and turning ideas into practical digital experiences.",
    highlights: [
      { label: "B.Tech in Computer Science Engineering", sub: "REC Mainpuri" },
      { label: "Learning by Building", sub: "Hands-on projects & practice" },
      { label: "Always Exploring", sub: "Software, AI & Creative Media" }
    ],
    aboutStory: [
      "I'm a Computer Science Engineering student at Rajkiya Engineering College (REC) Mainpuri, Uttar Pradesh, India. My fascination with technology began with a simple desire: understanding how digital products are built from scratch.",
      "Rather than just reading textbooks, I believe in learning by actively building projects, breaking concepts down to their fundamentals, and experimenting with new tools. I enjoy working with core programming languages like C and C++, diving into modern web development, and exploring the frontiers of artificial intelligence.",
      "Alongside coding, I have a keen creative interest in video editing, motion design, and digital visual storytelling—which gives me a unique perspective on blending technical logic with creative user experiences."
    ],
    aboutPillars: [
      {
        title: "Education",
        desc: "B.Tech in Computer Science Engineering, REC Mainpuri (AKTU)."
      },
      {
        title: "Core Focus",
        desc: "Programming fundamentals, problem solving & software development."
      },
      {
        title: "Exploring",
        desc: "Practical AI workflows, prompt architecture & creative technology."
      },
      {
        title: "Mindset",
        desc: "Learn, build, improve, repeat. Staying curious every single day."
      }
    ]
  },

  // Contact Information & Social Profiles
  contact: {
    // EDIT HERE: Replace with your actual email address
    email: "vivekpal.dev@example.com",
    // EDIT HERE: Replace with your actual usernames/URLs
    github: "https://github.com/vivekpal",
    githubUsername: "vivekpal",
    linkedin: "https://linkedin.com/in/vivekpal",
    linkedinUsername: "vivekpal",
    instagram: "https://instagram.com/vivekpal",
    instagramUsername: "vivekpal"
  },

  // Skills organized by category
  skills: [
    {
      category: "Programming",
      icon: "code",
      description: "Foundational languages for problem-solving & core computing",
      items: [
        { name: "C", status: "familiar" },
        { name: "C++", status: "familiar" },
        { name: "Python", status: "familiar" }
      ]
    },
    {
      category: "Web Development",
      icon: "globe",
      description: "Frontend building blocks for responsive user interfaces",
      items: [
        { name: "HTML5", status: "familiar" },
        { name: "CSS3", status: "familiar" },
        { name: "JavaScript (ES6+)", status: "familiar" },
        { name: "React", status: "learning", badge: "Learning" }
      ]
    },
    {
      category: "Tools & Workflow",
      icon: "tool",
      description: "Modern developer environment & version control",
      items: [
        { name: "Git", status: "familiar" },
        { name: "GitHub", status: "familiar" },
        { name: "VS Code", status: "familiar" },
        { name: "Terminal / CLI", status: "familiar" }
      ]
    },
    {
      category: "Creative Technology",
      icon: "sparkles",
      description: "Intersection of visual media, design & AI tools",
      items: [
        { name: "AI Tools", status: "familiar" },
        { name: "Video Editing", status: "familiar" },
        { name: "Digital Content Creation", status: "familiar" },
        { name: "UI/UX Basics", status: "learning", badge: "Exploring" }
      ]
    }
  ],

  // Selected Projects & Experiments
  projects: [
    {
      id: "portfolio",
      title: "Developer Portfolio",
      category: "Web Development",
      status: "Live Project",
      statusType: "live",
      description:
        "A personal developer website designed with a dark minimalist aesthetic, responsive architecture, smooth micro-interactions, and accessible layout.",
      tags: ["HTML5", "Modern CSS", "JavaScript", "Responsive Design"],
      linkText: "Current Site",
      linkUrl: "#home",
      mockupType: "portfolio"
    },
    {
      id: "ai-chatbot",
      title: "AI Chatbot Experiment",
      category: "Artificial Intelligence",
      status: "Concept & In Progress",
      statusType: "concept",
      description:
        "Exploring conversational artificial intelligence, system prompt design, context management, and practical conversational interfaces.",
      tags: ["Python", "Prompt Engineering", "LLM APIs", "AI Workflows"],
      linkText: "Concept Preview",
      linkUrl: null, // Displays 'Coming soon' pill or modal
      mockupType: "chatbot"
    },
    {
      id: "productivity-tool",
      title: "Productivity Tool",
      category: "Software Development",
      status: "Prototype Experiment",
      statusType: "concept",
      description:
        "An experimental utility focused on minimal friction, daily task tracking, and focused workflow management for students and builders.",
      tags: ["JavaScript", "LocalStorage", "UI Design", "Productivity"],
      linkText: "In Development",
      linkUrl: null,
      mockupType: "productivity"
    },
    {
      id: "creative-tech",
      title: "Creative Tech Project",
      category: "Creative Technology",
      status: "Creative Exploration",
      statusType: "concept",
      description:
        "Exploring the boundary between technology and visual storytelling through motion design, video editing workflows, and digital narratives.",
      tags: ["Video Editing", "Visual Storytelling", "Motion Design", "Media"],
      linkText: "Creative Lab",
      linkUrl: null,
      mockupType: "creative"
    }
  ],

  // Currently in the Lab
  currentLab: [
    {
      type: "learning",
      badge: "Learning",
      title: "Data Structures & Modern Web",
      body: "Deepening algorithmic problem-solving skills in C++ alongside modern JavaScript component patterns.",
      topics: [
        "Data structures & algorithmic logic in C++",
        "Modern ES6+ syntax & modular JavaScript",
        "Web accessibility & performance best practices"
      ]
    },
    {
      type: "building",
      badge: "Building",
      title: "Practical Mini-Projects",
      body: "Translating course theory into hands-on utilities, frontend interfaces, and reproducible experiments.",
      topics: [
        "Interactive developer portfolio (this site)",
        "Lightweight browser-based productivity widgets",
        "Clean, structured GitHub code repositories"
      ]
    },
    {
      type: "exploring",
      badge: "Exploring",
      title: "AI & Creative Storytelling",
      body: "Testing modern generative AI developer workflows while developing digital content creation and video editing techniques.",
      topics: [
        "LLM prompting architectures & developer tools",
        "Creative video editing & narrative pacing",
        "Clean user experience design principles"
      ]
    }
  ]
};

// Export to window for global access
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}

