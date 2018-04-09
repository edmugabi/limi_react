import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
//import "bootswatch/journal/bootstrap.css";

import TermDisplay from './components/TermDisplay.js';
import Header from './components/Header.js';
import NavList from './components/NavList.js';

class App extends Component {

  constructor(props) {
    super(props);
    const terms = [
      {
        id: "59e4639b-70c8-4d12-a09c-9f123a2e3c99",
        name: "Add",
        description: "The mathematical Add function",
        expr: ["Add"],
        value: "Add"
      },
      {
        id: "07b1a4ad-9f5a-46c3-890c-0854b9456e98",
        name: "One",
        description: "The number 1",
        expr: ["1"],
        value: "1"
      },
      {
        id: "9b82e6ab-8adf-4826-cae0-cef62c6eb76f",
        name: "Two",
        description: "The number 2",
        expr: ["2"],
        value: "2"
      },
      {
        id: "392afafc-fa10-401a-863a-237490e19838",
        name: "Three",
        description: "The number three",
        expr: ["3"],
        value: "3"
      },
      {
        id: "1207efa3-84b5-41cf-ac5b-c1cc7bb392c5",
        name: "One + Two",
        description: "One Added to Two",
        expr: [
          "59e4639b-70c8-4d12-a09c-9f123a2e3c99",
          "07b1a4ad-9f5a-46c3-890c-0854b9456e98",
          "9b82e6ab-8adf-4826-cae0-cef62c6eb76f",
        ],
        value: "4"
      },
    ];

    this.state = {
      activeIndex: 0,
      nameText: terms[0].name,
      descText: terms[0].description,
      terms: terms
    };

    this.onNavTermClick = this.onNavTermClick.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateDesc = this.updateDesc.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onNew = this.onNew.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }


  render() {

    const terms = this.state.terms;
    const activeTerm = terms[this.state.activeIndex];

    return (
      <div>
      <Header />
      <div className="container">
        <div className="row">
        <div className="col-md-4 col-sm-4">
          <NavList terms={terms} activeIndex={this.state.activeIndex} onNavTermClick={this.onNavTermClick}
          onNew={this.onNew} onDelete={this.onDelete}/>
        </div>
        <div className="col-md-6 col-sm-6">
          <TermDisplay terms={terms} activeTerm={activeTerm}
              onSave={this.onSave}
              updateName={this.updateName} updateDesc={this.updateDesc}
              nameText={this.state.nameText} descText={this.state.descText} />
        </div>
        </div>
      </div>
      </div>
    );
  }

  onDelete(i) {
    let terms = this.state.terms;
    console.log("deleting index", i);
    terms.splice(i, 1);
    this.setState({
      terms: terms
    })
  }

  onNew() {
    this.onSave();
    const activeIndex = this.state.terms.length;
    console.log("New Active Index", activeIndex);
    this.setState({
      activeIndex: activeIndex,
      nameText: '',
      descText: ''
    });
  }

  onSave() {
    let terms = this.state.terms;
    const activeIndex = this.state.activeIndex;
    const name = this.state.nameText;
    const desc = this.state.descText;

    console.log(terms[activeIndex]);
    if (terms[activeIndex] === undefined) {
      terms[activeIndex] = {
        id: "07b1a4ad-9f5a-46c3-890c-0854b9456e98",
        name: name,
        description: desc,
        expr: [],
        value: ''
      };
    }
    else {
      terms[activeIndex].name = name;
      terms[activeIndex].description = desc;
    }
    this.setState({
      terms: terms
    });
  }

  onNavTermClick(n) {
    this.onSave()
    const terms = this.state.terms;

    this.setState({
      activeIndex: n,
      nameText: terms[n].name,
      descText: terms[n].description
    });
    console.log("NavTerm Clicked, Index", n);
  }

  updateName(name){
    this.setState({nameText: name});
  }

  updateDesc(desc) {
    this.setState({descText: desc});
  }
}

export default App;
