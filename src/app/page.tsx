"use client"; 

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
  <style jsx global>{`
  @import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;700&display=swap');
  
  .font-anton {
    font-family: 'Anton', sans-serif;
  }
  .font-roboto {
    font-family: 'Roboto', sans-serif;
  }
`}</style>
  <div className="flex flex-col">
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
          poster="auv_cartoon.webp"
        >
          <source src="/hydrus-proteus-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-left px-8 md:px-16 lg:px-24">
        <div className="flex flex-col">
          <p className="font-anton text-2xl md:text-4xl tracking-widest text-primary-foreground/90 uppercase">
            Welcome to
          </p>
          <h1 className="font-anton text-7xl md:text-9xl lg:text-[10rem] tracking-wider drop-shadow-lg animate-fade-in-down self-center">
            <span style={{ color: '#1FB355' }}>RUM</span>
            <span style={{ color: '#51DFC9' }}>ARINO</span>
          </h1>
          <p className="font-anton mt-4 text-xl md:text-2xl tracking-widest max-w-2xl text-primary-foreground/80 uppercase self-end">
            We own the depths
          </p>
          </div>
        </div>
      </section>

      <section id="technology" className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 
              className="font-anton text-3xl font-bold md:text-5xl"
              style={{ color: '#00A68C' }}
            >
              Explore Our Technology
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Dive into the technical specifications of our advanced autonomous underwater vehicle.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Link href="/auvs" className="group block">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <div className="relative aspect-video">
                  <Image
                    src="/hydrus_photo_1.webp"
                    alt="Hydrus AUV in Water"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    data-ai-hint="underwater robot vehicle"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-anton">Explore Hydrus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-roboto text-muted-foreground">Dive into the technical specifications of our advanced AUV.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="w-full bg-card py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the talented students and mentors driving our mission forward.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Link href="/team" className="group block">
              <Card className="overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
                <div className="relative aspect-video">
                  <Image
                    src="/team.webp"
                    alt="RUMarino Team at Outreach Event"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    data-ai-hint="robotics team group photo"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Meet the Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Discover the talented students and mentors driving our mission forward.</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section id="tdr" className="bg-card py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold md:text-4xl mb-4">
            Dive Deeper into Our Technology
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground">
            Explore the intricate details of our AUV's design, systems, and strategy in our comprehensive Technical Design Report for the RoboSub 2025 competition.
          </p>
          <Button asChild size="lg" className="px-10 py-8 text-lg font-bold shadow-lg transition-shadow hover:shadow-primary/40">
            <a href="/TDR.pdf" download="RUMarino-TDR-2025.pdf">
              <Download className="mr-3 h-6 w-6" />
              Download Technical Design Report
            </a>
          </Button>
        </div>
      </section>
    </div>
    </>
  );
}
