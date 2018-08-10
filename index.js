function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(driver => driver.toLowerCase());
  return newDrivers
}

function nameToAttributes(drivers){
	return drivers.map(driver => {

  const driver_array = driver.split(" ")

  return Object.assign( {firstName: driver_array[0], lastName: driver_array[1]} )
})
}

function attributesToPhrase(drivers){
	const newDrivers2 = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
  return newDrivers2
}
