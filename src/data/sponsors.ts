export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  tier: "gold" | "silver" | "bronze";
  description: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "rubric",
    name: "Rubric",
    logo: "rubric-logo.png",
    url: "https://campus.hellorubric.com/?s=6334",
    tier: "gold",
    description:
      "Rubric is a campus engagement platform connecting students with societies, events, and opportunities across Australian universities.",
  },
];
