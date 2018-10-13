const { createStore } = Redux;

const initState = { // state is the state of the store, this passes the intial state into the 'create store'
    todos: [], 
    posts: []
    
}

function myReducer(state = initState, action){
    console.log(action, state)
    
}
const store = createStore(myReducer); 

const todoAction = { type: 'ADD_TODO', todo: 'buy milk'}

store.dispatch(todoAction) // dispatch this todoAction which is gonna send it to the reducer