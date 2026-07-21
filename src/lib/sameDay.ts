/** NZ-local clock helpers for same-day free window (before 10:00). */

const NZ = "Pacific/Auckland";

export function getNzParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-NZ", {
    timeZone: NZ,
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    weekday: "short",
    day: "numeric",
    month: "short",
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const hour = Number(get("hour") === "24" ? "0" : get("hour"));
  const minute = Number(get("minute"));
  return {
    hour,
    minute,
    label: `${get("weekday")} ${get("day")} ${get("month")}, ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")} NZ`,
  };
}

export function isFreeSameDayWindow(date = new Date(), beforeHour = 10) {
  const { hour } = getNzParts(date);
  return hour < beforeHour;
}
