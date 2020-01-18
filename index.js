// Your code here
function mapToNegativize (sourceArray) {
  let NewArr =[];
  for (let i =0 ; i< sourceArray.length; i++) {
    NewArr.push(sourceArray[i]* -1) ;
  }
return NewArr;
}
function mapToNoChange (sourceArray) {
  let NewArr =[];
  for (let i =0 ; i< sourceArray.length; i++) {
    NewArr.push(sourceArray[i]) ;
  }
return NewArr;
}

function mapToDouble(sourceArray){
    let newArr= [];
  for(let i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] * 2);
  }
  return newArr;
}
function mapToSquare(sourceArray) {
      let newArr= [];
  for(let i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] ** 2);
  }
  return newArr;
}
function reduceToTotal(sourceArray, startingPoint = 0){
  let total= startingPoint;
  for(let i = 0;i < sourceArray.length; i++){
   total  = total + sourceArray[i];
}
return total;
}
function reduceToAllTrue(sourceArray) {
  for(let i = 0;i < sourceArray.length; i++){
    if (!sourceArray[i])
    {
      return false;
    }
}
return true;
}
function reduceToAnyTrue(sourceArray) {
  for(let i = 0;i < sourceArray.length; i++){
    if (sourceArray[i])
    {
      return true;
    }
}
return false;
}
