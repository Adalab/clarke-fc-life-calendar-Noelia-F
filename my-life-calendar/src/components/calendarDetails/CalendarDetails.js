import React, { Component } from 'react';
import './calendarDetails.css';
import App from '../../app/App';
import {Link, Route, Switch} from 'react-router-dom';

class CalendarDetails extends Component {
  render() {
    return (
      <div className="details">
        <div className="details__box">
          <Link className="link" to='/'>
            <div className="details_close">
              <p>Close</p>
            </div>
          </Link>

          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
          <div className="icon">
            <p>1</p>
          </div>
          <div className="details__label">
            <p>21/03/2017</p>
          </div>
          <div className="details__comments">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at lacus leo.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CalendarDetails;
