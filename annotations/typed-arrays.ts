// type inference works 
const carMakers = ['ford', 'toyota', 'ferrari']

// type annotations 
const carMakers: string[] = ['ford', 'toyota', 'ferrari']

// whenever you have to initialize an empty array - ADD TYPE ANNOTATION
// otherwise you will get ANY 
const carLovers = [];

// whenever you have to initialize an empty array - ADD TYPE ANNOTATION
const carLovers: string[] = [];

// help with inference when extracting values 
const car = carMakers[0]
// remove last element from array 
const myCar = carMakers.pop()

// prevent incompatible values 
carMakers.push(100)

// help with 'map'
carMakers.map((car: string): string => {
    return car
})

// flexible types 
// we added TA and we overwritten TI
// add TA to arrays with multiple values! ALWAYS!
const imporantDates: (Date | string)[] = [new Date(), '2030-10-10']
imporantDates.push('2034-10-10');
imporantDates.push(new Date());

