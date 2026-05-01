'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-gray-900 border-t border-gray-800">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-4 drop-shadow-sm">{t('title')}</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16 text-lg">{t('description')}</p>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-800/40 backdrop-blur-xl p-8 rounded-3xl border border-gray-700/50 shadow-2xl">
          <div className="mb-6">
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('name_placeholder')}
              required
              className="w-full px-5 py-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all placeholder-gray-500"
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('email_placeholder')}
              required
              className="w-full px-5 py-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all placeholder-gray-500"
            />
          </div>
          <div className="mb-8">
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t('message_placeholder')}
              required
              className="w-full px-5 py-4 bg-gray-900/50 text-white border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400 transition-all placeholder-gray-500 resize-none"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_-10px_rgba(59,130,246,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {status === 'loading' ? 'Sending...' : t('submit_button')}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <div className="max-w-xl mx-auto mt-8 p-4 bg-emerald-900/30 border border-emerald-500/30 rounded-xl text-center">
            <p className="text-emerald-400 font-medium">{t('success_message')}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="max-w-xl mx-auto mt-8 p-4 bg-red-900/30 border border-red-500/30 rounded-xl text-center">
            <p className="text-red-400 font-medium">{t('error_message')}</p>
          </div>
        )}
      </div>
    </section>
  );
}