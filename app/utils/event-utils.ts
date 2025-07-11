import type { WebsiteEvent, WebsiteEventLink } from "../assets/events";
import { toRelativeDateString } from "./time-utils";

export function buildEventLinks(event: WebsiteEvent): WebsiteEventLink[] {
  return [
    {
      text: event.endDate
        ? `${toRelativeDateString(event.date)} - ${toRelativeDateString(event.endDate)}`
        : toRelativeDateString(event.date),
      tooltip: event.endDate
        ? `${event.date.toDateString()} - ${event.endDate.toDateString()}`
        : event.date.toDateString(),
      icon: "i-heroicons-calendar-date-range",
    },
    ...(event.links ?? []),
  ];
}
