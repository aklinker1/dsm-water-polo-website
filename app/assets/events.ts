import type { Component } from "vue";
import { ASHWORTH_POOL_LINK } from "../utils/constants";
import _39thAnnualTournament from "../components/events/39thAnnualTournament.vue";

export type WebsiteEvent = {
  slug: string;
  /**
   * When true, don't show this event on the events list. You have to know the
   * slug to access the URL directly.
   */
  draft?: boolean;
  date: Date;
  endDate?: Date;
  heading: string;
  description: string;
  details?: Component;
  links?: WebsiteEventLink[];
};

export type WebsiteEventLink = {
  text: string;
  tooltip?: string;
  icon: string;
  url?: string;
};

export const EVENTS: WebsiteEvent[] = [
  {
    slug: "39th-annual-tournament",
    heading: "39th Annual DSM Water Polo Tournament",
    description:
      "This annual tournament brings top teams from all across the Midwest to Des Moines.",
    details: _39thAnnualTournament,
    date: new Date("2025/7/12"),
    endDate: new Date("2025/7/13"),
    links: [
      {
        text: "Des Moines • Ashworth Swimming Pool",
        url: ASHWORTH_POOL_LINK,
        icon: "i-heroicons-map",
      },
      {
        text: "Schedule & Results",
        url: "https://docs.google.com/spreadsheets/d/1V63r5BCOX_LoDCBrVk0B9yAs7O4eLfpTC1x8oO0gIQY/edit?usp=sharing",
        icon: "i-heroicons-trophy",
      },
    ],
  },
  {
    slug: "38th-annual-tournament",
    heading: "38th Annual DSM Water Polo Tournament",
    description:
      "Teams from Madison, Kansas City, Chicagoland, Minneapolis, and Des Moines will play in a 11-team tournament. Admission is free!",
    date: new Date("2024/7/12"),
    endDate: new Date("2024/7/14"),
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
    description:
      "Teams from Madison, Kansas City, Chicagoland, Minneapolis, and Des Moines will play in a 9-team tournament. Admission is free!",
    date: new Date("2023/7/14"),
    endDate: new Date("2023/7/17"),
    links: [
      {
        text: "Des Moines • Ashworth Swimming Pool",
        url: ASHWORTH_POOL_LINK,
        icon: "i-heroicons-map",
      },
    ],
  },
];
