// Code your solution in this file.
function lowerCaseDrivers(drivers){
	return drivers.map((driver) => driver.toLowerCase())
}

function nameToAttributes(drivers){
	return drivers.map((driver) => {
		const driver_array = driver.split(" ")
		return Object.assign({firstName: driver_array[0], lastName: driver_array[1]})
	})
}

function attributesToPhrase(drivers){
	return drivers.map(function(driver){
		return `${driver.name} is from ${driver.hometown}`
	})
}