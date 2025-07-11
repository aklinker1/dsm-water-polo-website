export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;

export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const DAYS_OF_WEEK_SHORT = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];
export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const MONTHS_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function toRelativeDateString(_date: Date): string {
  const today = startOfDay(new Date());
  const todayMs = today.getTime();
  const date = startOfDay(_date);
  const dateMs = date.getTime();

  // +/- a day or two
  if (dateMs === todayMs) return "Today";
  if (dateMs === todayMs + DAY) return "Tomorrow";
  if (dateMs === todayMs - DAY) return "Yesterday";
  if (dateMs === todayMs - 2 * DAY) return "2 days ago";

  // +/- 1 week
  if (dateMs < todayMs && dateMs >= todayMs - 7 * DAY)
    return `Last ${DAYS_OF_WEEK[date.getDay()]}`;

  if (dateMs > todayMs && dateMs <= todayMs + 7 * DAY)
    return DAYS_OF_WEEK[date.getDay()];

  // This year
  if (date.getFullYear() === today.getFullYear()) {
    return `${DAYS_OF_WEEK_SHORT[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}`;
  }

  // Not this year
  return `${DAYS_OF_WEEK_SHORT[date.getDay()]}, ${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export function toMonthString(date: Date): string {
  return MONTHS[date.getMonth()];
}

export function toShortMonthString(date: Date): string {
  return MONTHS_SHORT[date.getMonth()];
}

export function isInPast(date: Date): boolean {
  return date.getTime() < new Date().getTime();
}
