import React, { useContext, useEffect, useState } from "react";
// import Styles from "./index.scss";

const Footer = (props) => {
	// useEffect(() => {
	//
	// }, []);

	return (
		<footer className="d-flex flex-column align-items-center">
			<p className={`text-dark `}>
				© 2021,
				{/* <Link to="/" className="text-dark">
					<span>{" BrandName "}</span>
				</Link>
				<Link to="/" className="text-dark">
					<span>Developer.</span>
				</Link> */}
			</p>
		</footer>
	);
};

export default Footer;
