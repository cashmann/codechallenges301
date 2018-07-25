function mutateMyStrings(stringOne, stringTwo){
  let str1 = stringOne + '\n';
  let string1Split = stringOne.split('');
  string1Split.push('\n');
  let arr = [str1];
  for(var i=0; i<stringTwo.length; i++){
    if(string1Split[i]!== stringTwo[i]){
      string1Split[i] = stringTwo[i];
      arr[i+1] = string1Split.join('');
    }
  }
  return arr.join('');
}