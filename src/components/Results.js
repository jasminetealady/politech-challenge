import React, { Component } from 'react';
import GIF from './GIF.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addLikedGif } from '../actions/userDataActions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

class Results extends Component {
	state = {
		error: false,
		weirdness: 0
	};

	handleChange = e => {
		let query = this.props.userData.currentGif.query;
		let weirdness = e.currentTarget.value;
		this.setState({ weirdness: weirdness });
		this.props.fetchGif(query, weirdness);
	};

	handleClick = () => {
		let gif = this.props.userData.currentGif;
		if (this.props.userData.likedGifs.length < 5) {
			this.props.addLikedGif(gif);
		} else {
			this.setState({ error: true });
		}
	};

	render() {
		let url = this.props.userData.currentGif.url;
		let name = this.props.userData.currentGif.name;
		let weirdness = this.props.userData.currentGif.weirdness;
		let loading = this.props.userData.loading;
		return (
			<div className="Results">
				<div className="Results-Wrapper">
					<h2>Your Result</h2>
					<GIF name={name} url={url} loading={loading} />
					{url && (
						<div className="Results-Button-Wrapper">
							<button onClick={this.handleClick}>
								<FontAwesomeIcon icon={faThumbsUp} />
							</button>
						</div>
					)}
					{url && (
						<div className="Slider">
							<input
								type="range"
								min="0"
								max="10"
								defaultValue="0"
								onChange={this.handleChange}
							/>
							<p>Weirdness: {weirdness}</p>
						</div>
					)}
					{this.state.error && (
						<p class="Max-GIFs-Error">
							You have selected the maximum number of GIFs. Please <i>unlike</i>{' '}
							one of your GIFs if you would like to <i>like</i> another!
						</p>
					)}
				</div>
			</div>
		);
	}
}

export default withRouter(
	connect(
		null,
		{ addLikedGif }
	)(Results)
);
