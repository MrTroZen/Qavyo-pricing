import {
  Activity, ArrowRight, ChartNoAxesCombined, CirclePoundSterling,
  Eye, Gauge, Lightbulb, Package, Radar, Sparkles, Truck, Users,
} from 'lucide-react';
import { IntelligenceDemo } from './IntelligenceDemo';
import { IntelligencePlans } from './IntelligencePlans';
import styles from './intelligence.module.css';

const stages = [
  { title: 'Watch', icon: Eye, detail: 'Read the operation' },
  { title: 'Detect', icon: Radar, detail: 'Notice the change' },
  { title: 'Explain', icon: ChartNoAxesCombined, detail: 'Find the context' },
  { title: 'Recommend', icon: Lightbulb, detail: 'Suggest a next step' },
  { title: 'Act', icon: ArrowRight, detail: 'Keep you in control' },
  { title: 'Measure', icon: Gauge, detail: 'Follow the outcome' },
];

const capabilities = [
  { title: 'Sales', icon: ChartNoAxesCombined, items: 'Sales changes · Forecasting · Product performance' },
  { title: 'Stock', icon: Package, items: 'Stock-out prediction · Overstock · Slow stock · Purchase recommendations' },
  { title: 'Profit', icon: CirclePoundSterling, items: 'Profit leaks · Waste · Pricing opportunities' },
  { title: 'Suppliers', icon: Truck, items: 'Vendor performance · Purchasing patterns' },
  { title: 'Customers', icon: Users, items: 'Customer behaviour · Retention patterns' },
  { title: 'Operations', icon: Activity, items: 'Anomalies · Staff and operational patterns' },
];

export function QavyoIntelligence() {
  return (
    <section id="intelligence" className={styles.section} aria-labelledby="intelligence-heading">
      <div className={styles.immersive}>
        <div className="container">
          <div className={styles.intro}>
            <p className={styles.eyebrow}><Sparkles aria-hidden="true" />QAVYO INTELLIGENCE</p>
            <h2 id="intelligence-heading">Your restaurant doesn’t need another dashboard.<br /><span>It needs a system that pays attention.</span></h2>
            <p className={styles.lead}>Qavyo continuously watches sales, stock, purchasing, costs and operations — then surfaces what changed, why it matters and what you should consider doing next.</p>
          </div>
          <ol className={styles.loop} aria-label="The Qavyo Intelligence loop">
            {stages.map(({ title, icon: Icon, detail }) => (
              <li key={title}><Icon aria-hidden="true" /><div><strong>{title}</strong><span>{detail}</span></div></li>
            ))}
          </ol>
          <IntelligenceDemo />
          <p className={styles.demoCaption}>Operational records → calculated signals → explanations and suggested actions. You decide what happens next.</p>
        </div>
      </div>

      <div className={`container ${styles.breadth}`}>
        <div className={styles.subheading}>
          <p className="eyebrow">ONE CONNECTED VIEW</p>
          <h3>More of the business.<br />Fewer blind spots.</h3>
          <p>From the first order to the next supplier delivery.</p>
        </div>
        <div className={styles.capabilities}>
          {capabilities.map(({ title, icon: Icon, items }) => (
            <div key={title} className={styles.capability}>
              <span className={styles.capabilityIcon}><Icon aria-hidden="true" /></span>
              <div><h4>{title}</h4><p>{items}</p></div>
            </div>
          ))}
        </div>
      </div>
      <IntelligencePlans />
    </section>
  );
}
