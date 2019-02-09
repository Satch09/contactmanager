import React, { Component } from 'react';
import Contacts from './contacts/Contacts';
import Header from './layout/Header';
import AddContact from './contacts/AddContact';
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<div className="container">
						<Header branding='Contact Mananger'/>
						<AddContact/>
						<Contacts/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
