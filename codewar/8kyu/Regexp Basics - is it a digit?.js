String.prototype.digit = function () {
  const digit = /^[0-9]$/;
  return digit.test(this);
};
