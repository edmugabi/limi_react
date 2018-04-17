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
   const activeIndex = this.props.activeIndex;
   console.log("Active Id", activeIndex);
   console.log("Terms", terms);
   {/*Removing a currently selected Item causes a bug, because its id cannot be found after*/}
   const expr = terms[activeIndex].expr;
   
   const expr_terms = expr.map(function(id) {
     let term = terms[id];
     term["id"] = id;
     return term;
   });

   const nameText = this.props.nameText;
   const descText = this.props.descText;
   const onRemoveExprTerm = this.props.onRemoveExprTerm;

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
       <ExprList expr_terms={expr_terms} onRemoveExprTerm={onRemoveExprTerm}/>
       <h5>Value:</h5>
       <div>3</div>
       <button type="button" className="btn btn-default pull-right"
         onClick={this.props.onSave} >Save</button>
     </div>
   );
 }
}

export default TermDisplay;
