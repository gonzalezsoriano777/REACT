import React, { Component } from 'react';

class HG extends Component {
    render(){
        // console.log('this.props') // gives us an object that we have passed down in app.js
        const { name, age, belt } = this.props; // this is another way of calling the objects and assigning them to a variable (called de-structuring)
     return(
         <div className="hg">
         <div>Name: { name }</div> 
         <div>Age: { age}</div>
         <div>Belt: { belt}</div>
         </div>
         // this makes these component extremely re usable, using different props
        // You can use the objects you made in the App.js define the object here using the console.log and use the this method to specify each and every attribute
         )
    }
}

export default HG