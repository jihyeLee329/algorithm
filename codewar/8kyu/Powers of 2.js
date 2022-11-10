function squareSum(numbers){
  let result = 0;
     for(let i=0; i < numbers.length; i ++){
      result += Math.pow(2,numbers[i]);
      console.log(result)
     }
     return result
   
 }

 squareSum([0,3,4,5])