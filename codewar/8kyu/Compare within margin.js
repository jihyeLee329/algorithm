function closeCompare(a, b, margin) {
  let MARGIN = margin;
  if (margin === undefined) {
    MARGIN = 0;
  }
  const distance = Math.abs(a - b);
  if (MARGIN >= distance) {
    return 0;
  } else {
    return a - b > 0 ? 1 : -1;
  }
}
