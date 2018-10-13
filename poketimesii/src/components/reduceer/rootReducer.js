const initState = {
 posts: []   
}

const rootReducer = (state, action) => {
    return state; // since your returning the state, the state to begin with is going to the be initState.. Returning the value of whatever is inside the state itself
}

export default rootReducer