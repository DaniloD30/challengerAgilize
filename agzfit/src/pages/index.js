import React, { Component } from 'react';
import './styles.css';
import logo from '../assets/img/agzfit.png';
import { Provider } from 'react-redux';
import { store, persistor } from '../store'
import { TabBottom } from '../components'
import { PersistGate } from 'redux-persist/integration/react';
import Card from '../components/card/index.js';
import './styles.css';
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="divPrincipal">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="card">
              <Card />
            </div>
            <div>

              <TabBottom />
            </div>
          </div>
        </PersistGate>
      </Provider>
    )
  }
}

export default Main;