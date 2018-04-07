import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class ExprTerm extends Component {

  render() {
    const term = this.props.term;

    return (
      <div className="container-fluid">
        <div className="row">
          <span className="col-sm-10" >{term.name}</span>
          <span className="col-sm-10" >{term.description}</span>
          <span className="btn col-sm-2  glyphicon glyphicon-trash pull-right" ></span>
        </div>
      </div>
    );
  }
}
