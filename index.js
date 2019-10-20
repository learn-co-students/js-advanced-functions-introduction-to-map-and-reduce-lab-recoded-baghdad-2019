function mapToNegativize(sourceArray){
  let arrays =[]
  arrays = sourceArray.map(x=>x*-1);

  return arrays
}

function mapToNoChange(array) {
    return array;
}

function mapToDouble(array) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        answer.push(array[i] * 2);
    }
    return answer;

}

function mapToSquare(array) {
    let answer = [];
    for (let i = 0; i < array.length; i++) {
        answer.push(array[i] * array[i])

    }
    return answer;
}

function reduceToTotal(array, startpoint = 0) {
    let answer = startpoint;
    for (let i = 0; i < array.length; i++) {
        answer += array[i];


    }
    return answer;
}

function reduceToAllTrue(array) {
    let answer = true;
    for (let i = 0; i < array.length; i++) {
        answer = answer && !!array[i]
    }
    return answer;
}

function reduceToAnyTrue(array) {
    let answer = false;
    for (let i = 0; i < array.length; i++) {
        answer = answer || !!array[i]
    }
    return answer;}
function mapToNegativize(array){
  let answer = [];
  for(i=0;i<=answer.length;i++){
    
  }

}