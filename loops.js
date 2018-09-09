function forLoop (array) {
  for (let i = 0; i < 25; i++) {
    var string = ''
    if(i+1===1) {
      string = `I am 1 strange loop.`
    } else {
      string = `I am ${i+1} strange loops.`
    }
    array(i) = string
  }
}
