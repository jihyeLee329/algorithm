function correctTail(body, tail) {
  const sub = body.substr(-1);
  return sub.toLowerCase() === tail.toLowerCase() ? true : false;
}
correctTail("STDOUT", "t");
