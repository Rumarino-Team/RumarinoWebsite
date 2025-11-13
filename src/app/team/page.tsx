import { Separator } from "@/components/ui/separator";
import { divisions } from "@/lib/team-data";
import { ArrowRight } from "lucide-react";
import Link from 'next/link';
import Image from "next/image";
import React from "react";

export default function TeamPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Meet the RUMarino Team</h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground">
              We are a collective of innovators, engineers, and strategists united by a single mission: to conquer the challenges of underwater robotics. Discover the specialized sub-divisions that form the backbone of RUMarino.
            </p>
        </div>

        <div className="space-y-16">
          {divisions.map((division, index) => (
            <React.Fragment key={division.slug}>
              <Link href={`/team/${division.slug}`} className="group block">
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
                  <div>
                    <h2 className="font-headline text-3xl font-bold mb-4">{division.name}</h2>
                    <p className="text-muted-foreground mb-6 flex-grow">{division.description}</p>
                    <div className="font-semibold text-accent flex items-center gap-2 group-hover:gap-3 transition-all">
                      <span>View Members</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden order-first md:order-last">
                    <Image
                      src={division.divisionImage}
                      alt={`${division.name} division photo`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      data-ai-hint={division.divisionImageHint}
                    />
                  </div>
                </section>
              </Link>
              {index < divisions.length - 1 && <Separator className="my-16" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
