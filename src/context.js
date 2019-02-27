import React, {Component} from 'react';
//import axios from 'axois';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
	case 'DELETE_CONTACT':
		return {
			...state,
			contacts: state.contacts.filter(contact => contact.id !== action.payload
			)
		};
	case 'ADD_CONTACT':
		return {
			...state,
			contacts: [ action.payload, ...state.contacts ]
		};
	default:
		return state;
	}
};

// This will be the global state of the app that everything works off of.
export class Provider extends Component {

  state = {
  	contacts: [],
  	dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
  	fetch('https://jsonplaceholder.typicode.com/users')
  	.then(res => res.json())
  	.then(res => this.setState({contacts: res}));
  }
  render() {
  	return (
  		<Context.Provider value={this.state}>
  			{this.props.children}
  		</Context.Provider>
  	);
  }
}

export const Consumer = Context.Consumer;