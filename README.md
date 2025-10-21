#  CapCons Assignment

A **Next.js e-commerce frontend** showcasing Nike products with SSR, SSG, and ISR, built for the CapCons assignment. Features a **homepage, product listing, product detail pages, and filters** using **Tailwind CSS** for styling.  

---

## Table of Contents


- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Project Structure](#project-structure)  
- [SSR / SSG / ISR Usage](#ssr--ssg--isr-usage)  
- [Installation](#installation)  
- [Usage](#usage)  
- [License](#license)  

---

## Features

- **Homepage** with logo and featured products  
- **Product Listing Page** with grid layout and filters on the left  
- **Product Detail Page** with dynamic content per product  
- **Responsive design** using Tailwind CSS  
- **Clickable product images** linking to product pages  
- **Footer** and **Responsive Navbar**  

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** Typscript
- **Styling:** Tailwind CSS + CSS Modules  
- **Routing:** Dynamic routes for product pages  

---


## Project Structure

## Project Structure

- **app/**
  - `layout.tsx` — Root layout (Header + Footer)
  - `page.tsx` — Homepage with logo & featured products
  - **products/**
    - `page.tsx` — Product Listing Page (filters on left)
    - `[id]/page.tsx` — Product Detail Page (dynamic route)

- **components/**
  - `Carousel.tsx` — Individual Product Card
  - `Footer.tsx` - A responsive footer
  - `Navbar.tsx` - A responsive collapsing navbar
  
  - `Hero.tsx` — Sidebar Filters Component
  - `CarouselWomen.tsx` — section-specific carousel



- `globals.css` — Global CSS + Tailwind directives  

- `package.json`


  ## SSR / SSG / ISR Usage
  

This project leverages **Next.js App Router features** to optimize page loading, SEO, and content freshness:

- **SSR (Server-Side Rendering):**  
  Product detail pages are rendered on the server **at request time**. This ensures each user sees the **latest product information** immediately.

- **SSG (Static Site Generation):**  
  Pages like the **homepage** and **product listing** are generated **at build time**. This improves performance and allows pages to **load instantly** for all users.

- **ISR (Incremental Static Regeneration):**  
  Certain product pages are regenerated **in the background** after a specified interval. This combines the **speed of SSG** with the **freshness of SSR**, keeping frequently updated product data current **without rebuilding the whole site**.

> By combining SSR, SSG, and ISR, the application achieves **fast page loads, SEO-friendly pages, and up-to-date content**, while reducing server load.


## Installation

Follow these steps to set up and run the Nike Store Clone project locally.

---

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/garimatiwari2004/capcons-task
```

### 2. Move to Project folder


```bash
cd capcons-task
```
### 3. Install dependencies

```bash
npm install
```

### 4. Run

```bash
npm run dev
```
