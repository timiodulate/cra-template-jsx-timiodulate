import React, { Fragment } from "react";
import Seo from "./seo";
import NormalLayout from "./layout";
import OtherLayout from "./other_layout";

export default function Layout({ children, title, description, otherLayout }) {
	return (
		<Fragment>
			<Seo title={title} description={description} />

			{!otherLayout ? (
				<NormalLayout>{children}</NormalLayout>
			) : (
				<OtherLayout>{children}</OtherLayout>
			)}
		</Fragment>
	);
}
