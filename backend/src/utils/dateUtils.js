export const currentDateTime = (additionalDay) => {
  const today = new Date();
  if (additionalDay) {
    today.setDate(today.getDate() + additionalDay);
  }
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time = today.getHours() + ":" + today.getMinutes();
  return date + " " + time;
};
