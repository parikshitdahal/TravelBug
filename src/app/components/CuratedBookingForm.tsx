'use client';

import { useState } from 'react';

export interface CuratedBookingFormProps {
  packageTitle: string;   // e.g., pkg.title
  duration: string;       // e.g., pkg.duration ("3 Nights 4 Days")
}

export default function CuratedBookingForm({ packageTitle, duration }: CuratedBookingFormProps) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/book-curated', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, packageTitle, duration }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.success) {
        setError(data?.error || 'Failed to send request. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } catch {
      setStatus('error');
      setError('Network error. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card-shell space-y-6 rounded-[1.6rem] p-6">
      {/* Package context */}
      <div className="bg-surface-soft rounded-[1.1rem] border border-[var(--border)] p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-primary">Package:</span> {packageTitle}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-primary">Duration:</span> {duration}
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block mb-2 font-bold text-primary">Your Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your full name"
          required
          className="input-brand w-full p-3 text-gray-800 font-medium placeholder-gray-500 outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-bold text-primary">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="you@example.com"
          required
          className="input-brand w-full p-3 text-gray-800 font-medium placeholder-gray-500 outline-none"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-bold text-primary">Phone (optional)</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          type="text"
          placeholder="+91-XXXXXXXXXX"
          className="input-brand w-full p-3 text-gray-800 font-medium placeholder-gray-500 outline-none"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-bold text-primary">Additional Message (optional)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Any specific requests or questions?"
          className="input-brand w-full p-3 text-gray-800 font-medium placeholder-gray-500 outline-none"
        />
      </div>

      {/* Status messages */}
      {status === 'success' && (
        <div className="rounded-xl bg-green-50 border border-green-200 text-green-700 p-3 text-sm">
          Request sent! We’ll contact you shortly.
        </div>
      )}
      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-200 text-red-700 p-3 text-sm">
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className={`btn-brand w-full rounded-xl px-6 py-3 font-semibold transition
                   ${status === 'loading' ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        {status === 'loading' ? 'Sending…' : 'Book This Trip'}
      </button>
    </form>
  );
}
