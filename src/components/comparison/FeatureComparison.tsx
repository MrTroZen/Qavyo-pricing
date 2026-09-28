'use client';

import { useId, useRef, useState } from 'react';
import { ArrowRight, Check, ChevronDown, Minus, Sparkles } from 'lucide-react';
import { PreviewAction } from '../PreviewAction';
import { comparisonCategories, comparisonPlans, intelligenceCategory, intelligenceDetails } from './comparison-data';
import styles from './FeatureComparison.module.css';

function Inclusion({ included }: { included: boolean }) {
  return <span className={included ? styles.included : styles.unavailable}>{included ? <Check aria-hidden="true" /> : <Minus aria-hidden="true" />}<span className={styles.srOnly}>{included ? 'Included' : 'Not included'}</span></span>;
}

function IntelligenceList({ plan }: { plan: number }) {
  const detail = intelligenceDetails[plan];
  return <div className={styles.intelligenceList}><p>{detail.lead}</p><ul>{detail.features.map(item => <li key={item}>{item}</li>)}</ul></div>;
}

export function FeatureComparison() {
  const [selected, setSelected] = useState(0);
  const root = useRef<HTMLElement>(null);
  const selectorId = useId();

  function jumpToCategory(category: string) {
    if (!category) return;
    const mobile = window.matchMedia('(max-width: 899px)').matches;
    const target = root.current?.querySelector<HTMLElement>(`#compare-${mobile ? 'mobile' : 'desktop'}-${category}`);
    if (!target) return;
    if (target instanceof HTMLDetailsElement) target.open = true;
    target.scrollIntoView({ block: 'start' });
    const focusTarget = target.querySelector<HTMLElement>('summary') ?? target;
    focusTarget.focus({ preventScroll: true });
  }

  return (
    <section id="comparison" ref={root} className={styles.section} aria-labelledby="comparison-heading">
      <div className="container">
        <div className={styles.intro}>
          <div><p className="eyebrow">COMPARE PLANS</p><h2 id="comparison-heading">Everything included.<br />Clearly compared.</h2><p>See exactly what’s included in Starter, Growth and Business.</p></div>
          <div className={styles.categoryJump}><label htmlFor={selectorId}>Jump to a category</label><select id={selectorId} defaultValue="" onChange={event => { jumpToCategory(event.target.value); event.target.value = ''; }}><option value="" disabled>Choose a category</option>{[...comparisonCategories, intelligenceCategory].map(category => <option key={category.id} value={category.id}>{category.name}</option>)}</select></div>
        </div>

        <div className={styles.desktop}>
          <table className={styles.table}>
            <caption className={styles.srOnly}>Qavyo paid plan features. Starter £29 per month, Growth £79 per month, Business £149 per month.</caption>
            <colgroup><col className={styles.featureColumn} /><col /><col /><col /></colgroup>
            <thead><tr><th scope="col"><span className={styles.headerLabel}>FEATURE</span><p className={styles.headerNote}>Compare what’s included</p></th>{comparisonPlans.map((plan, index) => <th scope="col" key={plan.name} className={index === 1 ? styles.growthHeader : undefined}><span className={styles.planName}>{plan.name}</span><span className={styles.headerPrice}>£{plan.price}<small>/mo</small></span>{index === 1 && <span className={styles.badge}>Most Popular</span>}</th>)}</tr></thead>
            {comparisonCategories.map(({ id, name, icon: Icon, features }) => (
              <tbody key={id}>
                <tr className={styles.categoryRow} id={`compare-desktop-${id}`} tabIndex={-1}><th scope="rowgroup" colSpan={4}><span><Icon aria-hidden="true" />{name}</span></th></tr>
                {features.map(feature => <tr key={feature.name}><th scope="row">{feature.name}</th>{comparisonPlans.map((plan, index) => <td key={plan.name}><Inclusion included={index >= feature.from} /></td>)}</tr>)}
              </tbody>
            ))}
            <tbody>
              <tr className={styles.categoryRow} id="compare-desktop-intelligence" tabIndex={-1}><th scope="rowgroup" colSpan={4}><span><Sparkles aria-hidden="true" />Qavyo Intelligence</span></th></tr>
              <tr className={styles.intelligenceRow}><th scope="row">Intelligence included</th>{comparisonPlans.map(plan => <td key={plan.name}>{plan.intelligence}</td>)}</tr>
              <tr><td colSpan={4} className={styles.detailCell}><details className={styles.intelligenceDetails}><summary>Explore Intelligence capabilities by plan<ChevronDown aria-hidden="true" /></summary><div className={styles.intelligenceColumns}>{comparisonPlans.map((plan, index) => <div key={plan.name}><h3>{plan.name}<span>{plan.intelligence}</span></h3><IntelligenceList plan={index} /></div>)}</div></details></td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.mobile}>
          <div className={styles.mobilePlanBar}>
            <div className={styles.planButtons} role="group" aria-label="Choose a plan to compare">
              {comparisonPlans.map((plan, index) => <button id={`compare-plan-${index}`} key={plan.name} aria-pressed={selected === index} aria-controls="selected-comparison" onClick={() => setSelected(index)}><strong>{plan.name}</strong><span>£{plan.price}<small>/mo</small></span>{index === 1 && <span className={styles.mobileBadge}>Most Popular</span>}</button>)}
            </div>
            <p aria-live="polite">Showing <strong>{comparisonPlans[selected].name}</strong> · <Check aria-hidden="true" /> Included <Minus aria-hidden="true" /> Not included</p>
          </div>
          <div id="selected-comparison" role="region" aria-labelledby={`compare-plan-${selected}`}>
            {comparisonCategories.map(({ id, name, icon: Icon, features }, index) => (
              <details className={styles.mobileCategory} key={id} id={`compare-mobile-${id}`} open={index === 0}>
                <summary><Icon aria-hidden="true" /><span>{name}</span><ChevronDown aria-hidden="true" /></summary>
                <ul>{features.map(feature => <li key={feature.name}><span>{feature.name}</span><Inclusion included={selected >= feature.from} /></li>)}</ul>
              </details>
            ))}
            <details className={styles.mobileCategory} id="compare-mobile-intelligence">
              <summary><Sparkles aria-hidden="true" /><span>Qavyo Intelligence<small>{comparisonPlans[selected].intelligence}</small></span><ChevronDown aria-hidden="true" /></summary>
              <IntelligenceList plan={selected} />
            </details>
          </div>
        </div>
        <div className={styles.reassurance}><div><h3>Not sure which plan fits?</h3><p>You’ll experience Full Qavyo for your first 30 days. Choose your plan after you’ve used it.</p></div><PreviewAction destination="Start 30 Days Free" className="button button-primary">Start 30 Days Free<ArrowRight aria-hidden="true" /></PreviewAction></div>
      </div>
    </section>
  );
}
