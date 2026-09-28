import { ArrowRight, CalendarDays, CalendarCheck, CalendarClock, ChartNoAxesCombined, Check, ChefHat, Globe, Heart, Layers, Package, ReceiptText, ShoppingCart, Sparkles, UnlockKeyhole, Users, UsersRound, Wallet } from 'lucide-react';
import { PreviewAction } from './PreviewAction';
import styles from './FullAccessTrial.module.css';

const capabilities = [
  { label: 'POS & Ordering', icon: ReceiptText },
  { label: 'Kitchen', icon: ChefHat },
  { label: 'Online Ordering', icon: Globe },
  { label: 'Reservations', icon: CalendarCheck },
  { label: 'Inventory', icon: Package },
  { label: 'Purchasing', icon: ShoppingCart },
  { label: 'Customers', icon: Users },
  { label: 'Loyalty', icon: Heart },
  { label: 'Staff', icon: UsersRound },
  { label: 'Scheduling', icon: CalendarClock },
  { label: 'Payroll', icon: Wallet },
  { label: 'Reporting', icon: ChartNoAxesCombined },
];

function UnlockedPlatform() {
  return (
    <div className={styles.platform}>
      <div className={styles.duration}>
        <span className={styles.durationLabel}>EVERYTHING UNLOCKED</span>
        <div className={styles.number}>30<span>DAYS</span></div>
        <p>Full software.<br />Full Qavyo Intelligence.</p>
      </div>
      <div className={styles.capabilityArea}>
        <p className={styles.capabilityHeading}><UnlockKeyhole aria-hidden="true" />THE FULL ELIGIBLE PLATFORM</p>
        <ul className={styles.capabilities}>
          {capabilities.map(({ label, icon: Icon }) => <li key={label}><Icon aria-hidden="true" /><span>{label}</span></li>)}
        </ul>
        <div className={styles.intelligence}><Sparkles aria-hidden="true" /><strong>Full Qavyo Intelligence</strong><Check aria-hidden="true" /></div>
      </div>
    </div>
  );
}

export function FullAccessTrial() {
  return (
    <section id="full-access" className={styles.section} aria-labelledby="full-access-heading">
      <div className="container">
        <div className={styles.intro}>
          <div><p className="eyebrow">30-DAY FULL ACCESS</p><h2 id="full-access-heading">30 days. Full Qavyo.</h2><p className={styles.promise}>Experience everything first.<br /><span>Choose your plan later.</span></p></div>
          <p className={styles.supporting}>For your first 30 days, Qavyo unlocks the full eligible software platform and Full Qavyo Intelligence. Run your restaurant with everything available, then choose the plan that fits your business.</p>
        </div>
        <ol className={styles.journey} aria-label="Your first 30 days with Qavyo">
          <li>
            <div className={styles.stageMarker}><span><UnlockKeyhole aria-hidden="true" /></span><p>01 <strong>START</strong></p></div>
            <div className={styles.stageCopy}><h3>Start with everything unlocked</h3><p>Set up your restaurant and access the full eligible Qavyo platform.</p></div>
          </li>
          <li>
            <div className={styles.stageMarker}><span><CalendarDays aria-hidden="true" /></span><p>02 <strong>EXPERIENCE</strong></p></div>
            <div className={styles.stageCopy}><h3>Run Full Qavyo for 30 days</h3><p>Use restaurant operations, management tools and Full Qavyo Intelligence in your real workflow.</p></div>
            <UnlockedPlatform />
          </li>
          <li>
            <div className={styles.stageMarker}><span><Layers aria-hidden="true" /></span><p>03 <strong>CHOOSE</strong></p></div>
            <div className={styles.stageCopy}><h3>Choose what fits after 30 days</h3><p>Continue with Starter, Growth or Business based on what your restaurant needs.</p></div>
            <div className={styles.planTransition}>
              <p>AFTER 30 DAYS · YOUR CHOICE</p>
              <dl>{[{ name: 'Starter', price: 29 }, { name: 'Growth', price: 79 }, { name: 'Business', price: 149 }].map(plan => <div key={plan.name}><dt>{plan.name}</dt><dd>£{plan.price}<span>/mo</span></dd></div>)}</dl>
            </div>
          </li>
        </ol>
        <div className={styles.assurance}>
          <div><h3>No stripped-down trial.</h3><p>You experience the platform first. You choose your paid plan after.</p></div>
          <div className={styles.actions}><PreviewAction destination="Start 30 Days Free" className="button button-primary">Start 30 Days Free<ArrowRight aria-hidden="true" /></PreviewAction><p>Full software + Full Qavyo Intelligence for 30 days.</p></div>
        </div>
      </div>
    </section>
  );
}
