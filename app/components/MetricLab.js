"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MetricLab() {
  const [metric, setMetric] = useState("");
  const [status, setStatus] = useState("idle");

  const runTest = () => {
    setStatus("analyzing");
    setTimeout(() => setStatus("result"), 3000);
  };

  const matrix = [
    { label: "Actionability", val: 80, color: "bg-[#d2a06f]" },
    { label: "Auditability", val: 95, color: "bg-emerald-500" },
    { label: "Price Sensitivity", val: 45, color: "bg-orange-500" },
    { label: "Value Link", val: 35, color: "bg-red-500" },
  ];

  return (
    <div className="bg-[#0a0f1a] border border-white/10 p-8 md:p-16 ai-glow rounded-xl">
      <AnimatePresence mode="wait">
        {status === "idle" || status === "analyzing" ? (
          <motion.div 
            key="input"
            exit={{ opacity: 0, scale: 0.9 }}
            className="max-w-2xl mx-auto space-y-12"
          >
            <div className="text-center">
              <h3 className="text-[#d2a06f] font-mono text-xs uppercase tracking-[0.4em] mb-4">Phase 01: Assembly</h3>
              <input 
                className="w-full bg-transparent border-b-2 border-white/20 p-4 text-4xl font-light text-white outline-none focus:border-[#d2a06f] transition-all text-center"
                placeholder="Enter iKPI Name"
                value={metric}
                onChange={(e) => setMetric(e.target.value)}
              />
            </div>
            
            <button 
              onClick={runTest}
              disabled={!metric || status === "analyzing"}
              className="w-full bg-white text-black font-black py-6 uppercase tracking-[0.3em] text-xs hover:bg-[#d2a06f] transition-colors"
            >
              {status === "analyzing" ? "Calculating Conflict Grid..." : "Execute Stress Test"}
            </button>
          </motion.div>
        ) : (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16"
          >
            {/* 9-Attribute Matrix visualization */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {matrix.map((attr, i) => (
                <div key={i} className="space-y-3">
                  <p className="text-[10px] uppercase font-bold text-gray-500">{attr.label}</p>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }} 
                      animate={{ width: `${attr.val}%` }} 
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${attr.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-10">
              <h4 className="text-5xl font-black italic text-white tracking-tighter uppercase">The Conflict Map</h4>
              <p className="text-[#d2a06f] font-mono text-sm uppercase tracking-widest">{metric}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { role: "CFO", risk: "High", text: "Vetoed. Cash-flow delta too high for current WACC." },
                { role: "CEO", risk: "Med", text: "Stalled. Narrative risk vs current market growth." },
                { role: "Sustainability", risk: "Low", text: "Approved. Aligns with Science Based Targets." }
              ].map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 + (i * 0.2) }}
                  className="p-8 border border-white/5 bg-white/5 hover:bg-white/[0.07] transition-all"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-[#d2a06f] tracking-widest">{p.role}</span>
                    <span className={`text-[9px] px-2 py-0.5 border ${p.risk === 'High' ? 'border-red-500 text-red-500' : 'border-gray-500 text-gray-500'}`}>RISK: {p.risk}</span>
                  </div>
                  <p className="text-gray-300 font-serif italic text-sm leading-relaxed">"{p.text}"</p>
                </motion.div>
              ))}
            </div>

            <div className="p-10 bg-[#d2a06f] text-black">
              <h5 className="font-black uppercase tracking-[0.2em] text-xs mb-4">Consultancy Deliverable: Meeting Agenda</h5>
              <div className="space-y-2 text-sm leading-relaxed font-bold">
                <p>1. Align Carbon Proxy data with existing hurdle rates.</p>
                <p>2. Define the "Profitability Shield" for CapEx overages.</p>
                <p>3. Negotiate the Audit scope with the Risk Committee.</p>
              </div>
            </div>
            
            <button 
              onClick={() => setStatus("idle")}
              className="text-[10px] font-bold text-gray-600 uppercase tracking-widest hover:text-white"
            >
              ← Test New Metric
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}