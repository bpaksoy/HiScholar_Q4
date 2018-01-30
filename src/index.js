import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import store from './stores';
import { Provider } from 'react-redux';
import { Dashboard } from './components/layouts';
import "babel-polyfill";
import "isomorphic-fetch";

const app = (
	<Provider store={store.configure(null)}>
		<Dashboard />
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
