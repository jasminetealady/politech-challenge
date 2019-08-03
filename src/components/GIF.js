import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { deleteGif } from '../actions/userDataActions.js';
import loadingIndicator from '../images/loading.gif';

function GIF({ name, url, loading, icon, deleteGif }) {
	const handleClick = () => {
		let currentGif = { url: url };
		deleteGif(currentGif);
	};

	const showLoadingOrImage = () => {
		if (loading) {
			return <img src={loadingIndicator} alt="loading" />;
		} else if (!loading && !url) {
			return null;
		} else
			return (
				<>
					<p className="GIF-Name">{name}</p>
					<img src={url} alt="giphy gif" />
				</>
			);
	};

	return (
		<div className="GIF">
			{icon && <FontAwesomeIcon onClick={handleClick} icon={faTimes} />}
			{showLoadingOrImage()}
		</div>
	);
}

export default withRouter(
	connect(
		null,
		{ deleteGif }
	)(GIF)
);
