// Vista Barber Company static site helpers
// Replace these if the shop changes booking platforms.
const VISTA_BOOKING_URL = "https://app.acuityscheduling.com/schedule/9c201f82";
const SAN_MARCOS_BOOKING_URL = "https://app.acuityscheduling.com/schedule/b0204b31";

const header = document.querySelector("[data-header]");
const year = document.getElementById("year");
const vistaBookLinks = document.querySelectorAll("[data-book-vista]");
const sanMarcosBookLinks = document.querySelectorAll("[data-book-san-marcos]");

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setBookingLinks(links, url) {
  links.forEach((link) => {
    link.setAttribute("href", url);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });
}

setBookingLinks(vistaBookLinks, VISTA_BOOKING_URL);
setBookingLinks(sanMarcosBookLinks, SAN_MARCOS_BOOKING_URL);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
