import React, { Component } from 'react';
import Results from './Results.js';

class Favorites extends Component {
	render() {
		return (
			<div className="Search">
				<div className="Search-Input">Search Section</div>
				<Results />
			</div>
		);
	}
}

export default Favorites;
