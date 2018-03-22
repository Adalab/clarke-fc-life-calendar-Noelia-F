import React, { Component } from 'react';
import './editorStatus.css';

class EditorStatus extends Component {
  render() {
    return (
      <div className="editor__status">
        <label className="label">Estado</label>
        <input className="choose" id="happy" type="radio" value="happy" name="happy" />
        <label className="label--smiley" for="happy">:)</label>
        <input className="choose" id="sad" type="radio" value="sad" name="sad" />
        <label className="label--smiley" for="sad">:(</label>
      </div>
    );
  }
}

export default EditorStatus;
