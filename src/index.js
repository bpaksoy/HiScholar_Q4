import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import { Dashboard } from './components/layouts';
import "babel-polyfill";
import "isomorphic-fetch";
import { BrowserRouter as Router, Route, Link, hashHistory} from "react-router-dom";

const app = (
	<Provider store={store.configure(null)}>
	 <Router history={hashHistory}>
		  <Route path="/" component={Dashboard}>
			</Route>
	 </Router>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
