"use client";

import Link from 'next/link';
import { ArrowLeft, FileCode2 } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

export default function SoftwareSphinxDocsPage() {
  const [iframeHeight, setIframeHeight] = useState<number | null>(null);
  const iframeContainerRef = useRef<HTMLDivElement | null>(null);

  const iframeContainerStyle = useMemo(() => {
    if (!iframeHeight) return undefined;
    return { height: `${iframeHeight}px` } as const;
  }, [iframeHeight]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const updateHeight = () => {
      const container = iframeContainerRef.current;
      if (!container) return;
      const top = container.getBoundingClientRect().top;
      setIframeHeight(Math.max(0, Math.floor(window.innerHeight - top)));
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, []);

  return (
    <div className="flex min-h-0 flex-col bg-black text-white">
      <section className="shrink-0 border-b border-[#00A68C]/20 bg-[#171919]">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                href="/software"
                className="inline-flex items-center gap-3 rounded-xl border border-[#00A68C]/25 bg-black/40 px-4 py-3 font-roboto text-base font-semibold text-gray-200 transition-colors hover:border-[#51DFC9]/50 hover:text-[#51DFC9]"
              >
                <ArrowLeft className="h-5 w-5" />
                Software overview
              </Link>
          
      
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-0 flex-1 bg-black p-0">
        <div
          ref={iframeContainerRef}
          style={iframeContainerStyle}
          className="w-full overflow-hidden border-t border-[#00A68C]/20 bg-[#171919]"
        >
          <iframe
            title="RUMarino Autonomy Stack Sphinx documentation"
            src="/autonomy-docs/index.html"
            className="block h-full w-full bg-black"
          />
        </div>
      </section>
    </div>
  );
}
