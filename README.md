# The Property Co

The Property Co is a property listing website for browsing homes to rent and buy. Visitors can search by purpose, price, rooms, and location, then open a listing for photos, price, and amenities.

## Features

- Home page with a hero, renter guides, and featured rent and sale listings
- Search page with filters for purpose, rent frequency, price, rooms, baths, area, furnishing, and property type
- Location search with autocomplete
- Property detail page with a photo scroller, price, beds, baths, area, agency, description, and amenities
- Navigation for Home, Search, Buy Property, and Rent Property

## Pages

| Route | What it shows |
| --- | --- |
| `/` | Featured homes for rent and for sale |
| `/search` | Filterable listing results |
| `/search?purpose=for-rent` | Rentals |
| `/search?purpose=for-sale` | Homes for sale |
| `/property/[id]` | A single listing |

## Tech stack

- [Next.js](https://nextjs.org/) (Pages Router)
- [React](https://react.dev/)
- [Chakra UI](https://chakra-ui.com/)

Listings live in `utils/listings.js`. The previous Bayut RapidAPI host no longer exists, so the site reads this local catalog for the home page, search, and property details.

## Getting started

Install dependencies, then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project structure

```
components/   Shared UI (navbar, footer, cards, filters)
pages/        Routes, including property details and the search page
utils/        Local listings and search filter options
public/       Static files
```

## Contact

- Phone: +971 4 555 0182
- Email: hello@thepropertyco.com
- Office: Office 18, Marina Walk, Dubai Marina, UAE
