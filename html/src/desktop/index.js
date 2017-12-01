import '../../api-config';
import 'babel-polyfill';
import 'whatwg-fetch';
import './util';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from './components/App';



import './styles/default/style.less';


render(
  <Router history={browserHistory} >
    <Route path="/" component={App}/>
  </Router>,
  document.getElementById('hmall-container')
);
