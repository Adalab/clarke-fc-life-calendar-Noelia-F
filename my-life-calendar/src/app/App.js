import React, { Component } from 'react';
import './App.css';
import Header from '../components/header/Header.js';
import Calendar from '../components/calendar/Calendar.js';
import Editor from '../components/editor/Editor.js';
import {Link, Route, Switch} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      message: '',
      mood:'',
      allData:[]
    };
  }
  componentWillUpdate(nextPorps, nextState){
    localStorage.setItem('allData', JSON.stringify(nextState.allData));
  }
  componentWillMount(nextPorps, nextState){
    localStorage.getItem('allData') && this.setState ({
      allData: JSON.parse(localStorage.getItem('allData')),
    });
  }
  handleDate(event){
    const calendar = event.target.value;
    this.setState({
        date: calendar
    })
  }
  handleMood(event){
    const status = event.target.value;
    this.setState({
      mood: status
    })
  }
  handleMessage(event){
    const text = event.target.value;
    this.setState({
      message: text
    })
  }
  addMood(e){
    const mood = this.state.mood;
    const date = this.state.date;
    const message = this.state.message;
    this.setState({
      allData:[...this.state.allData, {mood, date, message}]
    });
  }
  render() {
    return (
      <div className="App">
        <Link className="link" to={`/editor`}>
          <Header/>
        </Link>
        <Calendar allData = {this.state.allData}/>
        <Switch>
          <Route exact path={`/editor`} render = {() =>
            <Editor
            calendar={this.state.date}
            mood ={this.state.mood}
            message={this.state.message}
            handleMood={(event) => this.handleMood(event)}
            handleMessage={(event) => this.handleMessage(event)}
            handleDate={(event) => this.handleDate(event)}
            handleClickAddMood={(event) => this.addMood(event)}
            /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
