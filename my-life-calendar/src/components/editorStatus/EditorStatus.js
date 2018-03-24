import React, { Component } from 'react';
import './editorStatus.css';

class EditorStatus extends Component {
  render() {
    return (
      <div className="editor__status">
        <h2 className="label label--status">Estado</h2>
        <div className="choose__box">
          <input className="choose" id="happy" type="radio" value="happy" name="status" onClick={this.props.handleMood} />
          <label className="label--smiley" for="happy">:)</label>
        </div>
        <div className="choose__box">
          <input className="choose" id="sad" type="radio" value="sad" name="status" onClick={this.props.handleMood} />
          <label className="label--smiley" for="sad">:(</label>
        </div>
      </div>
    );
  }
}

export default EditorStatus;
