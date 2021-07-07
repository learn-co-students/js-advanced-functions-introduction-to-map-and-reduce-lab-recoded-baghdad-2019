// Your code here
function mapToNegativize(arr){
  let sol = []
  for (let i=0; i < arr.length ; i++){
      sol.push(-arr[i])
    }
  return sol;
}

function mapToNoChange(arr){
  return arr;
}

function mapToDouble(arr){
  let sol = []
  for (let i=0; i < arr.length ; i++){
      sol.push(arr[i]*2)
    }
  return sol;
}

function mapToSquare(arr){
  let sol = []
  for (let i=0; i < arr.length ; i++){
      sol.push(arr[i]*arr[i])
    }
  return sol;
}

function reduceToTotal(arr, sp=0){
  let sol = sp
  for (let i=0; i < arr.length ; i++){
      sol += arr[i]
    }
  return sol;
}

function reduceToAllTrue(arr){
  let sol = true
  for (let i=0; i < arr.length ; i++){
      sol = sol && !!arr[i]
    }
  return sol;
}

function reduceToAnyTrue(arr){
  let sol = false
  for (let i=0; i < arr.length ; i++){
      sol = sol || !!arr[i]
    }
  return sol;
}
