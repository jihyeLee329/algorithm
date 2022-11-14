function largest(n,xs){
  //대박..완전 초간단
 return n == 0? [] : xs.sort((a,b) => a-b).slice(-n);
}


largest(3,[5,1,5,2,3,1,2,3,5])