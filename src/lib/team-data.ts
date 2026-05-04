export type DivisionMember = {
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

export type Division = {
  name: string;
  slug: string;
  description: string;
  divisionImage: string;
  divisionImageHint: string;
  members: DivisionMember[];
};

export const divisions: Division[] = [
  {
    name: 'Management Division',
    slug: 'management',
    description: 'The Management Division oversees the strategic direction and operations of RUMarino.',
    divisionImage: '/management_team2025.webp',
    divisionImageHint: 'Photo of the management division',
    members: [
      { name: 'Héctor A. Quiñones', photoUrl: '/Hector_Management2025.webp', hint: 'professional headshot', year: '4th',position: "Lead", major: 'Computer Engineering', linkedinUrl: 'https://www.linkedin.com/in/hectorquinones/', email: 'mailto:hector.quinones18@upr.edu' },
      { name: 'Luis E. Colón', photoUrl: '/Luis_Management2025.webp', hint: 'professional headshot', year: '3rd',position: "Member", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:luis.colon156@upr.edu' },
      { name: 'Cristal N. Rivera', photoUrl: '/Cristal_Management2025.webp', hint: 'student headshot', year: '4th',position: "Member", major: 'Chemical Engineering', linkedinUrl: '#', email: 'mailto:cristal.rivera10@upr.edu' },
      { name: 'Diego Feliú', photoUrl: '/Diego_Management2025.webp', hint: 'engineer headshot', year: '2nd',position: "Member", major: 'Industrial Engineering', linkedinUrl: '#', email: 'mailto:ignacio.bautista@upr.edu' },
      { name: 'Celimar Negrón', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '2nd',position: "Member", major: 'Industrial Engineering', linkedinUrl: 'https://pr.linkedin.com/in/celimar-negr%C3%B3n-andino-2649b1381', email: 'mailto:celimar.negron1@upr.edu' },
      { name: 'Omar Ayala', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Computer Engineering', linkedinUrl: 'https://www.linkedin.com/in/omar-oaas/', email: 'mailto:omar.ayala5@upr.edu' },
    ],
  },
  {
    name: 'Software Division',
    slug: 'software',
    description: 'The Software Division is the brain of our AUV. They develop the software for navigation, sensor integration, and autonomous decision-making, bringing Hydrus to life through code.',
    divisionImage: '/Software_Team2025.webp',
    divisionImageHint: 'students coding computer lab',
    members: [
      { name: 'Cesar Ruíz', photoUrl: '/Cesar_Captain2025.webp', hint: 'student headshot', year: '4th',position: "Lead", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:cesar.ruiz6@upr.edu' },
      { name: 'Edyan A. Cruz', photoUrl: '/Edyan_Software2025.webp', hint: 'student headshot', year: '4th',position: "Lead", major: 'Software Engineering', linkedinUrl: 'https://linkedin.com/in/edyan-cruz-118b30244', email: 'mailto:edyan.cruz@upr.edu' },
      { name: 'Diego Quiñones', photoUrl: '/Diego.webp', hint: 'student headshot', year: '4th',position: "Lead", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:gabriela.david1@upr.edu'},
      { name: 'Gabriela David', photoUrl: '/Gabriela_Software2025.webp', hint: 'student headshot', year: '3rd',position: "Lead", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:gabriela.david1@upr.edu' },
      { name: 'Héctor A. Quiñones', photoUrl: '/Hector_Management2025.webp', hint: 'student headshot', year: '4th',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:hector.quinones18@upr.edu'},
      { name: 'Javier Rivera', photoUrl: '/Javier_Software2025.webp', hint: 'student headshot', year: '5th',position: "Member", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:javier.rivera97@upr.edu'},
      { name: 'Elian E. Soto', photoUrl: '/Elian_Software.webp', hint: 'student headshot', year: '2nd',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:elian.soto@upr.edu' },
      { name: 'Kristian López', photoUrl: '/Kristian_Software.webp', hint: 'student headshot', year: '5th',position: "Member", major: 'Computer Science', linkedinUrl: 'http://www.linkedin.com/in/kristian-lopez-massas', email: 'mailto:kristian.lopez2@upr.edu' },
      { name: 'Fernando Pizarro', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'student headshot', year: '5th',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:fernando.pizarro1@upr.edu' },
      { name: 'Jaydiemar Vazquez', photoUrl: '/Jaydie_Software2025.webp', hint: 'student headshot', year: '3rd',position: "Member", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:jaydiemar.vazquez@upr.edu' },
      { name: 'Carolina Rivera', photoUrl: '/Carolina_Software2025.webp', hint: 'student headshot', year: '3rd',position: "Member", major: 'Computer Engineering', linkedinUrl: 'https://www.linkedin.com/in/carolina-rivera-244756364', email: 'mailto:carolina.rivera22@upr.edu' },
      { name: 'José Burgos Guntín', photoUrl: '/Jose_Software2025.webp', hint: 'student headshot', year: '4th',position: "Member", major: 'Computer Engineering', linkedinUrl: 'https://www.linkedin.com/in/joseburgosguntin/', email: 'mailto:jose.burgos40@upr.edu' },
      { name: 'Rafael A. Crespo Burgos', photoUrl: '/Rafael_Software2025.webp', hint: 'student headshot', year: '3rd',position: "Member", major: 'Software Engineering', linkedinUrl: 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav', email: 'mailto:rafael.crespo6@upr.edu' },
      { name: 'Yahir Vera', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '1st',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:yahir.vera@upr.edu' },
      { name: 'Iancarlo Vega', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '2nd',position: "Member", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:iancarlo.vega@upr.edu' },
      { name: 'Nicolás Behar Gutiérrez', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '2nd',position: "Member", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:nicolas.behar@upr.edu' },
      { name: 'Juan S. Fierro', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '4th',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:juan.herrera1@upr.edu' },
      { name: 'Jesmarie Arroyo Feliciano', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '5th',position: "Member", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:jesmarie.arroyo@upr.edu' },
    ],
  },
  {
    name: 'Mechanical Division',
    slug: 'mechanical',
    description: 'The Mechanical Division is responsible for the physical design and fabrication of our AUV. From the chassis to the manipulators, they ensure Hydrus is robust, hydrodynamic, and ready for the depths.',
    divisionImage: '/Mechanical_Team2025.webp',
    divisionImageHint: 'engineering students workshop',
    members: [
      { name: 'Luis M. Martinez', photoUrl: '/Luis_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:luis.martinez70@upr.edu'},
      { name: 'David A. Torres', photoUrl: '/David_Mechanical2025.webp', hint: 'engineer headshot', year: '4th',position: "Co-Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:david.torres18@upr.edu' },
      { name: 'Ricardo G. Perez', photoUrl: '/Ricardo_Mechanical2025.webp', hint: 'engineer headshot', year: '4th',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ricardo.perez39@upr.edu' },
      { name: 'Alejandro González', photoUrl: '/Alejandro_Mechanical.webp', hint: 'engineer headshot', year: '5th',position: "Member", major: 'Surveying and Topography', linkedinUrl: 'linkedin.com/in/ale-gonz', email: 'mailto:alejandro.gonzalez32@upr.edu' },
      { name: 'Lisangelie Flores', photoUrl: '/Lisangelie_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:lisangelie.flores@upr.edu' },
      { name: 'Ash Martin', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ashley.martin1@upr.edu' },
      { name: 'Gabriela Torres', photoUrl: '/Gabriela_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:gabriela.torres57@upr.edu' },
      { name: 'Kevin Pérez', photoUrl: '/Kevin_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:kevin.perez38@upr.edu' },
      { name: 'Ignacio Bautista', photoUrl: '/Ignacio_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ignacio.bautista@upr.edu' },
      { name: 'Daniela Collazo', photoUrl: '/Daniela_Mechanical2025.webp', hint: 'engineer headshot', year: 'TBD',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:daniela.collazo@upr.edu' },
      { name: 'Marcos Vázquez', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:marcos.vazquez6@upr.edu' },
      { name: 'Noeliam Ramos', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '4th',position: "Member", major: 'Chemical Engineering', linkedinUrl: '#', email: 'mailto:noeliam.ramos@upr.edu' },
      { name: 'Adriana Cabrera', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '3rd',position: "Member", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:adriana.cabrera3@upr.edu' },
    ],
  },
  {
    name: 'Electrical Division',
    slug: 'electrical',
    description: 'The Electrical Division powers our AUV. They design and manage the custom PCBs, power distribution systems, and sensor wiring, ensuring every component communicates and functions flawlessly underwater.',
    divisionImage: '/Electrical_Team2025.webp',
    divisionImageHint: 'electronics lab circuit board',
    members: [
      { name: 'Angel Cintrón', photoUrl: '/Angel_Electrical2025.webp', hint: 'technician headshot', year: '6th',position: "Lead", major: 'Electrical Engineering', linkedinUrl: 'https://www.linkedin.com/in/angeljcintronmartinez?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', email: 'mailto:angel.cintron19@upr.edu', rotation: 0 },
      { name: 'Ronald R. Bosques', photoUrl: '/Ronald_Electrical2025.webp', hint: 'technician headshot', year: '6th',position: "Co-Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:ronald.bosques@upr.edu', rotation: 0 },
      { name: 'Mia S. Figueroa', photoUrl: '/Mia_Electrical2025.webp', hint: 'technician headshot', year: '5th',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:mia.figueroa1@upr.edu', rotation: 0 },
      { name: 'Nathalie Moreno', photoUrl: '/Nathalie_Electrical2025.webp', hint: 'technician headshot', year: '2nd',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:nathalie.moreno@upr.edu', rotation: 0 },
      { name: 'Aidelís León', photoUrl: '/Aidelis_Electrical2025.webp', hint: 'technician headshot', year: '2nd',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:aidelis.leon@upr.edu', rotation: 0 },
      { name: 'Juan D. Herrera', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '4th',position: "Member", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:juan.herrera1@upr.edu' },
      { name: 'Bryan Toledo', photoUrl: '/Tarzan_ImageMissing.webp', hint: 'engineer headshot', year: '1st',position: "Member", major: 'Computer Engineering', linkedinUrl: 'https://www.linkedin.com/in/bryan-j-toledo-balaguer-b0a0b532a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', email: 'mailto:bryan.toledo@upr.edu' },
    ],
  },
];

export const getDivisionBySlug = (slug: string) => {
  return divisions.find((division) => division.slug === slug);
}
