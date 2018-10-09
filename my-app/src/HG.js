import React from 'react'; // this whole thing is a functional component, where we don't need the state and only concerned with the UI 
import './HG.css'

const HGS = ({HGI, deleteHG}) => { 
        const HGList = HGI.map(HGIs => {
         if(HGIs.age > 20){ // this means if the age is over 20 then it stays in the page but if it isn't then it will be removed
           return (
         <div className="HGIs" key={HGIs.id}> 
         <div>Name: { HGIs.name }</div> 
          <div>Age: { HGIs.age }</div>
          <div>Belt: { HGIs.belt }</div>
         <button onClick={() => deleteHG(HGIs.id)}>Delete Hector G</button> 
         
          </div>
          // the button is now an arrow function.. since that's the only way the function for deleting attributes will work, so it not automatically going to evolk, unless the function surrounding it fires. Only fires once clicked on
          )
         } else {
          return null
        }
       })
      return(
        <div className="ninja-list">
        { HGList } 
        
         </div>
         )
        }

export default HGS