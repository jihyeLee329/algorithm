function setAlarm(employed, vacation) {
  if (employed === vacation) {
    return false;
  } else if (employed === !vacation) {
    return employed;
  }
}
