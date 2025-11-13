import Link from 'next/link';
import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { Logo } from './logo';
import Image from 'next/image';
import { TiktokIcon } from './ui/TiktokIcon'; 

const sponsors = [
  { name: 'Logo Boeing', logoUrl: '/Logo Boeing.png', hint: 'sponsor logo', websiteUrl: 'https://www.boeing.com/' },
  { name: 'Logo Colegio', logoUrl: '/Logo Colegio (1).png', hint: 'sponsor logo', websiteUrl: 'https://www.uprm.edu/portales/en/' },
  { name: 'Logo GM', logoUrl: '/GM_LOGO1.jpg', hint: 'sponsor logo', websiteUrl: 'https://www.gm.com/',size: 'xlarge' },
  { name: 'Logo LM', logoUrl: '/Logo LM.png', hint: 'sponsor logo', websiteUrl: 'https://www.lockheedmartin.com/en-us/index.html/' },
  { name: 'Logo navsea', logoUrl: '/Logo navsea.jpg', hint: 'sponsor logo', websiteUrl: 'https://www.navsea.navy.mil/' },
  { name: 'Logo L3HARRIS', logoUrl: '/L3HARRIS1.jpg', hint: 'sponsor logo', websiteUrl: 'https://www.l3harris.com/' },
];

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/RUMARINO LOGO_BLACK_crop.png"
                alt="RUMarino"
                width={100}
                height={100}
                className="object-contain"
              />
            </Link>
            <p className="text-muted-foreground">
              Advancing autonomous underwater systems for a brighter, bluer future.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/company/rumarino" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin className="size-7" />
              </Link>
              <Link href="https://www.instagram.com/rumarino_hydrus" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="size-7" />
              </Link>
              <Link href="https://www.tiktok.com/@rumarino" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <TiktokIcon className="size-7" />
              </Link>
              <Link href="https://m.facebook.com/UPRMRUMarino/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Facebook className="size-7" />
              </Link>
              <Link href="https://x.com/RUMarino_pr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Twitter className="size-7" />
              </Link>
              <Link href="https://www.youtube.com/@rumarinohydrus6665" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube className="size-7" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/team" className="text-muted-foreground hover:text-accent transition-colors">Team</Link></li>
              <li><Link href="/competition" className="text-muted-foreground hover:text-accent transition-colors">Competition</Link></li>
              <li><Link href="/auvs" className="text-muted-foreground hover:text-accent transition-colors">Our AUVs</Link></li>
              <li><Link href="/activities" className="text-muted-foreground hover:text-accent transition-colors">Activities</Link></li>
              <li><Link href="/#tdr" className="text-muted-foreground hover:text-accent transition-colors">Download TDR</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0 text-accent" />
                <a href="mailto:rumarino.uprm@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">rumarino.uprm@gmail.com</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Our Sponsors</h3>
            <div className="grid grid-cols-2 gap-4">
              {sponsors.map((sponsor) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <div className="relative h-12 w-full">
                    <Image
                      src={sponsor.logoUrl}
                      alt={sponsor.name}
                      fill
                      className="object-contain"
                      data-ai-hint={sponsor.hint}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} RUMarino Robotics Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;