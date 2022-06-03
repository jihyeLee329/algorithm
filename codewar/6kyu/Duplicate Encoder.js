function duplicateEncode(word){
  const stringArr = word.toLowerCase().split('');
  let resultArr = [] 
  stringArr.filter((item) => {
    let text = item;

    stringArr.indexOf(item) !== stringArr.lastIndexOf(item) ? 
        text = ')' : text='('

    resultArr.push(text);
  });
  return resultArr.join('')
}
