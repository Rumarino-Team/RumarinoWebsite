import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-[80vh] min-h-[600px] w-full flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-full h-full min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 z-0"
          poster="hydrus.jpeg"
        >
          {/* Placeholder video, replace with an actual underwater video */}
          <source src="/movie_30mb_downsize.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center p-4">
          <div className="flex justify-center items-center mb-4">
            <Image
              src="/logo_og.png"
              alt="RUMARINO Logo"
              width={480}
              height={480}
              className="mx-auto w-72 md:w-[28rem] lg:w-[32rem] h-auto drop-shadow-lg animate-fade-in-down"
              priority
            />
          </div>
          <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto text-primary-foreground/90">
            We are the first group of college students in the Caribbean to create an autonomous underwater vehicle (AUV) that is competing in the RoboSub competition.
          </p>
        </div>
      </section>

      <section id="technology" className="w-full bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-accent md:text-5xl">
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
                    src="/hydrus_photo_1.jpeg"
                    alt="Hydrus AUV in Water"
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    data-ai-hint="underwater robot vehicle"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Explore Hydrus</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Dive into the technical specifications of our advanced AUV.</p>
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
                    src="/team.jpg"
                    alt="Rumarino Team at Outreach Event"
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
            <a href="/TDR.pdf" download="Rumarino-TDR-2025.pdf">
              <Download className="mr-3 h-6 w-6" />
              Download Technical Design Report
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
