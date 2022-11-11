function disemvowel(str) {
  //전체 모든 문자열 변경을 원할 경우 플래그 g 설정 .
  return str.replaceAll(/[aeiou]/ig, "");
}

disemvowel("This website is for losers LOL!");