"use client";
import { motion } from 'framer-motion';
import MetricLab from './components/MetricLab';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Dynamic Header */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference p-6 flex justify-between items-center text-white">
        <div className="font-black text-2xl tracking-tighter italic">CONVERGE.AI</div>
        <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Governance Lab 2024</div>
      </nav>

      {/* Hero: High Contrast Provocation */}
      <section className="min-h-screen flex items-center px-6 bg-[#00332c] text-[#fdfdfd]">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[140px] font-black leading-[0.8] tracking-tighter"
          >
            EXPENSIVE TO <br />
            <span className="text-[#d2a06f]">PRODUCE.</span><br />
            CHEAP TO <span className="opacity-30 italic">IGNORE.</span>
          </motion.h1>
          
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="mt-20 max-w-xl border-l-2 border-[#d2a06f] pl-8"
          >
            <p className="text-xl font-light leading-relaxed">
              CSRD created a reporting engine. But capital still runs on ROCE and Margin. 
              We bridge the gap where sustainability data usually dies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Two-World Transition */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-12 bg-gray-50 border-t-4 border-gray-200"
          >
            <h2 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-6">The Disclosure World</h2>
            <p className="text-3xl font-bold mb-4">Regulation Ready.</p>
            <p className="text-gray-500">400+ static data points. Sunk costs. Audit trails. The data that stops at the boardroom door.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-12 bg-[#00332c] text-white border-t-4 border-[#d2a06f]"
          >
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#d2a06f] mb-6">The Decision World</h2>
            <p className="text-3xl font-bold mb-4 italic">Execution Ready.</p>
            <p className="text-gray-100">Dynamic KPIs. Capital allocation. Margin-linked strategy. The data that actually moves the needle.</p>
          </motion.div>
        </div>
      </section>

      {/* The App: Dark Mode Vibrancy */}
      <section className="py-32 px-6 bg-slate-900 overflow-hidden relative">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d2a06f] opacity-10 blur-[120px]" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-white text-5xl font-black tracking-tight mb-4 uppercase">The Friction Lab</h2>
            <p className="text-[#d2a06f] font-serif italic text-xl">Run the disagreement before the commitment.</p>
          </div>
          <MetricLab />
        </div>
      </section>

      {/* Philosophy: The Outcome */}
      <section className="py-32 px-6 bg-[#fdfdfd]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="mb-12 inline-block p-4 border border-black"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em]">Governance Stance</p>
          </motion.div>
          <h2 className="text-4xl font-black leading-tight mb-8">AI Reveals. Humans Decide.</h2>
          <p className="text-xl text-gray-600 leading-relaxed italic">
            "We don't decide for you. We produce the agenda for the meeting where humans do the real work of governance."
          </p>
        </div>
      </section>

      <footer className="py-20 bg-white border-t border-gray-100 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-300 italic">
          Dounia-007 / Sustainability Capital Architecture
        </p>
      </footer>
    </main>
  );
}