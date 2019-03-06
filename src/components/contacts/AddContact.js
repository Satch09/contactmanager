import React, {Component} from 'react';

// Test implementation of a controlled component - meaning that the component is controlled by React.

import { Consumer } from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/textInputGroup';

class AddContact extends Component {
  state = {
  	name: '',
  	email: '',
  	phone: '',
  	errors: {
  	}
  };

  onChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmit = (dispatch, e) => {
  	e.preventDefault();

  	const {name, email, phone} = this.state;

  	// Check for errors
  	if(name === '') {
  		this.setState({errors: {name: 'Name is required'}});
  		return;
  	}

  	if(email === '') {
  		this.setState({errors: {email: 'Email is required'}});
  		return;
  	}

  	if(phone === '') {
  		this.setState({errors: {phone: 'Phone is required'}});
  		return;
  	}

  	const newContact = {
  		id: uuid(),
  		name,
  		email,
  		phone
  	};

  	dispatch({
  		type: 'ADD_CONTACT',
  		payload: newContact
  	});
  	// Clean state upon submit
  	this.setState({
  		name: '',
  		email: '',
  		phone: '',
  		errors: {}
  	});
  	this.props.history.push('/'); // After form has been successfully submitted, the user is returned back to the home page
  	// This will add '/' to the history of the component
  };

  render() {
  	const {name, email, phone, errors} = this.state;
  	return (
  		<Consumer>
  			{value => { const {dispatch} = value;
  				return(
  					<div className="card mb-3">
  						<div className="card-header">Add Contact</div>
  						<div className="card-body">
  							<form onSubmit={this.onSubmit.bind(this, dispatch)}>
  								<TextInputGroup
  									label="Name"
  									name="name"
  									placeholder='Please enter a name...'
  									value={name}
  									onChange={this.onChange}
  									error={errors.name}
  								/>
  								<TextInputGroup
  									label="Email"
  									name="email"
  									placeholder='Please enter an email address...'
  									value={email}
  									onChange={this.onChange}
  									error={errors.email}
  								/>
  								<TextInputGroup
  									label="Phone"
  									name="phone"
  									placeholder='Please enter a phone number...'
  									value={phone}
  									onChange={this.onChange}
  									error={errors.phone}
  								/>
  								<input type="submit" value="Add Contact"
  									className="btn btn-light btn-block"
  								/>
  							</form>
  						</div>
  					</div>
  				);
  			}}
  		</Consumer>
  	);
  }
}

export default AddContact;