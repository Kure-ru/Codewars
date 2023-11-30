function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const minute = 60;
  const hour = 60 * minute;
  const day = 24 * hour;
  const year = 365 * day;

  const durations = [
    { unit: year, label: "year" },
    { unit: day, label: "day" },
    { unit: hour, label: "hour" },
    { unit: minute, label: "minute" },
    { unit: 1, label: "second" },
  ];

  const time = [];

  for (let i = 0; i < durations.length; i++) {
    const { unit, label } = durations[i];

    if (seconds >= unit) {
      const num = Math.floor(seconds / unit);
      time.push(`${num} ${label}${num > 1 ? "s" : ""}`);
      seconds %= unit;
    }
  }

  const formattedTime = time.join(", ");

  return formattedTime.includes(",")
    ? formattedTime.replace(/,([^,]*)$/, " and$1")
    : formattedTime;
}
