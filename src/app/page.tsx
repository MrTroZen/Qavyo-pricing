import { Header } from '@/components/Header';
import { PricingHero } from '@/components/PricingHero';
import { PricingPlans } from '@/components/PricingPlans';
import { QavyoIntelligence } from '@/components/intelligence/QavyoIntelligence';
export default function PricingPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><PricingHero /><PricingPlans /><QavyoIntelligence /></main></>;
}
