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
          <EditorDate
            handleDate={this.props.handleDate}
          />
          <EditorStatus
            handleMood={this.props.handleMood}
          />
          <EditorComments
            handleMessage= {this.props.handleMessage}
            mood = {this.props.mood}
          />
          <EditorButtons
            onClickAddMood= {this.props.handleClickAddMood}
          />
        </form>
      </div>
    );
  }
}

export default Editor;
