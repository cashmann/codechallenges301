function insertDash(num) {
  //code me
 var prev=''; 
 var newString='';

 num = num.toString();
 
 for (var i=0; i<num.length; i++){
   var current = parseInt(num[i])%2;
   if (current===1 && prev===1){
     newString=newString + '-' + num[i];
     prev=1;
   } else {
     newString=newString + num[i];
      prev=current;
   }
 }

 return newString; 
}
