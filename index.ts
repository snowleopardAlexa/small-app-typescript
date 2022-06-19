// make a netwrok request to fetch some JSON and print the result
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
    console.log(response.data)
})


/*  

1. Http GET request to URL to fetch JSON data 
2. We get PROMISE in return 
3. Run tsc index.ts in terminal to complie TS
4. Run node index.js - we can see todos printed on the screen in terminal
5. Run ts-node index.ts - combines two commands in one - tsc index.ts and node index.js

*/
