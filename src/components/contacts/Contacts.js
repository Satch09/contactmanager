import React, { Component } from 'react';
import Contact from './Contact';
import {Consumer} from '../../context';


class Contacts extends Component {

    deleteContact = id => {
    	const {contacts} = this.state;
    	const newContacts = contacts.filter(contact => contact.id !== id);
    	this.setState({
    		contacts: newContacts
    	});
    };
    render() {
    	return (
    		<Consumer>
    			{value => {
    				const {contacts} = value; // To make code more readable by setting 'contacts' to 'value'
    				return(
    				// React fragments reduce unneeded divs
    					<React.Fragment>
    						<h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
    						{contacts.map(contact => (
    							<Contact
    								key={contact.id}
    								contact={contact}
    								deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    							/>
    						))}
    					</React.Fragment>
    				);
    			}}
    		</Consumer>
    	);
    }
}
export default Contacts;
