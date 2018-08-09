// Code your solution in this file.
function lowerCaseDrivers(arr){
  const newArr = [...arr]

  return newArr.map(function(element){return element.toLowerCase()})
}

function nameToAttributes(arr){
  const newArr = [...arr]

  return newArr.map(function(element){
    const tempArr = element.split(" ")
      return Object.assign({}, {firstName: tempArr[0]}, {lastName: tempArr[1]})
  })
}

function attributesToPhrase(arr){
  const newArr = [...arr]

  return newArr.map(function(element){
    return `${element.name} is from ${element.hometown}`
  })
}
