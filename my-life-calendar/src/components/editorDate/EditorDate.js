import React, { Component } from 'react';
import './editorDate.css';

class EditorDate extends Component {
  render() {
    return (
      <div className="editor__date">
        <label className="label" for="date">Fecha</label>
        <input className="cell" id="date" type="date" onChange= {this.props.handleDate}></input>
      </div>
    );
  }
}

export default EditorDate;
