import React, { Fragment } from "react";
import Seo from "./Seo";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, title, description, otherLayout }) {
	return (
		<Fragment>
			<Seo title={title} description={description} />
			<Navbar />
			{children}
			<Footer />
		</Fragment>
	);
}
