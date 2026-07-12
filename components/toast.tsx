"use client";

import { CheckCircle2, Info, LoaderCircle, X, XCircle } from "lucide-react";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type ToastType = "success" | "error" | "info" | "loading";

type Toast = {
  id: string;
  message: string;
  type: ToastType;
};

type ToastContextValue = {
  showToast: (message: string, type?: ToastType) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const toastStyles = {
  success: "border-aqua/30 bg-aqua/15 text-aqua",
  error: "border-coral/30 bg-coral/15 text-coral",
  info: "border-slate-300 bg-white/90 text-slate-700 dark:border-white/10 dark:bg-slate-950/90 dark:text-slate-100",
  loading: "border-aqua/30 bg-aqua/15 text-aqua",
};

const toastIcons = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  loading: LoaderCircle,
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((items) => items.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, type: ToastType = "info") => {
    const id = crypto.randomUUID();
    setToasts((items) => [...items.slice(-2), { id, message, type }]);
    window.setTimeout(() => removeToast(id), type === "loading" ? 1800 : 4200);
  }, [removeToast]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-[80] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6">
        {toasts.map((toast) => {
          const Icon = toastIcons[toast.type];
          return (
            <div
              key={toast.id}
              className={`glass flex items-start gap-3 rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-2xl ${toastStyles[toast.type]}`}
              role="status"
            >
              <Icon
                size={20}
                className={toast.type === "loading" ? "mt-0.5 shrink-0 animate-spin" : "mt-0.5 shrink-0"}
              />
              <p className="min-w-0 flex-1 text-sm font-bold leading-6">{toast.message}</p>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="mt-0.5 rounded-full p-1 opacity-70 transition hover:bg-white/20 hover:opacity-100"
                aria-label="Close notification"
              >
                <X size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used inside ToastProvider.");
  return context;
}

export function ToastFromSearchParams() {
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const toast = searchParams.get("toast");
  const type = searchParams.get("type") === "error" ? "error" : "success";

  useEffect(() => {
    if (!toast) return;

    showToast(toast, type);

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.delete("toast");
    nextParams.delete("type");
    const nextQuery = nextParams.toString();
    const nextUrl = `${window.location.pathname}${nextQuery ? `?${nextQuery}` : ""}`;
    window.history.replaceState(null, "", nextUrl);
  }, [searchParams, showToast, toast, type]);

  return null;
}
