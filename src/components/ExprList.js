import React, { Component } from 'react';
import ExprTerm from './ExprTerm.js'
import "bootstrap/dist/css/bootstrap.css";

export default class NavList extends Component {
  render() {
    let terms = this.props.terms;

    return (
      <ul className="nav nav-pills nav-stacked">
        {
          terms.map((term, index) => (
            <li key={index}>
              <ExprTerm term={term} />
            </li>
        ))}
      </ul>
    );
  }
}
