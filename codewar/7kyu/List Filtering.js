// 배열 l 에서 숫자만 필터링하기
function filter_list(l) {
    const arr = []; 

    for(let i= 0; i < l.length; i ++){
      if(typeof( l[i]) == 'number') {
        arr.push(l[i]) ;
      }
    }
    return arr; 
}

