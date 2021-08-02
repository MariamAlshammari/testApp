import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import LoginButton from './components/LoginButton';
import Login from './Login';
import BestBooks from './BestBooks';
import Profile from './components/Profile';

class App extends React.Component {

  render() {
    console.log('app', this.props);
    // const isAuthenticated=this.props.auth0.isAuthenticated;

    return(
      <>
        <Router>
          {/* <IsLoadingAndError> */}
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
               {this.props.auth0.isAuthenticated ?
              <BestBooks/> : <Login/>}
              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">
               
               {/* {this.props.auth0.isAuthenticated ?
              <Profile/> : <Login/>} */}

{this.props.auth0.isAuthenticated &&
              <Profile/>}
              </Route>
            </Switch>
            <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
