import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class UsuarioEntrada extends Component {
  render() {
    return(
      <div>
        <p>Usuário: 
            <input onChange={(e) => {this.props.onChange(e.target.value); }} type="text">
            {this.props.text}
            </input> 
        </p>
      </div>
    )
  }
}


class UsuarioSaida extends Component {
  render() {
    return(
      <div>
        <p> { this.props.text }</p>
        <p> Texto da segunda tarefa da disciplina de FrontEnd, professor Lucas. </p>        
      </div>
    )   
  }
}

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {labelText: 'Douglas Sales de Araujo' };    

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  /*setLabelText = (labelText) => {
    this.setState({ labelText });  
    
    <input type="text" value={this.state.value} onChange={this.handleChange}
    */
  
  render() {
    return (
      <div>
        <center>      
          <UsuarioEntrada text={ this.props.text }/>
          {/*<UsuarioEntrada text={ this.state.value} onChange={ this.handleChange }/>*/}
          <UsuarioSaida text={ this.state.labelText} />
        </center>
      </div>
    )
  }
}


 {/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header> 
  </div>
    
  );
}*/}

export default App;
