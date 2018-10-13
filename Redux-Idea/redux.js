const { createStore } = Redux;

const initState = { // state is the state of the store, this passes the intial state into the 'create store'
    todos: [], 
    posts: []
    
}

function myReducer(state = initState, action){

    
}
const store = createStore(myReducer); // Pass a reducer into the store as parameters so we know they are both linked together