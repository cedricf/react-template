import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
//import { Router } from 'react-router';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';

const history = createHistory();

render ((<div>
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter></div>),
  document.getElementById('app')
);
