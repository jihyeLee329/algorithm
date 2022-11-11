function disemvowel(str) {
  let regEx = /[aeiou]/i
  let arr = [];
  str.split('').map(d=>{
    !regEx.test(d) && arr.push(d)
  })
  console.log(arr.join(''))
  // return str;
}

disemvowel("This website is for losers LOL!");