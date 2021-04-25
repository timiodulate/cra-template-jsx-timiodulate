import React from "react";
import { Link } from "react-router-dom";
// import Styles from "./index.scss";

const Header = () => {
	return (
		<header>
			<nav>
				<Link to="/" className="">
					Logo
				</Link>

				<ul className="">
					<li className=""></li>

					<li></li>

					<li></li>

					<li className={`br-0`}></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
