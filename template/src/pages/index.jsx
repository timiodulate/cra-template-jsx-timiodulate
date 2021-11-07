import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Spinner } from "../components/reusables";

const Home = lazy(() => import("./home"));

export default function AppRoutes() {
	return (
		<Suspense fallback={<Spinner />}>
			<Switch>
				<Route exact path="/" component={Home} />

				<Redirect to="/" />
			</Switch>
		</Suspense>
	);
}
