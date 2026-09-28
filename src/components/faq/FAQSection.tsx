'use client';

import { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { faqItems } from './faq-data';
import styles from './FAQSection.module.css';

export function FAQSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(['trial-what-i-get']));

  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.introColumn}>
            <div className={styles.stickyIntro}>
              <p className="eyebrow">QUESTIONS, ANSWERED</p>
              <h2 id="faq-heading">
                Everything you need to know <br />
                <span>before you start.</span>
              </h2>
              <p className={styles.introLead}>
                Clear answers about your trial, plans, hardware and payments.
              </p>

              <div className={styles.clarityNote} aria-label="Summary of Qavyo clarity principles">
                <div className={styles.clarityHeader}>
                  <span className={styles.brandMark}>q.</span>
                  <div>
                    <small>QAVYO PRINCIPLES</small>
                    <strong>Predictable & transparent</strong>
                  </div>
                </div>
                <ul className={styles.clarityList}>
                  <li>
                    <ShieldCheck aria-hidden="true" />
                    <span>30-day unrestricted trial to start</span>
                  </li>
                  <li>
                    <ShieldCheck aria-hidden="true" />
                    <span>Clear separation of software, hardware & payments</span>
                  </li>
                  <li>
                    <ShieldCheck aria-hidden="true" />
                    <span>No surprise lock-ins or mandatory equipment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.accordionColumn}>
            <div className={styles.accordionList} role="presentation">
              {faqItems.map((item) => {
                const isOpen = openIds.has(item.id);
                return (
                  <article key={item.id} className={styles.item}>
                    <h3 className={styles.questionHeading}>
                      <button
                        type="button"
                        id={`faq-trigger-${item.id}`}
                        className={styles.trigger}
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-answer-${item.id}`}
                      >
                        <span className={styles.triggerMain}>
                          <span className={styles.categoryBadge}>{item.category}</span>
                          <span className={styles.questionText}>{item.question}</span>
                        </span>
                        <span className={styles.iconWrap} aria-hidden="true" data-open={isOpen}>
                          <ChevronDown className={styles.chevron} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={`faq-answer-${item.id}`}
                      role="region"
                      aria-labelledby={`faq-trigger-${item.id}`}
                      className={styles.answerRegion}
                      hidden={!isOpen}
                    >
                      <div className={styles.answerBody}>
                        {item.answer.map((paragraph, index) => (
                          <p key={index}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
