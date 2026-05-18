"use client";

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';

function resolveDocSrc(docParam: string | null) {
  if (!docParam) return '/autonomy-docs/index.html';

  let doc = docParam.trim();
  if (!doc) return '/autonomy-docs/index.html';

  if (doc.startsWith('/autonomy-docs/')) doc = doc.slice('/autonomy-docs/'.length);
  if (doc.startsWith('/')) doc = doc.slice(1);

  // Basic safety: keep it a simple relative HTML file within autonomy-docs.
  if (doc.includes('..') || doc.includes('\\') || doc.includes('://')) return '/autonomy-docs/index.html';
  if (!/^[a-zA-Z0-9._\-/]+\.html$/.test(doc)) return '/autonomy-docs/index.html';

  return `/autonomy-docs/${doc}`;
}

function DocsIFrame() {
  const searchParams = useSearchParams();
  const docParam = searchParams.get('doc');
  const iframeSrc = useMemo(() => resolveDocSrc(docParam), [docParam]);

  return (
    <iframe
      title="RUMarino Autonomy Stack Sphinx documentation"
      src={iframeSrc}
      className="block h-full w-full bg-black"
    />
  );
}

export default function SoftwareSphinxDocsPage() {
  const [iframeHeight, setIframeHeight] = useState<number | null>(null);
  const iframeContainerRef = useRef<HTMLDivElement | null>(null);

  const iframeContainerStyle = useMemo(() => {
    return { height: iframeHeight ? `${iframeHeight}px` : '70vh' } as const;
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
    <div className="flex min-h-screen flex-col bg-black text-white">
      <section className="shrink-0 border-b border-[#00A68C]/20 bg-[#171919]">
        <div className="container mx-auto px-4 py-4 md:py-5">
          <Link
            href="/software"
            className="inline-flex items-center gap-3 rounded-xl border border-[#00A68C]/25 bg-black/40 px-4 py-3 font-roboto text-base font-semibold text-gray-200 transition-colors hover:border-[#51DFC9]/50 hover:text-[#51DFC9]"
          >
            <ArrowLeft className="h-5 w-5" />
            Software overview
          </Link>
        </div>
      </section>

      <section className="flex-1 border-t border-[#00A68C]/20 bg-[#171919]">
        <div
          ref={iframeContainerRef}
          style={iframeContainerStyle}
          className="w-full overflow-hidden bg-black"
        >
          <Suspense
            fallback={
              <iframe
                title="RUMarino Autonomy Stack Sphinx documentation"
                src="/autonomy-docs/index.html"
                className="block h-full w-full bg-black"
              />
            }
          >
            <DocsIFrame />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
