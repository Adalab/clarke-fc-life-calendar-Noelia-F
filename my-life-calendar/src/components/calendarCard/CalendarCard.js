import React, { Component } from 'react';
import './calendarCard.css';
import CalendarDetails from '../calendarDetails/CalendarDetails.js';
import {Link, Route, Switch} from 'react-router-dom';

class CalendarCard extends Component {
  render() {
    return (
      <div>
        <Link className="link" to={`/details`}>
          <div className="icon">
            <p>1</p>
          </div>
        </Link>
        <Switch>
        <Route exact path={`/details`} render = {() =>
          <CalendarDetails /> }/>
        </Switch>
      </div>
    );
  }
}

export default CalendarCard;
