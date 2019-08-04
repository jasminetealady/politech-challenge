import React, { Component } from 'react';
import GIF from './GIF.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addLikedGif } from '../actions/userDataActions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { setMessage } from '../actions/userDataActions.js';

class Results extends Component {
	state = {
		weirdness: 0
	};

	handleChange = e => {
		//fetches GIF on slider change
		let query = this.props.userData.currentGif.query;
		let weirdness = e.currentTarget.value;
		this.setState({ weirdness: weirdness });
		this.props.fetchGif(query, weirdness);
	};

	handleClick = () => {
		// lets user like a GIF up to 5 GIFs
		let gif = this.props.userData.currentGif;
		let query = this.props.userData.currentGif.query;
		let likedGifs = this.props.userData.likedGifs;
		let existingGif = likedGifs.find(x => x.query === query);

		if (existingGif !== undefined) {
			//error if user has gif with same query
			this.props.setMessage(
				'You have already liked a GIF with this search query. Please unlike the GIF to like a different one.'
			);
		} //error if user selects more than 5 gifs
		else if (this.props.userData.likedGifs.length >= 5) {
			this.props.setMessage(
				'You have selected the maximum number of GIFs. Please unlike one of your GIFs if you would like to like another.'
			);
		} //add gif, show prompt to search again
		else if (this.props.userData.likedGifs.length < 5 && !existingGif) {
			this.props.setMessage(
				'Now that you have liked a GIF with this search term, try a new one! You can only like one GIF per term.'
			);

			this.props.addLikedGif(gif);
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
					<GIF name={name} url={url} loading={loading} icon={false} />
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

							<p className="GIFs-Message">{this.props.userData.message}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}

//

export default withRouter(
	connect(
		null,
		{ addLikedGif, setMessage }
	)(Results)
);
