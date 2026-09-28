'use client';
import { useRef } from 'react';
import { X } from 'lucide-react';

/** Replace with a real destination when this isolated preview is integrated. */
export function PreviewAction({ children, className = '', destination }: { children: React.ReactNode; className?: string; destination: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <><button className={className} onClick={() => dialog.current?.showModal()}>{children}</button>
    <dialog ref={dialog} className="preview-dialog" aria-label={`${destination} preview notice`} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button className="dialog-close icon-button" aria-label="Close notice" onClick={() => dialog.current?.close()}><X aria-hidden="true" /></button>
      <span className="eyebrow">QAVYO · PAGE PREVIEW</span><h2>{destination}</h2>
      <p>{destination === 'Pricing' ? 'The plan details will be added in the next stage. Plans start from £29/month after your 30-day full-access trial.' : 'This destination is not connected in this standalone preview yet.'}</p>
      <button className="button button-primary" onClick={() => dialog.current?.close()}>Back to preview</button>
    </dialog></>;
}
