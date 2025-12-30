import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

interface FinalCTAProps {
  onRequestDemo: () => void;
}

export function FinalCTA({ onRequestDemo }: FinalCTAProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Ready to modernize your store?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl mb-12 text-blue-100 leading-relaxed"
          >
            Tell us about your store size and current workflow—we'll help you set up HelaPoint and migrate your catalog.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button 
              onClick={onRequestDemo}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Request Demo
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-all border border-blue-500 flex items-center justify-center gap-2">
              Download App
            </button>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100"
          >
            <a href="mailto:sales@helapoint.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
              <span>sales@helapoint.com</span>
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              <span>+1 (234) 567-890</span>
            </a>
          </motion.div>
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 pt-16 border-t border-blue-500/30"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Active Stores</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-blue-200">Daily Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-blue-200">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15</div>
              <div className="text-blue-200">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}