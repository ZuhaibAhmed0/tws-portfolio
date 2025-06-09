// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll reveal effect
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll(".card, .section h3").forEach(el => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Hero button click
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thank you for exploring! 🚗");
});
