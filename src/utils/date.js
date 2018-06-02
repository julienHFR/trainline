export default function getTimeFromDateString(dateString) {
  const date = new Date(dateString);
  return date.toTimeString().substring(0, 5);
}
