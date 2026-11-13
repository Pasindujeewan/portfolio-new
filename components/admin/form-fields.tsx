"use client";

import type { ReactNode } from "react";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

export function Field({
  label,
  name,
  defaultValue,
  type = "text",
  required = true
}: {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block min-w-0 text-sm font-semibold text-slate-700 dark:text-slate-200">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500"
      />
    </label>
  );
}

export function SelectField({
  label,
  name,
  defaultValue,
  options,
  required = true
}: {
  label: string;
  name: string;
  defaultValue?: string;
  options: { label: string; value: string }[];
  required?: boolean;
}) {
  return (
    <label className="block min-w-0 text-sm font-semibold text-slate-700 dark:text-slate-200">
      {label}
      <select
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm outline-none transition focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-slate-950/50 dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export function TextArea({ label, name, defaultValue }: { label: string; name: string; defaultValue?: string }) {
  return (
    <label className="block min-w-0 text-sm font-semibold text-slate-700 dark:text-slate-200">
      {label}
      <textarea
        name={name}
        required
        rows={4}
        defaultValue={defaultValue}
        className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white/85 px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 focus:border-aqua focus:ring-4 focus:ring-aqua/15 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500"
      />
    </label>
  );
}

export function AdminCard({ children }: { children: ReactNode }) {
  return <div className="glass min-w-0 rounded-3xl p-4 shadow-lg shadow-slate-200/60 dark:shadow-black/30 sm:p-5">{children}</div>;
}

export function SaveButton({ label = "Save" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-wait disabled:opacity-70 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 sm:w-auto"
    >
      {pending ? <LoaderCircle size={17} className="animate-spin" /> : null}
      {pending ? "Saving..." : label}
    </button>
  );
}

export function DeleteButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-coral/40 px-4 py-2 text-sm font-bold text-coral transition hover:bg-coral hover:text-white disabled:cursor-wait disabled:opacity-70 sm:w-auto"
    >
      {pending ? <LoaderCircle size={16} className="animate-spin" /> : null}
      {pending ? "Deleting..." : "Delete"}
    </button>
  );
}
