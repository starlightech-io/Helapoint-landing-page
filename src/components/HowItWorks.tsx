import React from 'react';
import { Building2, Package, ShoppingCart, CreditCard, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

const steps = [
  {
    number: '01',
    icon: Building2,
    title: 'Set up your business and store',
    description: 'Create a business, add your store(s), and configure the basics.',
    color: 'blue'
  },
  {
    number: '02',
    icon: Package,
    title: 'Add products and categories',
    description: 'Build your catalog with products, categories, pricing, and stock. Use batch workflows to onboard faster.',
    color: 'green'
  },
  {
    number: '03',
    icon: ShoppingCart,
    title: 'Start selling',
    description: 'Search or scan items, add to cart, and complete checkout.',
    color: 'purple'
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Track sales and customer credit',
    description: 'Record customer payments, monitor balances, and review history.',
    color: 'orange'
  },
  {
    number: '05',
    icon: Shield,
    title: 'Stay protected with backups',
    description: 'Automatic local backups and optional exports help keep your business data safe.',
    color: 'indigo'
  }
];

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  green: 'from-green-500 to-green-600',
  purple: 'from-purple-500 to-purple-600',
  orange: 'from-orange-500 to-orange-600',
  indigo: 'from-indigo-500 to-indigo-600'
};

export function HowItWorks({ onRequestDemo }: HowItWorksProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            How it works
          </h2>
          <p className="text-xl text-gray-600">
            Get up and running in minutes with our simple setup process.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-[calc(100%+2rem)] bg-gradient-to-b from-gray-300 to-gray-200 hidden md:block"></div>
                )}

                {/* Step Card */}
                <div className="flex gap-6 items-start">
                  {/* Icon Circle */}
                  <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="text-sm font-semibold text-gray-400 mb-2">{step.number}</div>
                    <h3 className="text-2xl text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button 
            onClick={onRequestDemo}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Start Your Free Trial
          </button>
        </motion.div>
      </div>
    </section>
  );
}