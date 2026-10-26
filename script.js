// Small, dependency-free interactions for the CV website.
document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    navLinks.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
      menuToggle.focus();
    }
  });
}

// Reveal sections as they enter the viewport. If unsupported, content remains visible.
const revealItems = document.querySelectorAll(".reveal");
revealItems.forEach((item) => {
  const delay = item.dataset.delay;
  if (delay) item.style.setProperty("--delay", `${delay}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        const timeline = entry.target.closest(".timeline");
        if (timeline) timeline.classList.add("is-active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Keep navigation state and scroll affordances in sync.
const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const sectionLinks = [...document.querySelectorAll('.nav-links a[href^="#"]')];
const observedSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window && observedSections.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      sectionLinks.forEach((link) => {
        if (link.getAttribute("href") === `#${entry.target.id}`) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });

  observedSections.forEach((section) => sectionObserver.observe(section));
}

const progressBar = document.querySelector(".scroll-progress");
function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  if (progressBar) progressBar.style.width = `${progress}%`;
  if (siteHeader) siteHeader.classList.toggle("is-scrolled", window.scrollY > 12);
  if (backToTop) backToTop.classList.toggle("is-visible", window.scrollY > 500);
}
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();

// Keep the original role visible to assistive technology while the second role types.
const rotatingTitle = document.querySelector("[data-rotate-title]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
if (rotatingTitle && !reducedMotion.matches) {
  const titles = [
    "Aspiring Software Developer",
    "Aspiring Web Developer",
    "Future IT Professional",
  ];
  let titleIndex = 0;
  let characterIndex = titles[0].length;
  let deleting = true;

  function typeTitle() {
    const title = titles[titleIndex];
    characterIndex += deleting ? -1 : 1;
    rotatingTitle.textContent = title.slice(0, characterIndex);

    if (!deleting && characterIndex === title.length) {
      deleting = true;
      window.setTimeout(typeTitle, 1800);
      return;
    }

    if (deleting && characterIndex === 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      window.setTimeout(typeTitle, 300);
      return;
    }

    window.setTimeout(typeTitle, deleting ? 35 : 65);
  }

  window.setTimeout(typeTitle, 1800);
}

// Current year in the footer.
const yearNode = document.querySelector("#year");
if (yearNode) yearNode.textContent = new Date().getFullYear();
