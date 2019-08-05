import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from '../src/pages/homepage-component';
import ShopPage from './pages/shop/shop.component';

function App() {

  return (
    <div className="App">
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
