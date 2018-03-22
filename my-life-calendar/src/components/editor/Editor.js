import React, { Component } from 'react';
import './editor.css';
import EditorDate from '../editorDate/EditorDate.js';
import EditorStatus from '../editorStatus/EditorStatus.js';
import EditorComments from '../editorComments/EditorComments.js';
import EditorButtons from '../editorButtons/EditorButtons.js';

class Editor extends Component {
  render() {
    return (
      <div className="editor">
        <h1 className="editor__title">¿Que tal ha ido el día de hoy?</h1>
        <form className="editor__form" action="/signup" method="post">
          <EditorDate />
          <EditorStatus />
          <EditorComments />
          <EditorButtons />
        </form>
      </div>
    );
  }
}

export default Editor;
