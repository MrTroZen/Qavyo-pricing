import {
  ArrowDown, ArrowRight, Banknote, Building2, Check, CirclePoundSterling,
  CreditCard, FileCheck2, Landmark, Monitor, Package, ReceiptText,
  RefreshCcw, ShieldCheck, Sparkles, WalletCards,
} from 'lucide-react';
import styles from './PaymentsClaritySection.module.css';

const softwarePlans = [
  { name: 'Starter', price: 29 },
  { name: 'Growth', price: 79 },
  { name: 'Business', price: 149 },
] as const;

const connectedPaymentData = [
  { label: 'Order payment status', icon: ReceiptText },
  { label: 'Refund visibility', icon: RefreshCcw },
  { label: 'Reconciliation', icon: FileCheck2 },
  { label: 'Payout visibility', icon: Landmark },
  { label: 'Transaction reporting', icon: CirclePoundSterling },
  { label: 'Payment-related alerts', icon: Sparkles },
] as const;

export function PaymentsClaritySection() {
  return (
    <section id="payments-clarity" className={styles.section} aria-labelledby="payments-clarity-heading">
      <div className="container">
        <div className={styles.intro}>
          <div><p className="eyebrow">CLEAR FROM THE START</p><h2 id="payments-clarity-heading">Software. Hardware. Payments. <br /><span>Clearly separated.</span></h2></div>
          <p>Know what you’re paying for. Your Qavyo subscription covers the software. Hardware is chosen separately, and card-processing fees depend on your payment setup.</p>
        </div>

        <div className={styles.costModel} aria-labelledby="cost-model-title">
          <div className={styles.modelHeader}><p id="cost-model-title">YOUR QAVYO COSTS</p><span>Three separate commercial components</span></div>
          <div className={styles.components}>
            <article className={styles.component}>
              <div className={styles.componentTitle}><span><Monitor aria-hidden="true" /></span><div><small>01 · SOFTWARE</small><h3>Qavyo</h3></div></div>
              <dl className={styles.softwarePrices}>{softwarePlans.map(plan => <div key={plan.name}><dt>{plan.name}</dt><dd>£{plan.price}<span>/month</span></dd></div>)}</dl>
              <p>Your Qavyo software subscription.</p>
            </article>
            <span className={styles.plus} aria-hidden="true">+</span>
            <article className={styles.component}>
              <div className={styles.componentTitle}><span><Package aria-hidden="true" /></span><div><small>02 · HARDWARE</small><h3>Your setup</h3></div></div>
              <div className={styles.hardwareChoices}><span><Check aria-hidden="true" />Use compatible equipment you own</span><b>OR</b><span><Check aria-hidden="true" />Choose Qavyo-certified hardware</span></div>
              <p>Hardware is separate from your software subscription.</p>
            </article>
            <span className={styles.plus} aria-hidden="true">+</span>
            <article className={styles.component}>
              <div className={styles.componentTitle}><span><CreditCard aria-hidden="true" /></span><div><small>03 · PAYMENTS</small><h3>Card processing</h3></div></div>
              <div className={styles.processing}><strong>Payment-processing fees are separate.</strong><p>Processing costs depend on the payment arrangement and transaction.</p></div>
              <p>Exact processing rates are provided before activation.</p>
            </article>
          </div>
          <div className={styles.modelRail}><span aria-hidden="true" /><p>Separate costs. One connected restaurant operation.</p><span aria-hidden="true" /></div>
        </div>

        <aside className={styles.unlocks} aria-label="Software plan clarity">
          <span><ShieldCheck aria-hidden="true" /></span><div><h3>No hidden software unlocks.</h3><p>Your plan determines your Qavyo software capabilities. Hardware and payment processing are separate costs, not surprise feature unlocks.</p></div>
        </aside>

        <div className={styles.flowSection}>
          <div className={styles.flowIntro}><p className="eyebrow">HOW CARD PAYMENTS WORK</p><h3>The payment moves through the restaurant’s configured payment setup.</h3><p>Card payments are processed through the restaurant’s payment setup. Qavyo connects the payment experience with orders, reconciliation and reporting.</p></div>
          <div className={styles.flowVisual}>
            <div className={styles.moneyFlow} aria-label="Customer payment flow to the restaurant">
              <p className={styles.flowLabel}>PAYMENT FLOW</p>
              <ol>
                <li><span><WalletCards aria-hidden="true" /></span><div><small>01</small><strong>Customer</strong><p>Pays the restaurant</p></div><ArrowRight aria-hidden="true" /></li>
                <li><span><CreditCard aria-hidden="true" /></span><div><small>02</small><strong>Configured payment provider</strong><p>Processes the card payment</p></div><ArrowRight aria-hidden="true" /></li>
                <li><span><Building2 aria-hidden="true" /></span><div><small>03</small><strong>Restaurant’s payment account / bank</strong><p>Receives settlement through the configured arrangement</p></div></li>
              </ol>
              <p className={styles.providerNote}><Banknote aria-hidden="true" />Payments are handled through the configured payment provider.</p>
            </div>

            <div className={styles.qavyoLayer}>
              <div className={styles.qavyoTitle}><span>q.</span><div><small>QAVYO</small><strong>Connected operational view</strong></div></div>
              <p>Qavyo sits alongside the payment flow. It connects payment information with the restaurant operation.</p>
              <ul>{connectedPaymentData.map(({ label, icon: Icon }) => <li key={label}><Icon aria-hidden="true" />{label}</li>)}</ul>
              <div className={styles.dataDirection}><ArrowDown aria-hidden="true" /><span>Payment status and records connect back to orders, reporting and operational intelligence.</span></div>
            </div>
          </div>
        </div>

        <div className={styles.addonMessage}>
          <div><p className="eyebrow">NO SURPRISE ADD-ON MAZE</p><h3>Your software plan isn’t a collection of paid feature plugins.</h3></div>
          <p>Choose Starter, Growth or Business for your software. Hardware and payment processing are priced separately because they depend on your physical setup and transaction activity.</p>
        </div>

        <div className={styles.trust}><span><ShieldCheck aria-hidden="true" /></span><p>You’ll know your software subscription, hardware cost and payment-processing terms before you commit.</p></div>
      </div>
    </section>
  );
}
