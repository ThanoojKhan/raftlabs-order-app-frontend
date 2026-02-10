# RaftLabs Order App --- Frontend

A production‑quality food ordering frontend built using modern React
architecture, focused on **clean design, resilience, scalability, and
real‑world UX**.

------------------------------------------------------------------------

## Tech Stack

-   **React (Vite)**
-   **React Query** --- async state management and polling
-   **Zustand** --- cart state isolation
-   **Axios** --- API layer with centralized error handling
-   **Tailwind + DaisyUI** --- consistent design system
-   **Vitest + Testing Library** --- component testing

------------------------------------------------------------------------

## Architecture Overview

### Feature‑based structure

Each domain is isolated:

    features/
      menu/
      cart/
      order/
    components/
      ui/
    store/
    api/

This ensures **scalability, maintainability, and separation of
concerns**.

------------------------------------------------------------------------

### State Management Strategy

  Concern             Tool
  ------------------- -------------------
  Server data         React Query
  Client cart state   Zustand
  Network layer       Axios interceptor

This mirrors **real production frontend architecture**.

------------------------------------------------------------------------

## Key UX & Reliability Features

-   Skeleton loaders matching real UI layout
-   Graceful API failure handling via reusable `ErrorState`
-   Image fallback handling for broken CDN assets
-   Disabled unavailable menu items
-   Real‑time order status polling
-   Centralized validation UI via reusable Input components

All designed for **real‑world resilience**, not demo behavior.

------------------------------------------------------------------------

## Testing

Unit tests cover:

-   Menu rendering
-   Cart & checkout validation
-   Component behavior

Run tests:

``` bash
npm test
```

------------------------------------------------------------------------

## Running Locally

``` bash
npm install
npm run dev
```

App runs at:

    http://localhost:5173

Backend expected at:

    http://localhost:3000/api

------------------------------------------------------------------------

## Design Philosophy

This project intentionally avoids over‑engineering while still
demonstrating:

-   **Senior‑level component abstraction**
-   **Robust error handling**
-   **Clean async data flow**
-   **Production‑ready UX polish**
-   **Testable architecture**

Goal: reflect how a **real scalable frontend** is structured in
industry.

------------------------------------------------------------------------

## Author

**Thanooj**