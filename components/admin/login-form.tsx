"use client";

import { useActionState } from "react";
import { LockKeyhole } from "lucide-react";
import { loginAdmin, type ActionState } from "@/app/actions";

const initialState: ActionState = { ok: false, message: "" };

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, initialState);

  return (
    <form action={action} className="glass w-full max-w-md rounded-3xl p-5 shadow-glow sm:p-6">
      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-aqua dark:bg-white dark:text-slate-950">
        <LockKeyhole size={22} />
      </div>
      <h1 className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">Admin Login</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Sign in to manage projects, blogs, education, and messages.</p>
      <label className="mt-6 block text-sm font-semibold text-slate-700 dark:text-slate-200">
        Email
        <input name="email" type="email" required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm outline-none focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-slate-950/50 dark:text-white" />
      </label>
      <label className="mt-4 block text-sm font-semibold text-slate-700 dark:text-slate-200">
        Password
        <input name="password" type="password" minLength={8} required className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm outline-none focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-slate-950/50 dark:text-white" />
      </label>
      <button disabled={pending} className="mt-6 w-full rounded-full bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
        {pending ? "Checking..." : "Login"}
      </button>
      {state.message ? <p className="mt-4 text-sm font-semibold text-coral">{state.message}</p> : null}
    </form>
  );
}
