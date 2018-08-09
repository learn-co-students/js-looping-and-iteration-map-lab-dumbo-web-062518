// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(item => item.toLowerCase())
}

function nameToAttributes(collection) {
  return collection.map(item => {
    const name = item.split(" ")
    return Object.assign({}, {firstName: name[0], lastName: name[1]})
  })
}

function attributesToPhrase(collection) {
  return collection.map(item => `${item.name} is from ${item.hometown}`)
}
