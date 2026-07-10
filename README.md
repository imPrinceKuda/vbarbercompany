# Vista Barber Company Website

A simple, local, high-converting static website for Vista Barber Company, ready for GitHub Pages.

## What changed in this version

- Replaced the blank placeholder image slots with usable shop/cut photos pulled from Vista Barber Company’s public website/Instagram feed where available.
- Changed the visual style away from rounded, sleek agency design and toward a darker old-school barber shop feel: squared buttons, heavier typography, brass/cream/oxblood colors, harder borders, and less glossy polish.
- Added more personality based on the shop vibe: old-school music, vintage wall pieces, darker shop energy, regular local barbershop feel, while still clearly explaining the services.
- Connected the “Book Now” buttons to the Vista appointment link found from the current public site.
- Updated the Instagram link to `https://www.instagram.com/vistabarberco/`.

## Files

- `index.html` — full website page
- `styles.css` — responsive styling
- `script.js` — sticky header, current year, booking link helper
- `assets/` — favicon, fallback SVGs, and real image files

## How to upload to GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save. GitHub will publish the site.

## Booking link

The booking URL is set inside `script.js`:

```js
const BOOKING_URL = "https://app.acuityscheduling.com/schedule.php?owner=19633041";
```

Replace that link if the shop changes booking platforms.

## Images

The current image files are already included:

- `hero.jpg`
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`
- `gallery-5.jpg`

To replace them later, drop new photos into `assets/` using the same filenames.

## Hours

The footer currently says “Open 7 days” and “Call the shop for current daily hours.” Replace this with exact hours when you have them.

## SEO included

The page includes local SEO copy and metadata for:

- Vista barber shop
- barber shop in Vista CA
- men’s haircut Vista CA
- fades Vista CA
- beard trim Vista CA
- kids haircut Vista CA
- barber near Melrose Square
- North County San Diego barber

It also includes Barbershop schema markup with address, phone, rating, review count, service area, and Instagram link.
