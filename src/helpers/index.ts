export function yearAgo(year: number) {
  const date = new Date();
  return date.getFullYear() - year;
}
