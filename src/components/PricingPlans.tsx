import {
  ArrowLeftRight, ArrowRight, Building2, CalendarCheck, CalendarClock,
  ChartNoAxesCombined, Clock3, Code2, Globe, Heart, Headset,
  MapPinned, Monitor, Network, Package, QrCode, ReceiptText,
  ShieldCheck, ShoppingCart, Sparkles, Ticket, UnlockKeyhole,
  Users, UsersRound, UtensilsCrossed, Wallet, type LucideIcon,
} from 'lucide-react';
import { PreviewAction } from './PreviewAction';
import styles from './PricingPlans.module.css';

type Feature = { label: string; icon: LucideIcon; intelligence?: boolean };
type Plan = {
  name: string;
  stage: string;
  price: number;
  description: string;
  summary: string;
  recommended?: boolean;
  features: Feature[];
};

const plans: Plan[] = [
  {
    name: 'Starter', stage: 'RUN', price: 29,
    description: 'Everything you need to run your restaurant.',
    summary: 'Complete restaurant operations',
    features: [
      { label: 'POS & Ordering', icon: ReceiptText },
      { label: 'Kitchen Display System', icon: Monitor },
      { label: 'Website & Online Ordering', icon: Globe },
      { label: 'QR Ordering', icon: QrCode },
      { label: 'Reservations', icon: CalendarCheck },
      { label: 'Customers / CRM', icon: Users },
      { label: 'Inventory & Recipes', icon: Package },
      { label: 'Purchasing & Suppliers', icon: ShoppingCart },
      { label: 'Coupons', icon: Ticket },
      { label: 'Qavyo Intelligence Essential', icon: Sparkles, intelligence: true },
    ],
  },
  {
    name: 'Growth', stage: 'GROW', price: 79, recommended: true,
    description: 'Run the restaurant. Manage the business.',
    summary: 'Everything in Starter, plus:',
    features: [
      { label: 'Loyalty', icon: Heart },
      { label: 'Staff Management', icon: UsersRound },
      { label: 'Staff Scheduling', icon: CalendarClock },
      { label: 'Time & Attendance', icon: Clock3 },
      { label: 'Payroll & Payslips', icon: Wallet },
      { label: 'Stock Transfers', icon: ArrowLeftRight },
      { label: 'Multi-location Management', icon: MapPinned },
      { label: 'Central Menu Management', icon: UtensilsCrossed },
      { label: 'Deeper Business Reporting', icon: ChartNoAxesCombined },
      { label: 'Qavyo Intelligence Full', icon: Sparkles, intelligence: true },
    ],
  },
  {
    name: 'Business', stage: 'SCALE', price: 149,
    description: 'Central control for restaurant groups.',
    summary: 'Everything in Growth, plus:',
    features: [
      { label: 'Centralised Multi-location Management', icon: Building2 },
      { label: 'Consolidated Reporting Across Locations', icon: ChartNoAxesCombined },
      { label: 'Location-level Roles & Permissions', icon: ShieldCheck },
      { label: 'API & External Integrations', icon: Code2 },
      { label: 'Cross-location Operations', icon: Network },
      { label: 'Multi-location Qavyo Intelligence', icon: Sparkles, intelligence: true },
      { label: 'Higher-level Onboarding & Support', icon: Headset },
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const headingId = `plan-${plan.name.toLowerCase()}`;
  return (
    <article className={`${styles.card} ${plan.recommended ? styles.recommended : ''}`} aria-labelledby={headingId}>
      <div className={styles.cardIntro}>
        <div className={styles.cardEyebrow}>
          <span className={styles.stage}>{plan.stage}</span>
          {plan.recommended && <span className={styles.badge}>Most Popular</span>}
        </div>
        <h3 id={headingId}>{plan.name}</h3>
        <p className={styles.description}>{plan.description}</p>
        <p className={styles.price}><span>£{plan.price}</span><span className={styles.period}>/ month</span></p>
        <PreviewAction destination="Start 30 Days Free" className={`button ${plan.recommended ? 'button-primary' : 'button-secondary'} ${styles.cta}`}>
          Start 30 Days Free<ArrowRight aria-hidden="true" />
        </PreviewAction>
      </div>
      <div className={styles.features}>
        <p className={styles.featureSummary}>{plan.summary}</p>
        <ul>
          {plan.features.map(({ label, icon: Icon, intelligence }) => (
            <li key={label} className={intelligence ? styles.intelligence : undefined}>
              <Icon aria-hidden="true" /><span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function PricingPlans() {
  return (
    <section id="plans" className={styles.section} aria-labelledby="plans-heading">
      <div className="container">
        <div className={styles.intro}>
          <p className="eyebrow">PLANS THAT FIT YOUR RESTAURANT</p>
          <h2 id="plans-heading">Simple pricing.<br />A complete restaurant system.</h2>
          <p className={styles.supporting}>Start with everything unlocked for 30 days. Then choose the plan that fits your restaurant.</p>
        </div>
        <div className={styles.grid}>
          {plans.map(plan => <PlanCard key={plan.name} plan={plan} />)}
        </div>
        <div className={styles.sharedTrial}>
          <div className={styles.trialIdentity}>
            <UnlockKeyhole aria-hidden="true" />
            <div><span>30 DAYS · FULL QAVYO</span><strong>EVERYTHING UNLOCKED</strong></div>
          </div>
          <div className={styles.trialCopy}>
            <h3>Every plan starts with 30 days of Full Qavyo.</h3>
            <p>All eligible software features and Full Qavyo Intelligence are unlocked during your trial. Choose your plan after 30 days.</p>
          </div>
        </div>
        <div className={styles.pricingNotes}>
          <p>Software subscription only. Hardware and payment-processing fees are separate.</p>
          <p>Already have compatible hardware? You can use it with Qavyo.</p>
        </div>
      </div>
    </section>
  );
}
