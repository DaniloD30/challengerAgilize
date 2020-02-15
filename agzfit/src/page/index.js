import React, { Component } from 'react';
import Card from '../components/card/index.js';
import './styles.css';
import logo from '../assets/img/agzfit.png';

class Main extends Component {
  // state = {

  //     }
  // }

  componentDidMount = () => {
  }

  loadData = () => {


  };

  render() {
    return (
      <div className="divPrincipal">
        <div className="logo">
          <img src={logo} />
      </div>
        <div className="card">
          <Card />
        </div>
      </div>
    )
  }
}

export default Main;