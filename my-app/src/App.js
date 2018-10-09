import React, { Component } from 'react';
import HG from './HG'; // This is nesting components since your importing a file and putting it into another file
// import './App.css';

class App extends Component {// Hey! Once your here it best to delete the code that's a default so that you can create your very own react app
  state = {
    HGI : [
       { name:"Ryu", age:"35", belt:"Black", id: 1 },
       { name:"Bobby", age:"32", belt:"Pink", id: 2 },
       { name:"Ryu", age:"35", belt:"Black", id: 3 }
        ]   
  } 
  render() {
    return (
      <div className="App">
       <h1>My First React App</h1>
       <p>Welcome :0</p>
       <HG HGI={this.state.HGI} />
       </div>
      // the HG tag is just calling the data in the HG.js file and merging it with the App.js file
    );
  }
}

export default App;
// All of this is stuff we have done throught learning REACT and it's states