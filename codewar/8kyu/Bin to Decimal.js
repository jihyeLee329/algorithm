function binToDec(bin) {
  // bin = 2진수
  let Dec = 0;
  let Bin = String(bin).split("");
  for (let i = 0; i < Bin.length; i++) {
    // console.log(Bin[i], Bin.length - 1 - i); //제곱근
    Dec += Bin[i] * 2 ** (Bin.length - 1 - i); //2진수 자리 돌면서 수 곱함
  }
  console.log(Dec); //10진수로 표현한 결과

  // 알고보니 함수가 있었음.. 특정 진수의 정수 반환
  // parseInt(bin,2)
}

binToDec(1);
