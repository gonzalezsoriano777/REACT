const initState = {
 posts: [
     {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet feiuf,jk fiuuukhf'},
     {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet feiuf,jk fiuuukhf'},
    {id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet feiuf,jk fiuuukhf'}
     ]   
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
      let newPosts = state.posts.filter(post => {
        return action.id !== post.id
      });
      return {
       ...state,
       posts: newPosts
      }
    }
    return state; // since your returning the state, the state to begin with is going to the be initState.. Returning the value of whatever is inside the state itself
}

export default rootReducer