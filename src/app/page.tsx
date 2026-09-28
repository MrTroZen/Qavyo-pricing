import { Header } from '@/components/Header';
import { PricingHero } from '@/components/PricingHero';
import { PricingPlans } from '@/components/PricingPlans';
import { QavyoIntelligence } from '@/components/intelligence/QavyoIntelligence';
import { FullAccessTrial } from '@/components/FullAccessTrial';
import { FeatureComparison } from '@/components/comparison/FeatureComparison';
import { HardwareSection } from '@/components/hardware/HardwareSection';
import { HardwareSetupSection } from '@/components/hardware/HardwareSetupSection';
import { PaymentsClaritySection } from '@/components/payments/PaymentsClaritySection';
import { FAQSection } from '@/components/faq/FAQSection';
import { FinalCTASection } from '@/components/cta/FinalCTASection';
export default function PricingPage() {
  return <><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main" tabIndex={-1}><PricingHero /><PricingPlans /><QavyoIntelligence /><FullAccessTrial /><FeatureComparison /><HardwareSection /><HardwareSetupSection /><PaymentsClaritySection /><FAQSection /><FinalCTASection /></main></>;
}
