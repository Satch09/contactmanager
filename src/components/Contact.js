import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    deleteClickHandler: PropTypes.func.isRequired
  };
  state = {
    showContactInfo: false
  };

  onDeleteClick = () => {
    this.props.deleteClickHandler();
  }

  render() { // You can use this keyword since this it is being used inside of a class which has 'this'
  const {name, phone, email} = this.props.contact;
  const {showContactInfo} = this.state;
    return (
      <div className="card card-body mb-3">
      <h4>{name}{' '}
      <i onClick={() => this.setState({showContactInfo: !this.state.showContactInfo})}
      className="fas fa-sort-down"
      style={{cursor: 'pointer'}}
      />
      <i className="fas fa-times"
      style={{
      cursor: 'pointer',
      float: 'right',
      color: 'red'
      }}
      onClick={this.onDeleteClick}
      >
      </i>
      </h4>
      {showContactInfo ? (
      <ul className="list-group">
        <li className="list-group-item">Email: {email}</li>
        <li className="list-group-item">Phone: {phone}</li>
      </ul>
      ) : null}
      </div>
    )
  }
}

export default Contact;