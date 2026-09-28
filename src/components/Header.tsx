'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { PreviewAction } from './PreviewAction';

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (document.querySelector('dialog[open]')) return;

      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
        return;
      }

      if (event.key === 'Tab') {
        const nav = mobileNav.current;
        if (!nav) return;

        const focusable = [
          toggle.current,
          ...Array.from(nav.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')),
        ].filter((el): el is HTMLElement => !!el && el.offsetParent !== null);

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === first || !focusable.includes(document.activeElement as HTMLElement)) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last || !focusable.includes(document.activeElement as HTMLElement)) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="wordmark" aria-label="Qavyo home">qavyo<span aria-hidden="true">.</span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <PreviewAction destination="Product" className="nav-link">Product</PreviewAction>
          <a href="#intelligence" className="nav-link">Qavyo Intelligence</a>
          <a href="#hardware" className="nav-link">Hardware</a>
          <Link href="/pricing" className="nav-link active" aria-current="page">Pricing</Link>
        </nav>
        <div className="header-actions">
          <PreviewAction destination="Sign In" className="sign-in">Sign In</PreviewAction>
          <PreviewAction destination="Start Free" className="button button-dark">Start Free<ArrowUpRight aria-hidden="true" /></PreviewAction>
        </div>
        <button
          ref={toggle}
          className="icon-button menu-toggle"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav id="mobile-nav" ref={mobileNav} className="mobile-nav" aria-label="Mobile navigation" hidden={!open}>
        <PreviewAction destination="Product" className="nav-link">Product</PreviewAction>
        <a href="#intelligence" className="nav-link" onClick={() => setOpen(false)}>Qavyo Intelligence</a>
        <a href="#hardware" className="nav-link" onClick={() => setOpen(false)}>Hardware</a>
        <Link href="/pricing" aria-current="page" className="nav-link active">Pricing</Link>
        <PreviewAction destination="Sign In" className="nav-link">Sign In</PreviewAction>
        <PreviewAction destination="Start Free" className="button button-dark">Start Free<ArrowUpRight aria-hidden="true" /></PreviewAction>
      </nav>
    </header>
  );
}
