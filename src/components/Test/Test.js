import React, { Component } from 'react';

// Application lifecycle methods

class Test extends Component {
  state = {
  	id: '',
  	title: ''
  };

  componentDidMount() { // Code in here will run if and when the component mounted
  	fetch('https://jsonplaceholder.typicode.com/todos/10')
  		.then(response => response.json())
  		.then(data => this.setState({
  			id: data.id,
  			title: data.title
  		})
  	);
  }
  /* componentWillMount() { // Code in here will run before the component is mounted
		console.log('The component will mount!');
	}
	componentDidUpdate() { // Code in here will run when the component is updated
		console.log('The component did mount!');
	}
	componentWillReceiveProps() { // Code in here will run when the component receives new (fresh properties)
		console.log('The component will receive props!');
	} */
   	render() {
  	const {id, title} = this.state;
  	return (
  		<div>
  			<h1>{id}</h1>
  			<h2>{title}</h2>
  		</div>
  	);
  }
}
export default Test;



