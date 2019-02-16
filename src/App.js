import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css'

import Sidebar from './components/Sidebar'
import Layout from './components/Layout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Layout />
      </div>
    );
  }
}

export default App;
