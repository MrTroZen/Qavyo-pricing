# Qavyo pricing — sections 1–9 preview

Local standalone Next.js App Router project with TypeScript, Tailwind CSS v4, Lucide and locally bundled Manrope. Navigation, the approved hero, pricing plans, Qavyo Intelligence, 30 Days. Full Qavyo., full feature comparison, flexible hardware, Qavyo-certified setup options, payments and pricing clarity, and FAQ are implemented. The older prototype is not used.

## Run

With Node.js 20.9+ and pnpm installed:

```sh
pnpm install
pnpm dev
```

Open http://127.0.0.1:3000 (also available at `/pricing`).

In this workspace, dependencies are already installed. If pnpm is not on your PATH, start directly with the available Node runtime:

```sh
node node_modules/next/dist/bin/next dev --hostname 127.0.0.1
```

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Structure

- `src/app/layout.tsx`: metadata, locally bundled font and global CSS.
- `src/app/globals.css`: semantic visual tokens, reusable button styles and responsive compositions.
- `src/app/page.tsx`: page shell; `src/app/pricing/page.tsx` exposes the same page at `/pricing`.
- `Header`: desktop navigation and collapsible mobile navigation.
- `PricingHero`: messaging, CTAs and product composition.
- `TrialOffer`: unrestricted 30-day software trial message.
- `ProductPreview`: illustrative dashboard and four Intelligence cards. All operational entries are sample UI data, not customer results or verified product screenshots.
- `PreviewAction`: keyboard-accessible native dialog for destinations not provided yet. Replace with real links during integration. No signup or authentication service is connected. All pricing CTAs use the same full-access trial action without selecting a paid plan.
- `PricingPlans`: typed plan data rendered through a reusable internal `PlanCard`, followed by shared trial and software/hardware notes. `PricingPlans.module.css` scopes all new styles, reusing global design tokens and buttons. The hero's See Pricing link now targets `#plans`; its design is unchanged.
- `intelligence/QavyoIntelligence`: section introduction, six-stage Intelligence loop, and six compact capability categories.
- `intelligence/IntelligenceDemo`: one connected sample workspace, with source data, observation, explanation, stock forecast, purchase recommendation, a local draft action, and pending outcome tracking.
- `intelligence/IntelligencePlans`: compact accessible plan-selector buttons exposing Essential, Full and Multi-location details without repeating the pricing cards.
- `intelligence/intelligence.module.css`: scoped responsive styles using the existing palette, Manrope, Lucide, radii and button system. The dark surface matches the hero's Daily Brief treatment.
- `FullAccessTrial`: a connected Start / Experience / Choose journey, with an internal `UnlockedPlatform` component for the 30-day centerpiece and capability collection. Compact post-trial prices are informational, not automatic plan selections. Its CTA reuses `PreviewAction` until signup is connected.
- `FullAccessTrial.module.css`: scoped light-surface styling. Desktop shows a horizontal journey; tablet uses a vertical rail beside the content; mobile stacks the journey with a prominent 30-day anchor. It reuses existing tokens, typography, Lucide icons and buttons without new dependencies.
- `comparison/comparison-data.ts`: the specified 33 paid-plan features across seven categories, plus the eighth Intelligence category and its tier details. Minimum-plan indexes encode inclusion inheritance. No marketing capabilities or unconfirmed limits are added.
- `comparison/FeatureComparison.tsx`: semantic desktop table, category navigation, expandable Intelligence details and a separate accessible selected-plan experience for smaller screens. Restaurant Operations starts open. Unavailable features remain visible with quiet minus icons and screen-reader labels.
- `comparison/FeatureComparison.module.css`: scoped styling. From 900px the plan header sticks within the table. Below 900px the plan selector sticks above collapsible categories. The main navigation is not sticky, so the comparison header does not overlap it. Native disclosure controls and buttons support keyboard interaction.
- `hardware/HardwareSection.tsx`: Section 6 copy, an interactive internal `HardwareEcosystem`, two hardware routes, and the concise certified/customer-owned support distinction. Five neutral Lucide-based device representations avoid brand, operating-system and universal-compatibility claims. Focusing, hovering or selecting a device updates the accessible status label.
- `hardware/HardwareSection.module.css`: scoped hardware composition using existing tokens. Desktop and tablet connect devices to a central Qavyo hub; mobile intentionally replaces the diagram with a readable two-column device grid. The route and support surfaces then stack naturally.
- `hardware/HardwareSetupSection.tsx`: Section 7 intro, prominent hardware/software independence rule, three example configurations, concise Qavyo-certified meaning, configuration journey, acquisition routes and payments transition. Hardware prices and unfinalized finance terms are omitted.
- `hardware/HardwareSetupSection.module.css`: scoped physical-configuration presentation. Desktop compares three setup benches; tablet turns each into a wide equipment layout; mobile stacks configurations while preserving readable device names, quantities and example status.
- `payments/PaymentsClaritySection.tsx`: Section 8 cost architecture, software-plan prices, hardware choice, provider-neutral payment-processing explanation, payment flow, connected Qavyo operational data, no-hidden-unlocks message and closing trust statement. It does not state processing rates, imply that Qavyo holds money, or use third-party payment logos.
- `payments/PaymentsClaritySection.module.css`: scoped responsive styling for the three connected commercial components and side-by-side payment/Qavyo flow. Tablet widens and stacks cost components; mobile turns every path into a readable vertical sequence.
- `faq/faq-data.ts`: typed FAQ dataset with the 10 specified questions across Trial & Plans, Hardware, Payments, Intelligence & Operations, and Setup & Switching, strictly upholding all business rules.
- `faq/FAQSection.tsx`: accessible accordion with semantic headings and buttons, aria-expanded/aria-controls, multi-item support, and desktop sticky intro.
- `faq/FAQSection.module.css`: scoped styling using existing tokens, smooth rotational chevrons, generous mobile touch targets, and reduced-motion support.

## Assumptions and scope

The new palette, spacing, type scale and surfaces are provisional design tokens, not a recovered brand system. The product interface is an illustrative design, not a production screenshot. The offer includes all eligible software and full Qavyo Intelligence for 30 days; paid plan selection follows the trial. Hardware entitlement is not implied. Starter is £29/month, Growth £79/month, and Business £149/month. Hardware compatibility depends on the device, operating system, peripherals and integrations; payment terminal inclusion in the visual does not claim universal payment compatibility. Hardware configurations are examples independent from software tiers. Payment options are described only as available where eligible. Payment-processing rates depend on the configured arrangement and transaction and are intentionally omitted. No sections beyond FAQ have been built.

The Intelligence demo uses fixed sample inputs: £860 sales vs £1,000 baseline, 36 dinner orders vs 50, 18 kg stock and 24 kg projected demand. The -14% sales change and 6 kg purchase suggestion are calculated in code. The forecast is a labelled illustrative input, not a live model prediction. The stock check is separate from the explanation of lower sales. The purchase button creates only local sample UI state; no order is sent or stored, and no successful outcome is invented. Reset restores the initial story.

Responsive layouts target 1440, 1280, 768 and 390px. The compact dashboard is a visual illustration; the accompanying Intelligence cards expand into legible full-width surfaces on phones. Reduced-motion preferences suppress hover transitions.

Pricing cards form three columns from 1024px. At 600–1023px they stack as wide cards, each with pricing beside its feature list. Below 600px each card becomes a single column. Growth retains its Most Popular badge at every size.

Intelligence uses a horizontal loop and side-by-side source data / brief on desktop. Tablet stacks the brief below a compact source-data layout. Mobile uses a vertical loop and connected story, simple capability rows, and stacked plan selectors showing one tier's details at a time.

## Verification

Passed ESLint with no warnings, TypeScript checking and a production build. Browser checks at 1440, 1280, 768 and 390px found no horizontal overflow or runtime errors. Mobile menu open/Escape-close and CTA dialog open/close interactions passed. Screenshots from these checks are in the ignored `.qa` directory.

Pricing-section checks also cover 1024px and 320px, the See Pricing anchor, all three plan CTA dialogs, visible keyboard focus, and the displayed prices. No horizontal overflow or browser runtime errors were found.

Section 3 passed lint, TypeScript and production build checks. Browser verification at 1440, 1280, 768, 390 and 320px covered overflow, sample draft creation/reset, pending measurement state, all three Intelligence selectors and their complete feature lists. Keyboard activation, focus visibility and reduced-motion behavior passed. Full-page desktop and mobile screenshots were reviewed. Hero, pricing, header and global CSS file hashes remained unchanged during Section 3 work. Only the page composition and this README changed outside the new section.

## Created files

Section 5 passed lint, TypeScript and production build checks. Browser checks at 1440, 1280, 768, 390 and 320px verified the 33 inclusion rows (17 Starter, 27 Growth, 33 Business), all Intelligence detail lists, sticky headers, category jumps, plan switching, keyboard focus, CTA notices and reduced motion. Regression checks covered navigation, the hero pricing anchor, pricing/trial CTAs, and Intelligence actions and selectors. No horizontal overflow, failed asset responses or browser runtime errors were found. Approved section source files were unchanged. The commit for Section 5 also includes the previously approved, uncommitted Section 4.

Section 6 passed lint, TypeScript and production build checks. Browser checks at 1440, 1280, 768, 390 and 320px verified all five device controls, live device labels, keyboard focus and reduced motion. Regression checks covered navigation, the hero pricing anchor, pricing/trial CTAs, Intelligence actions and selectors, and mobile comparison selection. No horizontal overflow, failed responses or browser runtime errors were found. Approved section source files were unchanged; only page composition and documentation changed outside Section 6.

Section 7 passed responsive browser checks at 1440, 1280, 768, 390 and 320px. Verification covered all three configuration figures, hardware/software independence, eligibility wording, approved navigation and interactions, horizontal overflow, failed responses and browser runtime errors. Approved section source files were unchanged; only page composition and documentation changed outside Section 7.

Section 8 passed lint, TypeScript and production build checks. Responsive browser verification covers the three-part cost architecture, software prices, payment-flow labels, six connected operational capabilities, approved-section regressions, horizontal overflow, failed application responses and application runtime errors. Approved section source files were unchanged; only page composition and documentation changed outside Section 8.

Section 9 passed lint, TypeScript and production build checks. Responsive browser verification at 1440, 1280, 768, 390 and 320px confirmed 0 horizontal overflow, initial expansion of Question 1, independent expansion of Question 2 and Question 8 (with all 3 distinct paragraphs), collapsing of Question 1, keyboard focus and Enter/Space toggling, and no browser console or runtime errors. Approved Sections 1–8 remain unchanged; only page composition and documentation changed outside Section 9.

Section 4 passed lint, TypeScript and production build checks. Browser checks at 1440, 1280, 768, 390 and 320px confirmed no horizontal overflow or runtime errors, working CTA notices, visible keyboard focus and reduced-motion behavior. The approved Hero, Pricing and Intelligence source files and global styles were not changed. Outside Section 4, only page composition and documentation changed.

```text
.gitignore
package.json
pnpm-lock.yaml
pnpm-workspace.yaml
tsconfig.json
next-env.d.ts
postcss.config.mjs
eslint.config.mjs
README.md
src/app/layout.tsx
src/app/globals.css
src/app/page.tsx
src/app/pricing/page.tsx
src/components/Header.tsx
src/components/PricingHero.tsx
src/components/TrialOffer.tsx
src/components/ProductPreview.tsx
src/components/PreviewAction.tsx
src/components/PricingPlans.tsx
src/components/PricingPlans.module.css
src/components/intelligence/QavyoIntelligence.tsx
src/components/intelligence/IntelligenceDemo.tsx
src/components/intelligence/IntelligencePlans.tsx
src/components/intelligence/intelligence.module.css
src/components/FullAccessTrial.tsx
src/components/FullAccessTrial.module.css
src/components/comparison/comparison-data.ts
src/components/comparison/FeatureComparison.tsx
src/components/comparison/FeatureComparison.module.css
src/components/hardware/HardwareSection.tsx
src/components/hardware/HardwareSection.module.css
src/components/hardware/HardwareSetupSection.tsx
src/components/hardware/HardwareSetupSection.module.css
src/components/payments/PaymentsClaritySection.tsx
src/components/payments/PaymentsClaritySection.module.css
src/components/faq/faq-data.ts
src/components/faq/FAQSection.tsx
src/components/faq/FAQSection.module.css
```

Generated local artifacts: `node_modules`, `.next`, `tsconfig.tsbuildinfo`, and `.qa/hero-{1440,1280,768,390}.png` (ignored).
