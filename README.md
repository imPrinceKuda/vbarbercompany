# Vista Barber Company Website

A simple static website for Vista Barber Company, ready for GitHub Pages.

## Current direction

This version is intentionally less like an agency landing page:

- Black, white, and grey color theme
- Squared buttons and sharper layout
- Faster first impression: headline, proof, and two booking buttons above the fold
- Separate booking buttons for Vista and San Marcos
- Cleaner services section with easier-to-read service blocks
- Less clutter and fewer decorative sections
- Still includes reviews, photos, locations, mobile sticky booking bar, SEO, and clickable calls/directions

## Files

- `index.html` — full website page
- `styles.css` — responsive styling
- `script.js` — sticky header, current year, and booking links
- `assets/` — favicon, fallback SVGs, and image files

## Booking links

The two appointment URLs are set in `script.js`:

```js
const VISTA_BOOKING_URL = "https://app.acuityscheduling.com/schedule/9c201f82";
const SAN_MARCOS_BOOKING_URL = "https://app.acuityscheduling.com/schedule/b0204b31";
```

Replace either link if the shop changes scheduling platforms.

## How to upload to GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save. GitHub will publish the site.

## Images

Current image files are included:

- `hero.jpg`
- `gallery-1.jpg`
- `gallery-2.jpg`
- `gallery-3.jpg`
- `gallery-4.jpg`
- `gallery-5.jpg`

To replace them later, drop new photos into `assets/` using the same filenames.

## SEO included

The page includes local SEO copy and metadata for:

- Vista barber shop
- barber shop in Vista CA
- men’s haircut Vista CA
- fades Vista CA
- beard trim Vista CA
- kids haircut Vista CA
- barber near Melrose Square
- San Marcos barber shop
- North County San Diego barber

It also includes Barbershop schema markup for both locations.
