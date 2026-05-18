'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const auvs = [
  {
    name: 'Hydrus',
    description: 'Our latest-generation AUV, designed for advanced autonomous tasks in the RoboSub competition.',
    imageUrl: '/hydrus.webp',
    pageUrl: '/auvs/hydrus',
  },
  {
    name: 'Proteus',
    description: 'Our legacy AUV, a robust platform that has served as the foundation for our current designs.',
    imageUrl: '/proteus_cover.webp',
    pageUrl: '/auvs/proteus',
  },
];

export default function AUVsPage() {
  return (
    <div className="w-full min-h-screen bg-black text-white px-4 py-16">
      
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-block mb-8">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#00A68C] to-[#51DFC9] rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-[#00A68C] to-[#51DFC9] rotate-45"></div>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#51DFC9] to-[#00A68C] rounded-full"></div>
          </div>
        </div>

        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6">
          <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
            OUR AUVS
          </span>
        </h1>

        <p className="font-roboto text-xl text-gray-400 max-w-3xl mx-auto">
          Explore the evolution of our autonomous underwater vehicles.
        </p>
      </div>

      {/* Main AUVs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
        {auvs.map((auv) => (
          <Link key={auv.name} href={auv.pageUrl} className="group block">
            <div className="relative overflow-hidden rounded-2xl border border-[#00A68C]/20 bg-gradient-to-br from-[#1a1d1d] to-[#171919] shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A68C]/30 hover:-translate-y-2">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 blur-xl"></div>

              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={auv.imageUrl} alt={auv.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              </div>

              <div className="relative p-6">
                <h3 className="font-headline text-2xl text-white mb-2 group-hover:text-[#51DFC9]">
                  {auv.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6">{auv.description}</p>

                <div className="flex items-center justify-between text-[#51DFC9] group-hover:text-[#1FB355]">
                  <span>Explore</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform"/>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming Soon centered */}
      <div className="max-w-xl mx-auto">
        <div className="group relative overflow-hidden rounded-2xl border border-[#00A68C]/20 bg-gradient-to-br from-[#1a1d1d] to-[#171919] shadow-xl">
          
          <div className="relative aspect-[16/9]">
            <Image src="/auv_depths.webp" alt="Coming Soon" fill className="object-cover opacity-80"/>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-xl font-headline text-[#51DFC9]">COMING SOON</span>
            </div>
          </div>

          <div className="p-6 text-center">
            <p className="text-gray-400">A new AUV is rising from the depths...</p>
          </div>
        </div>
      </div>
    </div>
  );
}