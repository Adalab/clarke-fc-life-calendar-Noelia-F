import React, { Component } from 'react';
import './calendarCard.css';
import happy from './happy.svg';
import sad from './sad.svg';

class CalendarCard extends Component {
  render() {
    return (
      <div>
          <div className="icon">
            {this.props.mood === 'happy' ?
            <img className="icon" src={happy} alt={this.props.mood} title={this.props.date} /> :
            <img className="icon" src={sad} alt={this.props.mood} title={this.props.date} />
          }
          </div>
          <div className="details__label">
            <p>{this.props.date}</p>
          </div>
          <div className="details__comments">
            <p>{this.props.message}</p>
          </div>
      </div>
    );
  }
}

export default CalendarCard;
