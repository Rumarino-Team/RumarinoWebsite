'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FileText, Trophy, Video, Camera, Search, PlayCircle, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

type GalleryItem = {
  src: string;
  hint: string;
  type: 'image' | 'video';
  thumbnail?: string;
};

type CompetitionTeamMember = {
  name: string;
  photoUrl: string;
  hint: string;
  description: string;
};

const gallery2024: GalleryItem[] = [
  {
    src: '/robosub_2024_1.mp4',
    hint: 'RoboSub 2024 recap video',
    type: 'video',
  },
  {
    src: '/robosub_2024_2.jpg',
    hint: 'underwater robot action',
    type: 'image',
  },
  {
    src: '/robosub_2024_3.mp4',
    hint: 'team working robot',
    type: 'video',
  },
  {
    src: '/robosub_2024_4.jpg',
    hint: 'team celebrating success',
    type: 'image',
  },
  {
    src: '/robosub_2024_5.jpg',
    hint: 'team at competition',
    type: 'image',
  },
  {
    src: '/robosub_2024_6.jpg',
    hint: 'robot performing tasks',
    type: 'image',
  },
  {
    src: '/robosub_2024_7.jpg',
    hint: 'team strategizing',
    type: 'image',
  },
  {
    src: '/robosub_2024_8.jpg',
    hint: 'robot in action',
    type: 'image',
  },
  {
    src: '/robosub_2024_9.jpg',
    hint: 'team celebrating success',
    type: 'image',
  },
  {
    src: '/robosub_2024_10.mp4',
    hint: 'team celebrating victory',
    type: 'video',
  },
  {
    src: '/robosub_2024_11.jpg',
    hint: 'team celebrating victory',
    type: 'image',
  },
  {
    src: '/robosub_2024_12.mp4',
    hint: 'team celebrating victory',
    type: 'video',
  }
];

const competitionTeam2024: CompetitionTeamMember[] = [
  {
    name: 'Cesar Ruíz',
    photoUrl: '/cesar.jpg',
    hint: 'team member at competition',
    description: 'Led the software team, troubleshooting navigation and computer vision algorithms on-site.'
  },
  {
    name: 'David A. Torres',
    photoUrl: '/david.jpg',
    hint: 'team member working on robot',
    description: 'Oversaw all mechanical adjustments and repairs, ensuring the AUV was physically ready for each run.'
  },
  {
    name: 'Victor O. Riefkohl',
    photoUrl: '/victor.jpg',
    hint: 'team member with electronics',
    description: 'Managed the electrical systems, from battery management to sensor connectivity.'
  },
  {
    name: 'Analía Díaz',
    photoUrl: '/Analia.jpg',
    hint: 'team lead at competition',
    description: 'Coordinated team strategy and served as the primary liaison with competition judges and staff.'
  },
  {
    name: 'Ricardo G. Perez',
    photoUrl: '/ricardo.jpg',
    hint: 'team member at poolside',
    description: 'Assisted with mechanical systems and was the primary operator for vehicle deployment and retrieval.'
  }
];


export default function CompetitionPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <div className="inline-block bg-accent/10 text-accent p-4 rounded-full mb-4">
              <Trophy className="h-10 w-10" />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold">Competition Journey</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              Following our path through the annual RoboSub competition.
            </p>
          </div>

          {/* RoboSub 2025 Section */}
          <section id="robosub2025" className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">RoboSub 2025</h2>
            <p className="text-muted-foreground pt-2 mb-6">Our focus for the current season.</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl mb-2">Our Strategy</h3>
                <p className="text-muted-foreground max-w-4xl">
                  This year, our strategy revolves around enhancing our AUV's perception and decision-making capabilities. We are implementing a new multi-sensor fusion algorithm and a more robust mission planner to tackle the complex tasks of RoboSub 2025. Our mechanical design features a modular system for quick adjustments and repairs during the competition.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="#">
                    <Video className="mr-2 h-5 w-5" />
                    Team Video 2025
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/TDR.pdf" download="Rumarino-TDR-2025.pdf">
                    <FileText className="mr-2 h-5 w-5" />
                    Download TDR
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <Separator className="my-16" />

          {/* RoboSub 2024 Section */}
          <section id="robosub2024" className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">RoboSub 2024</h2>
            <p className="text-muted-foreground pt-2 mb-8">A look back at our performance last year.</p>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg mb-8">
              <Image src="https://i.ytimg.com/vi/zGQymhIOxDs/maxresdefault.jpg" alt="RoboSub 2024 Team" fill className="object-cover" />
            </div>

            <div className="space-y-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="https://youtu.be/y6nqtV1PWOk?si=bdfysJTYZi3fS1du" target="_blank">
                    <Video className="mr-2 h-5 w-5" />
                    Watch 2024 Recap
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/RUMarino TDR 2024.pdf">
                    <FileText className="mr-2 h-5 w-5" />
                    View 2024 TDR
                  </Link>
                </Button>
              </div>

              <div>
                <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3"><Users className="h-6 w-6 text-accent" />Our 2024 Competition Squad</h3>
                <p className="text-muted-foreground mb-8 max-w-4xl">
                  Meet the dedicated members who represented RUMarino at RoboSub 2024. Their hard work and collaboration on-site were key to our performance. Below is a look at who was there and the crucial roles they played during the intense competition week.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
                  {competitionTeam2024.map((member) => (
                    <div key={member.name} className="text-center flex flex-col items-center">
                      <div className="relative w-32 h-32 md:w-36 md:h-36 mb-4">
                        <Image
                          src={member.photoUrl}
                          alt={`Photo of ${member.name}`}
                          fill
                          className="object-cover rounded-full shadow-md"
                          data-ai-hint={member.hint}
                        />
                      </div>
                      <h4 className="font-semibold text-base">{member.name}</h4>
                      <p className="text-xs text-muted-foreground">{member.description}</p>
                    </div>
                  ))}
                </div>
              </div>


              <div>
                <h3 className="font-headline text-2xl font-bold mb-4 flex items-center gap-3"><Camera className="h-6 w-6 text-accent" />Competition Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {gallery2024.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                      onClick={() => setSelectedItem(item)}
                    >
                      {item.type === 'video' ? (
                        <video
                          src={item.src}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                      ) : (
                        <Image
                          src={item.src}
                          alt={`RoboSub 2024 gallery item ${idx + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={item.hint}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        {item.type === 'video' ? (
                          <PlayCircle className="h-12 w-12 text-white" />
                        ) : (
                          <Search className="h-10 w-10 text-white" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <Separator className="my-16" />

          {/* Previous Competitions */}
          <div className="text-center text-muted-foreground">
            <p>Previous competition history coming soon as we continue to document our journey.</p>
          </div>

        </div>
      </div>
      <Dialog
        open={!!selectedItem}
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            setSelectedItem(null);
          }
        }}
      >
        <DialogContent className="max-w-5xl w-full p-0 border-0 bg-transparent shadow-none">
          <DialogHeader className="sr-only">
            <DialogTitle>Expanded Media View</DialogTitle>
          </DialogHeader>
          {selectedItem && (
            <>
              {selectedItem.type === 'image' ? (
                <Image
                  src={selectedItem.src.replace(/(\d+x\d+)/, '1200x800')}
                  alt="Expanded competition media"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain rounded-lg"
                  data-ai-hint={selectedItem.hint}
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
