import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

const faqs = [
  {
    question: 'Does HelaPoint work offline?',
    answer: 'Yes. HelaPoint is designed with offline-first workflows so day-to-day operations can continue during connectivity issues. Data syncs automatically when your connection returns.'
  },
  {
    question: 'How does multi-user tracking prevent losses and staff disputes?',
    answer: 'HelaPoint tracks every sale by user, showing exactly who sold what and when. This creates accountability, prevents theft, and helps resolve any disputes with clear transaction records tied to specific cashiers.'
  },
  {
    question: 'Can I scan barcodes?',
    answer: 'Yes. HelaPoint supports camera-based barcode scanning for quick product lookup, making checkout faster and reducing manual entry errors.'
  },
  {
    question: 'Can I manage inventory and categories?',
    answer: 'Absolutely. You can organize products into categories and manage stock levels, pricing, and product details all within the app.'
  },
  {
    question: 'Do you support wholesale pricing?',
    answer: 'Yes. HelaPoint supports retail/wholesale pricing modes when enabled for a store, allowing you to manage different customer types seamlessly.'
  },
  {
    question: 'Can I track customer credit and payments?',
    answer: 'Yes. You can track customer balances, record payments, monitor due dates, and reduce missed collections with the built-in credit management system—no more manual notebooks!'
  },
  {
    question: 'How do backups work?',
    answer: 'HelaPoint automatically creates local backups every hour. You also have full control to export backups to your preferred storage location (Drive, Files, etc.) and restore them whenever needed.'
  },
  {
    question: 'Can I use a Bluetooth receipt printer?',
    answer: 'Yes. HelaPoint includes Bluetooth printer connection workflows. Printer compatibility depends on the specific device model and configuration.'
  },
  {
    question: 'Is HelaPoint available on iOS and Android?',
    answer: 'HelaPoint is built as a cross-platform app and can be deployed to both iOS and Android devices.'
  },
  {
    question: 'What happens during power outages or network failures?',
    answer: 'Your sales continue uninterrupted! HelaPoint stores all data locally on your device and syncs to the cloud when connectivity returns. Even during blackouts, you can keep selling.'
  },
  {
    question: 'Can I manage multiple stores?',
    answer: 'Yes. HelaPoint supports multi-store businesses with structured business and store selection, making it easy to manage one shop or multiple branches.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="faq" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about HelaPoint. Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-gray-900 pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-8 pb-6 bg-gray-50"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}