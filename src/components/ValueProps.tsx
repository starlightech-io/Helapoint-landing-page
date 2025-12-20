import React from 'react';
import { Zap, Package, TrendingUp, Users, WifiOff } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

const valueProps = [
  {
    icon: Zap,
    title: 'Checkout that keeps up with customers',
    description: 'Search products instantly, use quick category shortcuts, and keep the cart moving.',
    color: 'blue'
  },
  {
    icon: Package,
    title: 'Know what\'s in stock—at a glance',
    description: 'Manage products, categories, pricing, and stock levels with tools built for daily updates.',
    color: 'green'
  },
  {
    icon: TrendingUp,
    title: 'Every sale is organized',
    description: 'Track sales activity, understand what sells most, and keep history accessible.',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'Track credit and payments',
    description: 'Record customer balances and payments, monitor due dates, and reduce missed collections.',
    color: 'orange'
  },
  {
    icon: WifiOff,
    title: 'Offline-first reliability',
    description: 'Keep selling during network issues and sync when connectivity returns.',
    color: 'indigo'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  indigo: 'bg-indigo-100 text-indigo-600'
};

export function ValueProps() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Everything you need to run a modern retail store
          </h2>
          <p className="text-xl text-gray-600">
            Built for day-to-day operations with features that actually help you sell faster and manage better.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white/60 backdrop-blur-lg border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${colorClasses[prop.color as keyof typeof colorClasses]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <prop.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl text-gray-900 mb-3 font-semibold">
                {prop.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}