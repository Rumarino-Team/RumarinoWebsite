import Link from 'next/link';
import { ArrowLeft, ExternalLink, FileCode2 } from 'lucide-react';

export default function SoftwareSphinxDocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="border-b border-[#00A68C]/20 bg-[#171919]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <Link
                href="/software"
                className="mb-4 inline-flex items-center gap-2 font-roboto text-sm text-gray-300 transition-colors hover:text-[#51DFC9]"
              >
                <ArrowLeft className="h-4 w-4" />
                Software overview
              </Link>
              <div className="flex items-center gap-3 text-[#51DFC9]">
                <FileCode2 className="h-6 w-6" />
                <span className="font-roboto text-sm font-bold uppercase tracking-wider">Sphinx Documentation</span>
              </div>
              <h1 className="mt-3 font-headline text-4xl tracking-wide md:text-5xl">
                <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                  AUTONOMY STACK DOCS
                </span>
              </h1>
            </div>

            <Link
              href="/autonomy-docs/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#00A68C]/30 bg-black/50 px-5 py-3 font-roboto text-sm font-bold text-white transition-colors hover:border-[#51DFC9]/60 hover:bg-white/5"
            >
              Open full page
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-black p-2 md:p-4">
        <div className="overflow-hidden rounded-xl border border-[#00A68C]/20 bg-[#171919] shadow-2xl">
          <iframe
            title="RUMarino Autonomy Stack Sphinx documentation"
            src="/autonomy-docs/index.html"
            className="h-[calc(100vh-14rem)] min-h-[680px] w-full bg-black"
          />
        </div>
      </section>
    </div>
  );
}
