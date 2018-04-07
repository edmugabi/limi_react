import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class NavTermControls extends Component {

  render() {
    return (
      <div className="col-sm-4">
        <span className="btn  glyphicon glyphicon-chevron-right pull-right"></span>
        <span className="btn  glyphicon glyphicon-trash pull-right" ></span>
      </div>
    );
  }
}
