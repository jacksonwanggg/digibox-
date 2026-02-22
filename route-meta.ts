export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

const SITE = "https://unswdigitalsociety.org";
const SITE_NAME = "DigiSoc — UNSW Digital Society";
const OG_IMAGE = `${SITE}/groupPhoto.png`;

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "DigiSoc — UNSW Digital Society | UNSW DigiSoc | Digital Society UNSW Sydney",
    description:
      "DigiSoc (UNSW Digital Society) is UNSW Sydney's premier student society for digital skills, technology, design, and innovation. Workshops, hackathons, networking, and more. Join UNSW DigiSoc today.",
  },
  {
    path: "/about",
    title: "About DigiSoc — UNSW Digital Society Mission & Values | UNSW DigiSoc",
    description:
      "Learn about DigiSoc (UNSW Digital Society). UNSW DigiSoc empowers students with digital skills through workshops, hackathons, and industry events. Our values: accessibility, community, innovation, and empowerment.",
  },
  {
    path: "/events",
    title: "DigiSoc Events — UNSW Workshops, Hackathons & Socials | UNSW DigiSoc",
    description:
      "Browse upcoming and past DigiSoc events at UNSW Sydney. Workshops, hackathons, industry panels, networking nights, and social events for UNSW students passionate about digital skills and technology.",
  },
  {
    path: "/team",
    title: "DigiSoc Team — UNSW DigiSoc Executives & Leadership | UNSW DigiSoc",
    description:
      "Meet the UNSW DigiSoc executive team. The passionate students leading DigiSoc (UNSW Digital Society) — driving workshops, hackathons, events, and community initiatives at UNSW Sydney.",
  },
  {
    path: "/sponsors",
    title: "DigiSoc Sponsors — UNSW DigiSoc Industry Partners | UNSW DigiSoc",
    description:
      "UNSW DigiSoc sponsors and industry partners. DigiSoc (UNSW Digital Society) partners with leading organisations to support UNSW students in digital skills, technology, design, and innovation.",
  },
  {
    path: "/contact",
    title: "Join DigiSoc — Get Involved with UNSW Digital Society | UNSW DigiSoc",
    description:
      "Join DigiSoc (UNSW Digital Society) — become a member of UNSW's premier digital community. Follow UNSW DigiSoc on Instagram, LinkedIn, and Facebook. Attend events, workshops, and hackathons.",
  },
];

export { SITE, SITE_NAME, OG_IMAGE };
