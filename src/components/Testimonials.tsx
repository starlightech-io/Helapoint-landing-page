import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from './useInView';

const testimonials = [
  {
    quote: "HelaPoint saved my grocery during blackouts—I collected all dues easily and never lost a sale! My cashiers can't steal because everything is tracked.",
    author: "John Kamau",
    role: "Mini-Mart Owner",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1673217831096-86ec58210cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3RvcmUlMjBvd25lciUyMHBob25lfGVufDF8fHx8MTc2NTgxNDAyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5
  },
  {
    quote: "Before HelaPoint, I was losing money tracking customer credit in notebooks. Now everything is digital and I get paid on time. The offline mode is a lifesaver!",
    author: "Priya Sharma",
    role: "Pharmacy Owner",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1763994683944-0c0c20891a7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHJldGFpbCUyMGNhc2hpZXJ8ZW58MXx8fHwxNzY1ODE0MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5
  },
  {
    quote: "Managing 3 cashiers was chaos. HelaPoint shows me exactly who sold what, when. Network goes down? No problem. Sales keep moving. Best investment for my store.",
    author: "Ibrahim Okonkwo",
    role: "Electronics Shop",
    location: "Lagos, Nigeria",
    image: "https://images.unsplash.com/photo-1753351054990-76181ba95d45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwb3duZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjU4MTQwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 5
  }
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-br from-indigo-50/50 via-purple-50/50 to-pink-50/50 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-rose-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
            What Store Owners Say
          </h2>
          <p className="text-xl text-gray-600">
            Real stories from busy stores across Africa and Asia who trust HelaPoint to keep their business running.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white/60 backdrop-blur-lg p-8 rounded-3xl border border-white/60 hover:shadow-2xl hover:bg-white/80 transition-all relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/50">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            <div className="text-center bg-white/50 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/60">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">2,500+</div>
              <div className="text-sm">Active Stores</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/60">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">15</div>
              <div className="text-sm">Countries</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/60">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">4.9/5</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center bg-white/50 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/60">
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">99%</div>
              <div className="text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}