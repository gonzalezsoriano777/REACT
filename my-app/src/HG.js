import React from 'react'; // this whole thing is a functional component, where we don't need the state and only concerned with the UI 


const HGS = ({HGI}) => { // there's different methods to have the props show up using the const of HGS and the function executed inside it
       //const { HGI } = props; // this is another way of calling the objects and assigning them to a variable (called de-structuring)
       const HGList = HGI.map(HGIs => {
           return (
        <div className="HGIs" key={HGIs.id}> 
         <div>Name: { HGIs.name }</div> 
         <div>Age: { HGIs.age }</div>
         <div>Belt: { HGIs.belt }</div>
         </div>
               )
       })
     return(
        <div className="ninja-list">
        { HGList }
         </div>
         )
}

export default HGS