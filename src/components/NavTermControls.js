import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class NavTermControls extends Component {

  constructor(props) {
    super(props)

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, index) {
    console.log(this.props.onDelete)
    this.props.onDelete(index)
  }

  render() {
    const index = this.props.index;
    return (
      <div className="col-sm-4">
        <span className="btn  glyphicon glyphicon-chevron-right pull-right"></span>
        <span className="btn  glyphicon glyphicon-trash pull-right" onClick={(e) => this.handleDelete(e, index )} ></span>
      </div>
    );
  }
}
