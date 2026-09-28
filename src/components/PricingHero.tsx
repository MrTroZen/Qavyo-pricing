import { ArrowRight, ArrowDown } from 'lucide-react';
import { TrialOffer } from './TrialOffer';
import { ProductPreview } from './ProductPreview';
import { PreviewAction } from './PreviewAction';
export function PricingHero() {
  return <section className="hero container" aria-labelledby="hero-title"><div className="hero-copy"><div className="eyebrow hero-eyebrow"><span aria-hidden="true" />RESTAURANT OPERATING SYSTEM</div>
    <h1 id="hero-title">Everything your<br className="desktop-break" /> restaurant needs.<span>One intelligent<br className="desktop-break" /> platform.</span></h1>
    <p className="hero-description">Run your POS, orders, kitchen, inventory, customers and operations from one connected system — with Qavyo Intelligence watching the business with you.</p>
    <TrialOffer /><div className="hero-actions"><PreviewAction destination="Start 30 Days Free" className="button button-primary">Start 30 Days Free<ArrowRight aria-hidden="true" /></PreviewAction><a href="#plans" className="button button-secondary">See Pricing<ArrowDown aria-hidden="true" /></a></div>
    <p className="plan-note">Plans start from <strong>£29/month</strong> after your trial.</p>
  </div><ProductPreview /></section>;
}
