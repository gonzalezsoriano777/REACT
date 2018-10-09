import React, { Component } from 'react'


class AddHG extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value // get the target of the current element were on and the value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state) 
    }
    render(){
    return (
        <div>
         <form onSubmit={this.handleSubmit}>
           <label htmlFor="name">Name:</label>
           <input type="text" id="name" onChange={this.handleChange} />
           <label htmlFor="name">Age:</label>
           <input type="text" id="age" onChange={this.handleChange} />
           <label htmlFor="name">Belt:</label>
           <input type="text" id="belt" onChange={this.handleChange} />
           <button>Submit</button>
           </form>
         </div>
        )
    }
}

export default AddHG // must export the component here to import it to another file 