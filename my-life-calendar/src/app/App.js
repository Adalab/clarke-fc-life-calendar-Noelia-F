import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header.js';
import Calendar from '../components/calendar/Calendar.js';
import Editor from '../components/editor/Editor.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Calendar/>
        <Editor/>
      </div>
    );
  }
}

export default App;
