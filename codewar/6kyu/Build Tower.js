function towerBuilder(nFloors) {
  const floors =[]; //빈배열 
  
  // 숫자1부터 반복문 시작, nFloors+1  수보다 작을 때 까지 반복
  for(let n =1; n < nFloors +1; n++){
    const stars = '*'.repeat(n*2 -1);  // '*' 문자를 n 숫자가 증가함에 따라, 2개씩 추가되어 * 반복출력
    const space = ' '.repeat(nFloors - n);  //마지막 * 층에는 공백이 없어야하므로, nFloors - 현재 숫자(n)
    const result = `${space}${stars}${space}` // 최종 출력
    floors.push(result);
  }
  return floors
}