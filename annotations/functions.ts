// Function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i)
}

// When we must use Type Annotation

// a) function that returns 'any' type 
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20}

// ANY type is a BAD practice because it turns off TS checking
// it does not show an error 
// coordinates.kakakkkakaka

// add type annotation to const coordinates: { x: number; y: number }
// it shows us an error 
// coordinates.kakakkkakaka



// b) when we declare a variable on one line and initialize it later 
let words = ['cat', 'dog', 'parrot']
// if we don't add boolean - we get ANY type - a bad practice
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'dog') {
        foundWord = true; 
    }
}

// c) variable whose type can't be inferred correctly 
let numbers = [-10, -3, 50]
// we did not add TYPE ANNOTATION HERE so TS used TYPE INFERENCE by default saying numberAboveZero should be a boolean 
let numberAboveZero = false;

// we are looping over the array to check if we have numbers below zero in it
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        // error - Type 'number' is not assignable to type 'boolean'
        numberAboveZero = numbers[i]
    }
}


/*

// it is not a function 
// it is indentation 
(i: number) => void

1. Write function
2. Add TS

/*

// When to use annotations 
// a) function that returns 'any' type 

const json = '{"x": 10, "y": 20}'
const coordinates = JSON.parse(json)
console.log(coordinates) // {x: 10, y: 20}

// ANY type is a BAD practice because it turns off TS checking
coordinates.kakakkkakaka

JSON.parse method - TS has no idea what this is - can't check for correct property references
that is why it is assinging ANY type

/*

/*

// c) variable whose type can't be inferred correctly 
let numbers = [-10, -3, 50]
// we did not add TYPE ANNOTATION HERE so TS used TYPE INFERENCE by default saying numberAboveZero should be a boolean 
let numberAboveZero = false;

// we are looping over the array to check if we have numbers below zero in it
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        // error - Type 'number' is not assignable to type 'boolean'
        numberAboveZero = numbers[i]
    }
}

// c) variable whose type can't be inferred correctly 
let numbers = [-10, -3, 50]
// add Type Annotation 
let numberAboveZero: boolean | number = false;

// we are looping over the array to check if we have numbers below zero in it
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        // NO ERROR! 
        numberAboveZero = numbers[i]
    }
}

This is a bad code example - use more practical approach like finding users favorite book and not a number!!!

/*



