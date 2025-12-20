import React, { useState } from 'react';
import { ShoppingCart, Scan, Package, CreditCard, Building2, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from './useInView';

const features = [
  {
    id: 'checkout',
    icon: ShoppingCart,
    title: 'Smart Checkout',
    tagline: 'Lightning-fast sales processing',
    description: 'Complete transactions in seconds with our intuitive checkout system. Search by name, scan barcodes, or use quick category shortcuts to keep your queue moving.',
    details: [
      { label: 'Multi-search', text: 'Find products by name, brand, barcode, or item code instantly' },
      { label: 'Quick Access', text: 'Category shortcuts for your most-sold items' },
      { label: 'Flexible Pricing', text: 'Switch between retail and wholesale modes on the fly' },
      { label: 'Digital Receipts', text: 'Generate and print professional receipts automatically' }
    ],
    image: 'https://images.unsplash.com/photo-1759936802478-1402244c063c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMGNoZWNrb3V0fGVufDF8fHx8MTc2NTgxMDk2NHww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'blue',
    stats: { label: '3x', description: 'Faster checkout' }
  },
  {
    id: 'barcode',
    icon: Scan,
    title: 'Barcode Scanning',
    tagline: 'Instant product recognition',
    description: 'Transform your device into a powerful barcode scanner. No extra hardware needed—just point your camera and scan for instant product lookup.',
    details: [
      { label: 'Camera-Based', text: 'Use your device camera—no expensive scanner required' },
      { label: 'Accurate', text: 'Eliminate manual entry errors and typos' },
      { label: 'Fast Lookup', text: 'Find products in large catalogs instantly' },
      { label: 'Universal', text: 'Supports all standard barcode formats' }
    ],
    image: 'https://images.unsplash.com/photo-1711397818253-7bb7a633d7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3MlMjB0ZXJtaW5hbCUyMHBheW1lbnR8ZW58MXx8fHwxNzY1OTEyMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'green',
    stats: { label: '90%', description: 'Error reduction' }
  },
  {
    id: 'inventory',
    icon: Package,
    title: 'Inventory Control',
    tagline: 'Always know what you have',
    description: 'Manage your entire product catalog with ease. Track stock levels, organize by categories, update pricing, and never run out of bestsellers again.',
    details: [
      { label: 'Catalog Management', text: 'Organize unlimited products with custom categories' },
      { label: 'Smart Pricing', text: 'Set retail and wholesale prices for each item' },
      { label: 'Batch Operations', text: 'Add or update multiple products at once' },
      { label: 'Safe Deletes', text: 'Soft delete with undo—recover deleted items easily' }
    ],
    image: 'https://images.unsplash.com/photo-1740914994657-f1cdffdc418e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnZlbnRvcnklMjB3YXJlaG91c2UlMjBzaGVsdmVzfGVufDF8fHx8MTc2NTgxMDk2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'purple',
    stats: { label: '100%', description: 'Stock visibility' }
  },
  {
    id: 'credit',
    icon: CreditCard,
    title: 'Credit Management',
    tagline: 'Stop losing money to forgotten debts',
    description: 'Say goodbye to manual credit notebooks. Track customer balances digitally, record payments easily, and never miss a collection again.',
    details: [
      { label: 'Customer Tracking', text: 'Maintain clear records of who owes what' },
      { label: 'Payment Recording', text: 'Log partial or full payments with timestamps' },
      { label: 'Due Dates', text: 'Set and monitor payment due dates automatically' },
      { label: 'History Access', text: 'View complete credit and payment history' }
    ],
    image: 'https://images.unsplash.com/photo-1753161029114-857c9f494ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB0YWJsZXR8ZW58MXx8fHwxNzY1ODEwOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'orange',
    stats: { label: '5x', description: 'Better collection' }
  },
  {
    id: 'multistore',
    icon: Building2,
    title: 'Multi-Store Ready',
    tagline: 'Scale from one shop to many',
    description: 'Built for growth. Manage multiple branches from a single platform with separate data, staff access, and reporting for each location.',
    details: [
      { label: 'Multiple Businesses', text: 'Create and manage different business entities' },
      { label: 'Branch Management', text: 'Add unlimited stores under each business' },
      { label: 'Easy Switching', text: 'Switch between stores with a single tap' },
      { label: 'Data Separation', text: 'Keep each location\'s data secure and separate' }
    ],
    image: 'https://images.unsplash.com/photo-1753161029114-857c9f494ccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjB0YWJsZXR8ZW58MXx8fHwxNzY1ODEwOTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'indigo',
    stats: { label: 'Unlimited', description: 'Stores supported' }
  },
  {
    id: 'backup',
    icon: Database,
    title: 'Cloud Sync',
    tagline: 'Seamless data synchronization',
    description: 'Work offline and sync automatically when online. Your data stays consistent across all devices with intelligent background synchronization.',
    details: [
      { label: 'Auto Sync', text: 'Automatic background sync when connection is available' },
      { label: 'Offline First', text: 'Keep working during outages—sync when back online' },
      { label: 'Multi-Device', text: 'Access your data from any device, always in sync' },
      { label: 'Conflict Resolution', text: 'Smart handling of concurrent edits across devices' }
    ],
    image: 'https://images.unsplash.com/photo-1608286022625-bc07f7a21154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0bGVzcyUyMHBheW1lbnQlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NjU5NjM1OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'red',
    stats: { label: 'Real-time', description: 'Data sync' }
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-500',
    light: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-500',
    gradient: 'from-blue-500 to-blue-600'
  },
  green: {
    bg: 'bg-green-500',
    light: 'bg-green-50',
    text: 'text-green-600',
    border: 'border-green-500',
    gradient: 'from-green-500 to-green-600'
  },
  purple: {
    bg: 'bg-purple-500',
    light: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-500',
    gradient: 'from-purple-500 to-purple-600'
  },
  orange: {
    bg: 'bg-orange-500',
    light: 'bg-orange-50',
    text: 'text-orange-600',
    border: 'border-orange-500',
    gradient: 'from-orange-500 to-orange-600'
  },
  indigo: {
    bg: 'bg-indigo-500',
    light: 'bg-indigo-50',
    text: 'text-indigo-600',
    border: 'border-indigo-500',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  red: {
    bg: 'bg-red-500',
    light: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-500',
    gradient: 'from-red-500 to-red-600'
  }
};

export function Features() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeFeature, setActiveFeature] = useState(features[0]);

  return (
    <section id="features" ref={ref} className="py-24 bg-gradient-to-b from-blue-50/50 via-purple-50/30 to-pink-50/50 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Powerful features for everyday retail
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to manage your store efficiently, from checkout to inventory to customer relationships.
          </p>
        </motion.div>

        {/* Feature Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color as keyof typeof colorClasses];
            const isActive = activeFeature.id === feature.id;
            
            return (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 backdrop-blur-md ${
                  isActive 
                    ? `bg-gradient-to-br ${colors.gradient} text-white shadow-2xl shadow-${feature.color}-500/50 scale-105` 
                    : `bg-white/60 text-gray-700 border-2 border-white/40 hover:bg-white/80 hover:shadow-xl`
                }`}
              >
                <span className="flex items-center gap-2">
                  <feature.icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{feature.title}</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Active Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFeature.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-8">
                {/* Icon & Title */}
                <div>
                  <div className={`w-16 h-16 bg-white/60 backdrop-blur-lg rounded-2xl flex items-center justify-center mb-6 border border-white/40 shadow-xl`}>
                    <activeFeature.icon className={`w-8 h-8 ${colorClasses[activeFeature.color as keyof typeof colorClasses].text}`} />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    {activeFeature.tagline}
                  </div>
                  <h3 className="text-4xl text-gray-900 mb-4">
                    {activeFeature.title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Stats Badge */}
                <div className={`inline-flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/40 shadow-xl`}>
                  <div className={`text-3xl font-bold ${colorClasses[activeFeature.color as keyof typeof colorClasses].text}`}>
                    {activeFeature.stats.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {activeFeature.stats.description}
                  </div>
                </div>

                {/* Feature Details */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeFeature.details.map((detail, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="bg-white/60 backdrop-blur-lg p-5 rounded-2xl border border-white/40 hover:shadow-2xl hover:bg-white/80 transition-all"
                    >
                      <div className={`text-sm font-semibold ${colorClasses[activeFeature.color as keyof typeof colorClasses].text} mb-2`}>
                        {detail.label}
                      </div>
                      <div className="text-sm text-gray-600 leading-relaxed">
                        {detail.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
                  <img 
                    src={activeFeature.image}
                    alt={activeFeature.title}
                    className="w-full h-auto"
                  />
                  {/* Overlay gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-tr ${colorClasses[activeFeature.color as keyof typeof colorClasses].gradient} opacity-10`}></div>
                </div>

                {/* Decorative element */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 ${colorClasses[activeFeature.color as keyof typeof colorClasses].bg} rounded-full blur-3xl opacity-30`}></div>
                <div className={`absolute -top-6 -left-6 w-24 h-24 ${colorClasses[activeFeature.color as keyof typeof colorClasses].bg} rounded-full blur-2xl opacity-30`}></div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Feature Grid - Quick Overview */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-24 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: '⚡', title: 'Lightning Fast', text: 'Optimized for speed even on older devices' },
            { icon: '🔒', title: 'Secure by Default', text: 'Enterprise-grade security for your data' },
            { icon: '📱', title: 'Mobile First', text: 'Works perfectly on phones and tablets' }
          ].map((item, idx) => (
            <div key={idx} className="text-center p-6 bg-white/60 backdrop-blur-lg rounded-2xl border border-white/40 hover:shadow-2xl hover:bg-white/80 transition-all">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}