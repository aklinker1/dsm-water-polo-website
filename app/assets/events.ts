import type { Component } from "vue";
import { ASHWORTH_POOL_LINK } from "../utils/constants";

export type WebsiteEvent = {
  slug: string;
  date: string;
  heading: string;
  description: string;
  details?: Component;
  links?: Array<{
    text: string;
    icon: string;
    url?: string;
  }>;
};

export const EVENTS: WebsiteEvent[] = [
  {
    slug: "38th-annual-tournament",
    heading: "38th Annual DSM Water Polo Tournament",
    description: `
      <p>
        Teams from Madison, Kansas City, Chicagoland, Minneapolis,
        and Des Moines will play in a 11-team tournament. Admission is free!
      </p>
    `,
    date: "2024/07/12",
    links: [
      {
        text: "Des Moines • Ashworth Swimming Pool",
        url: ASHWORTH_POOL_LINK,
        icon: "i-heroicons-map",
      },
    ],
  },
  {
    slug: "37th-annual-tournament",
    heading: "37th Annual DSM Water Polo Tournament",
    description: `
      <p>
        Teams from Madison, Kansas City, Chicagoland, Minneapolis,
        and Des Moines will play in a 9-team tournament. Admission is free!
      </p>
    `,
    date: "2023/07/14",
    links: [
      {
        text: "Des Moines • Ashworth Swimming Pool",
        url: ASHWORTH_POOL_LINK,
        icon: "i-heroicons-map",
      },
      // {
      //   text: "Schedule & Results",
      //   // url: ASHWORTH_POOL_LINK,
      //   icon: "i-heroicons-trophy",
      // },
    ],
  },
];
