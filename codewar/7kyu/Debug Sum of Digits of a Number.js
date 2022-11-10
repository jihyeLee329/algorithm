function getSumOfDigits(integer) {
  let changeStr = String(integer).split(''); 
  console.log(changeStr);
  let sum = null; 
  for(let i = 0; i < changeStr.length; i ++){
    sum += Number(changeStr[i]);
  }
  return sum;
}


getSumOfDigits(1235)