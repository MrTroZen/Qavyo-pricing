'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PreviewAction } from './PreviewAction';

const items = ['Product', 'Qavyo Intelligence', 'Hardware'];
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => { if (event.key === 'Escape' && open && !document.querySelector('dialog[open]')) { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', onEscape);
    return () => document.removeEventListener('keydown', onEscape);
  }, [open]);
  return <header className="site-header"><div className="container header-inner">
    <Link href="/" className="wordmark" aria-label="Qavyo home">qavyo<span aria-hidden="true">.</span></Link>
    <nav className="desktop-nav" aria-label="Main navigation">{items.map(item => <PreviewAction key={item} destination={item} className="nav-link">{item}</PreviewAction>)}<Link href="/pricing" className="nav-link active" aria-current="page">Pricing</Link></nav>
    <div className="header-actions"><PreviewAction destination="Sign In" className="sign-in">Sign In</PreviewAction><PreviewAction destination="Start Free" className="button button-dark">Start Free<ArrowUpRight aria-hidden="true" /></PreviewAction></div>
    <button ref={toggle} className="icon-button menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
  </div><nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>{items.map(item => <PreviewAction key={item} destination={item} className="nav-link">{item}</PreviewAction>)}<Link href="/pricing" aria-current="page" className="nav-link active">Pricing</Link><PreviewAction destination="Sign In" className="nav-link">Sign In</PreviewAction><PreviewAction destination="Start Free" className="button button-dark">Start Free<ArrowUpRight aria-hidden="true" /></PreviewAction></nav></header>;
}
