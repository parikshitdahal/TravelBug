'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading'); setError('');

    try {
      const res = await fetch('/api/mail/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setError(json.error || 'Failed to send message');
      }
    } catch {
      setStatus('error'); setError('Network or server error');
    }
  };

  return (
    <div className="bg-[#E6ECE1] min-h-screen pt-24 px-4 sm:px-6 pb-12">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-5 sm:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1E3D2F] mb-6">Contact Us</h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <input className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500" name="name" placeholder="Your Name" value={form.name} onChange={onChange} required />
          <input className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
          <input className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500" name="phone" placeholder="Phone (optional)" value={form.phone} onChange={onChange} />
          <input className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
          <textarea className="w-full border border-gray-300 rounded-lg p-3 text-gray-800 placeholder-gray-500" name="message" rows={5} placeholder="Your message" value={form.message} onChange={onChange} required />
          <button disabled={status==='loading'} className="w-full sm:w-auto bg-[#1E3D2F] text-white px-6 py-3 rounded-lg font-semibold">
            {status==='loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status==='success' && <p className="text-green-600">Message sent!</p>}
          {status==='error' && <p className="text-red-600">{error}</p>}
        </form>
      </div>
    </div>
  );
}
