import React, { Component } from 'react';
import HG from './HG'; // This is nesting components since your importing a file and putting it into another file
import AddHG from './AddHG';

class App extends Component {// Hey! Once your here it best to delete the code that's a default so that you can create your very own react app
  state = {
    HGI : [
       { name:"Ryu", age:"35", belt:"Black", id: 1 },
       { name:"Bobby", age:"32", belt:"Pink", id: 2 },
       { name:"Ryu", age:"35", belt:"Black", id: 3 }
        ]   
  } 
  addHGs = (HeC) => {
      HeC.id = Math.random(); // grabs the id and the 'Math.random()' just grabs any random number with it
      let HGI = [...this.state.HGI, HeC];// grabs the array and spreading it out in it's different components and putting it into the HGI inside the setState Object
      this.setState({ // taking the HGI property and assinging it a new array value 
          HGI: HGI 
      })
      
  }
  deleteHG = (id) => { //deletes data from the HGI object, depending on what it calls
     let HGI = this.state.HGI.filter(HeC => {
         return HeC.id !== /* is not*/ id // means if the HeC.id is equal to the id then it will return false and filter the id out of the array, 
         //but if it doesn't it will remain true and stay in the page
     });
     this.setState({
         HGI: HGI
     })
     
     // console.log(id); // once trying to delete the object you make, it put's a random number, 
      //to the math.random called while using the HGIs.id
  
      }
      componentDidMount(){ // Fires when the component first fires the DOM, Component is mounted to the DOM... shown in console
          console.log('component mountain');
      }
      componentDidUpdate(prevProps, prevState){ // updates what has occured in the page, and what it was after updating and what it was before being updated
          console.log('component updated');
          console.log(prevProps, prevState);
      }
  render() {
    return (
      <div className="App">
       <h1>My First React App</h1>
       <p>Welcome :0</p>
       <HG deleteHG={this.deleteHG} HGI={this.state.HGI} />
       <AddHG addHGs={this.addHGs}/>
       </div>
      // the HG tag is just calling the data in the HG.js file and merging it with the App.js file
    );
  }
}

export default App;
// All of this is stuff we have done throught learning REACT and it's states