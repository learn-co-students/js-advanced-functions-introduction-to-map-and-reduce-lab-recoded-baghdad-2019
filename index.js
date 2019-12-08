let i;
function mapToNegativize(sourceArray){
  let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] * -1);
  }
  return newArr;
}
function mapToNoChange(sourceArray){
    let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i]);
  }
  return newArr;
}
function mapToDouble(sourceArray){
    let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] * 2);
  }
  return newArr;
}
function mapToSquare(sourceArray) {
      let newArr= [];
  for(i = 0;i < sourceArray.length; i++){
    newArr.push(sourceArray[i] ** 2);
  }
  return newArr;
}
function reduceToTotal(sourceArray, startingPoint = 0){
  let total= startingPoint;
  for(i = 0;i < sourceArray.length; i++){
   total  = total + sourceArray[i];
}
return total;
}
function reduceToAllTrue(sourceArray) {
  for(i = 0;i < sourceArray.length; i++){
    if (!sourceArray[i])
    {
      return false;
    }
}
return true;
}
function reduceToAnyTrue(sourceArray) {
  for(i = 0;i < sourceArray.length; i++){
    if (sourceArray[i])
    {
      return true;
    }
}
return false;
}