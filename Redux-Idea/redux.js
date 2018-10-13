const { createStore } = Redux;

const initState = { // state is the state of the store, this passes the intial state into the 'create store'
    todos: [], 
    posts: []
    
}

function myReducer(state = initState, action){
    if (action.type == 'ADD_TODO') {
      return {
          ...state, // grab everything in the current sate bring them into the todos and overide the todos
          todos: [...state.todos, action.todo] // speads the array of state.todos and grabs the action.todo
     }    
   }
   
   if (action.type == 'ADD_POST') {
      return {
          ...state, // grab everything in the current sate bring them into the todos and overide the todos
          todos: [...state.posts, action.post] // speads the array of state.todos and grabs the action.todo
     }    
   }
}
const store = createStore(myReducer);

store.subscribe(() => {
    console.log('state updated');
    console.log(store.getState());
})

store.dispatch({type: 'ADD_TODO', todo: 'buy milk'});
store.dispatch({type: 'ADD_TODO', todo: 'sleep some more'});
store.dispatch({type: 'ADD_POST', todo: 'Egg hunt with yoshi'});