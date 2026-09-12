"use client";

import { useState } from "react";
import MetricLab from "./components/MetricLab";
import FrameworkExplorer from "./components/FrameworkExplorer";

const perspectives = [
  { name: "CEO", question: "Does this change the investment case?", detail: "Margin · Return on capital · Payback", tag: "A financial lens" },
  { name: "Sustainability", question: "Does this improve the actual impact?", detail: "Emissions · Energy · Resource use", tag: "An impact lens" },
  { name: "Operations", question: "What can my team do differently?", detail: "Processes · Resources · Delivery", tag: "An operational lens" },
];

export default function Home() {
  const [perspective, setPerspective] = useState(0);
  const view = perspectives[perspective];
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#" aria-label="Metric Lab home"><span className="brand-mark" aria-hidden="true">≋</span>Metric<span className="brand-ai"> Lab</span></a>
          <nav aria-label="Main navigation"><a href="#approach">The approach</a><a href="#framework" className="framework-nav">The research</a><a href="#lab" className="nav-cta">Explore the lab <span aria-hidden="true">↗</span></a></nav>
        </div>
      </header>
      <main id="main">
        <section className="hero container">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" />Sustainability meets financial performance</p>
            <h1>Reported.<br />But is it<br /><em>decided on?</em></h1>
            <p className="hero-lead">Put sustainability in the room<br className="desktop-break" /> where capital gets allocated.</p>
            <p className="hero-description">We help companies connect sustainability and financial performance through integrated KPIs. Then we explore what those metrics mean to the people who act on them.</p>
            <div className="hero-actions"><a href="#lab" className="button primary">Try the metric review <span aria-hidden="true">↗</span></a><a className="quiet-link" href="#approach">See how it works <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="decision-card">
            <div className="card-top"><span>The decision gap</span><span className="small-pill">Three perspectives</span></div>
            <div className="two-worlds"><div><span className="mini-label">What gets reported</span><h2>Emissions.<br />Energy.<br />Resources.</h2></div><span className="world-divider" aria-hidden="true">↔</span><div><span className="mini-label">What gets decided</span><h2>Margin.<br />ROCE.<br />Payback.</h2></div></div>
            <div className="metric-bridge"><span className="bridge-symbol" aria-hidden="true">↗</span><div><strong>One integrated metric.</strong><span>A shared decision?</span></div></div>
            <div className="lens-controls" aria-label="Explore a perspective">{perspectives.map((p, i) => <button key={p.name} type="button" aria-pressed={perspective === i} onClick={() => setPerspective(i)}>{p.name}</button>)}</div>
            <div className="lens-answer" aria-live="polite"><span className="mini-label">{view.tag}</span><p key={view.name}>{view.question}</p><span className="lens-detail">{view.detail}</span></div>
            <p className="card-caption">Change the perspective. Watch the question change.</p>
          </div>
        </section>
        <div className="principle-strip"><div className="container"><span>One metric.</span><span>Three interpretations.</span><strong>A better conversation.</strong><span className="strip-arrow" aria-hidden="true">↗</span></div></div>
        <section className="problem-section container" id="problem"><div><p className="eyebrow">The missing connection</p><h2>Two measurement systems.<br /><em>One decision-making room.</em></h2></div><div className="problem-copy"><p>Companies invest in sustainability reporting. But capital allocation still turns on margin, return on capital and payback.</p><p>When those systems stay separate, a decarbonisation proposal can enter the room as a cost, without a clear account of the performance it could support.</p><p className="failure-copy">That is the failure when the systems remain disconnected. One governs decisions; the other governs disclosure.</p><strong>Companies pay for both and manage with one.</strong></div></section>
        <section className="approach-section" id="approach"><div className="container"><div className="section-heading"><div><p className="eyebrow">From measurement to meaning</p><h2>Run the disagreement.<br /><em>Before the commitment.</em></h2></div><p>A coherent formula is a starting point.<br />A useful metric also needs a shared understanding.</p></div><div className="steps-grid">
          <article className="step-card"><span className="step-number">01</span><span className="step-icon" aria-hidden="true">↗</span><h3>Start with a decision.</h3><p>Which investment, operating choice or strategic trade-off should this metric inform?</p><span className="step-foot">Define the purpose</span></article>
          <article className="step-card"><span className="step-number">02</span><span className="step-icon" aria-hidden="true">⇄</span><h3>Change the perspective.</h3><p>Map where the CEO, sustainability manager and operational manager may diverge on meaning, evidence, timing and control.</p><span className="step-foot">Explore the conflict map</span></article>
          <article className="step-card"><span className="step-number">03</span><span className="step-icon" aria-hidden="true">≡</span><h3>Make room for judgement.</h3><p>Bring the objections and unresolved assumptions into the meeting where humans decide.</p><span className="step-foot">Prepare the conversation</span></article>
        </div></div></section>
        <FrameworkExplorer />
        <section className="lab-section" id="lab"><div className="container"><div className="section-heading lab-heading"><div><p className="eyebrow">The friction lab</p><h2>Same metric.<br /><em>Different decisions.</em></h2></div><div className="demo-explainer"><span className="demo-label">Working prototype</span><p>Explore carbon-adjusted EPS, bring an integrated metric, or connect separate measures. Move from nine attributes to potential friction and a focused agenda.</p></div></div><MetricLab /><p className="lab-disclaimer">Agreement is a reason to investigate further, not proof that a metric is valid. Human judgement remains essential.</p></div></section>
        <section className="closing container"><p className="eyebrow">Our conviction</p><h2>An assessment. A conflict map.<br /><em>The decision stays with you.</em></h2><p>Your nine-attribute assessment leads to a conflict map and a discussion agenda. Evidence informs the interpretation. People decide what to do next.</p><a className="button primary" href="#lab">Start the conversation <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="site-footer container"><a className="brand" href="#"><span className="brand-mark" aria-hidden="true">≋</span>Metric<span className="brand-ai"> Lab</span></a><span>Sustainability. Financial performance. Shared decisions.</span><a href="#">Back to top ↑</a></footer>
    </>
  );
}
