function sumTwoSmallestNumbers(numbers) {  
    //Code here
    
  const first = Math.min(...numbers);
  let notFirst = numbers.filter(v => v !== first); 
  const second = Math.min(...notFirst);
  
  return first + second
    
}

sumTwoSmallestNumbers([52, 76, 14, 12, 4]);