import React, { Component } from 'react';
import ExprTerm from './ExprTerm.js'
import "bootstrap/dist/css/bootstrap.css";

export default class ExprList extends Component {
  render() {
    let expr_terms = this.props.expr_terms;
    const onRemoveExprTerm = this.props.onRemoveExprTerm;
    console.log("expr_terms", expr_terms)
    return (
      <ul className="nav nav-pills nav-stacked">
        {
          expr_terms.map(function(term, keyIndex) {
            return (
            <li key={keyIndex}>

              <ExprTerm term={term} onRemoveExprTerm={onRemoveExprTerm} index = {term.id}/>
            </li>);

          })
        }
      </ul>
    );
  }
}
