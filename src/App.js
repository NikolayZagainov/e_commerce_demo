import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.cpmponent';
import SighnInAndUpPage from './pages/sighn-in-and-sighn-up/sighn-in-and-sighn-up.component';
import Header from './components/header/header.component';
import {selectCurrentUser} from './redux/user/user.selector';
import {checkUserSession} from './redux/user/user.actions';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact  path='/' component={HomePage}/>
          <Route  path='/shop' component={ShopPage}/>
          <Route exact path='/checkout' component={CheckoutPage}/>
          <Route exact path='/signin' render={() => this.props.currentUser 
              ? (<Redirect to='/'/>) : (<SighnInAndUpPage/>)}/>        
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps= createStructuredSelector({
  currentUser: selectCurrentUser
});


export default  connect(mapStateToProps, mapDispatchToProps)(App);
