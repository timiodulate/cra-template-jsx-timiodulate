import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import {} from "./Context";
import App from "./App";
import "./styles/app.scss";

ReactDOM.render(
	<React.StrictMode>
		<Router>
			{/* <EditAddressContext> */}
			<App />
			{/* </EditAddressContext> */}
		</Router>
	</React.StrictMode>,
	document.getElementById("root")
);
