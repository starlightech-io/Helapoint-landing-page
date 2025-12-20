import React from 'react';
import { WifiOff, Shield, Database } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from './useInView';

export function Reliability() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Built for reliability and data ownership
          </h2>
          <p className="text-xl text-gray-300">
            HelaPoint is designed to keep your business running smoothly, no matter the circumstances.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Offline-First */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center p-8"
          >
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <WifiOff className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl mb-4">Offline-First</h3>
            <p className="text-gray-300 leading-relaxed">
              Core workflows keep operating smoothly during network outages and recover gracefully when connectivity returns.
            </p>
          </motion.div>

          {/* Data Ownership */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-center p-8"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl mb-4">Your Data, Your Control</h3>
            <p className="text-gray-300 leading-relaxed">
              Export backups to your preferred storage location. Your business data should never feel locked in.
            </p>
          </motion.div>

          {/* Security */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center p-8"
          >
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-purple-400" />
            </div>
            <h3 className="text-2xl mb-4">Secure by Design</h3>
            <p className="text-gray-300 leading-relaxed">
              Authentication-based access with data organized by business and store selection for proper separation.
            </p>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
            <div className="text-gray-400">Offline Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">Hourly</div>
            <div className="text-gray-400">Auto Backups</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
            <div className="text-gray-400">Data Ownership</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}