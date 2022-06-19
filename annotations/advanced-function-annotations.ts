// we must add Type Annotation
const add = (a: number, b: number): number => {
  return (a + b)
}


// TS does not tell you we make mistake inside function 
// TS returns void - hover on variable subtract
const substract = (a: number, b: number) => {
    a - b
}

// this is why we must ALWAYS use TA at the end of the function
// TS returns number - hover on variable divide
const divide = (a: number, b: number): number  => {
    return a / b
}

// anoynous functions

const multiple = function(a: number, b: number): number {
 return a * b
}

// void & never 

// no return value 
const logger = (message: string): void => {
    console.log(message)

    // error because of VOID - it supposed to return nothing
    return 'jdjdjd'
}

// we use NEVER if we expect that function will never return anything 
// it is RARE to do it 
const throwError = (message: string): never => {
    throw new Error(message)
}

// if we expect a function to return something but eventually it might return an error 
// we use string or whatever we expect the function is going to return 
const throwError = (message: string): string => {
    if (!message) {
        throw new Error(message)
    }

    return message
}





/*

// we add : number to tell that whatever is returned from function is a number
// error - because we does not return anything 
const add = (a: number, b: number): number => {
    

}    

// no error - we return something inside function
const add = (a: number, b: number): number => {
  return (a + b)
}    

we don't have to add TYPE ANNOTATION on return (a + b) because TYPE INFERENCE kicks in
BUT IT IS A GOOD PRACTICE TO ADD TYPE ANNOTATION

*/

/*

// TS does not tell you we make mistake inside function 
const substract = (a: number, b: number) => {
    a - b
}

// this is why we must ALWAYS use TA at the end of the function
const substract = (a: number, b: number): number  => {
    return a - b
}
*/

