// Vista Barber Company static site helpers
const header = document.querySelector("[data-header]");
const year = document.getElementById("year");
const modal = document.querySelector("[data-booking-modal]");
const modalCard = modal?.querySelector(".modal-card");
const openModalButtons = document.querySelectorAll("[data-open-booking-modal]");
const closeModalButtons = document.querySelectorAll("[data-close-booking-modal]");
let lastFocusedElement = null;

if (year) {
  year.textContent = new Date().getFullYear();
}

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function openBookingModal() {
  if (!modal || !modalCard) return;
  lastFocusedElement = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalCard.focus();
}

function closeBookingModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

openModalButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openBookingModal();
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", closeBookingModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeBookingModal();
  }
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
