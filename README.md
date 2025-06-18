# Product Ratings & Reviews App

A full-stack web application for submitting and viewing product reviews, built with React (frontend), Express (backend), and MySQL (database).

---

## Features

- Browse a list of products
- Submit a review (one per product per email)
- View all reviews for each product
- Simple email-based user identification (no authentication)

---

## Project Structure

```
.
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── database.js
│   ├── server.js
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── utils/
    │   └── ...
    └── ...
```

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/reviews_app_intern.git
cd reviews_app_intern
```

### 2. Backend Setup

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```

2. **Configure Environment:**
   - Edit [`backend/.env`](backend/.env) with your MySQL credentials.

3. **Create Database:**
   - Start MySQL and run:
     ```sql
     CREATE DATABASE rating_review_app;
     USE rating_review_app;
     CREATE TABLE reviews (
       id INT AUTO_INCREMENT PRIMARY KEY,
       product_id INT NOT NULL,
       email VARCHAR(255) NOT NULL,
       rating INT NOT NULL,
       review TEXT,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```

4. **Start the backend server:**
   ```sh
   node server.js
   ```
   The backend runs on [http://localhost:8000](http://localhost:8000).

### 3. Frontend Setup

1. **Install dependencies:**
   ```sh
   cd ../frontend
   npm install
   ```

2. **Configure API URL (optional):**
   - The default is set in [`frontend/.env`](frontend/.env).

3. **Start the frontend dev server:**
   ```sh
   npm run dev
   ```
   The frontend runs on [http://localhost:5173](http://localhost:5173).

---

## Usage

1. Open [http://localhost:5173](http://localhost:5173) in your browser.
2. Enter your email to start.
3. Browse products, submit reviews, and view others’ reviews.

---

## Testing

- **Manual Testing:**
  - Try submitting reviews for different products.
  - Attempt to submit multiple reviews for the same product with the same email (should be blocked).
  - Refresh to verify reviews persist.
  - Check error handling by stopping the backend and using the frontend.

- **API Testing:**
  - Use tools like Postman to test:
    - `POST /api/reviews/submit`
    - `GET /api/reviews/product/:id`

- **Database:**
  - Inspect the `reviews` table in MySQL to verify data.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Express, MySQL
- **Database:** MySQL


