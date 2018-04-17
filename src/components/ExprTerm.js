import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class ExprTerm extends Component {

  constructor(props) {
    super(props)

    this.handleRemoveExprTerm = this.handleRemoveExprTerm.bind(this);
  }

  render() {
    const term = this.props.term;
    const index = this.props.index;
    console.log("Calling", term.name)
    return (
      <div className="container-fluid">
        <div className="row">
          <span className="col-sm-10" >{term.name}</span>
          <span className="col-sm-10" >{term.description}</span>
          <span className="btn col-sm-2  glyphicon glyphicon-trash pull-right"
            onClick={ (e) => this.handleRemoveExprTerm(e, index)}></span>
        </div>
      </div>
    );
  }

  handleRemoveExprTerm(e, id) {
    this.props.onRemoveExprTerm(id)
  }
}
