import React, { Suspense } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import Layout from "./common";
import routes from "./routes";

const App = () => {
	const isUserLoggedIn = true;
	let editedRoutes = isUserLoggedIn ? [...routes.private] : [...routes.auth];
	let otherLayout = !isUserLoggedIn && routes.auth && true;

	return (
		<Router>
			<Suspense fallback={<div>loading...</div>}>
				<Switch>
					{editedRoutes.map((route, i) => {
						const { title, path, description } = route;

						return (
							<Route
								key={i}
								path={path}
								exact
								children={(props) => (
									<Layout
										otherLayout={otherLayout}
										title={title}
										description={description}
									>
										<route.component {...props} />
									</Layout>
								)}
							/>
						);
					})}

					<Redirect to={editedRoutes[0].path} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
