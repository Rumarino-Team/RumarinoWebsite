import { notFound } from 'next/navigation';
import { getDivisionBySlug } from '@/lib/team-data';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ChevronLeft, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

type DivisionDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function DivisionDetailPage({ params }: DivisionDetailPageProps) {
  const division = getDivisionBySlug(params.slug);

  if (!division) {
    notFound();
  }

  const { name, description, divisionImage, divisionImageHint, members } = division;

  return (
    <div className="bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link href="/team" className="inline-flex items-center gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span>All Divisions</span>
            </Link>
          </Button>
        </div>

        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">{name}</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto text-muted-foreground whitespace-pre-line">{description}</p>
        </header>

        <section className="mb-16">
            <Card className="overflow-hidden">
                <Image
                    src={divisionImage}
                    alt={`${name} division photo`}
                    width={1200}
                    height={600}
                    className="w-full object-cover"
                    data-ai-hint={divisionImageHint}
                />
            </Card>
        </section>

        <section>
          <h2 className="font-headline text-3xl font-bold text-center mb-10">Division Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {members.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden transition-shadow hover:shadow-lg flex flex-col">
                <div className="aspect-square bg-muted">
                    <Image
                        src={member.photoUrl}
                        alt={`Photo of ${member.name}`}
 width={400}

                        height={400}
                        className="w-full h-full object-cover"
 style={{
 transform: `rotate(${member.rotation || 0}deg)`,
                    }}
                        data-ai-hint={member.hint}
                    />
                </div>
                <CardContent className="p-4 flex flex-col flex-grow">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="font-bold text-sm text-muted-foreground">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.major}</p>
                  <Badge variant="secondary" className="mt-2">
                    {/^\d/.test(member.year) ? `${member.year} year` : member.year}
                  </Badge>
                  <div className="mt-auto pt-4 flex justify-center gap-4">
                    {member.linkedinUrl && (
                      <Link href={member.linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label={`${member.name}'s LinkedIn Profile`}>
                        <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                      </Link>
                    )}
                     {member.email && (
                      <Link href={member.email} aria-label={`Email ${member.name}`}>
                        <Mail className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { divisions } = await import('@/lib/team-data');
  return divisions.map((division) => ({
    slug: division.slug,
  }));
}
