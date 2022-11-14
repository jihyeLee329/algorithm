function spoonerize(words) {

  let splitWords = words.split(' ')
  let first = splitWords[0].slice(0,1)
  let second = splitWords[1].slice(0,1)

  return `${splitWords[0].replace(first,second)} ${splitWords[1].replace(second, first)}`;
}

spoonerize("nit picking")