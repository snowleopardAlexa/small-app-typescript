// we add it to fix long type annotation
// we can assign any type we want inside interfaces not only primitive values 
// we can assign functions property and instances
interface Reportable {
    summary(): string
}

// define an object car and add object properties
const oldFerrari = {
  name: 'ferrari',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// define an object drink and add object properties
const drink = {
    color: 'blue',
    carbonated: true,
    sugar: 30,
    summary(): string {
      return `My drink has: ${this.sugar} grams of sugar`
    }
  }

// this type annotation is TOO LONG 
// pass an interface object Vehicle 
const printSummary = (item: Reportable): void => {
 console.log(item.summary())
}

// resusable code 
// we can write different objects and use it with one single interface 
printSummary(oldFerrari)
printSummary(drink)

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

/*

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

*/

/*

// we add it to fix long type annotation
// we can assign any type we want inside interfaces not only primitive values 
// we can assign functions property and instances
interface Vehicle {
    name: string
    year: Date
    broken: boolean
    summary(): string
}

// define an object car and add object properties
const oldFerrari = {
  name: 'ferrari',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// this type annotation is TOO LONG 
// pass an interface object Vehicle 
const printVehicle = (vehicle: Vehicle): void => {
 console.log(vehicle.summary())
}

printVehicle(oldFerrari)

*/

/*

// we can delete properties and call them only on function 
// we change name of function and interface
interface Reportable {
    summary(): string
}

// define an object car and add object properties
const oldFerrari = {
  name: 'ferrari',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// this type annotation is TOO LONG 
// pass an interface object Vehicle 
const printSummary = (item: Reportable): void => {
 console.log(item.summary())
}

printSummary(oldFerrari)


*/

