import React, { Component } from 'react';
import GIF from './GIF.js';

class Favorites extends Component {
	render() {
		let gifsLeft = this.props.userData.gifsLeft;
		let likedGifs = this.props.userData.likedGifs;
		let gifsLeftText;
		let gifs;

		if (gifsLeft > 0 && gifsLeft <= 5) {
			gifsLeftText = (
				<p>
					You must <i>like</i> {gifsLeft} more {gifsLeft === 1 ? 'GIF' : 'GIFs'}{' '}
					to calculate your score
				</p>
			);
		} else
			gifsLeftText = <p>You're now ready to calculate your weirdness score!</p>;

		gifs = likedGifs.map(x => (
			<GIF name={x.name} url={x.url} key={likedGifs.indexOf(x)} />
		));

		return (
			<div className="Favorites">
				<div className="Favorites-Wrapper">
					<h2>Your Liked GIFs</h2>
					<div className="GIFs">{gifs.map(x => x)}</div>
					<div className="Calculate">
						{gifsLeftText}
						<button>Calculate My Weirdness Score</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Favorites;
