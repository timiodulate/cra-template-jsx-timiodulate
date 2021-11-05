import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Spinner } from "../components/reusables";

const Home = lazy(() => import("./home"));

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					<Route exact path="/" component={Home} />

					<Redirect to="/" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
