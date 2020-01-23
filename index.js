// Your code here
function mapToNegativize(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(-1 * def[i])
  }
  return v
}

function mapToNoChange(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(def[i])
  }
  return v
}

function mapToDouble(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(2 * def[i])
  }
  return v
}

function mapToSquare(def) {
  let v = []
  for (let i = 0; i < def.length; i++ ) {
    v.push(def[i] * def[i])
  }
  return v
}

function reduceToTotal(def, startPoint=0) {
  let tot = startPoint
  for (let i = 0; i < def.length; i++ ) {
    tot = tot + def[i]
  }
  return tot
}

function reduceToAllTrue(def) {
  for (let i = 0; i < def.length; i++ ) {
    if (!def[i]) return false
  }
  return true
}

function reduceToAnyTrue(def) {
  for (let i = 0; i < def.length; i++ ) {
    if (def[i]) return true
  }
  return false
}
