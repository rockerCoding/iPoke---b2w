import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavBar from "./components/layout/NavBar";
import Painel from "./components/layout/Painel";
import Carrinho from "./components/layout/Carrinho";

class App extends Component {
  render() {
    return (
     <div className="App">
       <NavBar />
       <div className="container">
        <div className="row">
          <Painel />
          <Carrinho />
        </div>
       </div>
     </div>
    );
  }
}

export default App;
