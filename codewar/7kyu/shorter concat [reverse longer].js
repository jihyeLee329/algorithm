function shorter_reverse_longer(a,b){
  let shorter = a.length >= b.length ? b : a ;
  let longer = a.length >= b.length ? a : b ; 
  let reverse = a.length > b.length ? a.split('').reverse().join('') : b.split('').reverse().join('');
  console.log(shorter+reverse+shorter)

  console.log(a.length , b.length)
  return shorter+reverse+shorter
}



shorter_reverse_longer("abcde", "abcde")