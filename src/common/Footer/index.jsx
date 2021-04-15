import React, { useContext, useEffect, useState } from "react";
import FooterStyles from "./index.module.scss";

const Footer = (props) => {
	// useEffect(() => {
	// 	if (jwtValue && !props.me.loading) {
	// 		setEmail(props.me.me.email);
	// 	}
	// }, [jwtValue, props]);

	return (
		<footer className="d-flex flex-column align-items-center">
			<p className={`text-dark `}>
				© 2020,
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
