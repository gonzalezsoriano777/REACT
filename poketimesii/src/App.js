import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom' 
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div className="App">
       <Navbar />
        <Route exact path='/' component={Home} /> 
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
         </div>
      </BrowserRouter>
      // What does the BroswerRoute do.. this applicatin can use routes and then it grabs the component of 'Home' and uses it using the forward slash 
    );
  }
}

export default App;
