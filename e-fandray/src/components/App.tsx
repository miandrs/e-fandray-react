import '../styles/Header.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Chat } from './Chat';
import { Header } from './Header';
import { Home } from './Home';

class App extends React.Component {
  render() {
    return(  
      <BrowserRouter>
        <Header />
        <Route exact path="/">
              <Homes />
        </Route>
        <Route exact path="/discussion">
              <Discussion />
        </Route>
      </BrowserRouter>
    )
  }
}

class Discussion extends React.Component {
  render() {
    return(
      <Chat />
    )
  }
}

class Homes extends React.Component {
  render() {
    return(
      <Home />
    ) 
  }
}
export { App }