# 🎬 Movie Rating API

A RESTful API built with **Express.js** for managing and serving movie data, ratings, and reviews.  
This API is designed to be consumed by a frontend application (e.g. built with Next.js or React).

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 📁 RESTful API structure (CRUD for movies, reviews, users)
- ⭐ User rating & review system
- 🎞️ Movie data synced from external API (e.g. TMDB)
- 🧠 Clean architecture (MVC + service layer)
- 🛡️ Middleware-based request validation and error handling
- 📦 Ready to scale (supports modular structure & database integration)

---

## 📂 Project Structure

src/
│
├── controllers/ # Request handlers
├── routes/ # Express route definitions
├── models/ # Database models / schemas
├── services/ # Business logic
├── middlewares/ # Auth, error handling, validation, etc.
├── utils/ # Helper functions
├── config/ # Environment and DB config
└── app.js # Express app setup

---

## ⚙️ Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/movie-rating-api.git
cd movie-rating-api

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the server
npm run dev
```

## 🛠 Tech Stack

- Node.js + Express.js

- MongoDB / PostgreSQL (choose one)

- JWT for authentication

- TMDB API (optional for movie data sync)

- Zod / Joi / Yup for validation

- Prisma / Mongoose / Sequelize ORM (choose one)
