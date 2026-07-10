const header = document.querySelector('[data-header]');
const modal = document.querySelector('[data-booking-modal]');
const openButtons = document.querySelectorAll('[data-open-booking-modal]');
const closeButtons = document.querySelectorAll('[data-close-booking-modal]');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

function updateHeader() {
  if (!header) return;
  header.classList.toggle('is-scrolled', window.scrollY > 10);
}
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

function openBookingModal() {
  if (!modal) return;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const dialog = modal.querySelector('.modal-card');
  if (dialog) dialog.focus();
}

function closeBookingModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

openButtons.forEach((button) => button.addEventListener('click', openBookingModal));
closeButtons.forEach((button) => button.addEventListener('click', closeBookingModal));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeBookingModal();
});
