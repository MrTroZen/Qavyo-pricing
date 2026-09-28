'use client';

import { useState } from 'react';
import {
  Check, ChefHat, CircleHelp, CreditCard, Hand, Monitor,
  Printer, ScanLine, Sparkles, TabletSmartphone, Unplug,
} from 'lucide-react';
import styles from './HardwareSection.module.css';

const devices = [
  { id: 'pos', name: 'POS terminal', description: 'Keeps orders moving', icon: Monitor },
  { id: 'kds', name: 'Kitchen display', description: 'Kitchen orders in one place', icon: ChefHat },
  { id: 'handheld', name: 'Handheld', description: 'Tableside ordering', icon: TabletSmartphone },
  { id: 'payment', name: 'Payment terminal', description: 'A payment device in the setup', icon: CreditCard },
  { id: 'printer', name: 'Printer', description: 'Receipts and kitchen printing', icon: Printer },
] as const;

const routes = [
  {
    label: 'ALREADY HAVE HARDWARE?', title: 'Keep compatible equipment.', icon: Unplug,
    items: ['Compatible POS hardware', 'Compatible printers and peripherals', 'Avoid unnecessary replacement', 'Qavyo software support for compatible setups'],
  },
  {
    label: 'NEED HARDWARE?', title: 'Choose a Qavyo-certified setup.', icon: Sparkles,
    items: ['Tested device combinations', 'POS and kitchen displays', 'Payment terminals, printers and accessories', 'Setup guidance'],
  },
];

function HardwareEcosystem() {
  const [active, setActive] = useState('pos');
  const selected = devices.find(device => device.id === active) ?? devices[0];

  return (
    <figure className={styles.ecosystem} aria-labelledby="hardware-visual-title">
      <figcaption id="hardware-visual-title"><span>RESTAURANT HARDWARE ECOSYSTEM</span><strong>Different devices. One connected Qavyo system.</strong></figcaption>
      <div className={styles.deviceCanvas}>
        <svg className={styles.connections} viewBox="0 0 600 420" preserveAspectRatio="none" aria-hidden="true">
          <path data-device="kds" d="M300 210 L300 63" />
          <path data-device="handheld" d="M300 210 L89 210" />
          <path data-device="pos" d="M300 210 L512 151" />
          <path data-device="payment" d="M300 210 L474 340" />
          <path data-device="printer" d="M300 210 L184 351" />
        </svg>
        <div className={styles.hub} aria-hidden="true"><span>q.</span><small>QAVYO</small></div>
        {devices.map(({ id, name, description, icon: Icon }) => (
          <button key={id} className={`${styles.device} ${styles[id]} ${active === id ? styles.active : ''}`} aria-pressed={active === id} aria-label={`${name}: ${description}`} onClick={() => setActive(id)} onFocus={() => setActive(id)} onMouseEnter={() => setActive(id)}>
            <span className={styles.deviceShell}><Icon aria-hidden="true" /></span>
            <span className={styles.deviceLabel}><strong>{name}</strong><small>{description}</small></span>
          </button>
        ))}
        <div className={styles.status} aria-live="polite"><span><ScanLine aria-hidden="true" /></span><div><small>SELECTED DEVICE</small><strong>{selected.name}</strong><p>{selected.description}</p></div></div>
      </div>
      <p className={styles.visualNote}><CircleHelp aria-hidden="true" />Device compatibility depends on the equipment, operating system, peripherals and integrations.</p>
    </figure>
  );
}

export function HardwareSection() {
  return (
    <section id="hardware" className={styles.section} aria-labelledby="hardware-heading">
      <div className="container">
        <div className={styles.heroRow}>
          <div className={styles.copy}>
            <p className="eyebrow">FLEXIBLE HARDWARE</p>
            <h2 id="hardware-heading">Already have hardware?<br /><span>Keep it.</span></h2>
            <p>Qavyo can work with <strong>compatible</strong> restaurant hardware, so switching software doesn’t automatically mean replacing everything on your counter.</p>
            <p>Need new equipment? Qavyo-certified hardware options are available too.</p>
            <div className={styles.switching}><Hand aria-hidden="true" /><div><strong>Changing software shouldn’t mean throwing away working equipment.</strong><p>We’ll help determine what’s compatible and what, if anything, needs replacing.</p></div></div>
          </div>
          <HardwareEcosystem />
        </div>

        <div className={styles.routeIntro}><p className="eyebrow">TWO FLEXIBLE ROUTES</p><h3>Start with what works for your restaurant.</h3></div>
        <div className={styles.routes}>
          {routes.map(({ label, title, icon: Icon, items }) => (
            <article key={label} className={styles.route}>
              <span className={styles.routeIcon}><Icon aria-hidden="true" /></span>
              <div><p className={styles.routeLabel}>{label}</p><h4>{title}</h4><ul>{items.map(item => <li key={item}><Check aria-hidden="true" />{item}</li>)}</ul></div>
            </article>
          ))}
        </div>

        <div className={styles.support}>
          <div><span>QAVYO-CERTIFIED HARDWARE</span><p>Fuller setup and hardware/software support for equipment Qavyo has tested and certified.</p></div>
          <div><span>CUSTOMER-OWNED COMPATIBLE HARDWARE</span><p>Qavyo supports its software; hardware-specific support may depend on the device.</p></div>
        </div>
        <p className={styles.nextStep}>Starting fresh? We’ll help build the right setup for your restaurant.</p>
      </div>
    </section>
  );
}
