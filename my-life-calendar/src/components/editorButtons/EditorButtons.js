import React, { Component } from 'react';
import './editorButtons.css';
import App from '../../app/App';
import {Link, Route, Switch} from 'react-router-dom';

class EditorButtons extends Component {
  render() {
    return (
      <div className="editor__buttons">
        <Link className="link" to='/'>
          <input className="button" type="submit" value="GUARDAR"></input>
        </Link>
        <Link className="link" to='/'>
          <input className="button button--cancel" type="button" value="CANCELAR"></input>
        </Link>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </div>
    );
  }
}

export default EditorButtons;
