# User Registration System

This repository contains a simple Node.js + Express server integrated with Supabase for user registration and authentication.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file with the following variables:

```bash
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Replace them with your Supabase project credentials. The values provided in the challenge are:

```
SUPABASE_URL=https://bxpxvexpathdkwglbsno.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4cHh2ZXhwYXRoZGt3Z2xic25vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0ODkxOTgsImV4cCI6MjA2MzA2NTE5OH0.9n_-iPdgbXEjq5HP_Wa8vdR5Hu-mB7u95bvJPGkXt-s
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4cHh2ZXhwYXRoZGt3Z2xic25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzQ4OTE5OCwiZXhwIjoyMDYzMDY1MTk4fQ.pzE05iVk7Ma7cElDr1XT70bjr_M8TzQ1cTIzOeqHKI8
```

3. Start the server:

```bash
node index.js
```

The server listens on port `3000` by default.

## API

- `POST /signup` – create a new user. Body example:
  ```json
  { "email": "user@example.com", "password": "secret" }
  ```
- `POST /login` – authenticate a user. Same body as signup.
- `GET /profile` – returns the authenticated user's profile. Requires an `Authorization: Bearer <token>` header.
- `GET /users` – lists all users (admin endpoint).
- `DELETE /users/:id` – removes a user by id (admin endpoint).
