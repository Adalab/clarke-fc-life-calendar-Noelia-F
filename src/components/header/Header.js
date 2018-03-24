import React, { Component } from 'react';
import './header.css';
import './plus2.svg';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__plus">
          <p>Añadir día</p>
        </div>
      </header>
    );
  }
}

export default Header;
