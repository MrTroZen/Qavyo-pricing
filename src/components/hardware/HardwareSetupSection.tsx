import {
  ArrowRight, Banknote, Check, ChefHat, CircleDollarSign, CreditCard,
  EthernetPort, Monitor, PackageCheck, Printer, Router, SlidersHorizontal,
  TabletSmartphone, UtensilsCrossed, WalletCards,
} from 'lucide-react';
import styles from './HardwareSetupSection.module.css';

const configurations = [
  {
    key: 'counter', name: 'Counter', sequence: '01',
    fit: 'Counter-service restaurants, cafés, takeaways and smaller operations.',
    devices: [
      { label: 'POS', detail: 'Orders and checkout', quantity: '1', icon: Monitor },
      { label: 'Payment', detail: 'Card / contactless device', quantity: '1', icon: CreditCard },
      { label: 'Receipt', detail: 'Customer receipts', quantity: '1', icon: Printer },
      { label: 'Cash', detail: 'Cash handling', quantity: '1', icon: Banknote },
    ],
    note: 'Additional equipment can be added for the restaurant’s workflow.',
  },
  {
    key: 'restaurant', name: 'Restaurant', sequence: '02',
    fit: 'Full-service restaurants needing front-of-house and kitchen hardware.',
    devices: [
      { label: 'POS', detail: 'Orders and checkout', quantity: '1–2', icon: Monitor },
      { label: 'Handheld', detail: 'Tableside / mobile service', quantity: '2–4', icon: TabletSmartphone },
      { label: 'KDS', detail: 'Kitchen order workflow', quantity: '1–2', icon: ChefHat },
      { label: 'Print', detail: 'Receipt / kitchen printing', quantity: 'As needed', icon: Printer },
      { label: 'Cash', detail: 'Cash handling', quantity: 'As needed', icon: Banknote },
      { label: 'Connect', detail: 'Connectivity / accessories', quantity: 'Required', icon: EthernetPort },
    ],
    note: 'Kitchen printing is included where the service workflow requires it.',
  },
  {
    key: 'pro', name: 'Restaurant Pro', sequence: '03',
    fit: 'Larger or higher-volume operations with more order and kitchen stations.',
    devices: [
      { label: 'POS', detail: 'Orders and checkout', quantity: '2–4+', icon: Monitor },
      { label: 'Handheld', detail: 'Tableside / mobile service', quantity: 'Multiple', icon: TabletSmartphone },
      { label: 'KDS', detail: 'Kitchen order workflow', quantity: '2–4', icon: ChefHat },
      { label: 'Print', detail: 'Receipt / kitchen printing', quantity: 'As needed', icon: Printer },
      { label: 'Cash', detail: 'Cash handling', quantity: 'As needed', icon: Banknote },
      { label: 'Network', detail: 'Network / connectivity equipment', quantity: 'Required', icon: Router },
      { label: 'Customer', detail: 'Customer-facing equipment', quantity: 'Where needed', icon: UtensilsCrossed },
    ],
    note: 'Designed around physical capacity, not a higher software subscription.',
  },
] as const;

function ConfigurationVisual({ configuration }: { configuration: typeof configurations[number] }) {
  return (
    <div className={`${styles.configuration} ${styles[configuration.key]}`}>
      <header><span>{configuration.sequence}</span><div><p>EXAMPLE CONFIGURATION</p><h3>{configuration.name}</h3></div></header>
      <p className={styles.fit}>{configuration.fit}</p>
      <figure className={styles.deviceBench} aria-label={`${configuration.name} example hardware configuration`}>
        <figcaption>TYPICAL SETUP</figcaption>
        <ul>
          {configuration.devices.map(({ label, detail, quantity, icon: Icon }) => (
            <li key={`${label}-${detail}`}>
              <span className={styles.deviceIcon}><Icon aria-hidden="true" /></span>
              <span className={styles.deviceCopy}><strong>{label}</strong><small>{detail}</small></span>
              <b aria-label={`Quantity ${quantity}`}>{quantity}</b>
            </li>
          ))}
        </ul>
      </figure>
      <p className={styles.configurationNote}>{configuration.note}</p>
    </div>
  );
}

export function HardwareSetupSection() {
  return (
    <section id="hardware-setups" className={styles.section} aria-labelledby="hardware-setups-heading">
      <div className="container">
        <div className={styles.intro}>
          <div><p className="eyebrow">QAVYO-CERTIFIED HARDWARE</p><h2 id="hardware-setups-heading">Need hardware?<br /><span>Build the setup your restaurant needs.</span></h2></div>
          <div className={styles.introCopy}><p>Start with a typical restaurant setup, then configure the devices your operation actually needs.</p><strong>Buy hardware separately from your Qavyo software subscription.</strong></div>
        </div>

        <aside className={styles.independence} aria-label="Hardware and software plan independence">
          <span><SlidersHorizontal aria-hidden="true" /></span>
          <div><h3>Your hardware setup is independent from your Qavyo software plan.</h3><p>Choose software based on the capabilities your business needs. Choose hardware based on how your restaurant operates.</p></div>
        </aside>

        <div className={styles.configurations}>
          {configurations.map(configuration => <ConfigurationVisual key={configuration.key} configuration={configuration} />)}
        </div>
        <p className={styles.exampleNote}>These are example starting points. Final quantities depend on service style, order points, table service, kitchen stations, payment workflow, restaurant size and existing equipment.</p>

        <div className={styles.certifiedMeaning}>
          <span><PackageCheck aria-hidden="true" /></span><div><p>WHAT QAVYO-CERTIFIED MEANS</p><h3>Device combinations tested for the Qavyo restaurant workflow.</h3><ul><li><Check aria-hidden="true" />Tested compatibility</li><li><Check aria-hidden="true" />Setup guidance</li><li><Check aria-hidden="true" />Software integration</li><li><Check aria-hidden="true" />Clearer support responsibility</li></ul></div>
        </div>

        <div className={styles.processHeading}><p className="eyebrow">HOW CONFIGURATION WORKS</p><h3>A setup shaped around the operation.</h3></div>
        <ol className={styles.process}>
          <li><span className={styles.stepIcon}><UtensilsCrossed aria-hidden="true" /></span><div><p>01 · TELL US HOW YOU OPERATE</p><h4>Describe the restaurant workflow.</h4><ul><li>Restaurant type</li><li>Order points</li><li>Kitchen stations</li><li>Tableside ordering</li></ul></div><ArrowRight className={styles.stepArrow} aria-hidden="true" /></li>
          <li><span className={styles.stepIcon}><SlidersHorizontal aria-hidden="true" /></span><div><p>02 · WE CONFIGURE THE SETUP</p><h4>Match devices to the workflow.</h4><ul><li>POS terminals</li><li>KDS screens</li><li>Handhelds</li><li>Printers and payment devices</li></ul></div><ArrowRight className={styles.stepArrow} aria-hidden="true" /></li>
          <li><span className={styles.stepIcon}><WalletCards aria-hidden="true" /></span><div><p>03 · CHOOSE HOW TO GET IT</p><h4>Choose an acquisition route.</h4><div className={styles.acquisition}><span><CircleDollarSign aria-hidden="true" /><strong>Buy outright</strong><small>Purchase hardware upfront.</small></span><span><CreditCard aria-hidden="true" /><strong>Pay over time</strong><small>Payment options where eligible.</small></span></div></div></li>
        </ol>
        <div className={styles.ownership}><strong>Prefer to own your equipment?</strong><p>Qavyo hardware can be purchased outright, with payment options available where eligible.</p></div>
        <p className={styles.transition}>Hardware is separate. Payments are simple too.<span>Next: how payments work with Qavyo.</span></p>
      </div>
    </section>
  );
}
