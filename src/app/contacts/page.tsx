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
    <div className="bg-page min-h-screen pt-24 px-4 sm:px-6 pb-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <p className="eyebrow mb-3">Start A Conversation</p>
          <h1 className="section-title text-3xl sm:text-4xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
            Tell us what kind of Sikkim trip you have in mind and we’ll help shape the right route, timing, and stay style for you.
          </p>
        </div>
        <div className="card-shell bg-surface rounded-[1.75rem] p-5 sm:p-8">
        <form onSubmit={onSubmit} className="space-y-4">
          <input className="input-brand w-full p-3" name="name" placeholder="Your Name" value={form.name} onChange={onChange} required />
          <input className="input-brand w-full p-3" name="email" type="email" placeholder="Email" value={form.email} onChange={onChange} required />
          <input className="input-brand w-full p-3" name="phone" placeholder="Phone (optional)" value={form.phone} onChange={onChange} />
          <input className="input-brand w-full p-3" name="subject" placeholder="Subject" value={form.subject} onChange={onChange} />
          <textarea className="input-brand w-full p-3" name="message" rows={5} placeholder="Your message" value={form.message} onChange={onChange} required />
          <button disabled={status==='loading'} className="btn-brand w-full rounded-lg px-6 py-3 font-semibold sm:w-auto">
            {status==='loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status==='success' && <p className="text-green-600">Message sent!</p>}
          {status==='error' && <p className="text-red-600">{error}</p>}
        </form>
        </div>
      </div>
    </div>
  );
}
