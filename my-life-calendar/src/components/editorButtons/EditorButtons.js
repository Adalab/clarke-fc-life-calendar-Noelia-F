import React, { Component } from 'react';
import './editorButtons.css';

class EditorButtons extends Component {
  render() {
    return (
      <div className="editor__buttons">
        <input className="button" type="submit" value="GUARDAR"></input>
        <input className="button button--cancel" type="button" value="CANCELAR"></input>
      </div>
    );
  }
}

export default EditorButtons;
