import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header.js';
import Calendar from '../components/calendar/Calendar.js';
import Editor from '../components/editor/Editor.js';
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link className="link" to={`/editor`}>
          <Header/>
        </Link>
        <Calendar/>
        <Switch>
          <Route exact path={`/editor`} render = {() =>
            <Editor/> } />
        </Switch>
      </div>
    );
  }
}

export default App;
