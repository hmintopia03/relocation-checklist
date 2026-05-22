export const splitTaskTitle = (title: string) =>
  title
    .split("/")
    .map((part) => part.trim())
    .filter(Boolean);
