"use client";

import { useActionState } from "react";
import { Send } from "lucide-react";
import { sendContactMessage, type ActionState } from "@/app/actions";

const initialState: ActionState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendContactMessage, initialState);

  return (
    // Server action handles validation and persistence, keeping secrets off the client.
    <form action={action} className="glass rounded-3xl p-6 shadow-glow">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Name
          <input
            name="name"
            minLength={2}
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-white/5"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
          <input
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-white/5"
            placeholder="you@example.com"
          />
        </label>
      </div>
      <label className="mt-4 block space-y-2 text-sm font-medium text-slate-700 dark:text-slate-200">
        Message
        <textarea
          name="message"
          minLength={10}
          required
          rows={5}
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-white/5"
          placeholder="Tell me about your project or opportunity..."
        />
      </label>
      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
        <button
          disabled={pending}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-aqua disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-slate-950 sm:w-auto"
        >
          <Send size={17} />
          {pending ? "Sending..." : "Send Message"}
        </button>
        {state.message ? (
          <p className={state.ok ? "text-sm font-medium text-aqua" : "text-sm font-medium text-coral"}>
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
