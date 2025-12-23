# Product Inventory Management – Frontend Assignment

## 📌 Overview

This project is a product inventory management interface built using **React + TypeScript**.  
It allows users to view, search, filter, sort, and paginate products, as well as add new products via a dedicated form.

The application is designed with a **production-grade, scalable architecture**, focusing on clean separation of concerns, reusability, and maintainability.

---

## 🧠 Approach & Architecture

### Tech Stack
- **React 18 + TypeScript**
- **Vite** (development & build)
- **Tailwind CSS** (styling & responsive UI)
- **React Router** (routing)
- **TanStack Query (React Query)** (data fetching & caching)
- **Zustand** (client-side state for filters, sorting, pagination)
- **react-hook-form + Zod** (form handling & validation)
- **Material UI Icons** (table header interactions)

### Architectural Decisions
- **Feature-based folder structure** for scalability
- **Routing isolated** in `src/app/router.tsx`
- **State management minimized** and localized
- **Client-side operations** (search, filter, sort, pagination) for simplicity
- **UI interactions embedded in table headers** for better discoverability

---

## ✨ Features Implemented

### Product Listing (`/products`)
- Search by product name (inline search icon in header)
- Filter by category (dropdown in header)
- Sort by price and stock (icon-based toggles)
- Pagination
- Responsive, clean table UI
- Clear **Add Product** call-to-action

### Add Product (`/products/new`)
- Form with:
  - Product name
  - Category
  - Price
  - Stock
  - Description
- Schema-based validation using Zod
- Modern, card-based UI layout

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js v18+
- npm

### Installation
```bash
git clone <repository-url>
cd <project-folder>
npm install
npm run dev
http://localhost:5173/products


⏱ Time Taken

Total: ~6–7 hours

Architecture & setup: ~1.5 hrs

Core features (listing, filters, sorting, pagination): ~2.5 hrs

UI polish & responsiveness: ~1.5 hrs

Add product form & validation: ~1 hr

Refactoring & cleanup: ~0.5 hr