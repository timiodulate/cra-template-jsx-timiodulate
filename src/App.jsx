import React from "react";
import { Route, Switch } from "react-router-dom";
import * as ROUTES from "./pages";
import { Navbar, Footer } from "./common";

const App = () => {
	return (
		<div className="layout d-flex flex-column justify-content-between">
			<Navbar />

			<main>
				<Switch>
					<Route path="/" component={ROUTES.Home} exact />
				</Switch>
			</main>

			<Footer />
		</div>
	);
};

export default App;
