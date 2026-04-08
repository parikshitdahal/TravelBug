'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const destinations = [
  { name: 'Gangtok', img: '/destinations/gangtok.jpg' },
  { name: 'North Sikkim', img: '/destinations/north-hero.jpg' },
  { name: 'South Sikkim', img: '/destinations/south.jpeg' },
  { name: 'West Sikkim', img: '/destinations/west.jpg' },
  { name: 'East Sikkim', img: '/destinations/east.jpg' },
  { name: 'Pelling', img: '/destinations/west2.jpg' },
  { name: 'Lachung', img: '/destinations/lachung.jpeg' },
  { name: 'Yumthang Valley', img: '/destinations/north-hero.jpg' },
  { name: 'Rabong', img: '/destinations/namchi.jpg' },
  { name: 'Nathula Pass', img: '/destinations/tasngo.jpg' },
];

export default function CustomPackagePage() {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    destinations: [] as string[],
    days: '',
    startDate: '',
    endDate: '',
    stayType: '',
    message: '',
    name: '',
    email: '',
    phone: '',
  });

  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');
  const [error, setError] = useState('');

  const toggleDestination = (place: string) => {
    setForm(prev => ({
      ...prev,
      destinations: prev.destinations.includes(place)
        ? prev.destinations.filter(p => p !== place)
        : [...prev.destinations, place],
    }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading'); setError('');

    try {
      const res = await fetch('/api/mail/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        setForm({
          destinations: [],
          days: '',
          startDate: '',
          endDate: '',
          stayType: '',
          message: '',
          name: '',
          email: '',
          phone: '',
        });
      } else {
        setStatus('error');
        setError(json.error || 'Failed to submit custom package.');
      }
    } catch {
      setStatus('error'); setError('Network or server error');
    }
  };

  return (
    <div className="bg-page min-h-screen pt-24 px-4 sm:px-6 md:px-20 pb-16">
      <div className="mb-8 text-center">
        <p className="eyebrow mb-3">Made Around You</p>
        <h1 className="section-title text-3xl md:text-4xl">Customize Your Sikkim Journey</h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)] sm:text-base">
          Pick the places, stay style, dates, and pace you want. We’ll turn that into a practical itinerary you can actually travel.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card-shell max-w-4xl mx-auto rounded-[1.8rem] p-5 sm:p-8 md:p-12"
      >
        {status==='success' && <div className="text-green-600 text-center mb-4">Request sent successfully!</div>}
        {status==='error' && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Pick Destinations */}
          <div>
            <h2 className="text-xl font-semibold text-[var(--accent-deep)] mb-4">Pick Destinations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {destinations.map(({ name, img }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => toggleDestination(name)}
                className={`cursor-pointer rounded-[1.2rem] p-2 text-center font-medium shadow-md transition-all hover:-translate-y-1 hover:shadow-lg ${
                    form.destinations.includes(name)
                      ? 'bg-brand-dark text-white ring-2 ring-[var(--accent)]'
                      : 'bg-surface-soft text-primary border border-[var(--border)]'
                  }`}
                >
                  <Image
                    src={img}
                    alt={name}
                    width={160}
                    height={100}
                    quality={95}
                    className="mx-auto mb-2 rounded-md object-cover h-[72px] w-full max-w-[140px]"
                    sizes="140px"
                  />
                  {name}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Days & Stay Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Number of Days</label>
              <input
                type="number"
                name="days"
                value={form.days}
                onChange={onChange}
                className="input-brand w-full p-3"
                placeholder="e.g. 5"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Stay Type</label>
              <select
                name="stayType"
                value={form.stayType}
                onChange={onChange}
                className="input-brand w-full p-3"
              >
                <option value="">No preference</option>
                <option value="Budget">Budget</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Travel Start Date</label>
              <input
                type="date"
                name="startDate"
                min={today}
                value={form.startDate}
                onChange={onChange}
                className="input-brand w-full p-3"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Travel End Date</label>
              <input
                type="date"
                name="endDate"
                min={form.startDate || today}
                value={form.endDate}
                onChange={onChange}
                className="input-brand w-full p-3"
              />
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block font-medium mb-2">Additional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              className="input-brand w-full p-3"
              rows={4}
              placeholder="Tell us more about your preferences..."
            />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your Name" className="input-brand p-3" required />
            <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email Address" className="input-brand p-3" required />
            <input name="phone" value={form.phone} onChange={onChange} type="text" placeholder="Phone Number (optional)" className="input-brand p-3 sm:col-span-2" />
          </div>

          <button
            type="submit"
            className={`btn-brand w-full rounded-full px-6 py-3 font-semibold transition ${status==='loading' ? 'cursor-not-allowed opacity-50' : ''}`}
            disabled={status==='loading'}
          >
            {status==='loading' ? 'Sending...' : 'Submit Custom Package'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
