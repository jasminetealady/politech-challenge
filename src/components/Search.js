import React, { Component } from 'react';
import Results from './Results.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGif } from '../actions/userDataActions.js';

class Search extends Component {
	state = {
		query: '',
		url: '',
		gifName: '',
		weirdnessLevel: 0,
		isLoading: false,
		error: false,
		likedGifs: []
	};

	handleChange = e => {
		this.setState({ error: false });
		this.setState({ query: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.query !== '') {
			this.props.fetchGif(this.state.query, 0);
		} else this.setState({ error: true });
	};

	fetchGif = async weirdness => {
		let api = process.env.REACT_APP_API_URL;
		let key = process.env.REACT_APP_API_KEY;
		let query = this.state.query;
		let url = `${api}?s=${query}&api_key=${key}&limit=5&weirdness=${weirdness}`;

		this.setState({ isLoading: true });
		console.log(url);

		fetch(url)
			.then(resp => resp.json())
			.then(data =>
				this.setState({
					url: data.data.images.original.url,
					gifName: data.data.title,
					isLoading: false,
					weirdnessLevel: weirdness
				})
			);
	};

	render() {
		return (
			<div className="Search">
				<div className="Search-Wrapper">
					<div className="Search-Text">
						<p>
							Find out how weird you are by selecting the GIFs that make you
							laugh. We'll show you the least weird ones to start, but you can
							move the slider to make them weirder.
						</p>
						<br />
						<p>
							When you find a GIF you like, press the <i>Like</i> button. Once
							you like 5 GIFs, we'll show you how weird you are.
						</p>
					</div>
					<div className="Search-Input">
						<p>Search Term</p>
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								placeholder="Type your search term here ..."
								onChange={this.handleChange}
							/>
							<button>Search</button>
						</form>
						{this.state.error && <span>* You must enter some text</span>}
					</div>
				</div>
				<Results
					setLikedGifs={this.setLikedGifs}
					fetchGif={this.fetchGif}
					query={this.state.query}
					url={this.state.url}
					gifName={this.state.gifName}
					weirdness={this.state.weirdnessLevel}
					loading={this.state.isLoading}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { query: state.userData.query };
};

export default withRouter(
	connect(
		mapStateToProps,
		{ fetchGif }
	)(Search)
);
