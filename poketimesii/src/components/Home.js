import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

class Home extends Component {
    render(){
        console.log(this.props)
        const { posts } = this.props;
        const postList = posts.length ? (
             posts.map(post => {
                 return (
                     <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A Pokeballii"/>
                      <div className="card-content">
                      <Link to={'/' + post.id}> 
                       <span className="card-title red-text">{post.title}</span>
                       </Link>
                       <p>{post.body}</p>
                      </div>
                     </div>
                     // using the index.css and calling the a container in which has home.. then finds clas with post then using the img attribute to design to look more appealing
                )
             })
            ) : (
                <div className="center">No posts yet</div>
                )
    return (
        <div className="container home"> 
        <h4 className="center">Home</h4>
        {postList}
        </div>
        // For the index.css 
        )
    }
}

const mapStateToProps = (state) => { // get access to the state of the store
 return {
   posts: state.posts   
 }
}

export default connect(mapStateToProps)(Home) // connect is actually a function, and it's a higher order component