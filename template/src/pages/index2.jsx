// import React, { Component, Suspense, lazy } from "react";
// import { Switch, Route, Redirect } from "react-router-dom";

// import Spinner from "../components/reusables";

// const Dashboard = lazy(() => import("./pages/Dashboard"));

// const Error404 = lazy(() => import("./error-pages/Error404"));
// const Error500 = lazy(() => import("./error-pages/Error500"));

// const Login = lazy(() => import("./pages/Login"));
// const Register1 = lazy(() => import("./pages/Register"));

// class Routes extends Component {
// 	render() {
// 		return (
// 			<Suspense fallback={<Spinner />}>
// 				<Switch>
// 					<Route exact path="/dashboard" component={Dashboard} />

// 					<Route exact path="/products" component={Dashboard} />

// 					<Route exact path="/orders" component={Dashboard} />

// 					<Route exact path="/customers" component={Dashboard} />

// 					<Route exact path="/statistics" component={Dashboard} />

// 					<Route exact path="/reviews" component={Dashboard} />

// 					<Route exact path="/transactions" component={Dashboard} />

// 					<Route exact path="/hot-offers" component={Dashboard} />

// 					<Route exact path="/appearance" component={Dashboard} />

// 					<Route exact path="/settings" component={Dashboard} />

// 					<Route path="/login" component={Login} />
// 					<Route path="/register" component={Register1} />

// 					<Route path="/error-pages/error-404" component={Error404} />
// 					<Route path="/error-pages/error-500" component={Error500} />

// 					<Redirect to="/dashboard" />
// 				</Switch>
// 			</Suspense>
// 		);
// 	}
// }

// export default AppRoutes;
