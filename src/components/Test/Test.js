import React, { Component } from 'react';

// Application lifecycle methods

class Test extends Component {
  state = {
  	name: '',
  	email: ''
  };

  componentDidMount() { // Code in here will run if and when the component mounted
  	fetch('https://jsonplaceholder.typicode.com/users/1')
  		.then(response => response.json())
  		.then(data => this.setState({
  			name: data.name,
  			email: data.email
  		})
  	);
  }
   	render() {
  	const {name, email} = this.state;
  	return (
  		<div>
  			<h1>{name}</h1>
  			<h2>{email}</h2>
  		</div>
  	);
  }
}
export default Test;



