"use client";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
          Full Name
        </label>
        <input
          type="text"
          placeholder="Juan dela Cruz"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
          Email Address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-slate-500">
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Tell us what you need..."
          className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
        />
      </div>
      <Button
        type="submit"
        className="w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
      >
        Send Message
      </Button>
    </form>
  );
}
