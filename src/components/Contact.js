import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  };

  onShowClick() {
    console.log('Hello World');
  }

  render() { // You can use this keyword since this it is being used inside of a class which has 'this'
  const {name, phone, email} = this.props.contact;
    return (
      <div className="card card-body mb-3">
      <h4>{name} <i onClick={this.onShowClick} className="fas fa-sort-down"/></h4>
      <ul className="list-group">
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
      </ul>
      </div>
    )
  }
}

export default Contact;