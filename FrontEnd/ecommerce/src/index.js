import React from 'react';

import ReactDOM from 'react-dom';
import {Route,Link,BrowserRouter as Router,Switch} from 'react-router-dom'
import App from './App';

import Header from './components/Header';
import Login from './components/Login/Login';
import ProductsList from './components/Products/ProductsList';
//import reportWebVitals from './reportWebVitals';
const routing=(
  <Router>
      <Header></Header>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route path="/viewproducts" component={ProductsList}/>
      
      <Route path="/login" component={Login}/>
      </Switch>
  </Router>
)
ReactDOM.render(
  routing,  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
