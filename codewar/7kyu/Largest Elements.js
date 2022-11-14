function largest(n,xs){
  // Find the n highest elements in a list
  let arr = [];
  let origin = [];
  let result = null;
  let findIndex = null;


  for(let i = 0; i < n; i ++){
    result =  (origin.length > 0 ? Math.max(...origin) : Math.max(...xs)); 
    arr.unshift(result);
    findIndex = origin.length > 0 ? origin.findIndex(d => d == result) : xs.findIndex(d => d == result);

    origin =  origin.length > 0 ?
     origin.filter((d, idx) => idx !== findIndex && d) :
    xs.filter((d, idx)=> idx !== findIndex && d )
  }
  console.log(arr)
}


largest(3,[5,1,5,2,3,1,2,3,5])