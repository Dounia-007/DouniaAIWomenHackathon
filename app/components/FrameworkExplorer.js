"use client";
import { useState } from "react";
import { attributes, groups } from "../lib/metric-data";

export default function FrameworkExplorer() {
  const [selected, setSelected] = useState("control");
  const attribute = attributes.find(a => a.id === selected);
  return (
    <section className="framework-section container" id="framework">
      <div className="section-heading"><div><p className="eyebrow">The research behind the assessment</p><h2>Nine attributes.<br /><em>A more considered metric.</em></h2></div><p>The nine-attribute framework and de-identified interview insights provide the foundation. AI helps apply this research to your case; assumptions and evidence remain open to examination.</p></div>
      <div className="framework-browser">
        <div className="attribute-menu" aria-label="Explore the research attributes">{groups.map((group, index) => <div key={group}><h3><span className={`group-dot group-${index}`} />{group}</h3>{attributes.filter(a => a.group === index).map(a => <button type="button" aria-pressed={selected === a.id} key={a.id} onClick={() => setSelected(a.id)}><span>{a.name}</span><span aria-hidden="true">↗</span></button>)}</div>)}</div>
        <article className="attribute-explanation" aria-live="polite"><span className="research-tag">{groups[attribute.group]}</span><h3>{attribute.name}</h3><p className="attribute-definition">{attribute.definition}</p><div className="dimension-tags">{attribute.dimensions.map(d => <span key={d.name}>{d.name}</span>)}</div><p>{attribute.detail}</p><div className="research-questions"><h4>Questions worth asking</h4>{attribute.questions.map(q => <p key={q}>{q}</p>)}</div><details className="source-details"><summary>Framework provenance</summary><p>Working research framework supplied by Dounia Chlyeh for Metric Lab. Source references supplied with this attribute: {attribute.reference}. These references have not been independently checked in this prototype.</p><p>The questions and interface are a proposed application of the framework, not a validated assessment instrument.</p></details><a href="#lab" className="quiet-link">Explore an attribute profile <span aria-hidden="true">↓</span></a></article>
      </div>
    </section>
  );
}
