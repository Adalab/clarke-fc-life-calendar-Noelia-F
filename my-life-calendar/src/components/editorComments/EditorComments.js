import React, { Component } from 'react';
import './editorComments.css';

class EditorComments extends Component {
  render() {
    return (
      <div className="editor__comments">
        <label className="label" for="comment">Mensaje</label>
        <textarea className="cell" col="10" cel="40"></textarea>
      </div>
    );
  }
}

export default EditorComments;
