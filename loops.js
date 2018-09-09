function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    var string = ''
    if(i===1) {
      string = `I am 1 strange loop.`
    } else {
      string = `I am ${i} strange loops.`
    }
    array(i) = string
  }
}