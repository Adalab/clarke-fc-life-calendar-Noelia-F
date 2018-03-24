import React, { Component } from 'react';
import './calendar.css';
import CalendarCard from '../calendarCard/CalendarCard.js';

class Calendar extends Component {
  render() {
    return (
      <div className="calendar">
        <ul className="calendar__grid">
        {this.props.allData.sort(function(a,b) {
            return new Date(a.date) - new Date(b.date);}).map((data) =>
          <li className="calendar__card">
            <CalendarCard
            mood={data.mood}
            date = {data.date}
            message = {data.message}
            />
          </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Calendar;
