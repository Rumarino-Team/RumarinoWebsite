export type TeamMember = {
  name: string;
  position: string;
  photoUrl: string;
  year: string;
  major: string;
  hint?: string;
  linkedinUrl?: string;
  email?: string;
  rotation?: number;
};

export type Team = {
  name: string;
  slug: string;
  description: string;
  teamImage: string;
  teamImageHint: string;
  members: TeamMember[];
};

export const teams: Team[] = [
  {
    name: 'Management',
    slug: 'management',
    description: 'The Management Team oversees the strategic direction and operations of RUMarino.',
    teamImage: '/managment_team.webp',
    teamImageHint: 'Photo of the management team',
    members: [
      { name: 'Analía Díaz', photoUrl: '/Analia.webp', hint: 'professional headshot', year: '4th',position: "Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:analia.diaz@upr.edu', rotation: 90 },
      { name: 'Mariela A. Rivera', photoUrl: '/Mariela.webp', hint: 'professional headshot', year: '5th',position: "Member", major: 'Civil Engineering', linkedinUrl: '#', email: 'mailto:brenda.s@example.com', rotation: -90 },
      { name: 'Luis E Colón', photoUrl: '/Luis.webp', hint: 'professional headshot', year: '4th',position: "Member", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:charles.b@example.com', rotation: -90 },
      { name: 'Héctor Quiñones', photoUrl: '/Hector.webp', hint: 'student headshot', year: '4th',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:hector.quinones18@upr.edu', rotation: -90 },
      { name: 'Yeniel M. Resto', photoUrl: '/Yeniel.webp', hint: 'student headshot', year: '5th',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:yeniel.resto@upr.edu', rotation: -90 },
    ],
  },
  {
    name: 'Computer Systems',
    slug: 'computer-systems',
    description: 'The Computer Systems team is the brain of our AUV. They develop the software for navigation, sensor integration, and autonomous decision-making, bringing Hydrus to life through code.',
    teamImage: '/computer_system_team.webp',
    teamImageHint: 'students coding computer lab',
    members: [
      { name: 'Cesar Ruíz', photoUrl: '/cesar.webp', hint: 'student headshot', year: '4th',position: "Captain & Computer Vision Lead", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:cesar.ruiz6@upr.edu', rotation: -90 },
      { name: 'Edyan A. Cruz', photoUrl: '/Edyan.webp', hint: 'student headshot', year: '4th',position: "Software Architecture & Simulations Lead", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:edyan.cruz@upr.edu', rotation: -90 },
      { name: 'Diego Quiñones', photoUrl: '/Diego.webp', hint: 'student headshot', year: '4th',position: "Embedded Systems Lead", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:gabriela.david1@upr.edu', rotation: -90 },
      { name: 'Héctor Quiñones', photoUrl: '/Hector.webp', hint: 'student headshot', year: '4th',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:hector.quinones18@upr.edu', rotation: -90 },
      { name: 'Gabriela David', photoUrl: '/Gabriela.webp', hint: 'student headshot', year: '3rd',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:gabriela.david1@upr.edu', rotation: -90 },
      { name: 'Javier Rivera', photoUrl: '/Javier.webp', hint: 'student headshot', year: '5th',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:javier.rivera97@upr.edu', rotation: -90 },
      { name: 'Elian E. Soto', photoUrl: '/Elian.webp', hint: 'student headshot', year: '3rd',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:elian.soto@upr.edu', rotation: -90 },
      { name: 'Kristian López', photoUrl: '/kristian.webp', hint: 'student headshot', year: '3rd',position: "Member", major: 'Computer Science', linkedinUrl: 'http://www.linkedin.com/in/kristian-lopez-massas', email: 'mailto:kristian.lopez2@upr.edu', rotation: -90 },
      { name: 'Robert E. Ortiz', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'student headshot', year: '5th',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:robert.ortiz6@upr.edu', rotation: -90 },
    ],
  },
  {
    name: 'Mechanical',
    slug: 'mechanical',
    description: 'The Mechanical team is responsible for the physical design and fabrication of our AUV. From the chassis to the manipulators, they ensure Hydrus is robust, hydrodynamic, and ready for the depths.',
    teamImage: '/mechanical_team.webp',
    teamImageHint: 'engineering students workshop',
    members: [
      { name: 'David A. Torres', photoUrl: '/david.webp', hint: 'engineer headshot', year: '4th',position: "R&D Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:david.torres18@upr.edu', rotation: -90 },
      { name: 'Ricardo G. Perez', photoUrl: '/ricardo.webp', hint: 'engineer headshot', year: '4th',position: "Maintenence Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ricardo.perez39@upr.edu', rotation: -90 },
      { name: 'Anibal Rosado', photoUrl: 'https://placehold.co/400x400/F97316/FFFFFF', hint: 'engineer headshot', year: '4th',position: "Captain & Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:anibal.rosado5@upr.edu', rotation: -90 },
      { name: 'Veronica Franco', photoUrl: '/veronica.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:veronica.franco1@upr.edu', rotation: -90 },
      { name: 'Alejandro González', photoUrl: '/alejandro.webp', hint: 'engineer headshot', year: '5th',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:alejandro.gonzalez32@upr.edu', rotation: -90 },
      { name: 'Lisangelie Flores', photoUrl: '/lizmari.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:lisangelie.flores@upr.edu', rotation: -90 },
      { name: 'Ashley Martin', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ashley.martin1@upr.edu', rotation: -90 },
      { name: 'Luis M. Martinez', photoUrl: '/luis_2.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:luis.colon156@upr.edu', rotation: -90 },
      { name: 'Gabriela Torres', photoUrl: 'https://placehold.co/400x400/8B5CF6/FFFFFF', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:gabriela.torres57@upr.edu', rotation: -90 },
      { name: 'Kevin Pérez', photoUrl: '/Kevin_p.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:kevin.perez38@upr.edu', rotation: -90 },
      { name: 'Ignacio Bautista', photoUrl: '/Ignacio.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ignacio.bautista@upr.edu', rotation: -90 },
    ],
  },
  {
    name: 'Electrical',
    slug: 'electrical',
    description: 'The Electrical team powers our AUV. They design and manage the custom PCBs, power distribution systems, and sensor wiring, ensuring every component communicates and functions flawlessly underwater.',
    teamImage: '/electrical_team.webp',
    teamImageHint: 'electronics lab circuit board',
    members: [
      { name: 'Victor O. Riefkohl', photoUrl: '/victor.webp', hint: 'technician headshot', year: '7th',position: "Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:victor.riefkohl@upr.edu', rotation: -90 },
      { name: 'Mia S. Figueroa', photoUrl: '/mia.webp', hint: 'technician headshot', year: '5th',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:mia.figueroa1@upr.edu', rotation: -90 },
      { name: 'Angel Cintrón', photoUrl: '/angel.webp', hint: 'technician headshot', year: '6th',position: "Member", major: 'Electrical Engineering', linkedinUrl: '', email: 'mailto:angel.cintron19@upr.edu', rotation: -90 },
      { name: 'Nathalie Moreno', photoUrl: '/natalia.webp', hint: 'technician headshot', year: '2nd',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:nathalie.moreno@upr.edu', rotation: -90 },
      { name: 'Jaimel E. Martinez', photoUrl: '/Jaimel.webp', hint: 'technician headshot', year: '7th',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:jaimel.martinez@upr.edu', rotation: -90 },
      { name: 'Aidelís León', photoUrl: '/Aidelis.webp', hint: 'technician headshot', year: '2nd',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:aidelis.leon@upr.edu', rotation: -90 },
      { name: 'Ronald R. Bosques', photoUrl: '/Ronald.webp', hint: 'technician headshot', year: '6th',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:ronald.bosques@upr.edu', rotation: -90 }
    ],
  },
];

export const getTeamBySlug = (slug: string) => {
  return teams.find((team) => team.slug === slug);
}
