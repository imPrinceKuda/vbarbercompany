// Vista Barber Company static site helpers
// This is the Vista appointment link found from the current public site.
// Replace it if the shop changes booking platforms.
const BOOKING_URL = "https://app.acuityscheduling.com/schedule.php?owner=19633041";
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
