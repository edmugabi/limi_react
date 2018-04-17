import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
//import "bootswatch/journal/bootstrap.css";

import {Chance} from 'chance';

import TermDisplay from './components/TermDisplay.js';
import Header from './components/Header.js';
import NavList from './components/NavList.js';

const chance = new Chance();

class App extends Component {

  constructor(props) {
    super(props);
    const terms = {
      "59e4639b-70c8-4d12-a09c-9f123a2e3c99": {
        name: "Add",
        description: "The mathematical Add function",
        expr: [],
        value: "Add"
      },
      "07b1a4ad-9f5a-46c3-890c-0854b9456e98" : {
        name: "One",
        description: "The number 1",
        expr: [],
        value: "1"
      },
      "9b82e6ab-8adf-4826-cae0-cef62c6eb76f" : {
        name: "Two",
        description: "The number 2",
        expr: [],
        value: "2"
      },
      "392afafc-fa10-401a-863a-237490e19838" : {
        name: "Three",
        description: "The number three",
        expr: [],
        value: "3"
      },
      "1207efa3-84b5-41cf-ac5b-c1cc7bb392c5" : {
        name: "One + Two",
        description: "One Added to Two",
        expr: [
          "59e4639b-70c8-4d12-a09c-9f123a2e3c99",
          "07b1a4ad-9f5a-46c3-890c-0854b9456e98",
          "9b82e6ab-8adf-4826-cae0-cef62c6eb76f",
        ],
        value: "4"
      },
    };

    this.state = {
      activeIndex: "59e4639b-70c8-4d12-a09c-9f123a2e3c99",
      nameText: terms["59e4639b-70c8-4d12-a09c-9f123a2e3c99"].name,
      descText: terms["59e4639b-70c8-4d12-a09c-9f123a2e3c99"].description,
      terms: terms
    };

    this.onNavTermClick = this.onNavTermClick.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onNew = this.onNew.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.addToCurrentTerm = this.addToCurrentTerm.bind(this);
    this.onRemoveExprTerm = this.onRemoveExprTerm.bind(this);
  }


  render() {

    const terms = this.state.terms;

    return (
      <div>
      <Header />
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-sm-4">
          <NavList terms={terms} activeIndex={this.state.activeIndex} onNavTermClick={this.onNavTermClick}
          onNew={this.onNew} onDelete={this.onDelete} addToCurrentTerm={this.addToCurrentTerm}/>
        </div>
        <div className="col-md-6 col-sm-6">
          <TermDisplay terms={terms} activeIndex={this.state.activeIndex}
              onSave={this.onSave}
              updateName={this.updateName} updateDesc={this.updateDesc}
              nameText={this.state.nameText} descText={this.state.descText}
            onRemoveExprTerm = {this.onRemoveExprTerm} />
        </div>
        </div>
      </div>
      </div>
    );
  }

  onRemoveExprTerm(id) {
    let terms = this.state.terms;
    console.log("before remove", terms);
    const activeIndex = this.state.activeIndex;
    const idx = terms[activeIndex].expr.indexOf(id);
    if (idx > -1) {
      terms[activeIndex].expr.splice(idx, 1)
    }
    console.log("after remove", terms);
    this.setState({
      terms: terms
    });
  }

  addToCurrentTerm(id) {
    let terms = this.state.terms;
    const activeIndex = this.state.activeIndex;
    terms[activeIndex].expr.push(id);
    this.setState({
      terms: terms
    });
  }

  onDelete(id) {
    let terms = this.state.terms;
    console.log("deleting index", id);
    delete terms[id];
    this.setState({
      terms: terms
    })
  }

  onNew() {
    //this.onSave();

    let terms = this.state.terms;
    const id = chance.guid();
    terms[id] = {
      name: '',
      description: '',
      expr: [],
      value: ''
    };

    this.setState({
      activeIndex: id,
      nameText: '',
      descText: '',
      terms: terms
    });
  }

  onSave() {
    let terms = this.state.terms;
    const activeIndex = this.state.activeIndex;
    const name = this.state.nameText;
    const desc = this.state.descText;

    console.log(terms[activeIndex]);
    terms[activeIndex].name = name;
    terms[activeIndex].description = desc;

    this.setState({
      terms: terms
    });
  }

  onNavTermClick(id) {
    //this.onSave()
    const terms = this.state.terms;


    this.setState({
      activeIndex: id,
      nameText: terms[id].name,
      descText: terms[id].description
    });
    console.log("NavTerm Clicked, Index", id);
  }

  updateName(name){
    this.setState({nameText: name});
  }

  updateDesc(desc) {
    this.setState({descText: desc});
  }
}

export default App;
