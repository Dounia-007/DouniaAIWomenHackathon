import MetricLab from './components/MetricLab';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFDFD] text-[#1a1a1a] font-sans selection:bg-black selection:text-white">
      {/* Navigation */}
      <nav className="p-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="font-black text-xl tracking-tighter uppercase italic">CONVERGE<span className="text-gray-300">.AI</span></div>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
          <span className="text-black">The Problem</span>
          <span>Methodology</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Section 1: The Provocation */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-[110px] font-extrabold tracking-tighter leading-[0.85] mb-12">
            EXPENSIVE TO PRODUCE. <br />
            <span className="text-gray-200">CHEAP TO IGNORE.</span>
          </h1>
          <div className="grid md:grid-cols-2 gap-16 mt-24">
            <div className="space-y-6">
              <p className="text-2xl font-medium leading-tight">
                CSRD has forced your company to build a massive reporting engine. Hundreds of audited data points, at a real cost.
              </p>
              <p className="text-xl text-gray-400 font-light italic">
                Then that data goes into a PDF, gets signed by an auditor, and stops.
              </p>
            </div>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p>
                It never reaches the meeting where capital is allocated. That meeting runs on <strong>Margin, ROCE, and Payback.</strong>
              </p>
              <p>
                When a decarbonization case enters the room, it arrives as a verbal narrative against a pre-quantified opponent. It is viewed as "pure cost" because it lacks a seat at the table where performance is defined.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Two Worlds */}
      <section className="px-6 py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">
          <div className="bg-gray-50 p-12">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">The Disclosure World</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>• 400+ Static Data Points</li>
              <li>• Compliance & Audit Focused</li>
              <li>• Sunk Cost (Non-Productive)</li>
              <li className="text-red-500">Result: Regulation-Ready</li>
            </ul>
          </div>
          <div className="bg-white p-12">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-8">The Decision World</h3>
            <ul className="space-y-4 text-sm font-medium">
              <li>• 5-7 Dynamic KPIs</li>
              <li>• Capital Allocation Focused</li>
              <li>• Value & Strategy Driven</li>
              <li className="text-black">Result: Execution-Ready</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 3: The Assembly Step */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">The Missing Assembly Step</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            You aren’t asking the board to care about carbon. You are making carbon efficiency show up as <strong>profitability.</strong> 
            We put sustainability inside the units of account that already have authority.
          </p>
          <div className="inline-block border-2 border-black p-8 text-left">
            <p className="text-xs font-mono uppercase text-gray-400 mb-2 underline">Example Metric</p>
            <p className="text-3xl font-black italic">Operating Profit / Tonne CO₂e</p>
          </div>
        </div>
      </section>

      {/* Section 4: The App */}
      <section className="px-6 py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">The Friction Lab</h2>
            <p className="text-gray-400 max-w-xl">
              We run the disagreement before the commitment. Using our 9-Attribute Matrix and persona-based conflict mapping to ensure governance traction.
            </p>
          </div>
          <MetricLab />
        </div>
      </section>

      {/* Section 5: The Philosophy */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-3xl mx-auto border-l-4 border-black pl-12">
          <h3 className="text-2xl font-bold mb-6 italic">AI Reveals. Humans Decide.</h3>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Our tool doesn’t provide a 'Yes' or 'No'. It identifies the <strong>Decision Locks</strong>—the specific friction points where the CEO, CFO, and Sustainability Lead will clash.
          </p>
          <p className="text-lg text-gray-500 italic font-serif">
            "We produce the agenda for the meeting where humans do the real work of governance."
          </p>
        </div>
      </section>

      <footer className="p-12 text-center border-t border-gray-100">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 font-bold underline decoration-red-500 underline-offset-8">
          Dounia AI Hackathon 2024 — Sustainability Capital Governance
        </p>
      </footer>
    </main>
  );
}