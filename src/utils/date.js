export const formatDateToString = (string, level = "lv1") => {
  const date = dayjs(string);

  switch (level) {
    case "lv1":
      return date.format("DD/MM/YYYY");
    case "lv2":
      return date.format("DD/MM/YYYY HH:mm");
    case "lv3":
      return date.format("DD/MM/YYYY HH:mm:ss");
    default:
      return date.format("DD/MM/YYYY");
  }
};
