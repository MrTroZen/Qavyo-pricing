import { ArrowRight } from 'lucide-react';
import { PreviewAction } from '@/components/PreviewAction';
import styles from './FinalCTASection.module.css';

export function FinalCTASection() {
  return (
    <section id="final-cta" className={styles.section} aria-labelledby="final-cta-heading">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            <span>30-DAY FULL ACCESS TRIAL</span>
          </div>

          <h2 id="final-cta-heading" className={styles.headline}>
            30 Days. <span>Full Qavyo.</span>
          </h2>

          <p className={styles.supporting}>
            Experience the complete eligible Qavyo software platform and Full Qavyo Intelligence for 30 days. Then choose the plan that fits your restaurant.
          </p>

          <div className={styles.ctaGroup}>
            <PreviewAction
              destination="Start 30 Days Free"
              className={`button button-primary ${styles.ctaButton}`}
            >
              Start 30 Days Free
              <ArrowRight aria-hidden="true" />
            </PreviewAction>
            <p className={styles.microcopy}>
              Plans start from £29/month after your trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
