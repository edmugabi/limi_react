import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Limi Web</a>
          </div>
          <ul className="nav navbar-nav">
          <li className="active"><a href="#">Home</a></li>
          <li><a>About</a></li>
          </ul>
      </div>
      </nav>
    );
  }
}
