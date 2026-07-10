# Vista Barber Company Website

A modern, high-converting static website for Vista Barber Company, ready for GitHub Pages.

## Files

- `index.html` — full website page
- `styles.css` — responsive styling
- `script.js` — sticky header, current year, booking link helper
- `assets/` — favicon and image placeholders

## How to upload to GitHub Pages

1. Create a new GitHub repository.
2. Upload everything inside this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
5. Save. GitHub will publish the site.

## Replace placeholder images

Drop real business photos into the `assets` folder using these exact filenames:

- `hero.jpg` — hero/background image, ideally exterior or strong shop photo
- `gallery-1.jpg` — exterior/outside shop photo
- `gallery-2.jpg` — interior/barbershop photo
- `gallery-3.jpg` — haircut/fade photo
- `gallery-4.jpg` — before-and-after cut photo
- `gallery-5.jpg` — barber chair/shop atmosphere photo

The site already includes SVG fallbacks, so it will still look polished before photos are added.

## Update booking link

Open `script.js` and replace:

```js
const BOOKING_URL = "";
```

with the real booking link, for example:

```js
const BOOKING_URL = "https://your-booking-link.com";
```

If left blank, all “Book Now” buttons call the shop at `(760) 659-6603`.

## Update Instagram link

In `index.html`, search for:

```html
https://www.instagram.com/
```

Replace it with the shop’s real Instagram URL.

## Update hours

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

It also includes Barbershop schema markup with address, phone, rating, and review count.
