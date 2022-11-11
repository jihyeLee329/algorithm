function olympicRing(a){
   
  let regEx = /[abdegopqADOPQR]/;
  let result = 0; 
  a.split('').map(d=>{
    regEx.test(d) ? result+=1 : d === "B" ? result +=2 : result += 0;
    console.log(result , 'result')
  })

  result = Math.round(result/2);
  return result ===2 ? 'Bronze!' : result === 3 ? 'Silver!' : result >= 4 ? "Gold" : 'Not even a medal!'
}

olympicRing('wHjMudLwtoPGocnJ');