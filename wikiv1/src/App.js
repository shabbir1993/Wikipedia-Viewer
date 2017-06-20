import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function getData(){
  fetch(`https://api.github.com/users/shabbir1993`)
    .then(response => response.json())
    .then(function(result){
      alert(result);
    });
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      result: null, 
      searchTerm: ''
    }
    this.fetchData = this.fetchData.bind(this);
    this.setResult = this.setResult.bind(this);
  }
  

  fetchData(){
    fetch(`https://api.github.com/users/shabbir1993`)
    .then(response => response.json())
    .then(function(result){
      alert(result);
    });
    
  }

  setResult(result){
    alert(result);
    console.log(result);
  }

  render() {
    return (
      <div>
        <input type = "submit" value = "Display" onClick = {getData()} />
      </div>
      );
  }
}

export default App;
