import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import "bootstrap/dist/css/bootstrap.css";
import "bootswatch/journal/bootstrap.css";
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const TERMS = [
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

class TermDisplay extends Component {
  constructor() {
    super();
    this.state = {
      termData: null
    };
  }

  componentDidMount() {
    const id = this.props.id;
    let json = TERMS.find(t => t.id === id);
    this.setState({termData: json});

  }

  render() {
   const termData = this.state.termData;
   if (!termData) return <div>Loading</div>;
   return (<div>
      <h2>Name: {termData.name}</h2>
      <p>Desc: {termData.description}</p>
      <p>Expr: {termData.expr}</p>
      <p>Value: {termData.value}</p>
      <p>Id: {termData.id} </p>
   </div>);
 }
}


class App extends Component {

  constructor() {
    super();
    this.state = {
      activeTerm: 0
    };
}
  render() {
    const activeTerm = this.state.activeTerm;
    return (
      <div>
      <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        Limi App
      </Navbar.Brand>
    </Navbar.Header>
  </Navbar>
      <Grid>
        <Row>
        <Col md={4} sm={4}>
        <Nav
          bsStyle="pills"
          stacked
          activeKey={activeTerm}
          onSelect={index => {
            this.setState({ activeTerm: index });
          }}
        >
          {TERMS.map((term, index) => (
            <NavItem key={index} eventKey={index}>{term.name}</NavItem>
          ))}
        </Nav>
        </Col>
        <Col md={8} sm={8}>
          <TermDisplay key={activeTerm} id={TERMS[activeTerm].id}/>
        </Col>
        </Row>
      </Grid>
      </div>
    );
  }
}

export default App;
