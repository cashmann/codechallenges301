//Sum of a Range

findRange = (x,y) =>{
  var length= y-x;
  var range = [];
  for(var i=0; i<=length; i++){
    range[i]= x;
    x++;
  }
  return range;
}

sum = (z) => z.reduce((acc, val)=> acc+val, 0);

sumRange = (x,y) => sum(findRange(x,y));

//Deep Comparisons

deepEqual = (p,q) => {
  if(typeof(p)==='object' && typeof(q)==='object'){
    if(p === q){
      return true;
    }else{return false;}
  }else{
    if(p==q){
      return true;
    }else{
      return false;
    }
  }
}
