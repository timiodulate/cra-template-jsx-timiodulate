import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

function PublicRoutes() {
	return (
		<Switch>
			<Route path="/login" render={() => <div>login</div>} />
			<Route path="/signup" render={() => <div>signup</div>} />
			<Route
				path="/forgetpassword"
				render={() => <div>forgotPassword</div>}
			/>
			<Redirect to="/login" />
		</Switch>
	);
}

export default PublicRoutes;
