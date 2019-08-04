import React from 'react';
import GIF from './GIF.js';
import { Link } from 'react-router-dom';

const Favorites = ({ userData }) => {
	const { gifsLeft } = userData;
	const { likedGifs } = userData;
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
		gifsLeftText = (
			<>
				<p>You're now ready to calculate your weirdness score!</p>{' '}
				<Link to="/results">Calculate Your Weirdness Score</Link>
			</>
		);

	gifs = likedGifs.map(x => (
		<GIF name={x.name} url={x.url} icon={true} key={likedGifs.indexOf(x)} />
	));

	return (
		<div className="Favorites">
			<div className="Favorites-Wrapper">
				<h2>Your Liked GIFs</h2>
				<div className="GIFs">{gifs.map(x => x)}</div>
				<div className="Calculate">{gifsLeftText}</div>
			</div>
		</div>
	);
};

export default Favorites;
