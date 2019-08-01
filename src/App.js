import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from '../src/pages/homepage-component';

function App() {

  const hatsPage = (props) => {
    console.log(props);
    return <h1>HATS PAGE</h1>
  }
  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/hats' component={hatsPage}/>
    </div>
  );
}

export default App;
