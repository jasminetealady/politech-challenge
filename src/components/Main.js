import React, { Component } from 'react';
import Favorites from './Favorites.js';
import Search from './Search.js';

class Main extends Component {
	state = {
		likedGifs: []
	};

	setLikedGifs = gifs => {
		this.setState({ likedGifs: gifs });
	};

	render() {
		return (
			<>
				<div className="Main">
					<Search setLikedGifs={this.setLikedGifs} />
					<Favorites likedGifs={this.state.likedGifs} />
				</div>
			</>
		);
	}
}

export default Main;
