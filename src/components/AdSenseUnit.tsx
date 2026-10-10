import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

interface AdSenseUnitProps {
  slot?: string;
  client?: string;
  format?: string;
  responsive?: boolean;
  className?: string;
  label?: string;
}

/**
 * Reusable Google AdSense unit component for Single Page Applications (SPA).
 * Safely calls (adsbygoogle = window.adsbygoogle || []).push({}) upon mount.
 */
export default function AdSenseUnit({
  slot = "3490032258",
  client = "ca-pub-3130208368625531",
  format = "auto",
  responsive = true,
  className = "",
  label = "Advertisement",
}: AdSenseUnitProps) {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    // Check if adsbygoogle push is already called on this specific ins instance
    if (adRef.current && !pushed.current) {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          pushed.current = true;
        }
      } catch (err) {
        // Silently catch ad blocker or duplicate push errors in dev/client
        console.warn('AdSense notice:', err);
      }
    }
  }, []);

  return (
    <aside
      aria-label="Advertisement"
      className={`w-full my-8 text-center overflow-hidden max-w-4xl mx-auto ${className}`}
    >
      {label && (
        <span className="block text-[10px] uppercase tracking-widest text-[#8A7EA8] mb-1.5 font-mono">
          {label}
        </span>
      )}
      <div className="w-full min-h-[90px] flex items-center justify-center rounded-2xl bg-black/15 border border-white/5 p-2">
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={client}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </aside>
  );
}
