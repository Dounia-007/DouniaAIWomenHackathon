"use client";

import { useState } from "react";
import PreparedReview from "./components/PreparedReview";
import FrameworkExplorer from "./components/FrameworkExplorer";

const perspectives = [
  { name: "CEO", question: "Does this change the investment case?", detail: "Margin · Return on capital · Payback", tag: "A strategic perspective" },
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
            <h1 className="story-headline">Your metric combines sustainability and finance.<br /><em>Does it support a better decision?</em></h1>
            <p className="hero-lead">Examine the assumptions before you rely on the result.</p>
            <p className="hero-description">Metric Lab helps sustainability and management teams examine integrated KPIs before using them in decisions. Explore their assumptions, identify evidence gaps and prepare the questions that need agreement.</p>
            <div className="hero-actions"><a href="#lab" className="button primary">Explore a metric <span aria-hidden="true">↗</span></a><a className="quiet-link" href="#approach">See how it works <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className="decision-card">
            <div className="card-top"><span>The decision gap</span><span className="small-pill">Three perspectives</span></div>
            <div className="two-worlds"><div><span className="mini-label">What gets reported</span><h2>Emissions.<br />Energy.<br />Resources.</h2></div><span className="world-divider" aria-hidden="true">↔</span><div><span className="mini-label">What gets decided</span><h2>Margin.<br />ROCE.<br />Payback.</h2></div></div>
            <div className="metric-bridge"><span className="bridge-symbol" aria-hidden="true">↗</span><div><strong>One integrated metric.</strong><span>A shared decision?</span></div></div>
            <div className="lens-controls" aria-label="Explore a perspective">{perspectives.map((p, i) => <button key={p.name} type="button" aria-pressed={perspective === i} onClick={() => setPerspective(i)}>{p.name}</button>)}</div>
            <div className="lens-answer" aria-live="polite"><span className="mini-label">{view.tag}</span><p key={view.name}>{view.question}</p><span className="lens-detail">{view.detail}</span></div>
            <p className="card-caption">Find the consequential assumptions. Watch the question change.</p>
          </div>
        </section>
        <div className="principle-strip"><div className="container"><span>One metric.</span><span>Explicit assumptions.</span><strong>A decision to prepare.</strong><span className="strip-arrow" aria-hidden="true">↗</span></div></div>
        <section className="problem-section container" id="problem"><div><p className="eyebrow">The missing connection</p><h2>Two measurement systems.<br /><em>One decision-making room.</em></h2></div><div className="problem-copy"><p>Companies track emissions, costs, revenue and investment. Yet sustainability information can remain in reporting while financial measures drive decisions.</p><p>A metric can improve while the people using it disagree about what improved, who influenced it and what should happen next. Agreement is also possible. The task is to make the reasoning explicit.</p><p className="failure-copy">That is the failure when the systems remain disconnected. One governs decisions; the other governs disclosure.</p><strong>The challenge is connecting what gets measured to what people decide.</strong></div></section>
        <section className="approach-section" id="approach"><div className="container"><div className="section-heading"><div><p className="eyebrow">From measurement to meaning</p><h2>Run the disagreement.<br /><em>Before the commitment.</em></h2></div><p>Bring an existing iKPI or separate financial and sustainability measures. Leave with a clearer understanding of what they capture, what they may conceal and how they could inform action.</p></div><div className="steps-grid">
          <article className="step-card"><span className="step-number">01</span><span className="step-icon" aria-hidden="true">↗</span><h3>Examine the connection.</h3><p>Does this metric meaningfully connect sustainability and financial performance? Examine it through nine research attributes, with assumptions and missing evidence made visible.</p><span className="step-foot">Your output · An attribute assessment</span></article>
          <article className="step-card"><span className="step-number">02</span><span className="step-icon" aria-hidden="true">⇄</span><h3>Find the consequential assumptions.</h3><p>Which assumptions could change the decision? Identify evidence gaps, unclear responsibilities and potential disagreements, then ask your actual participants to examine them.</p><span className="step-foot">Your output · A potential conflict map</span></article>
          <article className="step-card"><span className="step-number">03</span><span className="step-icon" aria-hidden="true">≡</span><h3>Prepare to use it.</h3><p>What must you resolve before relying on this metric? Take a focused agenda into the meeting to clarify evidence, responsibilities and decision rules.</p><span className="step-foot">Your output · A discussion agenda</span></article>
        </div></div></section>
        <FrameworkExplorer />
        <section className="lab-section" id="lab"><div className="container"><div className="section-heading lab-heading"><div><p className="eyebrow">The friction lab</p><h2>Bring your measures.<br /><em>Examine the connection.</em></h2></div><div className="demo-explainer"><span className="demo-label">Working prototype</span><p>Explore carbon-adjusted EPS. Change what its carbon price represents, inspect the nine-attribute baseline and build a focused agenda.</p></div></div><PreparedReview /><p className="lab-disclaimer">Agreement is a reason to investigate further, not proof that a metric is valid. Human judgement remains essential.</p></div></section>
        <section className="closing container"><p className="eyebrow">What you take away</p><h2>A clearer view of your metric.<br /><em>A better starting point for action.</em></h2><p>Understand what your metric captures, what it may conceal and what needs resolving before you use it. Your team leaves with an assessment, a potential conflict map and a focused agenda.</p><a className="button primary" href="#lab">Start the conversation <span aria-hidden="true">↗</span></a></section>
      </main>
      <footer className="site-footer container"><a className="brand" href="#"><span className="brand-mark" aria-hidden="true">≋</span>Metric<span className="brand-ai"> Lab</span></a><span>Sustainability. Financial performance. Shared decisions.</span><a href="#">Back to top ↑</a></footer>
    </>
  );
}
