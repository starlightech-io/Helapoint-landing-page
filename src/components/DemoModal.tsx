import React, { useState } from 'react';
import { X, Mail, User, Phone, Store, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    storeName: '',
    storeType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Using EmailJS for client-side email sending
      // Get your credentials from: https://www.emailjs.com/
      const serviceId = 'YOUR_EMAILJS_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_EMAILJS_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your EmailJS public key

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_EMAILJS_SERVICE_ID' || !window.emailjs) {
        // Fallback: Open email client with pre-filled data
        const subject = encodeURIComponent(`Demo Request from ${formData.name} - ${formData.storeName}`);
        const body = encodeURIComponent(
          `New Demo Request:\n\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Store Name: ${formData.storeName}\n` +
          `Store Type: ${formData.storeType}\n\n` +
          `Message:\n${formData.message}`
        );
        
        window.location.href = `mailto:sales@helapoint.com?subject=${subject}&body=${body}`;
        
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            storeName: '',
            storeType: '',
            message: ''
          });
          setError(null);
          onClose();
        }, 3000);
        return;
      }

      // Send via EmailJS
      await window.emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          store_name: formData.storeName,
          store_type: formData.storeType,
          message: formData.message,
          to_email: 'sales@helapoint.com'
        },
        publicKey
      );

      // Success!
      setIsSuccess(true);

      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          storeName: '',
          storeType: '',
          message: ''
        });
        setError(null);
        onClose();
      }, 3000);

    } catch (err: any) {
      console.error('Error sending demo request:', err);
      setError(err.message || 'Failed to send demo request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/60"
            >
              {!isSuccess ? (
                <>
                  {/* Header */}
                  <div className="p-8 border-b border-gray-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Request a Demo
                      </h2>
                      <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      >
                        <X className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                    <p className="text-gray-600">
                      Fill out the form below and our team will get back to you within 24 hours at{' '}
                      <span className="font-semibold text-blue-600">sales@helapoint.com</span>
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="p-8 space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>

                    {/* Store Name */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Store Name *
                      </label>
                      <div className="relative">
                        <Store className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="storeName"
                          value={formData.storeName}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="My Store"
                        />
                      </div>
                    </div>

                    {/* Store Type */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Store Type *
                      </label>
                      <select
                        name="storeType"
                        value={formData.storeType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select store type...</option>
                        <option value="grocery">Grocery / Mini-mart</option>
                        <option value="pharmacy">Pharmacy / Health shop</option>
                        <option value="electronics">Electronics & accessories</option>
                        <option value="cosmetics">Cosmetics & beauty</option>
                        <option value="wholesale">Wholesale + Retail</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-md border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your business needs..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Demo Request
                        </>
                      )}
                    </button>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                        <p className="text-sm text-red-600 text-center">{error}</p>
                      </div>
                    )}

                    <p className="text-xs text-center text-gray-500">
                      By submitting this form, you agree to be contacted by our sales team.
                    </p>
                  </form>
                </>
              ) : (
                /* Success State */
                <div className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Request Sent Successfully!
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Thank you for your interest in HelaPoint. We've sent your demo request to{' '}
                    <span className="font-semibold text-blue-600">sales@helapoint.com</span>
                  </p>
                  <p className="text-gray-600">
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// Extend window interface for EmailJS
declare global {
  interface Window {
    emailjs: any;
  }
}
