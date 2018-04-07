import React, { Component } from 'react';
import NavTerm from './NavTerm.js';
import "bootstrap/dist/css/bootstrap.css";

export default class NavList extends Component {
  render() {
    let terms = this.props.terms;
    const activeIndex = this.props.activeIndex;
    const onNavTermClick = this.props.onNavTermClick;

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
          terms.map((term, index) => {
            if (index === activeIndex )  {
              return (<li className="active" key={index}><NavTerm term={term} onNavTermClick={onNavTermClick} index={index} /></li>);
            } else {
              return (<li key={index}><NavTerm term={term} onNavTermClick={onNavTermClick} index={index} /></li>);
            }
        })}
        <button type="button" className="btn btn-default btn-group-justified">New</button>
      </ul>
      </div>
    );
  }

}
