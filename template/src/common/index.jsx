import React, { Fragment } from "react";
import Seo from "./Seo";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, title, description, otherLayout }) {
	return (
		<Fragment>
			<Seo title={title} description={description} />
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
}
