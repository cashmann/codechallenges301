function sortNumbers(a,b){
  return a-b;
}

var gimme = function (inputArray) {
  // Implement this function
  if (inputArray.length = 3){
    var arrSort = inputArray.concat().sort(sortNumbers);
    var median = arrSort[1];
    return inputArray.indexOf(median);
  }
};