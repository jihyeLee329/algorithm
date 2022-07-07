function closeCompare(a, b, margin) {
  const distance = Math.abs(a - b);
  margin >= distance ? 0 : a - b > 0 ? 1 : -1;
}
