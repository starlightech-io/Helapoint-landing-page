import React from 'react';
import { ShoppingBag, HeartPulse, Smartphone, Sparkles, Store } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

const useCases = [
  {
    icon: ShoppingBag,
    title: 'Grocery / Mini-mart',
    features: [
      'Fast barcode scanning',
      'Quick categories for common items',
      'Clear inventory list for restocking'
    ],
    color: 'green'
  },
  {
    icon: HeartPulse,
    title: 'Pharmacy / Health shop',
    features: [
      'Product lookup by barcode/item code',
      'Stock tracking and pricing',
      'Customer tracking for repeat buyers'
    ],
    color: 'red'
  },
  {
    icon: Smartphone,
    title: 'Electronics & accessories',
    features: [
      'Large catalog search',
      'Inventory organization by category/brand',
      'Sales history for warranty/support reference'
    ],
    color: 'blue'
  },
  {
    icon: Sparkles,
    title: 'Cosmetics & beauty',
    features: [
      'Product variety management',
      'Brand and category organization',
      'Customer purchase history'
    ],
    color: 'pink'
  },
  {
    icon: Store,
    title: 'Wholesale + Retail',
    features: [
      'Switch between retail and wholesale pricing',
      'Manage mixed customer types',
      'Consistent workflows for both modes'
    ],
    color: 'purple'
  }
];

const colorClasses = {
  green: 'bg-green-100 text-green-600',
  red: 'bg-red-100 text-red-600',
  blue: 'bg-blue-100 text-blue-600',
  pink: 'bg-pink-100 text-pink-600',
  purple: 'bg-purple-100 text-purple-600'
};

export function UseCases() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="use-cases" ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Built for your industry
          </h2>
          <p className="text-xl text-gray-600">
            Whether you run a grocery store, pharmacy, electronics shop, or wholesale business, HelaPoint adapts to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-14 h-14 ${colorClasses[useCase.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}>
                <useCase.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl text-gray-900 mb-4">
                {useCase.title}
              </h3>
              <ul className="space-y-3">
                {useCase.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}