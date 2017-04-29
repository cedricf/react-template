import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import About from '../about/AboutPage';
import Home from '../home/HomePage';

class Main extends React.Component {
  render() {
    return (
      <main>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
          </Switch>
        </main>);
  }
}

export default Main;