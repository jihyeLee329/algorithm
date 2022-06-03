function towerBuilder(nFloors) {
      // build here
      const floors =[]; //빈배열 
      
      for(let n =1; n < nFloors +1; n++){
        const stars = '*'.repeat(n*2 -1);
        const space = ' '.repeat(nFloors - n);
        const result = `${space}${stars}${space}`
        floors.push(result);
      }
      return floors
}
