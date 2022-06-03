function getCount(str) {
    let vowelsCount = str.trim().match(/[a,e,i,o,u]/gi);
    // enter your magic here
    return vowelsCount == null ?  0 : vowelsCount.length ;  
  }



  getCount('my pyx');