function isNice(arr){
  if(arr.length>1){
    for(var i=0; i<arr.length; i++){
    console.log(arr);
    console.log(arr[i]+1, arr[i]-1);
      if (!arr.includes(arr[i]+1) && !arr.includes(arr[i]-1)){
        return false;
      }
    }
  }else{
    return false;
  }
  return true;
}