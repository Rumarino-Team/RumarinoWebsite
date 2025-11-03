'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Search, PlayCircle } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';

type GalleryItem = {
  src: string;
  hint: string;
  type: 'image' | 'video';
  thumbnail?: string; // Optional thumbnail for videos
};

type Activity = {
  title: string;
  description: string;
  events: {
    name: string;
    gallery: GalleryItem[];
  }[];
};

const activities: Activity[] = [
  {
    title: 'Community Outreach',
    description:
      'We believe in sharing our passion for robotics. We regularly visit local schools and community centers to demonstrate our AUV and inspire the next generation of engineers.',
    events: [
      {
        name: 'School Outreach',
        gallery: [
          {
            src: '/outreach_1.webp',
            hint: 'school outreach event',
            type: 'image',
          },
          {
            src: '/outreach_2.webp',
            hint: 'school outreach event',
            type: 'image',
          },
          {
            src: '/outreach_3.webp',
            hint: 'school outreach event',
            type: 'image',
          },
          {
            src: '/outreach_4.webp',
            hint: 'school outreach event',
            type: 'image',
          },
          {
            src: '/outreach_5.webp',
            hint: 'school outreach event',
            type: 'image',
          },
          {
            src: '/outreach_9.webp',
            hint: 'school outreach event',
            type: 'image',
          },
          {
            src: '/outreach_10.webp',
            hint: 'school outreach event',
            type: 'image',
          },
        ] as GalleryItem[],
      },
      {
        name: 'IAP',
        gallery: [
          {
            src: '/outreach_6.webp',
            hint: 'iap students with AUV',
            type: 'image',
          },
          {
            src: '/outreach_7.webp',
            hint: 'iap students with AUV',
            type: 'image',
          },
          {
            src: '/outreach_8.webp',
            hint: 'iap students with AUV',
            type: 'image',
          },
          {
            src: '/outreach_11.webp',
            hint: 'iap students with AUV',
            type: 'image',
          },
        ] as GalleryItem[],
      },
    ],
  },
  {
    title: 'Fundraising Events',
    description:
      "To support our project, we host a variety of fundraising events. Our pickleball tournaments are a great way to bond as a team and engage with the community, while our weekly pizza sales fuel our late-night build sessions and our budget. Every Friday, we sell delicious pizza on campus!",
    events: [
      {
        name: 'Pickleball Tournament',
        gallery: [
          { src: '/pickleball_1.webp', hint: 'pickleball tournament sport', type: 'image' },
          { src: '/pickleball_2.webp', hint: 'team playing pickleball', type: 'image' },
          { src: '/pickleball_3.webp', hint: 'community event fundraiser', type: 'image' },
          { src: '/pickleball_4.webp', hint: 'pickleball action shot', type: 'image' },
          { src: '/pickleball_5.webp', hint: 'team bonding pickleball', type: 'image' },
        ] as GalleryItem[],
      },
      {
        name: 'Pizza Sales',
        gallery: [
          { src: '/pizza_sale_1.webp', hint: 'pizza food sales', type: 'image' },
          { src: '/pizza_sale_2.webp', hint: 'pizza sale event', type: 'image' },
          { src: '/pizza_sale_3.webp', hint: 'students enjoying pizza', type: 'image' },
        ] as GalleryItem[],
      },
      {
        name: 'Billiards',
        gallery: [
          { src: '/billar_1.webp', hint: 'students playing billiards', type: 'image' },
          { src: '/billiar_2.webp', hint: 'team enjoying billiards', type: 'image' },
        ] as GalleryItem[],
      },
    ],
  },
];

export default function ActivitiesPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            Team Activities
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
            Beyond the workshop, our team is active in fundraising and community
            engagement. Here's a look at what we do.
          </p>
        </div>

        <div className="space-y-16">
          {activities.map((activity, index) => (
            <React.Fragment key={activity.title}>
              <section>
                <div className="max-w-4xl mx-auto mb-8">
                  <h2 className="font-headline text-3xl font-bold mb-8 pt-4">{activity.title}</h2>
                  <p className="text-muted-foreground">
                    {activity.description}
                  </p>
                </div>
                <div className="space-y-10">
                  {activity.events.map((event) => (
                    <div key={event.name}>
                      <h3 className="font-headline text-xl font-semibold mb-4 pt-4 text-center">{event.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {event.gallery.map((item, idx) => (
                          <div
                            key={idx}
                            className="relative aspect-video rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-shadow"
                            onClick={() => setSelectedItem(item)}
                          >
                            <Image
                              src={item.type === 'video' ? item.thumbnail || 'https://placehold.co/600x400.png' : item.src}
                              alt={`${event.name} gallery item ${idx + 1}`}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={item.hint}
                            />
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
                  ))}
                </div>
              </section>
              {index < activities.length - 1 && <Separator className="my-16" />}
            </React.Fragment>
          ))}
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
                  alt="Expanded activity photo"
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
