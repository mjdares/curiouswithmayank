'use client';

import { useState } from 'react';

interface ContactFormProps {
  type: 'speaking' | 'podcast' | 'general';
}

export default function ContactForm({ type }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    // Speaking specific
    eventDate: '',
    audience: '',
    budget: '',
    topic: '',
    // Podcast specific
    guestTopic: '',
    expertise: '',
    website: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': `contact-${type}`,
          ...formData
        }).toString()
      });

      if (response.ok) {
        alert('Thank you for your inquiry! Mayank will get back to you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          eventDate: '',
          audience: '',
          budget: '',
          topic: '',
          guestTopic: '',
          expertise: '',
          website: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getFormTitle = () => {
    switch (type) {
      case 'speaking':
        return 'Book a Speaking Engagement';
      case 'podcast':
        return 'Be a Podcast Guest';
      case 'general':
        return 'Get In Touch';
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {getFormTitle()}
      </h3>
      
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        name={`contact-${type}`}
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        {/* Hidden Netlify form fields */}
        <input type="hidden" name="form-name" value={`contact-${type}`} />
        <input type="hidden" name="bot-field" />
        
        {/* Basic Information */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Speaking Specific Fields */}
        {type === 'speaking' && (
          <>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="audience" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Expected Audience Size
                </label>
                <select
                  id="audience"
                  name="audience"
                  value={formData.audience}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select audience size</option>
                  <option value="upto-500">Upto 500</option>
                  <option value="500-1000">500-1000</option>
                  <option value="1000+">1000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Preferred Speaking Topic
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select a topic</option>
                <option value="branding-marketing">Branding & Marketing</option>
                <option value="sales">Sales</option>
                <option value="ai-integration">AI Integration in Business</option>
                <option value="business-automation">Business Process Automation</option>
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="">Select budget range</option>
                <option value="10k">₹10,000</option>
                <option value="10k-25k">₹10,000 - ₹25,000</option>
                <option value="25k+">₹25,000+</option>
                <option value="discuss">Prefer to discuss</option>
              </select>
            </div>
          </>
        )}

        {/* Podcast Specific Fields */}
        {type === 'podcast' && (
          <>
            <div>
              <label htmlFor="guestTopic" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                What topic would you like to discuss?
              </label>
              <input
                type="text"
                id="guestTopic"
                name="guestTopic"
                value={formData.guestTopic}
                onChange={handleChange}
                placeholder="e.g., AI in Healthcare, Startup Journey, etc."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Your Area of Expertise
              </label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                value={formData.expertise}
                onChange={handleChange}
                placeholder="e.g., Technology, Business, Marketing, etc."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Website/LinkedIn Profile
              </label>
              <input
                type="url"
                id="website"
                name="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="https://..."
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </>
        )}

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {type === 'speaking' ? 'Event Details & Requirements' : 
             type === 'podcast' ? 'Tell us more about yourself and your story' : 
             'Your Message'} *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={
              type === 'speaking' ? 'Please describe your event, venue, target audience, and any specific requirements...' :
              type === 'podcast' ? 'Share your background, achievements, and what unique insights you can bring to our audience...' :
              'How can Mayank help you?'
            }
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {type === 'speaking' ? 'Request Speaking Engagement' :
           type === 'podcast' ? 'Submit Guest Application' :
           'Send Message'}
        </button>
      </form>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
        Mayank typically responds within 24-48 hours.
      </p>
    </div>
  );
}