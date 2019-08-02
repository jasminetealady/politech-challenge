import React from 'react';

function GIF({ gifName, url, loading }) {
	return (
		<div className="GIF">
			<p className="GIF-Name">{gifName}</p>
      {loading && 'Loading'}
			{url && <img src={url} alt="giphy gif" />}
		</div>
	);
}

export default GIF;
