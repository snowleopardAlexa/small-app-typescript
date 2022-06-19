// we add it to fix long type annotation
interface Vehicle {
    name: string
    year: number
    broken: boolean
}

// define an object car and add object properties
const oldFerrari = {
  name: 'ferrari',
  year: 2000,
  broken: true
}

// this type annotation is TOO LONG 
// pass an interface object Vehicle 
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldFerrari)

/*

// define an object car and add object properties
const oldFerrari = {
  name: 'ferrari',
  year: 2000,
  broken: true
}

// this type annotation is TOO LONG 
const printVehicle = (vehicle: {name: string; year: number; broken: boolean }): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Year: ${vehicle.year}`)
  console.log(`Broken: ${vehicle.broken}`)
}

printVehicle(oldFerrari)

*/
