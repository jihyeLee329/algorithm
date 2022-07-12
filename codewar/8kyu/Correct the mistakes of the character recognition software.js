function correct(string) {
  return string.replace(/1/g, "I").replace(/0/g, "O").replace(/5/g, "S");
}

correct("51NGAP0RE");
