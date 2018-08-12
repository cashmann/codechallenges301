//Flattening

flat = (arrays)=>arrays.reduce((acc,val)=>acc.concat(val), []);

//Your own loop

loop = (val, test, up, body) =>{
 var status = test(val);
  while(status=== true){
    val = up(val);
    status = test(val);
  }
  body('done');
}