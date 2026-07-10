// Vista Barber Company static site helpers
// Replace BOOKING_URL with the real booking link when available.
const BOOKING_URL = "";
const FALLBACK_BOOKING_URL = "tel:+17606596603";

const header = document.querySelector("[data-header]");
const year = document.getElementById("year");
const bookLinks = document.querySelectorAll("[data-book-link]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

bookLinks.forEach((link) => {
  const target = BOOKING_URL.trim() || FALLBACK_BOOKING_URL;
  link.setAttribute("href", target);
  if (target.startsWith("http")) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  }
});

// Small UX polish: make gallery preview images open in a new tab only if a real JPG exists.
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    const img = item.querySelector("img");
    if (!img || img.src.includes(".svg")) {
      event.preventDefault();
    }
  });
});
