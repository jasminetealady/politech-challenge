import React, { Component } from 'react';
import GIF from './GIF.js';

class Favorites extends Component {
	state = {
		gifs: [],
		gifsLeft: 0
	};

	componentDidMount() {
		this.calculateGifsLeft();
	}

	calculateGifsLeft = () => {
		let left = 5 - this.state.gifs.length;
		console.log(left);
		this.setState({ gifsLeft: left });
	};

	render() {
		const areGifs = this.state.gifs.length > 0;
		let gifs;
		let gifsLeft = this.state.gifsLeft;
		let gifsLeftText;

		if (gifsLeft <= 5) {
			gifsLeftText = (
				<p>
					You must <i>like</i> {gifsLeft} more {gifsLeft === 1 ? 'GIF' : 'GIFs'}{' '}
					to calculate your score
				</p>
			);
		} else gifsLeftText = null;

		if (areGifs) {
			gifs = this.state.gifs.map(x => <GIF key={this.state.gifs.indexOf(x)} />);
		}

		return (
			<div className="Favorites">
				<h2>Your Liked GIFs</h2>
				<div className="GIFs">{gifs}</div>
				<div className="Calculate">
					{gifsLeftText}
					<button>Calculate My Weirdness Score</button>
				</div>
			</div>
		);
	}
}

export default Favorites;
