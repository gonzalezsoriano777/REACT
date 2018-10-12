import React from 'react'

const Contact = (props) => { // automatically added props to the router
//console.log(props); // if you check this in the console and go to the contact page, it makes a object(stuff that was never added, it was added by itself)
   
   /* setTimeout(() => {
        props.history.push('/about');
    }, 2000);*/ // makes the contact page switch to the about page in 2 seconds
    return (
        <div className="container">
        <h4 className="center">Contact</h4>
        <p>lorem delufdds,thjfbktedf,hef flh fluifhdkfshgfbds,j</p>
        </div>
    )
}

export default Contact