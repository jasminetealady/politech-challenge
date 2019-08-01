import React, { Component } from 'react';
import Favorites from './Favorites.js';
import Search from './Search.js';

class Main extends Component {
	render() {
		return (
			<>
				<div className="Main">
					<Search />
					<Favorites />
				</div>
			</>
		);
	}
}

export default Main;
