import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
  query: ""
  }

updateQuery = (query) => {
	this.setState(() => ({
    	query: query.trim()
    }))
}


  
  render() {
    const {query} = this.state
    const invertedQuery = query.split("").reverse().join("");
    return (
      <div className="App">
        <header className="App-header">
       {JSON.stringify(this.state)}
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <input type="text" placeholder="Say Something" value={query} onChange={(event) => this.updateQuery(event.target.value)} />
          <p className="echo">Echo: {invertedQuery}</p>
          <p>This should mirror the text you typed into the input field.</p>
        </div>
      </div>
    );
  }
}

export default App;
