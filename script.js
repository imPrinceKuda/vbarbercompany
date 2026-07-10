const header = document.querySelector("[data-header]");
const year = document.getElementById("year");
const modal = document.querySelector("[data-booking-modal]");
const openButtons = document.querySelectorAll("[data-open-booking-modal]");
const closeButtons = document.querySelectorAll("[data-close-booking-modal]");
const modalCard = modal?.querySelector(".modal-card");
let lastFocused = null;

if (year) year.textContent = new Date().getFullYear();

function updateHeader() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

function openModal() {
  if (!modal) return;
  lastFocused = document.activeElement;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  setTimeout(() => modalCard?.focus(), 0);
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
openButtons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) closeModal();
});
