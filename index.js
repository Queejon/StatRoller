var result = new Array(6);

for(var i = 0; i < result.length; i++){
   result[i] = sum(trim(fill()));
}
console.log(result);

function fill(){
   var stat = new Array(4);
   for(var k = 0; k < stat.length; k++){
      stat[k] = randomnum(1,6);
   }
   return stat;
}

function trim(stat){
   stat.sort(function(a, b){return a - b});
   stat.reverse();
   var trimResult = new Array(3);
   for(var k = 0; k < trimResult.length; k++){
      trimResult[k] = stat[k];
   }
   return trimResult;
}

function sum(stat){
   var sumResult = 0;
   for(var k = 0; k < stat.length; k++){
      sumResult += stat[k];
   }
   return sumResult;
}

function randomnum(min, max){
   return Math.floor(Math.random()*(max-min+1))+min;
}