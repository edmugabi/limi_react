import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import NavTermControls from './NavTermControls.js'

export default class NavTerm extends Component {

  constructor(props) {
    super(props);
    this.handleNavTermClick = this.handleNavTermClick.bind(this);
  }

  render() {
    const term = this.props.term;
    const index = this.props.index;
    const onDelete = this.props.onDelete;

    return (
      <a role="button" className="container-fluid">
        <div className="row">
        <div onClick={(e) => this.handleNavTermClick(e, index)}>
          <div className="col-sm-8" >{term.name}</div>
          <div className="col-sm-8" >{term.description}</div>
          </div>
          <NavTermControls onDelete={onDelete} index={index} />
        </div>
      </a>
    );
  }

  handleNavTermClick(e, index) {
    this.props.onNavTermClick(index);
  }
}
