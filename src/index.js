import "babel-polyfill";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import { Dashboard } from './components/layouts';
import "babel-polyfill";
import "isomorphic-fetch";
import { fetchAndStoreCurrentUserData } from './actions/Profile/index'
import actions from './actions/index';

const configured_store = store.configure(null);

configured_store.dispatch(fetchAndStoreCurrentUserData());

const app = (
	<Provider store={configured_store}>
		<Dashboard />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
