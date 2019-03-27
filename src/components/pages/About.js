import React from 'react';


export default props => {
	return (
		<div>
			<h1 className="display-4">About Contact Manager</h1>
			<p className="lead">Simple to manage contacts</p>
			<p className="text-secondary">Version {props.match.params.version}</p>
		</div>
	);
};

