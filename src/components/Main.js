import React, { Component } from 'react';
import Favorites from './Favorites.js';
import Search from './Search.js';
import { Switch, Route } from 'react-router-dom';

class Main extends Component {
	state = {
		likedGifs: []
	};

	setLikedGifs = gifs => {
		this.setState({ likedGifs: gifs });
	};

	render() {
		return (
			<>
				<div className="Main">
					<Switch>
						<Route
							exact
							path="/"
							render={routerProps => (
								<>
									<Search {...routerProps} userData={this.props.userData} />
									<Favorites {...routerProps} userData={this.props.userData} />
								</>
							)}
						/>

						<Route path="/liked" />
					</Switch>
				</div>
			</>
		);
	}
}

export default Main;
