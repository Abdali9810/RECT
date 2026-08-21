const sections = document.querySelectorAll("main .card[id]");
const links = document.querySelectorAll(".toc a");

const linkFor = (id) => document.querySelector(`.toc a[href="#${id}"]`);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = linkFor(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove("is-active"));
        link.classList.add("is-active");
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" }
);

sections.forEach((section) => observer.observe(section));
