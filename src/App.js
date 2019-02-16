import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import AddContact from './components/contacts/AddContact';
import About from './components/pages/About';
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
	// id in the about section is a variable parameter
	render() {
		return (
			<Provider>
				<Router>
					<div className="App">
						<div className="container">
							<Header branding='Contact Mananger'/>
							<Switch>
								<Route exact path='/' component={Contacts} />
								<Route exact path='/about/:version' component={About} />
								<Route exact path='/contact/add' component={AddContact} />
							</Switch>
						</div>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
