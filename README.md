# Inventory Panel
A simple inventory management panel built using **React + TypeScript**, focusing on clean architecture, state management, and real-world UI patterns.
---
## 🚀 Tech Stack
- React + TypeScript
- Zustand (state management + persistence)
- TanStack Router
- TanStack React Query
- React Hook Form + Zod
- Tailwind CSS
- DummyJSON (mock API)
---
## ⚙️ Prerequisites
- Node.js v18+
- npm
---
## 🛠 Installation
```bash
git clone git@github.com:rathoredeveshbly/inventory-panel.git
cd inventory-panel
npm install
npm run dev

# Open in browser
http://localhost:5173
🧠 Overview of Approach
Project Structure
Followed a feature-based folder structure

All product-related logic lives under:

src/features/products
State Management

Zustand is used for:

Search, filter, sort, pagination state

Locally added products

In-place stock edits

Zustand persist middleware stores data in localStorage, so:

New products remain after refresh

Edited stock values persist

Data Fetching

TanStack React Query fetches product data from DummyJSON

API products are merged with:

Locally added products

Locally edited stock values

Routing
TanStack Router is used instead of react-router-dom

Routes implemented:

/products → Product listing

/products/new → Add product form

UI Features

Product list with:

Debounced search

Category filter

Sort by price / stock

Pagination

In-place editing of product stock from the table

Product status indicator (In Stock / Out of Stock)

Total: ~4 hours

Project setup & architecture: ~1 hr
Core features (listing, filters, sorting, pagination): ~1.5 hrs
Add product form & validation: ~45 mins
State persistence & in-place edit: ~30 mins
Refactoring & cleanup: ~15 mins

⚠️ Known Limitations

DummyJSON API does not persist data

New products and stock edits are stored only in localStorage

No authentication or authorization

Pagination is handled on the client side

No backend integration for updates

🛠 TODO / Possible Improvements

Sync filters and pagination with URL query params

Add delete product functionality

Add optimistic updates when backend is available

Improve accessibility (ARIA roles, keyboard navigation)

Add unit and integration tests

Deploy application (Vercel / Netlify)