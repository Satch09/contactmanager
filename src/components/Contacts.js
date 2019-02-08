import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '111-222-333'
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'jdoe@gmail.com',
          phone: '111-222-444'
        },
        {
          id: 3,
          name: 'John Smith',
          email: 'jsmith@gmail.com',
          phone: '444-222-333'
        },
      ]
    }
  }
  render() {
    const {contacts} = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact
          key={contact.id}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
          />
        ))}
      </div>
    )
  }
}
export default Contacts;
