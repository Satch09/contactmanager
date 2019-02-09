import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import {Provider} from './context';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
class App extends Component {
	render() {
		return (
			<Provider>
				<div className="App">
					<div className="container">
						<Header/>
						<Contacts/>
					</div>
				</div>
			</Provider>
		);
	}
}

export default App;
