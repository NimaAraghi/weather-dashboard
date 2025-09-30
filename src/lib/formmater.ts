type Locale = "en-US" | "fa-IR";
type DateType = "fullDate" | "month" | "day" | "time" | "long";

export function formatDate(
  date: Date,
  locale: Locale = "en-US",
  type: DateType
) {
  switch (type) {
    case "fullDate":
      return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

    case "day":
      return date.toLocaleDateString(locale, {
        weekday: "long",
      });

    case "time":
      return date
        .toLocaleDateString(locale, {
          hour: "2-digit",
          minute: "2-digit",
        })
        .replace(" ", "")
        .split(",")[1];

    case "month":
      return date.toLocaleDateString(locale, {
        month: "short",
        day: "2-digit",
      });
    case "long":
      return date.toLocaleDateString(locale, {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      });
  }
}
