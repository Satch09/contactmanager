import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Consumer} from '../../context';

class Contact extends Component {
  static propTypes = {
  	contact: PropTypes.object.isRequired
  };
  state = {
  	showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
  	dispatch({
  		type: 'DELETE_CONTACT',
  		payload: id
  	});
  }
  render() { // You can use this keyword since this it is being used inside of a class which has 'this' and also has a state
  	const {id, name, phone, email} = this.props.contact;
  	const {showContactInfo} = this.state;
  	return (
  		<Consumer>
  			{value => { const {dispatch} = value;
  				return(
  					<div className="card card-body mb-3">
  						<h4>{name}{' '}
  							<i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})} className="fas fa-sort-down" style={{cursor: 'pointer'}} />
  							<i className="fas fa-times" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, id, dispatch)} > </i>
  						</h4>
  						{showContactInfo ? (
  							<ul className="list-group">
  								<li className="list-group-item">Email: {email}</li>
  								<li className="list-group-item">Phone: {phone}</li>
  							</ul> ) : null}
  					</div>
  				);
  			}}
  		</Consumer>
  	);
  }
}

export default Contact;