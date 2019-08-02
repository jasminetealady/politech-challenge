import React, { Component } from 'react';
import Results from './Results.js';

class Search extends Component {
	state = {
		query: '',
		weirdness: 5,
		url: ''
	};

	handleChange = e => {
		this.setState({ query: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();
		let api = process.env.REACT_APP_API_URL;
		let key = process.env.REACT_APP_API_KEY;
		let weirdness = this.state.weirdness;
		let query = this.state.query;
		let url = `${api}?s=${query}&api_key=${key}&limit=5&weirdness=${weirdness}`;

		fetch(url)
			.then(resp => resp.json())
			.then(data => this.setState({ url: data.data.images.original.url }));
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
						<br />
						{this.state.query}
						<img src={this.state.url} alt="giphy gif" />
					</div>
				</div>
				<Results />
			</div>
		);
	}
}

export default Search;
