# Vista Barber Company Website

Static GitHub Pages site for Vista Barber Company.

## Upload to GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save, then wait for GitHub Pages to publish the site.

## Files

- `index.html` — site markup and SEO metadata
- `styles.css` — layout, colors, responsive design, and modal styling
- `script.js` — sticky header and booking popup
- `assets/` — images and icons

## Booking popup

Any button labeled Book opens a small location chooser popup with:

- Vista Barber Co Vista  
  1688 S. Melrose Dr # 210  
  Vista, CA 92081  
  760-659-6603 · Open 7 days

- Vista Barber Co San Marcos  
  1691 S. Melrose Dr # 190  
  San Marcos, CA 92078  
  760-290-3669 · Closed Sun & Mon

The actual booking links are inside the popup buttons in `index.html`.

## Replace photos

Put new photos in `assets/`, then update image paths in `index.html`.

Recommended filenames:

- `assets/hero.jpg`
- `assets/gallery-1.jpg`
- `assets/gallery-2.jpg`
- `assets/gallery-3.jpg`
- `assets/gallery-4.jpg`
- `assets/gallery-5.jpg`

## Local details included

- Vista location: 1688 S Melrose Dr #210, Vista, CA 92081
- San Marcos location: 1691 S Melrose Dr #190, San Marcos, CA 92078
- Vista phone: (760) 659-6603
- San Marcos phone: (760) 290-3669
- 4.9 Google rating
- 146+ reviews
- Haircuts, fades, beard trims, straight razor work, kids cuts, classic cuts
