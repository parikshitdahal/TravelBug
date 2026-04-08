'use client';

import { useState } from 'react';

interface BookingFormProps {
  packageTitle: string;
  packageDuration?: string; // e.g., "3 Nights 4 Days"
}

export default function BookingForm({ packageTitle, packageDuration = '' }: BookingFormProps) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    stayType: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const res = await fetch('/api/mail/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          packageTitle,
          packageDuration,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          phone: '',
          startDate: '',
          endDate: '',
          stayType: '',
          message: '',
        });
      } else {
        setStatus('error');
        setError(json.error || 'Failed to send booking');
      }
    } catch (err) {
      console.error('[BOOKING SUBMIT ERROR]', err);
      setStatus('error');
      setError('Network or server error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="card-shell space-y-6 rounded-[1.6rem] p-6">
      {/* Package context */}
      <div className="bg-surface-soft rounded-[1.1rem] border border-[var(--border)] p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-primary">Package:</span> {packageTitle}
          {packageDuration && (
            <> &middot; <span className="font-semibold">{packageDuration}</span></>
          )}
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block mb-2 font-bold text-primary">Your Name</label>
        <input
          className="input-brand w-full p-3 text-gray-800 font-medium"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-bold text-primary">Email</label>
        <input
          type="email"
          className="input-brand w-full p-3 text-gray-800 font-medium"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-bold text-primary">Phone (optional)</label>
        <input
          className="input-brand w-full p-3 text-gray-800 font-medium"
          name="phone"
          placeholder="+91-XXXXXXXXXX"
          value={form.phone}
          onChange={onChange}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block mb-2 font-bold text-primary">Travel Start Date</label>
          <input
            type="date"
            name="startDate"
            min={today}
            value={form.startDate}
            onChange={onChange}
            className="input-brand w-full p-3 text-gray-800 font-medium"
          />
        </div>
        <div>
          <label className="block mb-2 font-bold text-primary">Travel End Date</label>
          <input
            type="date"
            name="endDate"
            min={form.startDate || today}
            value={form.endDate}
            onChange={onChange}
            className="input-brand w-full p-3 text-gray-800 font-medium"
          />
        </div>
      </div>

      {/* Stay Type */}
      <div>
        <label className="block mb-2 font-bold text-primary">Stay Type</label>
        <select
          name="stayType"
          value={form.stayType}
          onChange={onChange}
          className="input-brand w-full p-3 text-gray-800 font-medium"
        >
          <option value="">Select your preference</option>
          <option value="Budget">Budget</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block mb-2 font-bold text-primary">Additional Message (optional)</label>
        <textarea
          className="input-brand w-full p-3 text-gray-800 font-medium"
          name="message"
          rows={4}
          placeholder="Any specific requests or questions?"
          value={form.message}
          onChange={onChange}
        />
      </div>

      {/* Submit */}
      <button
        disabled={status === 'loading'}
        className="btn-brand w-full rounded-lg px-6 py-3 font-semibold transition"
      >
        {status === 'loading' ? 'Sending…' : 'Book This Trip'}
      </button>

      {/* Status messages */}
      {status === 'success' && <p className="rounded-xl bg-emerald-50 px-4 py-3 text-center text-emerald-700">Booking request sent!</p>}
      {status === 'error' && <p className="rounded-xl bg-red-50 px-4 py-3 text-center text-red-600">{error}</p>}
    </form>
  );
}
