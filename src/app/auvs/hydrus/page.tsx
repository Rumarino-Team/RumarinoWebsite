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
            <Image src="/hydrus.webp" alt="Hydrus" fill className="object-cover"/>
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
              <Image src="/hydrus_model1.webp" alt="" fill className="object-cover"/>
            </div>
          </div>

          {/* Electrical */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video rounded-xl overflow-hidden order-last md:order-first">
              <Image src="/electrical.webp" alt="" fill className="object-cover"/>
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

          {/* SOFTWARE SECTION - Imagen completamente visible */}
          <div>
            <h2 className="text-3xl font-headline mb-6 text-center text-[#51DFC9]">
              Software Architecture
            </h2>

            <p className="text-white text-center max-w-2xl mx-auto mb-10">
              Hydrus is powered by a robust ROS-based software stack, enabling full autonomy through 
              computer vision, state estimation, and intelligent path planning.
            </p>

            <div className="max-w-3xl mx-auto">
              <Link
                href="https://github.com/Rumarino-Team/hydrus-software-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-[#00A68C]/20 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#00A68C]/30 hover:-translate-y-2 min-h-[400px]">

                  {/* Imagen de fondo - 100% visible, sin filtros ni opacidad */}
                  <div className="absolute inset-0">
                    <Image 
                      src="/REPO_back.jpg"
                      alt="GitHub background"
                      fill
                      sizes="(max-width: 768px) 100vw, 800px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Gradiente sutil en los bordes para mejorar legibilidad del texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col items-center justify-center min-h-[400px] p-10 text-center">
                    
                    {/* Ícono de GitHub */}
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-black/50 backdrop-blur-sm border border-[#00A68C]/40 group-hover:bg-[#00A68C]/20 transition">
                        <Github className="h-8 w-8 text-[#51DFC9]" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-headline text-white drop-shadow-lg group-hover:text-[#51DFC9] transition mb-3">
                      Explore Our Software Stack
                    </h3>

                    {/* Description */}
                    <p className="text-gray-200 max-w-md mx-auto drop-shadow-md">
                      Access our full autonomy system including ROS architecture, computer vision pipelines, and mission control logic.
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-center gap-2 text-[#51DFC9] group-hover:text-[#1FB355] transition mt-6">
                      <span>View Repository</span>
                      <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform"/>
                    </div>

                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}