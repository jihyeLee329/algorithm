function duplicateEncode(word){
  //모든 문자 소문자로 
  const lowerCase = word.toLowerCase()
  //문자 배열화
  const stringArr = lowerCase.split('');
  // 결과 담길 빈 배열 선언
  let resultArr = [] 

  stringArr.filter((item) => {
    let text = item;
    //문자배열에서 문자 하나씩 돌면서, 
    //현재 문자 앞에서 찾은 index 위치와 현재 문자 뒤에서 찾은 index를 비교하여 
    //같다면 같은 문자 0, 다르면 같은 문자 >= 1 
    stringArr.indexOf(item) !== stringArr.lastIndexOf(item) ? 
        text = ')' : text='(';
    resultArr.push(text);
  });
  console.log(resultArr.join(''))
  return resultArr.join('')
}

duplicateEncode('(( @')