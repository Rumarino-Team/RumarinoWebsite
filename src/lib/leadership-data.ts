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

export const leadership: DivisionMember[] = [
    { name: 'Cesar Ruíz', photoUrl: '/members/Cesar_Captain2025.webp', hint: 'student headshot', year: '4th',position: "Captain & Software Lead", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:cesar.ruiz6@upr.edu' },
    { name: 'Anibal Rosado', photoUrl: '/members/Anibal_Mechanical2025.webp', hint: 'engineer headshot', year: '4th',position: "Co-Captain", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:anibal.rosado5@upr.edu' },
    { name: 'Analía Díaz', photoUrl: '/members/Analia_Management2025.webp', hint: 'professional headshot', year: '4th',position: "Management Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:analia.diaz@upr.edu' },
    { name: 'Angel Cintrón', photoUrl: '/members/Angel_Electrical2025.webp', hint: 'technician headshot', year: '6th',position: "Electrical Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:angel.cintron19@upr.edu', rotation: 0 },
    { name: 'Ronald R. Bosques', photoUrl: '/members/Ronald_Electrical2025.webp', hint: 'technician headshot', year: '6th',position: "Electrical Co-Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:ronald.bosques@upr.edu', rotation: 0 },
    { name: 'Victor O. Riefkohl', photoUrl: '/members/Victor_Electrical2025.webp', hint: 'technician headshot', year: '7th',position: "Former Electrical Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:victor.riefkohl@upr.edu', rotation: 0 },
    { name: 'Luis M. Martinez', photoUrl: '/members/Luis_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Mechanical Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:luis.martinez70@upr.edu'},
    { name: 'David A. Torres', photoUrl: '/members/David_Mechanical2025.webp', hint: 'engineer headshot', year: '4th',position: "Mechanical Co-Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:david.torres18@upr.edu' },
    { name: 'Edyan A. Cruz', photoUrl: '/members/Edyan_Software2025.webp', hint: 'student headshot', year: '4th',position: "Software Lead", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:edyan.cruz@upr.edu' },
    { name: 'Diego Quiñones', photoUrl: '/members/Diego.webp', hint: 'student headshot', year: '4th',position: "Software Lead", major: 'Computer Science', linkedinUrl: '#', email: 'mailto:gabriela.david1@upr.edu'},
    { name: 'Gabriela David', photoUrl: '/members/Gabriela_Software2025.webp', hint: 'student headshot', year: '3rd',position: "Software Lead", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:gabriela.david1@upr.edu' },
    ];