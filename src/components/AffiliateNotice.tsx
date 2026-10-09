import { Info } from 'lucide-react';
import { Link } from 'react-router';

export default function AffiliateNotice() {
  return (
    <div className="w-full bg-[#241552] border-b-2 border-[#FFE600]/30 py-2.5 px-4 text-xs text-center text-[#C0B8E8]">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Info size={14} className="text-[#FFE600] shrink-0" />
        <span>
          <strong>Affiliate Disclosure:</strong> Toonquint curates anime merchandise and earns an affiliate commission on qualifying purchases made through external links (such as Amazon and Flipkart) at no extra cost to you.{' '}
          <Link to="/affiliate-disclosure" className="underline hover:text-white transition-colors">
            Read full disclosure
          </Link>.
        </span>
      </div>
    </div>
  );
}
