// Code your solution in this file.
const lowerCaseDrivers = drivers => {
  return drivers.map(driver => driver.toLowerCase())
}

const nameToAttributes = drivers => {
  return drivers.map(driver => {
    let driver_split = driver.split(" ")
    return {
      firstName: driver_split[0],
      lastName: driver_split[1]
    }
  })
}

const attributesToPhrase = drivers => {
  return drivers.map(driver => 
    `${driver.name} is from ${driver.hometown}`
  )
}
