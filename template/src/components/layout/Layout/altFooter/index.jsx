import React from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import "./index.scss";

const Footer = (props) => {
	return (
		<footer className="footer">
			<TopSection />

			<BottomSection />
		</footer>
	);
};

export default Footer;
