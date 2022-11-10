function oddCount(n){
    let arr =[];
    let num = 0; 
    for(let i = 1; i <= n; i ++){
        console.log(i%2)
       i %2 !== 0 ? arr.push(i) :  num = num
      
    }
    console.log(arr.length)
   }

   oddCount(7);