import { Eye } from "lucide-react";
import Link from "next/link";
import { removeMessage } from "@/app/actions";
import { AdminShell } from "@/components/admin/admin-shell";
import { AdminCard, DeleteButton } from "@/components/admin/form-fields";
import { readData } from "@/lib/store";

export default async function AdminMessagesPage() {
  const { messages } = await readData();

  return (
    <AdminShell title="Messages">
      <div className="grid gap-4">
        {messages.length === 0 ? (
          <AdminCard>
            <p className="text-slate-600 dark:text-slate-300">No contact messages yet.</p>
          </AdminCard>
        ) : null}
        {messages.map((message) => (
          <AdminCard key={message.id}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <h2 className="text-xl font-bold">{message.name}</h2>
                <a href={`mailto:${message.email}`} className="break-words font-semibold text-aqua">{message.email}</a>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{new Date(message.createdAt).toLocaleString()}</p>
                <p className="mt-4 line-clamp-2 leading-7 text-slate-600 dark:text-slate-300">{message.message}</p>
              </div>
              <div className="grid gap-2 sm:flex sm:shrink-0">
                <Link
                  href={`/admin/messages/${message.id}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-aqua hover:text-aqua dark:border-white/10 dark:text-slate-200"
                >
                  <Eye size={16} />
                  View
                </Link>
                <form action={removeMessage} className="w-full sm:w-auto">
                  <input type="hidden" name="id" value={message.id} />
                  <input type="hidden" name="redirectTo" value="/admin/messages" />
                  <DeleteButton />
                </form>
              </div>
            </div>
          </AdminCard>
        ))}
      </div>
    </AdminShell>
  );
}
