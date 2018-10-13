import React, { Component } from 'react'
import { connect } from 'react-redux'


class Post extends Component {
    render(){
        
    const post = this.props.post ? (
        <div className="post"> 
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
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

export default connect(MapStatetoProps)(Post)