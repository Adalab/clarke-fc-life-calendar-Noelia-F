import React, { Component } from 'react';
import './editorComments.css';

class EditorComments extends Component {
  render() {
    return (
      <div className="editor__comments">
        <label className="label" for="comment">Mensaje</label>
        <input className="cell" id="comment" type="text"></input>
      </div>
    );
  }
}

export default EditorComments;
