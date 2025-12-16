'use client'

import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC<{ translations: any; }> = ({ translations }) => {
    const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setFormStatus('success');
                setTimeout(() => setFormStatus('idle'), 5000);
                (e.target as HTMLFormElement).reset();
            } else {
                console.error('Error sending message.');
                alert('Error sending message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message.');
        }
    };

    return (
        <form
            name="contact"
            onSubmit={handleSubmit}
            className="space-y-4"
        >
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">{translations.nameLabel}</label>
                <input type="text" id="name" name="name" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">{translations.emailLabel}</label>
                <input type="email" id="email" name="email" required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">{translations.messageLabel}</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"></textarea>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 mt-2">
                <Send size={18} />
                {translations.sendButton}
            </button>

            {formStatus === 'success' && (
                <div className="text-green-400 text-sm text-center mt-2 bg-green-900/20 py-2 rounded border border-green-800 animate-pulse">
                    {translations.successMessage}
                </div>
            )}
        </form>
    );
}

export default ContactForm;