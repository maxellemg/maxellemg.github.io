const translations = {
  en: {
    nav: { about: "About", skills: "Skills", projects: "Projects", contact: "Contact" },
    hero: {
      greeting: "Hi, I'm",
      tagline: "Your greatest dev!",
      role: "Fullstack Web Developer",
      desc: "I build reliable, clean web applications with PHP, Laravel, and solid frontend fundamentals.",
      cta_projects: "View Projects",
      cta_cv: "Download CV",
      cta_contact: "Contact Me"
    },
    about: {
      title: "About Me",
      text: "I'm a fullstack web developer focused on building functional, maintainable web applications. I work mainly with PHP and Laravel on the backend, paired with clean HTML, CSS, and JavaScript on the frontend. Currently open for freelance projects — let's build something great together."
    },
    skills: { title: "Skills & Stack" },
    projects: {
      title: "Projects",
      subtitle: "A selection of my work — more coming soon.",
      coming_soon: "Coming Soon",
      placeholder_title: "Project Coming Soon",
      placeholder_desc: "Details for this project will be added here shortly.",
      view_demo: "Live Demo",
      view_code: "Source Code"
    },
    contact: {
      title: "Get In Touch",
      text: "Have a project in mind or want to work together? Send me an email — I'll get back to you as soon as possible.",
      email_label: "Email",
      copy: "Copy",
      copied: "Copied!",
      send_email: "Send Email"
    },
    footer: { text: "All rights reserved." }
  },
  id: {
    nav: { about: "Tentang", skills: "Keahlian", projects: "Proyek", contact: "Kontak" },
    hero: {
      greeting: "Hai, saya",
      tagline: "Your greatest dev!",
      role: "Fullstack Web Developer",
      desc: "Saya membangun aplikasi web yang rapi dan andal dengan PHP, Laravel, dan fondasi frontend yang kuat.",
      cta_projects: "Lihat Proyek",
      cta_cv: "Unduh CV",
      cta_contact: "Hubungi Saya"
    },
    about: {
      title: "Tentang Saya",
      text: "Saya seorang fullstack web developer yang fokus membangun aplikasi web yang fungsional dan mudah dirawat. Saya bekerja utamanya dengan PHP dan Laravel di sisi backend, dipadukan dengan HTML, CSS, dan JavaScript yang rapi di sisi frontend. Saat ini terbuka untuk proyek freelance — mari membangun sesuatu yang hebat bersama."
    },
    skills: { title: "Keahlian & Stack" },
    projects: {
      title: "Proyek",
      subtitle: "Beberapa hasil karya saya — lainnya menyusul.",
      coming_soon: "Segera Hadir",
      placeholder_title: "Proyek Segera Hadir",
      placeholder_desc: "Detail proyek ini akan ditambahkan segera.",
      view_demo: "Demo Langsung",
      view_code: "Kode Sumber"
    },
    contact: {
      title: "Hubungi Saya",
      text: "Punya proyek atau ingin bekerja sama? Kirim email — saya akan membalas secepatnya.",
      email_label: "Email",
      copy: "Salin",
      copied: "Tersalin!",
      send_email: "Kirim Email"
    },
    footer: { text: "Hak cipta dilindungi." }
  }
};

function resolveKey(obj, path) {
  return path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function applyLang(lang) {
  if (!translations[lang]) lang = "en";
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = resolveKey(translations[lang], el.getAttribute("data-i18n"));
    if (value !== null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.getAttribute("data-i18n-attr").split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const value = resolveKey(translations[lang], key);
      if (value !== null) el.setAttribute(attr, value);
    });
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "en";
  applyLang(saved);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
});
