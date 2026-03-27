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
  const [form, setForm] = useState({
    destinations: [] as string[],
    days: '',
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
        setForm({ destinations: [], days: '', stayType: '', message: '', name: '', email: '', phone: '' });
      } else {
        setStatus('error');
        setError(json.error || 'Failed to submit custom package.');
      }
    } catch {
      setStatus('error'); setError('Network or server error');
    }
  };

  return (
    <div className="bg-[#f5fdf6] min-h-screen pt-24 px-6 md:px-20 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-[#1E3D2F] mb-8 text-center">
          Customize Your Sikkim Journey
        </h1>

        {status==='success' && <div className="text-green-600 text-center mb-4">Request sent successfully!</div>}
        {status==='error' && <div className="text-red-600 text-center mb-4">{error}</div>}

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Pick Destinations */}
          <div>
            <h2 className="text-xl font-semibold text-[#3B5F4D] mb-4">Pick Destinations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {destinations.map(({ name, img }) => (
                <motion.div
                  key={name}
                  whileHover={{ scale: 1.03 }}
                  onClick={() => toggleDestination(name)}
                  className={`cursor-pointer rounded-xl p-2 text-center font-medium shadow-md transition-all hover:shadow-lg ${
                    form.destinations.includes(name)
                      ? 'bg-[#1E3D2F] text-white'
                      : 'bg-[#E6ECE1] text-[#1E3D2F]'
                  }`}
                >
                  <Image src={img} alt={name} width={90} height={60} className="mx-auto mb-2 rounded-md object-cover h-[60px] w-[90px]" />
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
                className="w-full border rounded-lg p-3"
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
                className="w-full border rounded-lg p-3"
              >
                <option value="">No preference</option>
                <option value="Budget">Budget</option>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
                <option value="Luxury">Luxury</option>
              </select>
            </div>
          </div>

          {/* Additional Message */}
          <div>
            <label className="block font-medium mb-2">Additional Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              className="w-full border rounded-lg p-3"
              rows={4}
              placeholder="Tell us more about your preferences..."
            />
          </div>

          {/* Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="name" value={form.name} onChange={onChange} type="text" placeholder="Your Name" className="border rounded-lg p-3" required />
            <input name="email" value={form.email} onChange={onChange} type="email" placeholder="Email Address" className="border rounded-lg p-3" required />
            <input name="phone" value={form.phone} onChange={onChange} type="text" placeholder="Phone Number (optional)" className="border rounded-lg p-3 sm:col-span-2" />
          </div>

          <button
            type="submit"
            className={`bg-[#1E3D2F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#163026] transition w-full ${status==='loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={status==='loading'}
          >
            {status==='loading' ? 'Sending...' : 'Submit Custom Package'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
