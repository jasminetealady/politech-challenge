import React, { Component } from 'react';
import GIF from './GIF.js';

class Results extends Component {
	state = {
		weirdnessLevel: 0,
		loadingWeirder: false
	};

	handleChange = e => {
		this.setState({ weirdnessLevel: e.currentTarget.value });
		this.props.fetchGif(e.currentTarget.value);
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
				<div className="Results-Button-Wrapper">
					<button>Like Thumb</button>
				</div>
				<div className="Slider">
					<input
						type="range"
						min="0"
						max="10"
						defaultValue="0"
						onChange={this.handleChange}
					/>
					<p>Weirdness: {this.state.weirdnessLevel}</p>
				</div>
			</div>
		);
	}
}

export default Results;
