import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Contact
        name='Christopher Maisch'
        email='chris@gmail.com'
        phone='555-555'
        />
        <Contact
        name='Melissa Maisch'
        email='melissa@gmail.com'
        phone='555-666'
        />
      </div>
    )
  }
}

export default App;
