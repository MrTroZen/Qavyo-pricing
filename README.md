# Qavyo pricing — hero, plans and Intelligence preview

Local standalone Next.js App Router project with TypeScript, Tailwind CSS v4, Lucide and locally bundled Manrope. Navigation, the approved hero and pricing plans, and Section 3 (Qavyo Intelligence) are implemented. The older prototype is not used.

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

## Assumptions and scope

The new palette, spacing, type scale and surfaces are provisional design tokens, not a recovered brand system. The product interface is an illustrative design, not a production screenshot. The offer includes all eligible software and full Qavyo Intelligence for 30 days; paid plan selection follows the trial. Hardware entitlement is not implied. Starter is £29/month, Growth £79/month, and Business £149/month. No sections beyond Qavyo Intelligence have been built.

The Intelligence demo uses fixed sample inputs: £860 sales vs £1,000 baseline, 36 dinner orders vs 50, 18 kg stock and 24 kg projected demand. The -14% sales change and 6 kg purchase suggestion are calculated in code. The forecast is a labelled illustrative input, not a live model prediction. The stock check is separate from the explanation of lower sales. The purchase button creates only local sample UI state; no order is sent or stored, and no successful outcome is invented. Reset restores the initial story.

Responsive layouts target 1440, 1280, 768 and 390px. The compact dashboard is a visual illustration; the accompanying Intelligence cards expand into legible full-width surfaces on phones. Reduced-motion preferences suppress hover transitions.

Pricing cards form three columns from 1024px. At 600–1023px they stack as wide cards, each with pricing beside its feature list. Below 600px each card becomes a single column. Growth retains its Most Popular badge at every size.

Intelligence uses a horizontal loop and side-by-side source data / brief on desktop. Tablet stacks the brief below a compact source-data layout. Mobile uses a vertical loop and connected story, simple capability rows, and stacked plan selectors showing one tier's details at a time.

## Verification

Passed ESLint with no warnings, TypeScript checking and a production build. Browser checks at 1440, 1280, 768 and 390px found no horizontal overflow or runtime errors. Mobile menu open/Escape-close and CTA dialog open/close interactions passed. Screenshots from these checks are in the ignored `.qa` directory.

Pricing-section checks also cover 1024px and 320px, the See Pricing anchor, all three plan CTA dialogs, visible keyboard focus, and the displayed prices. No horizontal overflow or browser runtime errors were found.

Section 3 passed lint, TypeScript and production build checks. Browser verification at 1440, 1280, 768, 390 and 320px covered overflow, sample draft creation/reset, pending measurement state, all three Intelligence selectors and their complete feature lists. Keyboard activation, focus visibility and reduced-motion behavior passed. Full-page desktop and mobile screenshots were reviewed. Hero, pricing, header and global CSS file hashes remained unchanged during Section 3 work. Only the page composition and this README changed outside the new section.

## Created files

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
```

Generated local artifacts: `node_modules`, `.next`, `tsconfig.tsbuildinfo`, and `.qa/hero-{1440,1280,768,390}.png` (ignored).
