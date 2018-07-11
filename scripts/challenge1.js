function abbrevName(name){

  // code away
var firstInitial = name.charAt(0);
var lastInitial = name.charAt(name.indexOf(' ')+1);
return (firstInitial +'.'+ lastInitial).toUpperCase();
}