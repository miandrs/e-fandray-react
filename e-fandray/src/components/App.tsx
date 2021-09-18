import '../styles/Header.css';
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Chat } from './Chat';
import { Header } from './Header';
import { Home } from './Home';
import { Profile } from './Profile';

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
        <Route exact path="/profile">
              <Profiles />
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

class Profiles extends React.Component {
  render() {
    return(
      <Profile />
    ) 
  }
}

export { App }