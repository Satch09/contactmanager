import React, {Component} from 'react';

// This is an uncontrolled component meaning that this component is handled by the DOM although the information can still be referenced back to React.
class AddContact extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();

  }

  onSubmit = e => {
    e.preventDefault(); // Why?
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
    console.log(contact);
  }

  static defaultProps = {
    name: 'Christopher',
    email: 'chris@gmail.com',
    phone: '111-222-333'
  }

	render() {
    const {name, email, phone} = this.props;
		return (
      <div className="card mb-3">
      <div className="card-header">Add Contact</div>
      <div className="card-body">
        <form onSubmit={this.onSubmit}>
        <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text"
        name="name"
        className="form-control form-control-lg"
          placeholder="Enter a name..."
          defaultValue={name}
          ref={this.nameInput}
        />
        </div>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email"
        name="email"
        className="form-control form-control-lg"
          placeholder="Enter an email address..."
          defaultValue={email}
          ref={this.emailInput}
        />
        </div>
        <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="phone"
        name="phone"
        className="form-control form-control-lg"
          placeholder="Enter a phone number..."
          defaultValue={phone}
          ref={this.phoneInput}
        />
        </div>
        <input type="submit" value="Add Contact"
          className="btn btn-light btn-block"
        />
        </form>
      </div>
      </div>
		);
	}
}

export default AddContact;