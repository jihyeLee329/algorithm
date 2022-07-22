// Sum Numbers
function sum (numbers) {
//     let result = 0; 
//    numbers.map(a => result += a)
    console.log(numbers.reduce((a,b) =>  a + b, 0))
  };

  sum([0,10,355,-34])