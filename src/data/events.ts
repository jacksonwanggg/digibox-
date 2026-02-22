export interface DigiEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  instagramUrl: string;
  image?: string;
}

export const events: DigiEvent[] = [
  {
    id: 7,
    title: "Plush N' Punch — Directors Meet & Greet",
    description:
      "Meet our directors, ask questions, and dive into the different portfolios that make up DigiSoc. Plus, try win a FREE plushie!",
    date: "2026-02-26",
    time: "11:30 AM - 1:30 PM",
    location: "Library Walkway",
    instagramUrl: "https://www.instagram.com/p/DU4UngfDjwA/?hl=en",
    image: "/events/plushNpunch.png",
  },
  {
    id: 8,
    title: "O-Week 2026",
    description:
      "UNSW Digital Society (DigiSoc) is a leading society for students passionate about digital products, technology, and design. Pop by our stall to meet new people, learn about what we do, and grab some freebies — stickers, fans, keychains, vouchers & snacks!",
    date: "2026-02-09",
    time: "10:00 AM - 4:00 PM",
    location: "UNSW Alumni Lawn",
    instagramUrl: "https://www.instagram.com/p/DUhpWybkdVu/?hl=en",
    image: "/events/oweek2026.png",
  },
];
