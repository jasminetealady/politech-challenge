import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteGif } from '../actions/userDataActions.js';

function GIF({ name, url, loading, icon, deleteGif }) {
	const handleClick = () => {
		let currentGif = { url: url };
		deleteGif(currentGif);
	};
	return (
		<div className="GIF">
			{icon && <FontAwesomeIcon onClick={handleClick} icon={faTimes} />}
			{name && <p className="GIF-Name">{name}</p>}
			{loading && 'Loading'}
			{url && <img src={url} alt="giphy gif" />}
		</div>
	);
}

export default withRouter(
	connect(
		null,
		{ deleteGif }
	)(GIF)
);
