function countSheeps(arrayOfSheep) {
    // return arrayOfSheep.filter(a =>  a == true).length
   return arrayOfSheep.filter(Boolean).length;
  }


  countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ])