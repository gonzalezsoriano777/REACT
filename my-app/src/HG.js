import React, { Component } from 'react';

class HG extends Component {
    render(){
        // console.log('this.props') // gives us an object that we have passed down in app.js
        const { HGI } = this.props; // this is another way of calling the objects and assigning them to a variable (called de-structuring)
       const HGList = HGI.map(HGIs => {
           return (
        <div className="HGIs" key={HGIs.id}> 
         <div>Name: { HGIs.name }</div> 
         <div>Age: { HGIs.age }</div>
         <div>Belt: { HGIs.belt }</div>
         </div>
         // the key attribute is used if your using id inside your object. (This is used in your console since it gives you a warning about a need for a 'unique key') 
               )
       })
     return(
        <div className="ninja-list">
        { HGList }
         </div>
         )
    }
}

export default HG