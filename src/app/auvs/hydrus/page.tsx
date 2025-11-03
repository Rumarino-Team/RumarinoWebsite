
import { Separator } from "@/components/ui/separator";
import { Cog, CircuitBoard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HydrusPage() {
    return (
        <div className="bg-background">
            <div className="container mx-auto px-4 py-16">
                <header className="text-center mb-12">
                    <h1 className="font-headline text-5xl md:text-6xl font-bold">Hydrus</h1>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
                        Our latest generation Autonomous Underwater Vehicle, engineered for excellence in the RoboSub competition.
                    </p>
                </header>

                <section className="mb-16">
                    <div className="aspect-video relative">
                        <Image
                            src="/hydrus.webp"
                            alt="Hydrus AUV"
                            fill
                            className="object-cover"
                            data-ai-hint="underwater robot vehicle"
                        />
                    </div>
                </section>

                <Separator className="my-8" />

                <section id="mechanical" className="py-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="font-headline text-3xl font-bold mb-4">Mechanical Design</h2>
                            <p className="text-muted-foreground">
                                Hydrus&apos;s main hull is composed of a central aluminum cabin, which serves as the main hub for connections and wiring, and two acrylic cabins on either side for storing electrical components. This dual-hull design is complemented by a mechanical claw for object manipulation and a forward-facing ZED 2i camera housed in its own acrylic cabin, capable of 180° movement to enhance visibility. A torpedo launching system is also integrated into the design.
                            </p>
                        </div>
                        <div className="aspect-video relative">
                            <Image
                                src="/hydrus_model1.webp"
                                alt="Hydrus Mechanical Model"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </section>

                <Separator className="my-8" />

                <section id="electrical" className="py-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="aspect-video relative order-last md:order-first">
                            <Image
                                src="/electrical.webp"
                                alt="Hydrus Electrical System"
                                fill
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="md:text-right">
                            <h2 className="font-headline text-3xl font-bold mb-4">Electrical Systems</h2>
                            <p className="text-muted-foreground">
                                The power system on Hydrus operates on two voltage phases, 22V and 12V, supplied by a 22.8V, 23,000mAh battery. A central, custom-designed PCB distributes power, with a ZK-12KX voltage regulator stepping down voltage for the 12V phase. To protect critical components like thrusters and micro-computers, the system incorporates a network of fuses and relays. The PCB was specifically redesigned to accommodate the integration of the gripper and torpedo systems.
                            </p>
                        </div>
                    </div>
                </section>

                <Separator className="my-8" />

                <section id="software" className="py-8">
                    <Link href="https://github.com/Rumarino-Team/hydrus-software-stack" target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src="/github_screenshot.webp"
                                alt="RUMarino GitHub Repository"
                                fill
                                className="object-cover transition-transform group-hover:scale-105"
                                data-ai-hint="github repository screenshot"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity">Explore on GitHub</span>
                            </div>
                        </div>
                    </Link>

                    <div className="max-w-4xl mx-auto mt-8">
                        <h2 className="font-headline text-3xl font-bold mb-4">Software Architecture</h2>
                        <p className="text-muted-foreground">
                            Hydrus is powered by a sophisticated software stack running on ROS (Robot Operating System). Our custom computer vision, state estimation, and path planning algorithms enable fully autonomous operation in complex underwater environments.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
