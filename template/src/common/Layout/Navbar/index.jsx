import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import navbarStyles from "./index.module.scss";

const MobileView = () => {
	return (
		<nav
			className={`navbar navbar-light bg-white p-0 ${navbarStyles.mobileNav}`}
		>
			<Link
				to="/"
				className="navbar-brand d-flex align-items-center p-0 m-0 "
			>
				<p className="font-weight-bold text-uppercase p-0 m-0">
					D’ZINEZ
				</p>
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
