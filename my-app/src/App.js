import React, { Component } from 'react';
import HG from './HG'; // This is nesting components since your importing a file and putting it into another file
// import './App.css';

class App extends Component { // Hey! Once your here it best to delete the code that's a default so that you can create your very own react app
  render() {
    return (
      <div className="App">
       <h1>My First React App</h1>
       <p>Welcome :0</p>
       <HG />
      </div>
    );
  }
}

export default App;
// All of this is stuff we have done throught learning REACT and it's states