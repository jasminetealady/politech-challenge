import React from 'react';
import Favorites from './Favorites.js';
import Search from './Search.js';
import WeirdnessScore from './WeirdnessScore.js';
import { Switch, Route } from 'react-router-dom';

const Main = ({ userData }) => {
	return (
		<>
			<div className="Main">
				<Switch>
					<Route
						exact
						path="/"
						render={routerProps => (
							<>
								<Search {...routerProps} userData={userData} />
								<Favorites {...routerProps} userData={userData} />
							</>
						)}
					/>

					<Route
						path="/results"
						render={routerProps => <WeirdnessScore userData={userData} />}
					/>
				</Switch>
			</div>
		</>
	);
};

export default Main;
