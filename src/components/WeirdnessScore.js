import React from 'react';
import GIF from './GIF.js';
import { Link } from 'react-router-dom';

const WeirdnessScore = ({ userData }) => {
	let { likedGifs } = userData;
	let gifs;
	let averageWeirdness;

	if (likedGifs.length > 0) {
		let weirdnessArray = likedGifs.map(gif => parseInt(gif.weirdness));
		const add = (a, b) => a + b;
		let totalWeirdness = weirdnessArray.reduce(add);
		averageWeirdness = Math.ceil(totalWeirdness / likedGifs.length);

		gifs = likedGifs.map(x => (
			<GIF name={x.name} url={x.url} icon={false} key={likedGifs.indexOf(x)} />
		));
	}

	return (
		<>
			<div className="Weirdness-Score">
				{averageWeirdness >= 0 && (
					<>
						<h1>
							You scored {averageWeirdness} out of 10 on the weirdness scale!
						</h1>
						<p>The GIFs you liked:</p>
						<div className="Weirdness-Score-GIFs">{gifs}</div>
						<div className="Button-Wrapper">
							<Link to="/">Start Over</Link>
						</div>
					</>
				)}
				{likedGifs.length < 5 && (
					<>
						<h1>
							Oops! You have to choose 5 unique GIFs before you can calculate
							your weirdness score!
						</h1>
						<div className="Button-Wrapper">
							<Link to="/">Go Back Home to Choose Five GIFs</Link>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default WeirdnessScore;
