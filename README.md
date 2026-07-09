# Pasindu Jeewan Portfolio

Production-ready personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lucide icons, protected admin routes, and optional Supabase storage.

## Routes

```txt
/                         Main portfolio
/admin/login              Admin login
/admin                    Dashboard
/admin/projects           Manage projects
/admin/projects/new       Add project
/admin/projects/[id]      Edit project
/admin/blogs              Manage blogs
/admin/blogs/new          Add blog
/admin/blogs/[id]         Edit blog
/admin/education          Manage education/certifications
/admin/education/new      Add education/certification
/admin/education/[id]     Edit education/certification
/admin/messages           Contact messages
/admin/messages/[id]      View full message
```

## Environment Variables

Create `.env.local`:

```env
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change-this-password
AUTH_SECRET=replace-with-a-long-random-secret

SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

If Supabase variables are missing, the app falls back to local `data/db.json`.

## Supabase

Run this SQL in Supabase SQL Editor:

```txt
supabase/schema.sql
```

If you see permission errors, run:

```txt
supabase/fix-permissions.sql
```

## Commands

```bash
npm install
npm run dev
npm run build
npm run start
```

## Production Notes

- Do not commit `.env.local`.
- Rotate any Supabase service role key that was shared outside your machine.
- Add production content from the admin dashboard.
- `data/db.json` is ignored because local messages/content can contain private data.
