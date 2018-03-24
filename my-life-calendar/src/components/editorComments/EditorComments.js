import React, { Component } from 'react';
import './editorComments.css';

class EditorComments extends Component {
  render() {
    return (
      <div className={`${ this.props.mood === 'happy'? 'editor__comments' : 'hidden' }`}>
        <label className="label" for="comment">Mensaje</label>
        <textarea className="cell" col="10" cel="40" onChange= {this.props.handleMessage}></textarea>
      </div>
    );
  }
}

export default EditorComments;
