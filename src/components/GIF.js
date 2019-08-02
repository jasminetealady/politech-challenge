import React from 'react';

function GIF({ name, url, loading }) {
	return (
		<div className="GIF">
			<p className="GIF-Name">{name}</p>
			{loading && 'Loading'}
			{url && <img src={url} alt="giphy gif" />}
		</div>
	);
}

export default GIF;
