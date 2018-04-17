import React, { Component } from 'react';
import NavTerm from './NavTerm.js';
import "bootstrap/dist/css/bootstrap.css";

export default class NavList extends Component {
  render() {
    let terms = this.props.terms;
    const activeIndex = this.props.activeIndex;
    const onNavTermClick = this.props.onNavTermClick;
    const onDelete = this.props.onDelete;
    const addToCurrentTerm = this.props.addToCurrentTerm;


    console.log("activeIndex", activeIndex);

    return (
      <div>
      <div className="input-group">
        <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
        <span className="glyphicon glyphicon-search input-group-addon"></span>
      </div>
      <br />
      <ul className="nav nav-pills nav-stacked">
        {
          Object.keys(terms).map(function(keyId, keyIndex) {
            const term = terms[keyId];

            if (keyId === activeIndex )  {
              return (<li className="active" key={keyId}><NavTerm term={term} onNavTermClick={onNavTermClick}
                index={keyId} onDelete={onDelete} addToCurrentTerm={addToCurrentTerm}
               /></li>);
            } else {
              return (<li key={keyId}><NavTerm term={term} onNavTermClick={onNavTermClick} index={keyId}
                  onDelete={onDelete} addToCurrentTerm={addToCurrentTerm}
               /></li>);
            }
          })
}
        <button type="button" className="btn btn-default btn-group-justified"
          onClick={this.props.onNew} >New</button>
      </ul>
      </div>
    );
  }

}
