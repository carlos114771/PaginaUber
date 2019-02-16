import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Componentes/NavBar.js";
import Login from "./Componentes/Login.js";


class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar>
          
        </NavBar>
        {/*<Login></Login>*/}
      </div>
    );
  }
}

export default App;
