'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

export default function NewsletterSignup({ variant = 'default', className = '' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'newsletter',
          email: email
        }).toString()
      });

      if (response.ok) {
        setIsSubscribed(true);
        setEmail('');
      } else {
        throw new Error('Subscription failed');
      }
    } catch (error) {
      alert('There was an error subscribing. Please try again.');
      console.error('Newsletter subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className={`text-center ${className}`}>
        <div className="inline-flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 rounded-lg">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Thanks for subscribing! Check your email for confirmation.
        </div>
      </div>
    );
  }

  const getContent = () => {
    switch (variant) {
      case 'compact':
        return {
          title: 'Stay Updated',
          description: 'Get insights on branding, automation & business growth.',
          trustMessage: 'No spam, unsubscribe anytime. Your email stays private.'
        };
      case 'footer':
        return {
          title: 'Newsletter',
          description: 'Weekly insights on branding, automation & growth.',
          trustMessage: 'Privacy guaranteed. No spam.'
        };
      default:
        return {
          title: 'Subscribe to Our Newsletter',
          description: 'Get exclusive insights on branding, automation, and business growth strategies directly in your inbox.',
          trustMessage: 'We respect your privacy. Your email will never be shared with anyone. We only send what we learn and what can be genuinely helpful to you.'
        };
    }
  };

  const content = getContent();
  const isDefault = variant === 'default';
  const isFooter = variant === 'footer';

  return (
    <div className={className}>
      <div className={`${isDefault ? 'max-w-2xl mx-auto text-center' : ''}`}>
        <h3 className={`font-bold text-gray-900 dark:text-white mb-2 ${
          isDefault ? 'text-2xl md:text-3xl' : 
          isFooter ? 'text-lg' : 'text-xl'
        }`}>
          {content.title}
        </h3>
        
        <p className={`text-gray-600 dark:text-gray-300 mb-6 ${
          isDefault ? 'text-lg' : 'text-sm'
        }`}>
          {content.description}
        </p>

        <form 
          onSubmit={handleSubmit}
          className={`${isDefault ? 'max-w-md mx-auto' : ''}`}
          name="newsletter"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <input type="hidden" name="bot-field" />
          
          <div className={`flex ${isDefault || isFooter ? 'flex-col sm:flex-row' : 'flex-row'} gap-3`}>
            <div className="flex-1">
              <label htmlFor={`email-${variant}`} className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id={`email-${variant}`}
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className={`w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white ${
                  isFooter ? 'text-sm py-2' : ''
                }`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed ${
                isFooter ? 'px-4 py-2 text-sm' : 'px-6 py-3'
              } ${isDefault ? 'sm:w-auto w-full' : ''}`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>

        <div className={`flex items-center justify-center mt-4 ${
          isDefault ? 'text-sm' : 'text-xs'
        } text-gray-500 dark:text-gray-400`}>
          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>{content.trustMessage}</span>
        </div>
      </div>
    </div>
  );
}