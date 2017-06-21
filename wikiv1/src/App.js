import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const URL_BASE = 'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=';
const URL_CALLBACK = '&callback=?JSON_CALLBACK';
const DEFAULT_KEYWORD = 'hello world'
class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      keyword: DEFAULT_KEYWORD, 
      result: ''
    }
    
    this.onSearchChange = this.onSearchChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.onResponse = this.onResponse.bind(this);
    this.fetchResults = this.fetchResults.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  
  onSearchChange(event){
    this.setState({keyword: event.target.value});
  }
  
  onResponse(response){
    this.setState({result:response});
    alert(response);
  }
  
  fetchResults(keyword){
    fetch(`${URL_BASE}${keyword}${URL_CALLBACK}`,{
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
      })
    .then(response => {this.onResponse(response)});
  }
  onSearchSubmit(event){
    const {keyword} = this.state;
    this.fetchResults(keyword);
    event.preventDefault();
  }

  componentDidMount(){
    const {keyword} = this.state;
    this.fetchResults(keyword);
  }
  
  render(){
    const {keyword, result} = this.state;
    if(!result) {return null;}
    return (
      <div>
        <Title />
        <form onSubmit = {this.onSearchSubmit}>
          <input type = "text" value = {keyword} onChange = {this.onSearchChange} />
          <input type = "submit" value = "Search" /> 
        </form> 
        
      </div>

    );
  }
}
const Title = () => <h1>Wikipedia Explorer</h1> 
export default App;
