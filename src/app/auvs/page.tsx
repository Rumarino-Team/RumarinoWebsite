
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const auvs = [
  {
    name: 'Hydrus',
    description: 'Our latest-generation AUV, designed for advanced autonomous tasks in the RoboSub competition.',
    imageUrl: '/hydrus.webp',
    pageUrl: '/auvs/hydrus',
  },
  {
    name: 'Proteus',
    description: 'Our legacy AUV, a robust platform that has served as the foundation for our current designs.',
    imageUrl: '/proteus_cover.webp',
    pageUrl: '/auvs/proteus',
  },
];

export default function AUVsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <header className="text-center mb-12">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">Our AUVs</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          Explore the evolution of our autonomous underwater vehicles, from the legacy Proteus to the state-of-the-art Hydrus.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {auvs.map((auv) => (
          <Card key={auv.name} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="aspect-video relative">
                <Image
                  src={auv.imageUrl}
                  alt={auv.name}
                  fill
                  className="object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline text-2xl font-bold">{auv.name}</CardTitle>
              <CardDescription className="mt-2 text-muted-foreground">
                {auv.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Link href={auv.pageUrl} className="w-full">
                <Button className="w-full">Learn More</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
