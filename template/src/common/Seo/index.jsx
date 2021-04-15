import React from "react";
import { Helmet } from "react-helmet";

export default function Seo({ title, description }) {
	return (
		<Helmet>
			<title>{title && title} - D'zinez</title>
			<meta
				name="description"
				content="Web site created using create-react-app"
			/>
		</Helmet>
	);
}
