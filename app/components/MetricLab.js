"use client";
import React, { useState } from 'react';

export default function MetricLab() {
  const [metric, setMetric] = useState("");
  const [step, setStep] = useState(0); // 0: Idle, 1: Matrix, 2: Personas

  const startAnalysis = () => {
    setStep(1);
    setTimeout(() => setStep(2), 2000);
  };

  // Your 9-Attribute Matrix placeholders
  const matrix = [
    { label: "Actionability", score: 85 },
    { label: "Auditability", score: 92 },
    { label: "Price Sensitivity", score: 40 },
    { label: "Comparability", score: 70 },
    { label: "Materiality", score: 88 },
    { label: "Action Bias", score: 65 },
    { label: "Reliability", score: 95 },
    { label: "Transparency", score: 80 },
    { label: "Value Link", score: 30 }
  ];

  const personas = [
    {
      role: "CFO",
      concern: "Audit Trail & ROCE Impact",
      veto: "High",
      comment: "This creates an un-audited shadow ledger that impacts our discount rates. I cannot defend this to investors until the carbon data is as liquid as cash."
    },
    {
      role: "CEO",
      concern: "Growth Story & Market Cap",
      veto: "Medium",
      comment: "Does this help me justify our CapEx premiums to the street? If it dilutes our core growth narrative, the board will stall it."
    },
    {
      role: "Sustainability Lead",
      concern: "Impact Integrity",
      veto: "Low",
      comment: "This is exactly the tool we need to prevent greenwashing, but I fear it's being too financialized at the cost of actual decarbonization."
    }
  ];

  return (
    <div className="bg-[#111] border border-gray-800 p-8 md:p-16 shadow-2xl rounded-sm text-white">
      {step === 0 && (
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h3 className="text-sm font-mono uppercase tracking-[0.5em] text-gray-500">Step 1: Metric Input</h3>
          <input 
            className="w-full bg-transparent border-b-2 border-gray-700 p-4 text-3xl font-light outline-none focus:border-white transition-all text-center"
            placeholder="Enter iKPI (e.g. CO2-Adjusted ROCE)"
            value={metric}
            onChange={(e) => setMetric(e.target.value)}
          />
          <button 
            onClick={startAnalysis}
            disabled={!metric}
            className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 disabled:bg-gray-700"
          >
            Run Stress Test
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-12 animate-pulse">
          <h3 className="text-center font-mono text-xs uppercase tracking-widest text-gray-500">Applying 9-Attribute Matrix Framework...</h3>
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
             {matrix.map((m, i) => (
               <div key={i} className="border-l border-gray-800 pl-4 py-2">
                 <p className="text-[10px] text-gray-500 uppercase">{m.label}</p>
                 <div className="h-1 bg-gray-800 w-full mt-2"><div className="h-full bg-white" style={{width: `${m.score}%`}}></div></div>
               </div>
             ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="flex justify-between items-end mb-16 border-b border-gray-800 pb-8">
            <h3 className="text-4xl font-black italic uppercase tracking-tighter">Conflict Map Output</h3>
            <div className="text-right">
              <p className="text-[10px] font-mono text-gray-500 uppercase">Metric Analyzed:</p>
              <p className="text-xl font-bold">{metric}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-800 border border-gray-800">
            {personas.map((p, i) => (
              <div key={i} className="bg-[#111] p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <p className="font-black uppercase text-xs tracking-widest underline decoration-2 underline-offset-4">{p.role}</p>
                  <span className={`text-[10px] font-bold px-2 py-1 border ${p.veto === 'High' ? 'border-red-500 text-red-500' : 'border-gray-500 text-gray-500'}`}>Veto Risk: {p.veto}</span>
                </div>
                <p className="text-[10px] text-gray-500 uppercase tracking-tighter italic">Primary Concern: {p.concern}</p>
                <p className="text-sm font-serif italic text-gray-300 leading-relaxed">"{p.comment}"</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-8 md:p-12 text-black">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] mb-6">Boardroom Agenda Generator</h4>
            <div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed">
              <div className="space-y-4">
                <p className="font-bold border-b border-gray-200 pb-2">1. The Asset Friction</p>
                <p>Discuss the reconciliation of Carbon Proxy data with existing WACC discount rates to satisfy CFO audit requirements.</p>
              </div>
              <div className="space-y-4">
                <p className="font-bold border-b border-gray-100 pb-2">2. The Operational Mandate</p>
                <p>Define how plant-level unit costs are adjusted to prevent the Ops Manager from viewing carbon efficiency as a production penalty.</p>
              </div>
            </div>
          </div>
          
          <button 
            onClick={() => setStep(0)}
            className="mt-12 text-[10px] font-mono text-gray-500 uppercase hover:text-white"
          >
            ← Reset Simulation
          </button>
        </div>
      )}
    </div>
  );
}