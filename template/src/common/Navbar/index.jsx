import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// import Styles from "./index.scss";

const MobileView = () => {
	return (
		<nav className={`navbar navbar-light bg-white p-0`}>
			<Link
				to="/"
				className="navbar-brand d-flex align-items-center p-0 m-0 "
			>
				Logo
			</Link>

			<ul className={`list-unstyled d-flex align-items-center mb-0`}>
				<li className={`icon hover-effect`}></li>

				<li></li>

				<li></li>

				<li className={`br-0`}></li>
			</ul>
		</nav>
	);
};

export default MobileView;
