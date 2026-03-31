'use client';

import { useState } from 'react';

interface BookingFormProps {
  packageTitle: string;
  packageDuration?: string; // e.g., "3 Nights 4 Days"
}

export default function BookingForm({ packageTitle, packageDuration = '' }: BookingFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
        setForm({ name: '', email: '', phone: '', stayType: '', message: '' });
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
    <form onSubmit={onSubmit} className="space-y-6 bg-white shadow-lg rounded-xl p-6">
      {/* Package context */}
      <div className="rounded-lg bg-[#F6FAF4] border p-4">
        <p className="text-sm text-gray-700">
          <span className="font-semibold text-[#1E3D2F]">Package:</span> {packageTitle}
          {packageDuration && (
            <> &middot; <span className="font-semibold">{packageDuration}</span></>
          )}
        </p>
      </div>

      {/* Name */}
      <div>
        <label className="block mb-2 font-bold text-[#1E3D2F]">Your Name</label>
        <input
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-medium 
                     bg-gray-50 focus:bg-white focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#3B5F4D]"
          name="name"
          placeholder="Enter your full name"
          value={form.name}
          onChange={onChange}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block mb-2 font-bold text-[#1E3D2F]">Email</label>
        <input
          type="email"
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-medium 
                     bg-gray-50 focus:bg-white focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#3B5F4D]"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={onChange}
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block mb-2 font-bold text-[#1E3D2F]">Phone (optional)</label>
        <input
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-medium 
                     bg-gray-50 focus:bg-white focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#3B5F4D]"
          name="phone"
          placeholder="+91-XXXXXXXXXX"
          value={form.phone}
          onChange={onChange}
        />
      </div>

      {/* Stay Type */}
      <div>
        <label className="block mb-2 font-bold text-[#1E3D2F]">Stay Type</label>
        <select
          name="stayType"
          value={form.stayType}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-lg p-3 bg-gray-50 text-gray-800 font-medium
                     focus:bg-white focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#3B5F4D]"
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
        <label className="block mb-2 font-bold text-[#1E3D2F]">Additional Message (optional)</label>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 font-medium 
                     bg-gray-50 focus:bg-white focus:border-[#1E3D2F] focus:ring-2 focus:ring-[#3B5F4D]"
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
        className="w-full bg-[#1E3D2F] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#163026] transition"
      >
        {status === 'loading' ? 'Sending…' : 'Book This Trip'}
      </button>

      {/* Status messages */}
      {status === 'success' && <p className="text-green-600 text-center">Booking request sent!</p>}
      {status === 'error' && <p className="text-red-600 text-center">{error}</p>}
    </form>
  );
}

