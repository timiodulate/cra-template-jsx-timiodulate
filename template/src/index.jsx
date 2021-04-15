import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "react-toastify/dist/ReactToastify.css";
// import { Context } from "./context";
import App from "./App";
import "./styles/global.css";

ReactDOM.render(
	<React.StrictMode>
		{/* <Context> */}
		<App />
		{/* </Context> */}
	</React.StrictMode>,
	document.getElementById("root")
);
