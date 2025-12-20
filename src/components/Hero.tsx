import React from 'react';
import { ArrowRight, Play, Wifi, Users, CreditCard } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Glassmorphic background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-0 left-0 right-0 z-50 container mx-auto px-4 py-6"
      >
        <div className="flex items-center justify-between bg-white/40 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/60 shadow-2xl">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">HelaPoint</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Features</a>
            <a href="#comparison" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Compare</a>
            <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">Reviews</a>
            <a href="#faq" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">FAQ</a>
          </div>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg transition-all">
            Request Demo
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full text-blue-900 border border-blue-300/50"
            >
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium">Trusted by stores across Africa & Asia</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-bold"
            >
              Sell Without Interruptions: The{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Offline-First POS</span> with Built-in Customer Credit Tracking
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-xl"
            >
              Keep selling during network outages, track customer dues effortlessly, and manage multiple cashiers securely—all in one simple app designed for busy stores.
            </motion.p>

            {/* Key Benefits */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="flex items-center gap-2 text-gray-800 bg-white/50 backdrop-blur-md rounded-xl px-4 py-3 border border-white/60">
                <div className="w-8 h-8 bg-green-500/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <Wifi className="w-4 h-4 text-green-700" />
                </div>
                <span className="font-medium">Works Offline</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 bg-white/50 backdrop-blur-md rounded-xl px-4 py-3 border border-white/60">
                <div className="w-8 h-8 bg-purple-500/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-purple-700" />
                </div>
                <span className="font-medium">Credit Tracking</span>
              </div>
              <div className="flex items-center gap-2 text-gray-800 bg-white/50 backdrop-blur-md rounded-xl px-4 py-3 border border-white/60">
                <div className="w-8 h-8 bg-orange-500/20 backdrop-blur-md rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-orange-700" />
                </div>
                <span className="font-medium">Multi-Cashier</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 font-semibold">
                Request a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/60 backdrop-blur-lg text-gray-700 rounded-xl hover:bg-white/80 transition-all border border-white/60 flex items-center justify-center gap-2 font-semibold">
                <Play className="w-5 h-5" />
                Watch Walkthrough (2 min)
              </button>
            </motion.div>

            {/* Trust Line */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-sm text-gray-600 flex flex-wrap gap-4"
            >
              <span className="flex items-center gap-1">✓ No credit card required</span>
              <span className="flex items-center gap-1">✓ Free 30-day trial</span>
              <span className="flex items-center gap-1">✓ Cancel anytime</span>
            </motion.div>
          </div>

          {/* Right Column - Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1742238896849-303d74d8a8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwb3MlMjBzeXN0ZW0lMjB0YWJsZXR8ZW58MXx8fHwxNzY1ODE0MDI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="HelaPoint POS in action"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-6 max-w-[200px] border border-white/60"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">100%</div>
              <div className="text-sm text-gray-700 font-medium">Works during outages</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -top-6 -right-6 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-6 max-w-[200px] border border-white/60"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">5x</div>
              <div className="text-sm text-gray-700 font-medium">Faster credit collection</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
