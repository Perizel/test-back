import './App.css';
import React from 'react';
import Parse from 'parse/dist/parse.min.js';
import { LoginComponent } from './LoginComponent';
import { RegisterComponent } from './RegistrationComponent';

// Your Parse initialization configuration goes here
const PARSE_APPLICATION_ID = 'DaQIxkbyt1lhpQXNlr6VMaVAm8gt8fP4D0CSWpDm';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'CantoBLPAplvPBikUKkAXKzTcJJdgGYSBf8YDDTy';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginComponent />
        <RegisterComponent />
      </header>
    </div>
  );
}

export default App;
