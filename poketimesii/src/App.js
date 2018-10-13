import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter> 
      <div className="App">
       <Navbar />
       <Switch>
        <Route exact path='/' component={Home} /> 
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/:post_id' component={Post} />
        </Switch> 
         </div>
      </BrowserRouter>
      // What the '/:' means once using the path attribute in the the Route is that your calling a root that has an id (name) of post_id and it bring you to that page
      )
  }
}

export default App;
