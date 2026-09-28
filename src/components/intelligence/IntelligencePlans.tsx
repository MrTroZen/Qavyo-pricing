'use client';

import { useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './intelligence.module.css';

const tiers = [
  {
    plan: 'Starter', price: 29, name: 'Essential',
    question: 'What happened and what needs my attention?',
    inheritance: 'Your daily view of what matters.',
    features: ['Daily Business Brief', 'Sales trends', 'Best / worst sellers', 'Stock risk alerts', 'Important anomalies', 'Daily priorities'],
  },
  {
    plan: 'Growth', price: 79, name: 'Full',
    question: 'Why did it happen, what’s likely to happen next, and what should I do?',
    inheritance: 'Everything in Essential, plus:',
    features: ['Sales forecasting', 'Sales-change explanation', 'Purchase recommendations', 'Stock-out prediction', 'Overstock detection', 'Dead / slow stock', 'Profit-leak detection', 'Waste analysis', 'Supplier intelligence', 'Menu / product intelligence', 'Pricing recommendations', 'Customer intelligence', 'Operational intelligence', 'Weekly / monthly reviews'],
  },
  {
    plan: 'Business', price: 149, name: 'Multi-location',
    question: 'What’s happening across my restaurants and where should I focus?',
    inheritance: 'Everything in Full, plus:',
    features: ['Location comparisons', 'Cross-location anomalies', 'Cross-location inventory intelligence', 'Stock-transfer recommendations', 'Purchasing intelligence across locations', 'Cross-location menu performance', 'Operational comparisons', 'Central owner brief'],
  },
];

export function IntelligencePlans() {
  const [selected, setSelected] = useState(0);
  const tier = tiers[selected];

  return (
    <div className={`container ${styles.planDistribution}`}>
      <div className={styles.distributionHeading}>
        <div><p className="eyebrow">INTELLIGENCE, AT EVERY STAGE</p><h3>From daily priorities to the bigger picture.</h3></div>
        <p>Select a plan to explore its Intelligence.</p>
      </div>
      <div className={styles.tierSelectors} role="group" aria-label="Explore Intelligence by plan">
        {tiers.map((item, index) => (
          <button key={item.plan} id={`intelligence-tier-${index}`} className={styles.tierButton} aria-pressed={selected === index} aria-controls="intelligence-tier-details" onClick={() => setSelected(index)}>
            <span className={styles.tierTop}><strong>{item.plan}</strong><span>£{item.price}<small> / month</small></span></span>
            <span className={styles.tierName}>{item.name} Intelligence<ArrowRight aria-hidden="true" /></span>
          </button>
        ))}
      </div>
      <div id="intelligence-tier-details" className={styles.tierDetails} role="region" aria-labelledby={`intelligence-tier-${selected}`}>
        <div className={styles.tierQuestion}>
          <p><Sparkles aria-hidden="true" />Qavyo Intelligence {tier.name}</p>
          <h4>“{tier.question}”</h4>
        </div>
        <div className={styles.tierFeatures}><p>{tier.inheritance}</p><ul>{tier.features.map(feature => <li key={feature}>{feature}</li>)}</ul></div>
      </div>
    </div>
  );
}
