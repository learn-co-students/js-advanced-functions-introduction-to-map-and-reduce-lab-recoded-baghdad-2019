// Your code here

function mapToNegativize(sourceArray){
    let negSourceArray=[];
    for(let i=0;i<sourceArray.length;i++){
        negSourceArray[i]=sourceArray[i]*-1;
    }
    return negSourceArray
}
function mapToNoChange(sourceArray){
    let newArray=[];
     for(let i=0;i<sourceArray.length;i++){
        newArray[i]=sourceArray[i];
    }
    return newArray
}
function mapToDouble(sourceArray){
    let newArray=[];
     for(let i=0;i<sourceArray.length;i++){
        newArray[i]=sourceArray[i]*2;
    }
    return newArray
}
function mapToSquare(sourceArray){
    let newArray=[];
     for(let i=0;i<sourceArray.length;i++){
        newArray[i]=sourceArray[i]*sourceArray[i];
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint){
  if(startingPoint===undefined){
    startingPoint=0;
  }
    for(let i=0;i<sourceArray.length;i++){
        startingPoint+=sourceArray[i];
    }
    return startingPoint;
}

function reduceToAllTrue(sourceArray){
   let result=true;
    for(let i=0;i<sourceArray.length;i++){
        result=!!result && !!sourceArray[i]
    }
    return result
}
function reduceToAnyTrue(sourceArray){
    let result
    for(let i=0;i<sourceArray.length;i++){
        result=!!result || !!sourceArray[i]
    }
    return result
}