export const formatShortDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  }).format(new Date(`${value}T00:00:00`));

export const formatDateRange = (startDate: string, endDate: string) => `${formatShortDate(startDate)} - ${formatShortDate(endDate)}`;

export const getDaysAway = (date: string) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const due = new Date(`${date}T00:00:00`);
  const diff = Math.ceil((due.getTime() - today.getTime()) / 86_400_000);
  if (diff < 0) return `${Math.abs(diff)}d late`;
  if (diff === 0) return "today";
  return `${diff}d`;
};

export const isOverdue = (date: string, completed: boolean) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(`${date}T00:00:00`) < today && !completed;
};
