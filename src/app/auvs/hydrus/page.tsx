'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";

export default function HydrusPage() {
  return (
    <div className="bg-black text-white min-h-screen">

      <div className="container mx-auto px-4 py-16">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
              HYDRUS
            </span>
          </h1>

          <p className="text-white max-w-2xl mx-auto">
            Our latest generation Autonomous Underwater Vehicle, engineered for excellence.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-[#00A68C]/20">
			<Image src="/auv/hydrus.webp" alt="Hydrus" fill className="object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"/>
          </div>
        </div>

        {/* SECTIONS */}
        <div className="space-y-16">

          {/* Mechanical */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-headline mb-4 text-[#51DFC9] text-center">Mechanical Design</h2>
              <p className="text-white">
                Hydrus features a dual-hull architecture combining aluminum and acrylic compartments. 
                It integrates a precision claw system, a forward-facing ZED 2i camera with enhanced mobility, 
                and a torpedo launching mechanism designed for competitive performance.
              </p>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden">
			  <Image src="/auv/hydrus_model1.webp" alt="" fill className="object-cover"/>
            </div>
          </div>

          {/* Electrical */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden order-last md:order-first">
			  <Image src="/auv/electrical.webp" alt="" fill className="object-cover"/>
            </div>

            <div>
              <h2 className="text-3xl font-headline mb-4 text-[#51DFC9] text-center">Electrical Systems</h2>
              <p className="text-white">
                Powered by a dual-phase voltage system, Hydrus uses a custom PCB to efficiently distribute energy. 
                Integrated protection systems ensure reliability while supporting thrusters, onboard computers, 
                and advanced subsystems.
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}