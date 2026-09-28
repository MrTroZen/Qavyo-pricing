import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import './globals.css';

export const metadata: Metadata = {
  title: 'Qavyo Pricing — 30 Days. Full Qavyo.',
  description: 'Explore the full eligible Qavyo software platform and full Qavyo Intelligence free for 30 days. Plans start from £29/month after your trial.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-GB"><body>{children}</body></html>;
}
