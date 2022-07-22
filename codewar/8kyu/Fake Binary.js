function fakeBin(x){
//    let fakeNum =  x.split('')
//    console.log(fakeNum.map(a => a >= 5 ? a = 1: a = 0).join(''))
  
    return x.split('').map(a => a < 5 ? 0 : 1).join('')
  }

  fakeBin('45385593107843568')



  let dog = Symbol('mongtori') 
  console.log(dog)
  console.log(typeof dog)
  