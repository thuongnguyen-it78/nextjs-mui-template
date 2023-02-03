import dayjs from "dayjs";

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

export const formatTimeAgo = (time) => {
  const now = dayjs();
  const timeDayjs = dayjs(time);
  let ago = now.diff(timeDayjs, "day");
  if (ago > 2) {
    return timeDayjs.dayjs("DD-MM-YYYY HH:mm");
  }

  if (ago > 0) {
    return `${ago} ngày trước`;
  }

  ago = now.diff(timeDayjs, "hour");
  if (ago > 0) {
    return `${ago} giờ trước`;
  }

  return `${now.diff(timeDayjs, "minute")} phút trước`;
};
