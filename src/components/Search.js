import React, { Component } from 'react';
import Results from './Results.js';

class Favorites extends Component {
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
						<form>
							<input type="text" placeholder="Type your search term here ..." />
							<button>Search</button>
						</form>
					</div>
				</div>
				<Results />
			</div>
		);
	}
}

export default Favorites;
