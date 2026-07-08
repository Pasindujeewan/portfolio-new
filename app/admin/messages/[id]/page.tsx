import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { removeMessage } from "@/app/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard, DeleteButton } from "@/components/admin/form-fields";
import { readData } from "@/lib/store";

export default async function MessageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { messages } = await readData();
  const message = messages.find((item) => item.id === id);

  if (!message) notFound();

  return (
    <AdminShell title="Message">
      <AdminCard>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-aqua">Contact message</p>
            <h2 className="mt-2 text-2xl font-black">{message.name}</h2>
            <a href={`mailto:${message.email}`} className="mt-2 inline-flex max-w-full items-center gap-2 break-all font-bold text-aqua">
              <Mail size={17} className="shrink-0" />
              {message.email}
            </a>
            <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
              {new Date(message.createdAt).toLocaleString()}
            </p>
          </div>
          <div className="grid gap-2 sm:flex sm:shrink-0">
            <Link
              href="/admin/messages"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
            >
              <ArrowLeft size={16} />
              Back
            </Link>
            <form action={removeMessage} className="w-full sm:w-auto">
              <input type="hidden" name="id" value={message.id} />
              <input type="hidden" name="redirectTo" value="/admin/messages" />
              <DeleteButton />
            </form>
          </div>
        </div>
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-slate-950/40">
          <p className="whitespace-pre-wrap break-words leading-8 text-slate-700 dark:text-slate-200">{message.message}</p>
        </div>
      </AdminCard>
    </AdminShell>
  );
}
