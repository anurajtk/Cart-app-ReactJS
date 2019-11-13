import React from 'react';
import logo from './logo.svg';
import './css/styles.css';
import Home from './components/Home';
import Order from './components/Order';


function App() {
  return (
    <div className="App container">
      <div>
        <Home/>
        <Order/>
      </div>
    </div>
  );
}

export default App;
