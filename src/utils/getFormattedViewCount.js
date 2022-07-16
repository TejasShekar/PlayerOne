export function getFormattedViewCount(views) {
  let count = Number(Number(views.split(",").join("")));
  if (count > 999 && count < 1000000) {
    return parseInt(count / 1000) + "k";
  } else if (count > 1000000) {
    return parseInt(count / 1000000) + "M";
  } else if (count <= 999) {
    return count;
  }
}
