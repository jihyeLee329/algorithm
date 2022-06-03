function toCamelCase(str){
    //정규표현식으로 - 혹은 _ 으로 분리
    const splitString = str.split(/[\-|_]/);
    
    for(let i =1; i < splitString.length; i ++){
        const splitStr = splitString[i].split('');
       const firstStr = splitStr[0].toUpperCase()
        console.log(firstStr)
    }
}

toCamelCase('the-stealth-warrior')