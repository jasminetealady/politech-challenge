import React, { Component } from 'react';
import GIF from './GIF.js';

class Results extends Component {
	state = {
		loadingWeirder: false,
		likedGifs: [],
		error: false
	};

	handleChange = e => {
		this.setState({ weirdnessLevel: e.currentTarget.value });
		this.props.fetchGif(e.currentTarget.value);
	};

	handleClick = () => {
		let gifs = this.state.likedGifs;
		let likedGif = {
			name: this.props.gifName,
			url: this.props.url,
			weirdnessLevel: this.props.weirdness
		};
		if (gifs.length < 5) {
			gifs.push(likedGif);
		} else {
			this.setState({ error: true });
		}
		this.setState({ likedGifs: gifs });
		this.props.setLikedGifs(gifs);
	};

	render() {
		return (
			<div className="Results">
				<h2>Your Result</h2>
				<GIF
					gifName={this.props.gifName}
					url={this.props.url}
					loading={this.props.loading}
					loadingWeirder={this.state.loadingWeirder}
				/>
				{this.props.url && (
					<div className="Results-Button-Wrapper">
						<button onClick={this.handleClick}>Like</button>
					</div>
				)}
				{this.props.url && (
					<div className="Slider">
						<input
							type="range"
							min="0"
							max="10"
							defaultValue="0"
							onChange={this.handleChange}
						/>
						<p>Weirdness: {this.props.weirdness}</p>
					</div>
				)}
				{this.state.error && (
					<p class="Max-GIFs-Error">
						You have selected the maximum number of GIFs. Please <i>unlike</i>{' '}
						one of your GIFs if you would like to <i>like</i> another!
					</p>
				)}
			</div>
		);
	}
}

export default Results;
