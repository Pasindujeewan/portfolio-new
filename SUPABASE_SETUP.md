# Supabase Setup

This project can use either local JSON data or Supabase.

If these environment variables are missing, the app uses:

```txt
data/db.json
```

If these variables exist, the app uses Supabase:

```env
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SECRET_KEY=your-secret-key
```

## Where To Add Supabase Details

For local development, add them in:

```txt
.env.local
```

For deployment, add them in your hosting provider environment variables:

```txt
SUPABASE_URL
SUPABASE_SECRET_KEY
```

Do not put `SUPABASE_SECRET_KEY` in frontend code or expose it publicly.

## How To Get Supabase Values

In Supabase:

1. Open your project.
2. Go to Project Settings.
3. Go to API.
4. Copy Project URL into `SUPABASE_URL`.
5. Copy the new server-side `Secret key` into `SUPABASE_SECRET_KEY`.

The code still supports the legacy `SUPABASE_SERVICE_ROLE_KEY` as a fallback, but new projects should prefer `SUPABASE_SECRET_KEY`.

## Create Tables

Open Supabase SQL Editor and run:

```txt
supabase/schema.sql
```

The app uses these tables:

```txt
projects
blogs
education
messages
```

## Install Dependency

Run this after pulling the code:

```bash
npm install
```

`@supabase/supabase-js` has been added to `package.json`.
