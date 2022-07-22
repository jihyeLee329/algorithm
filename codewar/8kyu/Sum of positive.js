function positiveSum(arr) {
   arr.filter(p => p >0).reduce((sum, s) => sum + s, 0);
}

positiveSum([1,2,3,4,5])



return arr.filter(x => x>=0).reduce((a, c) => a + c, 0);