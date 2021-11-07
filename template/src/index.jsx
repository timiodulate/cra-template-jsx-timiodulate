import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
	<Router basename="/">
		<App />
	</Router>,
	document.getElementById("root")
);

// serviceWorker.unregister();
