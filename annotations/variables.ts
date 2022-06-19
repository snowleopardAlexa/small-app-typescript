let oranges: number = 5

let speed: string = 3

let hasName: boolean = true
let nothingMuch: null = null

// we can delete all TYPE ANNOTATIONS nad the code will still work 
let nothing = undefined

// built in objects 
let now: Date = new Date()

/*

const oranges: number = 5
1. TS says that with variable oranges only number can be used

*/

/*

let speed: string = 3
1. TS says that with variable speed only string can be used this is why this code throws an error

*/

/*

we can delete all TYPE ANNOTATIONS nad the code will still work 
let nothing = undefined

1. A conflict between Type Annotations and Type Inference
2. Hover over variable - TS tells you what type is assigned by default

*/



