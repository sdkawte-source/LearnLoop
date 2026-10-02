const exchangeSkills = [
  {
    title: "Python Programming",
    icon: "⌘",
    category: "TECHNICAL",
    description: "Learn Python fundamentals through practical examples and small scripts.",
    duration: "4 weeks · 2 sessions/week",
    topics: ["Variables, data types and operators", "Conditions and loops", "Functions and modules", "Lists, dictionaries and file handling", "Mini automation project"],
    audience: "Beginners who want a first programming skill.",
    outcome: "Build small Python programs and understand the fundamentals needed for further programming."
  },
  {
    title: "Graphic Design",
    icon: "✦",
    category: "CREATIVE",
    description: "Explore layout, typography, colour and visual communication for digital content.",
    duration: "3 weeks · 2 sessions/week",
    topics: ["Design principles", "Typography and colour", "Social media post design", "Basic branding", "Portfolio mini-project"],
    audience: "Beginners interested in creative digital work.",
    outcome: "Create clean social posts, simple brand assets and a small design portfolio."
  },
  {
    title: "Photography",
    icon: "◉",
    category: "CREATIVE",
    description: "Understand camera or phone photography and learn how to create stronger images.",
    duration: "3 weeks · 1–2 sessions/week",
    topics: ["Composition", "Lighting basics", "Exposure fundamentals", "Portrait and product photography", "Editing workflow"],
    audience: "Anyone who wants to improve photography using a phone or camera.",
    outcome: "Plan and shoot better photographs with a basic editing workflow."
  },
  {
    title: "Public Speaking",
    icon: "◌",
    category: "COMMUNICATION",
    description: "Build confidence in speaking, presentations and everyday communication.",
    duration: "3 weeks · 2 sessions/week",
    topics: ["Speech structure", "Voice and body language", "Presentation openings", "Handling nervousness", "Practice presentations"],
    audience: "Students and beginners who want to communicate more confidently.",
    outcome: "Deliver a short structured presentation without relying completely on notes."
  },
  {
    title: "Excel Basics",
    icon: "▦",
    category: "PRODUCTIVITY",
    description: "Learn spreadsheets for college projects, personal planning and basic data work.",
    duration: "2 weeks · 2 sessions/week",
    topics: ["Sheets and formatting", "Formulas and functions", "Sorting and filtering", "Charts", "Mini tracker project"],
    audience: "Students and beginners who want practical spreadsheet skills.",
    outcome: "Create useful spreadsheets with formulas, filters and simple charts."
  },
  {
    title: "Cooking Basics",
    icon: "⌁",
    category: "LIFESTYLE",
    description: "Learn practical kitchen skills, simple recipes and safe cooking habits.",
    duration: "2 weeks · 2 sessions/week",
    topics: ["Kitchen safety", "Knife basics", "Heat and cooking methods", "Simple meals", "Meal planning"],
    audience: "Complete beginners learning to cook independently.",
    outcome: "Prepare a few reliable meals while understanding basic kitchen techniques."
  },
  {
    title: "Spanish Basics",
    icon: "Aa",
    category: "LANGUAGE",
    description: "Build a beginner foundation for everyday Spanish conversation.",
    duration: "4 weeks · 2 sessions/week",
    topics: ["Greetings and introductions", "Common vocabulary", "Basic grammar", "Everyday conversation", "Listening practice"],
    audience: "Beginners starting Spanish from zero.",
    outcome: "Introduce yourself, handle basic conversations and continue learning independently."
  },
  {
    title: "Digital Marketing",
    icon: "↗",
    category: "BUSINESS",
    description: "Understand how brands use content, social media and basic digital strategy.",
    duration: "4 weeks · 2 sessions/week",
    topics: ["Digital marketing overview", "Content planning", "Social media basics", "SEO fundamentals", "Campaign mini-project"],
    audience: "Students curious about marketing and online businesses.",
    outcome: "Plan a simple digital campaign and understand core marketing terminology."
  }
];

const proPrograms = [
  {
    title: "Advanced Python & Automation",
    icon: "⌘",
    description: "Structured Python learning focused on automation, APIs and practical projects.",
    duration: "8 weeks",
    price: "Included with Pro",
    topics: ["Advanced Python", "Object-oriented programming", "APIs and automation", "Data processing", "Capstone automation project"],
    audience: "Learners with basic Python knowledge who want professional-level practice.",
    outcome: "Build a portfolio-ready automation project and work confidently with real-world Python workflows."
  },
  {
    title: "Data Analytics",
    icon: "▥",
    description: "A guided pathway through spreadsheets, SQL, Python and data visualisation.",
    duration: "10 weeks",
    price: "Included with Pro",
    topics: ["Data cleaning", "Excel and SQL", "Python for analysis", "Dashboards and visualisation", "Analytics capstone"],
    audience: "Students preparing for analytics internships or project work.",
    outcome: "Complete an end-to-end analytics project from raw data to insights."
  },
  {
    title: "PLC & Industrial Automation",
    icon: "⚙",
    description: "Professional-style introduction to PLC logic, sensors, actuators and industrial control.",
    duration: "10 weeks",
    price: "Included with Pro",
    topics: ["PLC architecture", "Ladder logic", "Sensors and actuators", "Industrial communication", "Automation project"],
    audience: "Engineering students interested in instrumentation and industrial automation.",
    outcome: "Understand a PLC-based control system and build a structured automation project."
  },
  {
    title: "Embedded Systems",
    icon: "◈",
    description: "Learn microcontrollers, interfaces and firmware through guided hardware projects.",
    duration: "10 weeks",
    price: "Included with Pro",
    topics: ["Microcontroller fundamentals", "GPIO, ADC and PWM", "UART, I2C and SPI", "Sensor interfacing", "Embedded project"],
    audience: "Engineering students with basic electronics or programming knowledge.",
    outcome: "Design and explain a sensor-based embedded system with working firmware."
  },
  {
    title: "Industrial IoT",
    icon: "⌘",
    description: "Explore connected sensors, data acquisition, dashboards and industrial monitoring.",
    duration: "8 weeks",
    price: "Included with Pro",
    topics: ["IoT architecture", "Sensor data acquisition", "MQTT basics", "Cloud dashboards", "Remote monitoring project"],
    audience: "Instrumentation, electronics and engineering students.",
    outcome: "Build a connected monitoring prototype and understand the complete data flow."
  },
  {
    title: "Cybersecurity Foundations",
    icon: "◇",
    description: "A structured introduction to cyber hygiene, networks, threats and defensive practices.",
    duration: "8 weeks",
    price: "Included with Pro",
    topics: ["Security fundamentals", "Network basics", "Common attack types", "Authentication and access", "Defensive mini-project"],
    audience: "Beginners who want a structured cybersecurity foundation.",
    outcome: "Understand core security concepts and demonstrate basic defensive techniques."
  }
];

const exchangeGrid = document.getElementById("exchangeGrid");
const programGrid = document.getElementById("programGrid");
const skillSelect = document.getElementById("skill");

function card(item, type) {
  return `
    <article class="${type === "exchange" ? "skill-card" : "program-card"}">
      ${type === "pro" ? '<span class="pro-badge">PRO PROGRAM</span>' : ""}
      <div class="skill-icon">${item.icon}</div>
      <span class="card-tag">${item.category || "PROFESSIONAL"}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${type === "pro" ? `<div class="price-line">₹499 <small>/ month · includes Pro programs</small></div>` : ""}
      <button class="read-btn" data-article="${type}:${item.title}">Read article →</button>
    </article>
  `;
}

exchangeGrid.innerHTML = exchangeSkills.map(x => card(x, "exchange")).join("");
programGrid.innerHTML = proPrograms.map(x => card(x, "pro")).join("");

[...exchangeSkills.map(x => ({...x, type:"Skill Exchange — Free"})),
 ...proPrograms.map(x => ({...x, type:"Learn a New Skill — Pro"}))]
.forEach(x => {
  const option = document.createElement("option");
  option.value = x.title;
  option.textContent = x.title + (x.type.includes("Pro") ? " — Pro" : " — Free Exchange");
  skillSelect.appendChild(option);
});

const articleModal = document.getElementById("articleModal");
const registerModal = document.getElementById("registerModal");
const articleJoin = document.getElementById("articleJoin");
let currentArticle = null;

function findItem(title) {
  return exchangeSkills.find(x => x.title === title) || proPrograms.find(x => x.title === title);
}

document.addEventListener("click", e => {
  const articleButton = e.target.closest("[data-article]");
  if (articleButton) {
    const [type, title] = articleButton.dataset.article.split(":");
    currentArticle = findItem(title);
    if (!currentArticle) return;

    document.getElementById("articleType").textContent =
      type === "pro" ? "PROFESSIONAL PROGRAM · ₹499/MONTH" : "SKILL EXCHANGE · FREE";
    document.getElementById("articleTitle").textContent = currentArticle.title;
    document.getElementById("articleDescription").textContent = currentArticle.description;
    document.getElementById("articleMeta").innerHTML = `
      <span>Duration: ${currentArticle.duration}</span>
      <span>${type === "pro" ? "Pro subscription" : "Peer exchange"}</span>
    `;
    document.getElementById("articleTopics").innerHTML =
      currentArticle.topics.map(t => `<li>${t}</li>`).join("");
    document.getElementById("articleAudience").textContent = currentArticle.audience;
    document.getElementById("articleOutcome").textContent = currentArticle.outcome;
    articleModal.classList.add("show");
    articleModal.setAttribute("aria-hidden", "false");
  }

  if (e.target.closest("[data-open-register]")) {
    const btn = e.target.closest("[data-open-register]");
    openRegister(btn.dataset.program || "");
  }

  if (e.target.closest("[data-close-register]")) closeRegister();
  if (e.target.closest("[data-close-article]")) closeArticle();
});

articleJoin.addEventListener("click", () => {
  closeArticle();
  openRegister(currentArticle?.title || "");
});

function openRegister(preselect = "") {
  registerModal.classList.add("show");
  registerModal.setAttribute("aria-hidden", "false");
  if (preselect) {
    skillSelect.value = preselect;
    document.getElementById("mode").value =
      proPrograms.some(x => x.title === preselect)
        ? "Learn a New Skill — Pro"
        : "Skill Exchange — Free";
  }
  setTimeout(() => document.getElementById("name").focus(), 100);
}

function closeRegister() {
  registerModal.classList.remove("show");
  registerModal.setAttribute("aria-hidden", "true");
}

function closeArticle() {
  articleModal.classList.remove("show");
  articleModal.setAttribute("aria-hidden", "true");
}

[articleModal, registerModal].forEach(modal => {
  modal.addEventListener("click", e => {
    if (e.target === modal) modal.classList.remove("show");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    closeArticle();
    closeRegister();
  }
});

const form = document.getElementById("registrationForm");
const statusBox = document.getElementById("formStatus");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async e => {
  e.preventDefault();
  statusBox.textContent = "Submitting your registration…";
  statusBox.className = "form-status";
  submitBtn.disabled = true;
  submitBtn.textContent = "Registering…";

  try {
    const data = Object.fromEntries(new FormData(form).entries());
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Registration failed.");
    }

    statusBox.textContent =
      `Success! You joined LearnLoop. Your registration ID is ${result.registrationId}. Check your email for confirmation.`;
    statusBox.className = "form-status success";
    form.reset();
  } catch (error) {
    statusBox.textContent = error.message;
    statusBox.className = "form-status error";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = "Complete Registration";
  }
});

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => mainNav.classList.toggle("open"));
mainNav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mainNav.classList.remove("open")));
