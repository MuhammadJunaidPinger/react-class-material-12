import React, { Component } from 'react';
import './App.css';
import Router from './Config/Router'
import { store, persistor } from './Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <div className="App">
            <header className="App-header">
              <div style={{ backgroundColor: 'gray' }}>
                THIS IS HEADER
              </div>
              <Router />

              <div style={{ backgroundColor: 'gray' }}>
                This is FOOTER
              </div>

              <br />
              <br />
              <br />
            </header>
          </div>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

/*
fetch('https://opentdb.com/api.php?amount=10')
.then(res => res.json())
.then(res => console.log(res))

*/


//Redux Integration Steps
/*
1) Install react-redux redux
2) Create Store folder
3) Create index.js file inside it
4) Create rootReducer.js file inside it
5) Create action & reducer folder along with their files
6) In index.js -> configure store
*/