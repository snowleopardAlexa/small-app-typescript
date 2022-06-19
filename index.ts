import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interafce - used to define the structure of objects
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    logTodo(id, title, completed)
})

// new function
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a Title of: ${title}
    Is it finished? ${completed}
   `)
}


/*  

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
    console.log(response.data)
})

1. Http GET request to URL to fetch JSON object data
2. We get PROMISE in return 
3. Run tsc index.ts in terminal to complie TS
4. Run node index.js - we can see todos printed on the screen in terminal
5. Run ts-node index.ts - combines two commands in one - tsc index.ts and node index.js

*/

/*  

interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    console.log(`
     The Todo with ID: ${id}
     Has a Title of: ${title}
     Is it finished? ${completed}
    `)
})

1. Http GET request to URL to fetch JSON object data 
2. We get PROMISE in return 
3. Create 3 variables declarations - pull properties from todo object
4. Run ts-node index.ts 
5. Add TypeScript syntax to fix errors - simple typos in properties
6. Write interface Todo, add 3 different properties that Todo has, label the type of data that each of these properties reference
7. Add Type Annotation to response.data - properties are underlined now - it tells us something is wrong
8. Hover over property to read the warning. The warning says: `Property 'ID' does not exist on type 'Todo'. Did you mean 'id'?`
9. Fix properties ID to id and Title to title
10. Hover over property finished to read the warning. The warning says `Property 'finished' does not exist on type 'Todo'`
11. Fix property from finished to completed. 
6. Run ts-node index.ts 

*/

/*

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// interafce - used to define the structure of objects
interface Todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
    const todo = response.data as Todo

    const id = todo.id
    const title = todo.title
    const completed = todo.completed

    logTodo(id, title, completed)
})

// new function
const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a Title of: ${title}
    Is it finished? ${completed}
   `)
}

1. Add new function
2. Copy console.log from previous function to a new function
3. Delete console.log from old function and call the new function inside it
4. Run ts-node index.ts - error
5. Add TS syntax to a new function. 
6. Hover over completed argument inside first function. The warning says: `Argument of type 'boolean' is not assignable to parameter of type 'string'.`
7. the logTodo functions says that second argument should be string not a boolean so you need to fix the order of function arguments. 

*/

/*

COMMON ERRORS:

The order of arguments in function 
Typos in properties

 */

