import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
        
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault(); // prevent a default action of a form to be presented
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
        
    }
    render(){
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
             <label>Add new todo:</label>
             <input type="text" onChange={this.handleChange} value={this.state.content} /> 
            </form>
        </div>
        // what the value attribute does is it gets the value of the content in which has a empty string and it can put the content and delete it as well
    )
  }
}

export default AddTodo;