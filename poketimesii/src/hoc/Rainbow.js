import React from 'react'

const Rainbow = (WrappedComponent) => { // taking the wrapped component export it and use it on the component itself
    
    const colours = ['red', 'pink', 'orange', 'blue', 'green', 'yellow'];
    const randomColour = colours[Math.floor(Math.random() * 5)];
    const className = randomColour + '-text';
    
    return (props) => {
        return (
         <div className={className}>
            <WrappedComponent {...props} />
         </div>    
        )
    }
}

export default Rainbow