'use client';

import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function AchievementsContact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [initialized, setInitialized] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    
    console.log('EmailJS Config:', {
      publicKey: publicKey ? publicKey.substring(0, 10) + '...' : 'MISSING',
      serviceId: serviceId ? serviceId.substring(0, 10) + '...' : 'MISSING',
      templateId: templateId ? templateId.substring(0, 10) + '...' : 'MISSING',
    });
    
    if (publicKey) {
      emailjs.init(publicKey);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInitialized(true);
      console.log('✓ EmailJS initialized');
    } else {
      console.warn('❌ EmailJS public key not found in environment variables');
      setInitialized(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setStatusMessage('Please fill in all fields');
      return;
    }

    const missingVars = [];
    if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
    if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) missingVars.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
    if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) missingVars.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');

    if (missingVars.length > 0) {
      setStatus('error');
      setStatusMessage(`Email service not configured. Missing environment variable(s): ${missingVars.join(', ')}`);
      return;
    }

    if (!initialized) {
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (publicKey) {
        try {
          emailjs.init(publicKey);
          setInitialized(true);
          console.log('✓ EmailJS initialized on-demand');
        } catch (initErr) {
          console.error('Failed to initialize EmailJS on-demand:', initErr);
          setStatus('error');
          setStatusMessage('Failed to initialize email service. Please contact the developer.');
          return;
        }
      } else {
        setStatus('error');
        setStatusMessage('Email service not initialized. Please refresh the page.');
        return;
      }
    }

    setStatus('loading');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        setStatus('error');
        setStatusMessage('Email service configuration incomplete.');
        console.error('Missing serviceId or templateId:', { serviceId, templateId });
        return;
      }

      console.log('Sending email with:', { serviceId, templateId, ...formData });

      const response = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'pratikgalave@outlook.com',
      });

      console.log('✓ Email sent successfully:', response);
      setStatus('success');
      setStatusMessage("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });

      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 3000);
    } catch (error: unknown) {
      console.error('❌ EmailJS error:', error);
      setStatus('error');
      
      // Extract error message from various possible error formats
      let errorMsg = 'Failed to send message';
      if (error && typeof error === 'object') {
        const err = error as Record<string, unknown>;
        if (typeof err.text === 'string') {
          errorMsg = err.text;
        } else if (typeof err.message === 'string') {
          errorMsg = err.message;
        } else if (typeof err.status === 'string' || typeof err.status === 'number') {
          errorMsg = `Error: Status ${err.status}`;
        } else {
          try {
            errorMsg = JSON.stringify(err);
          } catch {
            errorMsg = String(err);
          }
        }
      } else if (typeof error === 'string') {
        errorMsg = error;
      }
      
      setStatusMessage(`${errorMsg}. Please try again or email directly.`);
    }
  };

  return (
    <section id="contact" className="pb-16 sm:pb-section-gap overflow-hidden">
      {/* Achievements Section */}
      <section className="py-16 md:py-section-gap px-4 sm:px-margin-page max-w-7xl mx-auto">
        <div className="text-center mb-stack-lg relative">
          <h2 className="font-headline-lg md:font-headline-xl text-3xl sm:text-4xl md:text-headline-xl uppercase tracking-tighter inline-block relative z-10 bg-background px-4">Achievements</h2>
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary z-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
          <div className="bg-surface-container-low border border-primary p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[100px]">workspace_premium</span>
            </div>
            <h3 className="font-headline-md text-headline-md relative z-10 mb-stack-sm">Competitive Programming</h3>
            <div className="flex flex-col gap-4 relative z-10">
              <div className="border-l-2 border-primary pl-4 hover:pl-6 transition-all cursor-default">
                <h4 className="font-body-lg text-body-lg font-bold">LeetCode</h4>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">Solved 260+ problems</p>
              </div>
              <div className="border-l-2 border-primary pl-4 hover:pl-6 transition-all cursor-default">
                <h4 className="font-body-lg text-body-lg font-bold">CodeChef</h4>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">3★ rating</p>
              </div>
              <div className="border-l-2 border-primary pl-4 hover:pl-6 transition-all cursor-default">
                <h4 className="font-body-lg text-body-lg font-bold">Codeforces</h4>
                <p className="font-label-code text-label-code text-on-surface-variant mt-1">Rating ~990</p>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-low border border-primary p-stack-md flex flex-col gap-stack-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[100px]">emoji_events</span>
            </div>
            <h3 className="font-headline-md text-headline-md relative z-10 mb-stack-sm">Positions</h3>
            <div className="grid grid-cols-1 gap-4 relative z-10">
              <div className="bg-background border border-primary p-4 neo-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-body-lg text-body-lg font-bold">Joint Secretary — Technical Club</h4>
                  <span className="bg-primary text-on-primary font-label-code text-label-code px-2 py-1 text-xs">July 2025 – Present</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Coordinated technical initiatives, organized student events, and led development-focused activities.</p>
              </div>
              
              <div className="bg-background border border-primary p-4 neo-shadow transform hover:-translate-y-1 transition-shadow transition-transform duration-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-body-lg text-body-lg font-bold">College Innovation &amp; Development Club (CIDC)</h4>
                  <span className="bg-primary text-on-primary font-label-code text-label-code px-2 py-1 text-xs">SE member</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Works on solving campus problems by building tools, automations, and process improvements that address real college challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-section-gap px-4 sm:px-margin-page bg-primary text-on-primary dark:bg-surface-container-low dark:text-on-surface w-full relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none whitespace-nowrap">
          <span className="font-headline-xl text-[16vw] sm:text-[20vw] leading-none font-black tracking-tighter">HELLO WORLD</span>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center relative z-10">
          <div className="flex flex-col gap-stack-sm min-w-0">
            <h2 className="font-headline-xl text-5xl sm:text-6xl md:text-[100px] leading-[0.9] font-black tracking-tighter lowercase">
              just<br />send it.
            </h2>
            <p className="font-label-code text-label-code text-on-primary/70 dark:text-on-surface-variant/70 max-w-sm mt-4">
              Open for freelance opportunities, open-source collaborations, or just a chat about code. Email: <a href="mailto:pratikgalave@outlook.com" className="underline">pratikgalave@outlook.com</a>
            </p>
          </div>

          <div className="w-full min-w-0">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="relative group">
                <label htmlFor="name" className="font-label-code text-label-code text-xs text-on-primary/70 dark:text-on-surface-variant/70 uppercase tracking-wider absolute -top-2 left-4 bg-primary dark:bg-surface-container-low px-1 transition-colors group-focus-within:text-on-primary dark:group-focus-within:text-on-surface">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-outline-variant text-on-primary dark:text-on-surface p-4 focus:ring-0 focus:border-on-primary dark:focus:border-on-surface transition-colors font-body-md rounded-none placeholder-on-primary/30 dark:placeholder-on-surface/30"
                  disabled={status === 'loading'}
                />
              </div>
              <div className="relative group">
                <label htmlFor="email" className="font-label-code text-label-code text-xs text-on-primary/70 dark:text-on-surface-variant/70 uppercase tracking-wider absolute -top-2 left-4 bg-primary dark:bg-surface-container-low px-1 transition-colors group-focus-within:text-on-primary dark:group-focus-within:text-on-surface">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-transparent border border-outline-variant text-on-primary dark:text-on-surface p-4 focus:ring-0 focus:border-on-primary dark:focus:border-on-surface transition-colors font-body-md rounded-none placeholder-on-primary/30 dark:placeholder-on-surface/30"
                  disabled={status === 'loading'}
                />
              </div>
              <div className="relative group">
                <label htmlFor="message" className="font-label-code text-label-code text-xs text-on-primary/70 dark:text-on-surface-variant/70 uppercase tracking-wider absolute -top-2 left-4 bg-primary dark:bg-surface-container-low px-1 transition-colors group-focus-within:text-on-primary dark:group-focus-within:text-on-surface">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let's build something..."
                  className="w-full bg-transparent border border-outline-variant text-on-primary dark:text-on-surface p-4 focus:ring-0 focus:border-on-primary dark:focus:border-on-surface transition-colors font-body-md rounded-none placeholder-on-primary/30 dark:placeholder-on-surface/30 resize-none"
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {/* Status Message */}
              {statusMessage && (
                <div className={`font-label-code text-label-code px-4 py-3 border ${
                  status === 'success' 
                    ? 'border-on-primary/30 bg-on-primary/5 text-on-primary dark:border-on-surface/30 dark:bg-on-surface/5 dark:text-on-surface' 
                    : 'border-red-600/30 bg-red-600/5 text-red-600'
                }`}>
                  {statusMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 bg-background text-on-background border border-background dark:bg-primary dark:text-on-primary dark:border-primary font-label-code text-label-code px-8 py-4 uppercase tracking-widest hover:bg-transparent hover:text-background dark:hover:bg-transparent dark:hover:text-primary transition-colors self-stretch sm:self-start disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
