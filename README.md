# Thangalatha Finance — Premium Gold Loan Website

A luxury black & gold themed React.js website for **Thangalatha Finance**, a trusted gold loan company in Nagercoil. Built with Vite, React Router DOM, Framer Motion, and Lucide React icons.

## Tech Stack

- React 18 + Vite
- React Router DOM v6
- Framer Motion (animations)
- Lucide React (icons)
- Swiper (testimonial slider)

## Folder Structure

```
src/
 ├── assets/                # Logo, owner photo, images
 ├── components/            # Navbar, Footer, FloatingButtons
 ├── pages/                 # 9 page components (each with its own CSS)
 │     ├── Home.jsx + Home.css
 │     ├── About.jsx + About.css
 │     ├── Services.jsx + Services.css
 │     ├── GoldLoan.jsx + GoldLoan.css
 │     ├── LoanCalculator.jsx + LoanCalculator.css
 │     ├── WhyChooseUs.jsx + WhyChooseUs.css
 │     ├── FAQ.jsx + FAQ.css
 │     ├── Testimonials.jsx + Testimonials.css
 │     └── Contact.jsx + Contact.css
 ├── App.jsx                # Router + layout
 ├── App.css
 ├── main.jsx               # Entry point
 └── index.css              # Global styles & CSS variables
```

## Getting Started

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Build for Production

```bash
npm run build
npm run preview
```

## Adding Your Images

Place these files in `src/assets/`:

- `logo.png` — The Thangalatha Finance gold logo (already transparent)
- `owners.png` — Owners photo (background removed, transparent PNG)

Both are imported in `Home.jsx` and the `Navbar`/`Footer`.

### Removing Background from the Owners Photo

If you need to remove the background, use any of:

- https://www.remove.bg (free, fast, web)
- Photoshop / GIMP > Select Subject > Delete Background
- Python: `rembg i input.jpg output.png`

Save the result as `src/assets/owners.png` with transparent background.

## Theme Colors

| Token | Value | Use |
|---|---|---|
| `--color-black` | `#000000` | Background |
| `--color-gold` | `#D4AF37` | Primary accent |
| `--color-gold-light` | `#F5D679` | Highlights |
| `--color-gold-dark` | `#9C7A1E` | Shadows |
| `--color-white` | `#FFFFFF` | Text |

## Pages

1. **Home** — Hero with owner photo, gold glow, CTAs
2. **About Us** — Story, Mission, Vision
3. **Services** — 6 animated service cards
4. **Gold Loan** — Process timeline, documents, eligibility
5. **Loan Calculator** — Interactive interest calculator
6. **Why Choose Us** — 6 reason cards
7. **FAQ** — Accordion with 6+ questions
8. **Testimonials** — Swiper slider
9. **Contact Us** — Form + map embed + WhatsApp/Call floating buttons

## Company Info

- **Phone:** +91 80151 57070 / +91 81229 06656
- **Email:** thangalathafinance@gmail.com
- **Address:** No.3 Mead Street, Near Old Municipality, Nagercoil — 629001
- **Interest:** 15% p.a.   |   ₹10,000 / gram   |   12 months   |   Nil processing fee
