import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom' ;
import Home from './components/home/Home';
import SignInForm from './components/auth/SignInForm';

class App extends Component {
  render() {
    return (
      	<BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/auth/signin' component ={SignInForm}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
