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
    slug: "39th-annual-tournament",
    draft: true,
    heading: "39th Annual DSM Water Polo Tournament",
    description:
      "The best (and only) outdoor tournament in the Midwest! Games start Friday night and go through Sunday afternoon.",
    details: _39thAnnualTournament,
    date: "2025/07/11",
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
    description:
      "Teams from Madison, Kansas City, Chicagoland, Minneapolis, and Des Moines will play in a 9-team tournament. Admission is free!",
    date: "2023/07/14",
    links: [
      {
        text: "Des Moines • Ashworth Swimming Pool",
        url: ASHWORTH_POOL_LINK,
        icon: "i-heroicons-map",
      },
    ],
  },
];
