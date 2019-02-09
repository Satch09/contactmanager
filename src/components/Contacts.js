import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
  state = {
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

  render() {
    const {contacts} = this.state;
    return (
      // React fragments reduce unneeded divs
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
          key={contact.id}
          contact={contact}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
