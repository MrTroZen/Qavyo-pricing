import { Building2, ChartNoAxesCombined, Code2, Package, ReceiptText, Sparkles, Users, UsersRound } from 'lucide-react';

export const comparisonPlans = [
  { name: 'Starter', price: 29, intelligence: 'Essential' },
  { name: 'Growth', price: 79, intelligence: 'Full' },
  { name: 'Business', price: 149, intelligence: 'Full + Multi-location' },
] as const;

// Minimum paid-plan index. Higher plans include all lower-plan capabilities.
export type ComparisonFeature = { name: string; from: 0 | 1 | 2 };
const feature = (name: string, from: 0 | 1 | 2 = 0): ComparisonFeature => ({ name, from });

export const comparisonCategories = [
  { id: 'operations', name: 'Restaurant Operations', icon: ReceiptText, features: [
    feature('POS'), feature('Dine-in, takeaway & delivery ordering'), feature('Menu & modifiers'),
    feature('Floor map & table management'), feature('Kitchen Display System'), feature('Website'),
    feature('Direct online ordering'), feature('QR ordering'), feature('Reservations'),
  ] },
  { id: 'customers', name: 'Customers & Sales', icon: Users, features: [
    feature('Customer profiles / CRM'), feature('Coupons'), feature('Loyalty', 1),
  ] },
  { id: 'inventory', name: 'Inventory & Purchasing', icon: Package, features: [
    feature('Ingredients & recipes'), feature('Inventory management'), feature('Purchasing & suppliers'),
    feature('Low-stock alerts'), feature('Stock transfers', 1),
  ] },
  { id: 'finance', name: 'Finance & Reporting', icon: ChartNoAxesCombined, features: [
    feature('Expenses & cash management'), feature('Standard reports'),
    feature('Deeper financial & business reporting', 1), feature('Consolidated reporting across locations', 2),
  ] },
  { id: 'workforce', name: 'Workforce', icon: UsersRound, features: [
    feature('Staff management', 1), feature('Staff scheduling', 1), feature('Time & attendance', 1), feature('Payroll & payslips', 1),
  ] },
  { id: 'locations', name: 'Multi-location', icon: Building2, features: [
    feature('Multi-location management', 1), feature('Central menu management', 1), feature('Manage locations from one account', 1),
    feature('Control which locations each manager can access', 2), feature('Company-wide operational controls', 2),
  ] },
  { id: 'platform', name: 'Platform & Integrations', icon: Code2, features: [
    feature('API access', 2), feature('External integrations', 2), feature('Higher-level onboarding & support', 2),
  ] },
];

export const intelligenceCategory = { id: 'intelligence', name: 'Qavyo Intelligence', icon: Sparkles };
export const intelligenceDetails = [
  { lead: 'What happened and what needs attention.', features: ['Daily Business Brief', 'Sales trends', 'Best / worst sellers', 'Stock risk alerts', 'Important anomalies', 'Daily priorities'] },
  { lead: 'Everything in Essential, plus:', features: ['Sales forecasting', 'Sales-change explanation', 'Purchase recommendations', 'Stock-out prediction', 'Overstock detection', 'Dead / slow stock', 'Profit-leak detection', 'Waste analysis', 'Supplier intelligence', 'Product / menu intelligence', 'Pricing recommendations', 'Customer intelligence', 'Operational intelligence', 'Weekly / monthly reviews'] },
  { lead: 'Everything in Full, plus:', features: ['Location performance comparisons', 'Cross-location anomalies', 'Cross-location inventory intelligence', 'Stock-transfer recommendations', 'Purchasing intelligence across locations', 'Cross-location menu intelligence', 'Central owner brief'] },
];
