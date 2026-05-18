'use client'; 

import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Users, Bot, Award, Waves, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentModule, setCurrentModule] = useState(0);

  const modules = [
    { 
      title: "Data Engine", 
      description: "Complete video annotation and tracking system with SAM 2 segmentation and CoTracker point tracking for efficient dataset labeling",
      image: "/autonomy-docs/_images/simulation_image.png",
      link: "/autonomy-docs/data-engine.html" 
    },
    { 
      title: "Perception", 
      description: "Advanced computer vision and sensor fusion for underwater navigation and real-time object detection",
      image: "/autonomy-docs/_images/orb_slam.png",
      link: "/autonomy-docs/perception.html" 
    },
    { 
      title: "Sim2Real", 
      description: "Seamless simulation to reality transfer enabling models trained in Gazebo/Stonefish to work in real environments",
      image: "/autonomy-docs/_images/confyui.jpeg",
      link: "/autonomy-docs/simulation.html" 
    },
    { 
      title: "Mission Planning", 
      description: "Autonomous path planning and dynamic mission execution with obstacle avoidance and adaptive control",
      image: "/autonomy-docs/_images/navigation.png",
      link: "/autonomy-docs/mission-executor.html" 
    },
    { 
      title: "AI Integration", 
      description: "Machine learning pipeline and intelligent decision making for autonomous underwater operations",
      image: "/autonomy-docs/_images/depth_image.png",
      link: "/autonomy-docs/api-reference.html" 
    },
    { 
      title: "Controllers", 
      description: "Precision motor control, thruster management, and vehicle stabilization systems for AUV dynamics",
      image: "/autonomy-docs/_images/simulation_image.png",
      link: "/autonomy-docs/ros-packages.html" 
    },
  ];

  // Auto-play carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentModule((prev) => (prev + 1) % modules.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [modules.length]);

  const nextModule = () => {
    setCurrentModule((prev) => (prev + 1) % modules.length);
  };

  const prevModule = () => {
    setCurrentModule((prev) => (prev - 1 + modules.length) % modules.length);
  };

  const currentItem = modules[currentModule];

  return (
    <>
      <div className="flex flex-col">
      <section className="relative left-1/2 -translate-x-1/2 w-screen min-h-screen flex items-center justify-center text-white overflow-hidden bg-[#171919]">
          <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 h-auto w-auto max-w-none max-h-none -translate-x-1/2 -translate-y-1/2 rotate-[270deg]"
          >
			<source src="/videos/Background_Effect.mp4" type="video/mp4" />
          </video>
          </div>
          
          <div className="relative z-20 text-center px-4 md:px-6 lg:px-16 max-w-4xl mx-auto">
          <h1 className="font-headline text-2xl md:text-4xl lg:text-5xl tracking-wide mb-4">
          <span className="bg-gradient-to-r from-[#1FB355] via-[#00A68C] to-[#51DFC9] bg-clip-text text-transparent">
            WE OWN THE DEPTHS
          </span>
        </h1>
            
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <Button asChild size="default" className="group">
                <Link 
                  href="/team" 
                  className="gap-3 font-roboto font-bold bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Users className="h-5 w-5" />
                  <span>Meet Our Team</span>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              </Button>
              <Button asChild size="default" className="group">
                <a 
				  href="/documents/RUMarino 2025 report.pdf" 
                  download="RUMarino-TDR-2025.pdf"
                  className="gap-3 font-roboto font-bold bg-gradient-to-r from-[#1FB355] to-[#00A68C] hover:from-[#00A68C] hover:to-[#51DFC9] text-white px-8 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Download className="h-5 w-5" />
                  <span>Download 2025 Technical Report</span>
                </a>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl w-full mx-auto">
              {[
                { number: "40+", label: "Team Members", color: "text-[#00A68C]" },
                { number: "10+", label: "Years Active", color: "text-[#51DFC9]" },
                { number: "2", label: "AUVs Built", color: "text-[#1FB355]" },
                { number: "1000+", label: "Hours of Research", color: "text-white" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
                  <div className={`font-headline text-3xl md:text-4xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="font-roboto text-[10px] md:text-xs text-gray-300 uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="w-full bg-gradient-to-b from-[#0b0b0b] to-[#0f1111] py-12 md:py-20 border-t border-[#00A68C]/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Text Content - Left */}
                <div className="flex flex-col justify-center">
                  <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    An Underwater Robotics Research Team.
                  </h2>
                  <p className="font-roboto text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">
                    Developing the best Open Source Underwater Autonomy System.
                  </p>
                  <p className="font-roboto text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                    We not only build AUVs we build the systems around the most complete autonomy stacks. We give you tools for the Controllers, the Perception, Missions Planning AI Integrations.
                  </p>
                  <Button asChild className="group w-fit">
                    <Link 
                      href="/software" 
                      className="gap-3 font-roboto font-bold bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span>Explore Our Software</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </Button>
                </div>

                {/* Software Modules Carousel - Right */}
                <Link href={currentItem.link} className="group block cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl border border-[#00A68C]/30 bg-gradient-to-br from-[#1a1d1d] to-[#0f1111] shadow-2xl transition-all duration-500 hover:border-[#00A68C]/60 hover:shadow-[#00A68C]/30">
                    {/* Background Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                    
                    {/* Images and Controls Container */}
                    <div className="relative">
                      {/* Large Image */}
                      <div className="relative w-full aspect-square overflow-hidden rounded-t-2xl">
                        <Image
                          src={currentItem.image}
                          alt={currentItem.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          data-ai-hint="software module visualization"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      </div>

                      {/* Navigation Arrows */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          prevModule();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-[#00A68C]/80 transition-all duration-300 transform hover:scale-110 text-white"
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </button>

                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          nextModule();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/50 hover:bg-[#00A68C]/80 transition-all duration-300 transform hover:scale-110 text-white"
                      >
                        <ChevronRight className="h-6 w-6" />
                      </button>

                      {/* Slide Indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                        {modules.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.preventDefault();
                              setCurrentModule(idx);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              idx === currentModule
                                ? 'w-8 bg-[#00A68C]'
                                : 'w-2 bg-gray-500 hover:bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-6 md:p-8">
                      <h3 className="font-headline text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#00A68C] transition-colors duration-300">
                        {currentItem.title}
                      </h3>
                      <p className="font-roboto text-sm md:text-base text-gray-300 mb-6 leading-relaxed">
                        {currentItem.description}
                      </p>
                      <div className="flex items-center gap-2 text-[#51DFC9] group-hover:text-[#1FB355] transition-colors duration-300">
                        <span className="font-roboto font-bold">Explore Module</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="w-full bg-black py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                {/* <div className="bg-gradient-to-r from-[#00A68C] to-[#51DFC9] p-3 rounded-2xl shadow-2xl">
                  <Bot className="h-10 w-10 text-white" />
                </div> */}
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
                <span className="bg-gradient-to-r from-[#00A68C] via-[#51DFC9] to-white bg-clip-text text-transparent">
                  EXPLORE OUR TECHNOLOGY
                </span>
              </h2>
              <p className="font-roboto text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Dive into the technical specifications of our advanced autonomous underwater vehicles.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Link href="/auvs" className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-[#00A68C]/20 bg-gradient-to-br from-[#1a1d1d] to-[#171919] shadow-2xl transition-all duration-500 hover:shadow-[#00A68C]/30 hover:shadow-2xl hover:-translate-y-2">
                  {/* Background Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#00A68C]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <Image
					  src="/auv/proteus_page.webp"
                      alt="Hydrus AUV in Water"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="underwater robot vehicle"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-headline text-3xl md:text-4xl text-white tracking-wide">
                        OUR AUVS
                      </h3>
                      <div className="flex items-center gap-2 text-[#51DFC9] group-hover:text-[#1FB355] transition-colors duration-300">
                        <span className="font-roboto font-bold">Explore</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <p className="font-roboto text-lg text-gray-400 max-w-3xl leading-relaxed">
                      Discover Hydrus and Proteus - our custom-built autonomous underwater vehicles designed for precision, reliability, and performance in competitive environments.
                    </p>
                    
                 
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="about" className="w-full bg-gradient-to-b from-[#171919] to-black py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                {/* <div className="bg-gradient-to-r from-[#1FB355] to-[#51DFC9] p-3 rounded-2xl shadow-2xl">
                  <Users className="h-10 w-10 text-white" />
                </div> */}
              </div>
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-4">
                <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
                  MEET OUR TEAM
                </span>
              </h2>
              <p className="font-roboto text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Discover the talented students and mentors driving our mission forward at the University of Puerto Rico, Mayagüez.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <Link href="/team" className="group block">
                <div className="relative overflow-hidden rounded-3xl border border-[#1FB355]/20 bg-gradient-to-br from-[#1a1d1d] to-[#171919] shadow-2xl transition-all duration-500 hover:shadow-[#1FB355]/30 hover:shadow-2xl hover:-translate-y-2">
                  {/* Background Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1FB355]/10 via-transparent to-[#51DFC9]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                  
                  <div className="relative aspect-video overflow-hidden rounded-t-3xl">
                    <Image
					  src="/members/RUMarino_Team2025.webp"
                      alt="RUMarino Team at Outreach Event"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      data-ai-hint="robotics team group photo"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="relative p-8 md:p-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-headline text-3xl md:text-4xl text-white tracking-wide">
                        THE RUMARINO FAMILY
                      </h3>
                      <div className="flex items-center gap-2 text-[#51DFC9] group-hover:text-[#1FB355] transition-colors duration-300">
                        <span className="font-roboto font-bold">Meet Us</span>
                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                    <p className="font-roboto text-lg text-gray-400 max-w-3xl leading-relaxed">
                      From software engineers to mechanical designers, electrical experts to project managers - our multidisciplinary team combines diverse skills to tackle complex underwater challenges.
                    </p>
                    
                    {/* Team Structure Preview */}

                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* TDR Section */}
        <section id="tdr" className="bg-gradient-to-b from-black to-[#171919] py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* Icon */}
              <div className="inline-block mb-8">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00A68C]/20 to-[#51DFC9]/20 rounded-full blur-xl"></div>
                  {/* <div className="relative bg-gradient-to-r from-[#00A68C] to-[#51DFC9] p-5 rounded-2xl shadow-2xl">
                    <Award className="h-12 w-12 text-white" />
                  </div> */}
                </div>
              </div>
              
              {/* Title */}
              <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-8">
                <span className="bg-gradient-to-r from-white via-[#51DFC9] to-[#00A68C] bg-clip-text text-transparent">
                  DIVE DEEPER INTO OUR TECHNOLOGY
                </span>
              </h2>
              
              {/* Description */}
              <p className="font-roboto text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Explore the intricate details of our AUV's design, systems, and competition strategy in our comprehensive 
                Technical Design Report for the RoboSub 2025 competition.
              </p>
              
              {/* Stats */}
              {/* <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                {[
                  { label: "Pages", value: "80+", color: "text-[#00A68C]" },
                  { label: "Diagrams", value: "50+", color: "text-[#51DFC9]" },
                  { label: "Systems", value: "12+", color: "text-[#1FB355]" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                    <div className={`font-headline text-3xl ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="font-roboto text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div> */}
              
              {/* CTA Button */}
              <Button asChild size="default" className="group">
                <a 
				  href="/documents/TDR_UPRM_RUMarino_RS2025.pdf" 
                  download="RUMarino-TDR-2025.pdf"
                  className="gap-4 font-roboto font-bold bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#00A68C] hover:to-[#1FB355] text-white px-10 py-8 rounded-xl shadow-2xl hover:shadow-[#00A68C]/30 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                >
                  <Download className="h-6 w-6" />
                  <span>Download Technical Design Report 2025</span>
                </a>
              </Button>
              
              {/* Footnote */}
              <p className="font-roboto text-gray-500 mt-8 text-sm">
                Comprehensive documentation of our engineering approach and competition strategy
              </p>
            </div>
          </div>
        </section>

        {/* Join the Team CTA Section */}
        <section className="w-full bg-[#171919] py-24 md:py-32 border-t border-[#00A68C]/20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Badge amigable */}
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#51DFC9]/30 bg-[#51DFC9]/10 text-[#51DFC9] font-roboto text-sm font-bold tracking-wider uppercase">
                Be part of the innovation
              </div>

              <h3 className="font-headline text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                READY TO MAKE A <span className="bg-gradient-to-r from-[#1FB355] to-[#51DFC9] bg-clip-text text-transparent">SPLASH</span> WITH US?
              </h3>
              
              <p className="font-roboto text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you are into coding, mechanical design, or project management, there is a place for you in the RUMarino family. Let's build the future of underwater robotics together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="group">
                  <Link 
                    href="/join" 
                    className="gap-4 font-roboto font-bold bg-gradient-to-r from-[#00A68C] to-[#51DFC9] hover:from-[#51DFC9] hover:to-[#00A68C] text-white px-8 py-7 rounded-2xl shadow-xl hover:shadow-[#00A68C]/40 transition-all duration-300 transform hover:-translate-y-1 text-lg"
                  >
                    <span>Apply to Join 2025 Squad</span>
                    <Users className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
              
              <p className="mt-10 text-gray-500 font-roboto italic">
                Open to all majors at UPRM — No prior experience required.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}