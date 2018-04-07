import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


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

ReactDOM.render(<App terms={terms}/>, document.getElementById('root'));
registerServiceWorker();
