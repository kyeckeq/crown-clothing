import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
import { checkUserSession } from './redux/user/user.actions';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

class App extends React.Component {
   unsubscribeFromAuth = null;

   componentDidMount() {
      const { checkUserSession } = this.props;
      checkUserSession();
   }

   componentWillUnmount() {
      this.unsubscribeFromAuth();
   }

   render() {
      return (
         <div className="App">
            <Header />
            <Switch>
               <Route path="/shop" component={ShopPage} />
               <Route exact path="/checkout" component={CheckoutPage} />
               <Route
                  exact
                  path="/signin"
                  render={() => (!!this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)}
               />
               <Route exact path="/" component={HomePage} />
            </Switch>
         </div>
      );
   }
}

const mapDispatchToProps = dispatch => ({
   checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = state =>
   createStructuredSelector({
      currentUser: selectCurrentUser,
      collectionsArray: selectCollectionsForPreview
   });

export default connect(mapStateToProps, mapDispatchToProps)(App);
