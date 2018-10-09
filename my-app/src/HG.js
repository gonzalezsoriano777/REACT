import React from 'react'; // this whole thing is a functional component, where we don't need the state and only concerned with the UI 


const HGS = ({HGI}) => { // there's different methods to have the props show up using the const of HGS and the function executed inside it
        const HGList = HGI.map(HGIs => {
         if(HGIs.age > 20){ // this means if the age is over 20 then it stays in the page but if it isn't then it will be removed
           return (
         <div className="HGIs" key={HGIs.id}> 
         <div>Name: { HGIs.name }</div> 
          <div>Age: { HGIs.age }</div>
          <div>Belt: { HGIs.belt }</div>
          </div>
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