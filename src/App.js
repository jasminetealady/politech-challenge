import React from 'react';
import './css/App.scss';
import Main from './components/Main.js';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

function App(props) {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Weirdness Calculator</h1>
			</header>
			<Main userData={props.userData} />
		</div>
	);
}

// export default App;

const mapStateToProps = state => {
	return { userData: state.userData };
};

export default withRouter(connect(mapStateToProps)(App));
