function high(x){
  let y = x.split(' ');
  var z = y.map(word => (
    {wordName: word,
    score: word.split('').reduce((acc, val)=>
      val.toString().charCodeAt(0)-96+acc,0)
    })
  );
  let wordHigh = '';
  let highscore = 0;
  for(var i=0; i<z.length; i++){
    if (z[i].score>highscore){
      wordHigh = z[i].wordName;
      highscore = z[i].score;
    }
  }
  return wordHigh;
}