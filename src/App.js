import React, { Component } from 'react';
import Header from './Header';
import Books from './Book'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Books />
      </div>
    );
  }
  }

export default App;
