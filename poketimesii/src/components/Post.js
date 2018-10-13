import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postAcions'


class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id); // calling a function that calls the id in the very bottom to execute a delete post request
        this.props.history.push('/'); // redirects you to the page you want when you delete something
    }
    render(){
        console.log(this.props)
    const post = this.props.post ? (
        <div className="post"> 
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <div className="center">
         <button className="btn grey" onClick={this.handleClick}>
          Delete Button
         </button>
        </div>
        </div>
       
        ) : (
             <div className="center">Loading post..</div>
            
        )    
        
    return (
        <div className="container">
           { post } 
        </div>
        
    )
  }
}

const MapStatetoProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id) // cycle through the post of the state object, look for the id of each one and if it matches the 'let id' we have then it will return it as that post 
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) } // it should work the same as the last lesson.. this is an action creator :)
    }
}



export default connect(MapStatetoProps, mapDispatchtoProps)(Post)  