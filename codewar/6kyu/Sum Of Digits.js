function digital_root(n) {
    // 문자열 => 배열 => 숫자 배열화
    let numArr = String(n).split('').map(i=> Number(i));
    // 숫자 배열 한차례씩 돌면서 이전값 + 현재값
    let result = numArr.reduce((num, cur) =>  num+=cur);

    // 더한 값이 10보다 적으면 return , 아니면 반복
    return result < 10 ?  result : digital_root(result); 
}

digital_root(1234)
