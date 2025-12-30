import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

interface ComparisonProps {
  onRequestDemo: () => void;
}

const features = [
  { name: 'Works Offline (True Offline-First)', helapoint: true, loyverse: false, square: false },
  { name: 'Native Customer Credit Tracking', helapoint: true, loyverse: false, square: false },
  { name: 'Multi-User/Multi-Cashier Tracking', helapoint: true, loyverse: true, square: true },
  { name: 'Automatic Local Backups', helapoint: true, loyverse: false, square: false },
  { name: 'User-Controlled Data Export', helapoint: true, loyverse: false, square: false },
  { name: 'Barcode Scanning', helapoint: true, loyverse: true, square: true },
  { name: 'Inventory Management', helapoint: true, loyverse: true, square: true },
  { name: 'Receipt Printing (Bluetooth)', helapoint: true, loyverse: true, square: true },
  { name: 'Wholesale & Retail Pricing', helapoint: true, loyverse: true, square: false },
  { name: 'Works During Network Outages', helapoint: true, loyverse: false, square: false },
  { name: 'Built for Africa & Asia Markets', helapoint: true, loyverse: false, square: false },
  { name: 'Free Trial Available', helapoint: true, loyverse: true, square: true },
];

export function Comparison({ onRequestDemo }: ComparisonProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="comparison" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            Why Choose HelaPoint?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Tired of lost sales from network outages? Manual credit books? Staff disputes? HelaPoint fixes that offline.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full">
            <Check className="w-5 h-5" />
            <span className="font-semibold">Built specifically for emerging market retail challenges</span>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl border border-gray-200"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <th className="px-6 py-4 text-left">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-2">
                        <span className="text-blue-600 font-bold text-xl">H</span>
                      </div>
                      <span className="font-semibold">HelaPoint</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div>Loyverse</div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div>Square</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <motion.tr 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    className={`border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4 text-gray-900">{feature.name}</td>
                    <td className="px-6 py-4 text-center">
                      {feature.helapoint ? (
                        <div className="inline-flex w-8 h-8 bg-green-100 rounded-full items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex w-8 h-8 bg-red-100 rounded-full items-center justify-center">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.loyverse ? (
                        <div className="inline-flex w-8 h-8 bg-green-100 rounded-full items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex w-8 h-8 bg-red-100 rounded-full items-center justify-center">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.square ? (
                        <div className="inline-flex w-8 h-8 bg-green-100 rounded-full items-center justify-center">
                          <Check className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex w-8 h-8 bg-red-100 rounded-full items-center justify-center">
                          <X className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-12"
        >
          <button 
            onClick={onRequestDemo}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Try HelaPoint Free for 30 Days
          </button>
        </motion.div>
      </div>
    </section>
  );
}