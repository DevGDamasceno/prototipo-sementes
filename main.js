// Menu do celular
const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");

toggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

menu.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    menu.classList.remove("open");
  }
});

// Destaca no menu a seção que está na tela
const links = document.querySelectorAll(".menu a");
const sections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      links.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

// Aparece suavemente ao rolar
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
