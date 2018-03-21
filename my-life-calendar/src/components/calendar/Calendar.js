import React, { Component } from 'react';
import './calendar.css';
import CalendarCard from '../calendarCard/CalendarCard.js';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <ul className="calendar__grid">
          <li className="calendar__card">
            <CalendarCard/>
          </li>
        </ul>
      </div>
    );
  }
}

export default Calendar;
