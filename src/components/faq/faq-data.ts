export interface FAQItem {
  id: string;
  category: 'Trial & Plans' | 'Hardware' | 'Payments' | 'Intelligence & Operations' | 'Setup & Switching';
  question: string;
  answer: string[];
}

export const faqItems: FAQItem[] = [
  {
    id: 'trial-what-i-get',
    category: 'Trial & Plans',
    question: 'What do I get during the 30-day trial?',
    answer: [
      'For your first 30 days, you get access to the full eligible Qavyo software platform and Full Qavyo Intelligence. The trial isn’t limited to Starter, Growth or Business. You experience Qavyo first, then choose the plan that fits your restaurant.',
    ],
  },
  {
    id: 'trial-after-30-days',
    category: 'Trial & Plans',
    question: 'What happens after the 30 days?',
    answer: [
      'After your 30-day full-access period, choose Starter (£29/month), Growth (£79/month) or Business (£149/month) based on the capabilities your restaurant needs.',
    ],
  },
  {
    id: 'hardware-need-new',
    category: 'Hardware',
    question: 'Do I need to buy new hardware?',
    answer: [
      'Not necessarily. If your existing restaurant hardware is compatible with Qavyo, you may be able to keep using it. We’ll help determine what’s compatible and what, if anything, needs replacing.',
    ],
  },
  {
    id: 'hardware-buy-from-qavyo',
    category: 'Hardware',
    question: 'Can I buy hardware from Qavyo?',
    answer: [
      'Yes. If you need new equipment, Qavyo-certified hardware setups can be configured around how your restaurant operates, including POS terminals, kitchen displays, handhelds, printers and other required equipment.',
    ],
  },
  {
    id: 'hardware-included-in-plans',
    category: 'Hardware',
    question: 'Is hardware included in £29 / £79 / £149?',
    answer: [
      'No. Starter, Growth and Business are software subscriptions. Hardware is separate because every restaurant needs a different physical setup.',
    ],
  },
  {
    id: 'payments-processing-fees-included',
    category: 'Payments',
    question: 'Are card-processing fees included?',
    answer: [
      'No. Payment-processing fees are separate from your Qavyo software subscription. Processing terms depend on the restaurant’s payment arrangement and are provided separately.',
    ],
  },
  {
    id: 'payments-holding-takings',
    category: 'Payments',
    question: 'Does Qavyo hold my restaurant’s card takings?',
    answer: [
      'Card payments are handled through the configured payment provider and restaurant payment setup. Qavyo connects payment information with orders, reconciliation and reporting.',
    ],
  },
  {
    id: 'intelligence-essential-vs-full',
    category: 'Intelligence & Operations',
    question: 'What’s the difference between Essential and Full Qavyo Intelligence?',
    answer: [
      'Essential Intelligence focuses on what happened and what needs your attention — including daily business summaries, sales trends, stock risks and important anomalies.',
      'Full Intelligence goes further by helping explain why things changed, forecasting what may happen next and recommending actions across purchasing, inventory, profit, waste, suppliers, products and operations.',
      'Business adds multi-location Intelligence for understanding and comparing performance across restaurants.',
    ],
  },
  {
    id: 'operations-multiple-restaurants',
    category: 'Intelligence & Operations',
    question: 'Can Qavyo manage more than one restaurant?',
    answer: [
      'Yes. Growth includes multi-location management and central menu management. Business adds deeper company-level capabilities such as consolidated reporting, location-level management permissions and multi-location Intelligence.',
    ],
  },
  {
    id: 'operations-help-switch',
    category: 'Setup & Switching',
    question: 'Can you help us switch from our current system?',
    answer: [
      'Yes. Qavyo is designed to make switching practical. The setup process can help move your restaurant’s operational setup into Qavyo and determine which existing hardware can continue to be used.',
    ],
  },
];
