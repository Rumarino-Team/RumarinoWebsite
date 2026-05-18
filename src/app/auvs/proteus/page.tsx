"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"; 

export default function ProteusPage() {
  const v3Images = [
  "/auv/proteus_v3.webp",
  "/auv/proteus_v3_1.webp",
  "/auv/proteus_v3_2.webp",
  "/auv/proteus_v3_3.webp",
  ];
  const v2Images = [
  "/auv/proteus_v2.webp",
  "/auv/proteus_v2_1.webp",
  "/auv/proteus_v2_2.webp",
  "/auv/proteus_v2_3.webp",
  "/auv/proteus_v2_4.webp",
  "/auv/proteus_v2_5.webp",
  ];
  const v1Images = [
  "/auv/proteus_v1.webp",
  "/auv/proteus_v1_1.webp",
  "/auv/proteus_v1_2.webp",
  "/auv/proteus_v1_3.webp",
  ];
  const betaImages = [
  "/auv/proteus_beta.webp",
  "/auv/proteus_beta_1.webp",
  "/auv/proteus_beta_2.webp",
  "/auv/proteus_beta_3.webp",
  "/auv/proteus_beta_4.webp",
  "/auv/proteus_beta_5.webp",
  ];

  return (
    <div className="w-full min-h-screen bg-black text-[#51DFC9] px-4 py-16">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-8">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#1FB355] via-[#51DFC9] to-white bg-clip-text text-transparent">
            Proteus
            </span>
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white">
            Our first autonomous underwater vehicle, and the first in Puerto Rico
            and the Caribbean. Proteus is aimed to help students learn about
            autonomy and all the systems that go in to building an autonomous
            vehicle.
          </p>
        </header>

        <section className="mb-8">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video relative">
              <Image
				src="/auv/proteus_cover.webp"
                alt="Proteus AUV"
                fill
                className="object-cover rounded-lg"
                data-ai-hint="underwater robot vehicle"
              />
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-[#51DFC9]" />

        {/* Section V3.0 */}
        <section id="v3" className="py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">
                Proteus V3.0
              </h2>
              <p className="text-white">
                Proteus 3.0 is our latest model for the 2018 Robosub competition.
                Our new cabin for battery allocation, the modified mechanical
                structure and our new software architecture allows for this AUV
                to be more robust, modular and reliable.
              </p>
              <p className="text-white mt-4">
                <strong>New components:</strong>
              </p>
              <ul className="list-disc list-inside text-white mt-2">
                <li>Arduino Due A000062</li>
                <li>New water proof sub cabin</li>
                <li>3D printed components</li>
                <li>VectorNav VN-100 Rugged IMU</li>
                <li>PCB circuitry</li>
              </ul>
            </div>
            <div className="relative">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: true,
                  }),
                ]}
                opts={{
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {v3Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="aspect-video relative">
                          <Image
                            src={src}
                            alt={`Proteus V3.0 Model ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-black/50 text-white hover:bg-black/75" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-black/50 text-white hover:bg-black/75" />
              </Carousel>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-[#51DFC9]" />

        {/* Section V2.0 */}
        <section id="v2" className="py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: true,
                  }),
                ]}
                opts={{
                  loop: true,
                }}
                className="w-full order-last md:order-first"
              >
                <CarouselContent>
                  {v2Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="aspect-video relative">
                          <Image
                            src={src}
                            alt={`Proteus V2.0 Model ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-black/50 text-white hover:bg-black/75" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-black/50 text-white hover:bg-black/75" />
              </Carousel>
            </div>
            <div className="md:text-left">
              <h2 className="font-headline text-3xl font-bold mb-4">
                Proteus V2.0
              </h2>
              <p className="text-white">
                Proteus 2.0 was our model for the 2017 Robosub competition. Its
                new cabin and embedded systems allowed this AUV to be more
                stable when completing the task at hand, and doing so with a
                better response time due to its bigger processing power.
              </p>
              <p className="text-white mt-4">
                <strong>Some of the new components:</strong>
              </p>
              <ul className="list-disc list-inside text-white mt-2">
                <li>NVIDIA Jetson Tx1</li>
                <li>MSP430 5529 (2)</li>
                <li>New water proof main cabin</li>
                <li>Slim aluminum 4020 structure</li>
                <li>Innovative internal cooling system</li>
                <li>3D printed camera mounts</li>
                <li>Power kill switch</li>
                <li>More efficient wiring</li>
                <li>Lighter weight (~50lbs)</li>
                <li>PCB circuitry</li>
                <li>Better Power Distribution</li>
              </ul>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-[#51DFC9]" />

        {/* Section V1.0 */}
        <section id="v1" className="py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold mb-4">
                Proteus V1.0
              </h2>
              <p className="text-white">
                Proteus 1.0 was our first main prototype. After multiple ideas
                and hard work our heavy weight AUV was created. With an
                estimate weight of 90lbs is our biggest model yet. With low
                processing capabilities there was still room to grow.
              </p>
              <p className="text-white mt-4">
                <strong>Components:</strong>
              </p>
              <ul className="list-disc list-inside text-white mt-2">
                <li>Pelican Case Main Cabin</li>
                <li>Aluminum 4020 structure</li>
                <li>Blue Robotics thrusters (6)</li>
                <li>Raspberry Pi 3 Model B</li>
                <li>Arduino Mega</li>
                <li>Front-facing Camera (1)</li>
              </ul>
            </div>
            <div className="relative">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: true,
                  }),
                ]}
                opts={{
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {v1Images.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="aspect-video relative">
                          <Image
                            src={src}
                            alt={`Proteus V1.0 Model ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-black/50 text-white hover:bg-black/75" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-black/50 text-white hover:bg-black/75" />
              </Carousel>
            </div>
          </div>
        </section>

        <Separator className="my-8 bg-[#51DFC9]" />

        {/* Section BETA */}
        <section id="beta" className="py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <Carousel
                plugins={[
                  Autoplay({
                    delay: 3000,
                    stopOnMouseEnter: true,
                    stopOnInteraction: true,
                  }),
                ]}
                opts={{
                  loop: true,
                }}
                className="w-full order-last md:order-first"
              >
                <CarouselContent>
                  {betaImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="aspect-video relative">
                          <Image
                            src={src}
                            alt={`Proteus BETA Model ${index + 1}`}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 z-10 bg-black/50 text-white hover:bg-black/75" />
                <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 z-10 bg-black/50 text-white hover:bg-black/75" />
              </Carousel>
            </div>
            <div className="md:text-left">
              <h2 className="font-headline text-3xl font-bold mb-4">
                Proteus BETA
              </h2>
              <p className="text-white">
                Proteus Beta was our research and development model. Started
                with some PVC structure before moving to a simple aluminum 4020
                version. With a big pelican case as its main cabin and only 4
                thrusters, our project began.
              </p>
              <p className="text-white mt-4">
                <strong>Initial Components:</strong>
              </p>
              <ul className="list-disc list-inside text-white mt-2">
                <li>PVC/Aluminum 4020 structure</li>
                <li>Pelican Case Main Cabin</li>
                <li>Blue Robotics thrusters (4)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
