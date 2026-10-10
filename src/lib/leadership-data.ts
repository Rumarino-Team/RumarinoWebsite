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
    { name: 'Héctor A. Quiñones', photoUrl: '/members/Hector_Management2025.webp', hint: 'professional headshot', year: '4th',position: "Management Lead", major: 'Computer Engineering', linkedinUrl: '#', email: 'mailto:hector.quinones18@upr.edu' },
    { name: 'Edyan A. Cruz', photoUrl: '/members/Edyan_Software2025.webp', hint: 'student headshot', year: '4th',position: "Software Lead", major: 'Software Engineering', linkedinUrl: '#', email: 'mailto:edyan.cruz@upr.edu' },
    { name: 'Ronald R. Bosques', photoUrl: '/members/Ronald_Electrical2025.webp', hint: 'student headshot', year: '6th',position: "Electrical Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:ronald.bosques@upr.edu' },
    { name: 'Angel Cintrón', photoUrl: '/members/Angel_Electrical2025.webp', hint: 'technician headshot', year: '6th',position: "Electrical Lead", major: 'Electrical Engineering', linkedinUrl: '#', email: 'mailto:angel.cintron19@upr.edu', rotation: 0 },
    { name: 'Luis M. Martinez', photoUrl: '/members/Luis_Mechanical2025.webp', hint: 'engineer headshot', year: '3rd',position: "Mechanical Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:luis.martinez70@upr.edu'},
    { name: 'Ashley Martin', photoUrl: '/members/Tarzan_ImageMissing.webp', hint: 'student headshot', year: '3rd',position: "Mechanical Lead", major: 'Mechanical Engineering', linkedinUrl: '#', email: 'mailto:ashley.martin1@upr.edu'},
    ];
