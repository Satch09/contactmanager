import React, { Component } from 'react';
import Contact from './Contact';
import contacts from './contactInfo';

class Contacts extends Component {
  state = {contacts}
  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
          key={contact.id}
          contact={contact}
          />
        ))}
      </div>
    );
  }
}
export default Contacts;
