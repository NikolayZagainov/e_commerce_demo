import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import SighnInAndUpPage from './pages/sighn-in-and-sighn-up/sighn-in-and-sighn-up.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact  path='/' component={HomePage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SighnInAndUpPage}/>        
      </Switch>
    </div>
  );
}

export default App;
