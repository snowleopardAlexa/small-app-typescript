const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
}

// array 
const fanta = ['brown', true, 40]

// tuple 
// we add  [string, boolean, number] - and we change array into TUPLE because we specify an order of types
// we are turning the array into tuple by using type annotation
const pepsi: [string, boolean, number] = ['brown', true, 40]

// tupels with aliases 
type Drink = [string, boolean, number];

const cola: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 20]

// we use rarely tupels with TS 
// we don't know what is happening here
const carSpecs: [number, number] = [400, 2345];

// object
// we understand what is happening here because we used horepower and weight keywords 
// we converted tuple into object - this is why tupels are not used often 
const carStats = {
    horsepower: 400,
    weight: 2345
}

