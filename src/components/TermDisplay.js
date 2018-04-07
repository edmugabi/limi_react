import React, { Component } from 'react';
import ExprList from './ExprList.js';

class TermDisplay extends Component {

  constructor(props) {
    super(props);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescChange = this.onDescChange.bind(this);
  }

  componentDidMount() {}

  onNameChange(e) {
    this.props.updateName(e.target.value)
  }
  onDescChange(e) {
    this.props.updateDesc(e.target.value)
  }

  render() {
   const terms = this.props.terms;

   const nameText = this.props.nameText;
   const descText = this.props.descText;

   console.log("nameText", nameText);
   console.log("descText", descText);

   return (
     <div>
       <h5>Name:</h5>
       <input type="text" className="form-control" placeholder="Name" value={nameText}
            onChange={this.onNameChange} />
       <h5>Desc:</h5>
       <input type="text" className="form-control" placeholder="Desc" value={descText}
            onChange={this.onDescChange} />
       <h5>Expr:</h5>
       <ExprList terms={terms}/>
       <h5>Value:</h5>
       <div>3</div>
       <button type="button" className="btn btn-default pull-right">Save</button>
     </div>
   );
 }
}

export default TermDisplay;
