// Your code here
function mapToNegativize(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(-1 * arr[i])
  }
  return newArr
}

function mapToNoChange(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(arr[i])
  }
  return newArr
}

function mapToDouble(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(2 * arr[i])
  }
  return newArr
}

function mapToSquare(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++ ) {
    newArr.push(arr[i] * arr[i])
  }
  return newArr
}
function reduceToTotal(arr, startingPoint=0) {
  let sum = startingPoint
  for (let i = 0; i < arr.length; i++ ) {
    sum = sum + arr[i]
  }
  return sum
}

function reduceToAllTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (!arr[i]) return false
  }
  return true
}

function reduceToAnyTrue(arr) {
  for (let i = 0; i < arr.length; i++ ) {
    if (arr[i]) return true
  }
  return false
}