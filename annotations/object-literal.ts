// Array
let colors: string[] = ['red', 'green', 'blue']
let error: string[] = [2, 'green', 'blue']

let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]


// Classes 
// create classes with capital letter - C 
class Car {

}
// variable car is refered to an instance of a car
let car: Car = new Car()


// Object literal 
// put ; only when you separate different property names
let point: {x: number; y: number } = {
    x: 10,
    y: 40
}


/*

let colors: string[] = ['red', 'green', 'blue']
1. TS says that with variable colors only array can be used

let error: string[] = [2, 'green', 'blue']
2. Type 'number' is not assignable to type 'string'

*/