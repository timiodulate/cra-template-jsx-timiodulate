import React from "react";
import FullLayout from "./FullLayout";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
	const { children, fullLayout } = props;
	let sidebarComponent;
	let navbarComponent;
	let footerComponent;

	if (fullLayout) {
		navbarComponent = "";
		sidebarComponent = "";
		footerComponent = "";
	} else {
		sidebarComponent = <Sidebar />;
		navbarComponent = <Navbar />;
		footerComponent = <Footer />;
	}

	return (
		<>
			{fullLayout ? (
				<FullLayout>{children}</FullLayout>
			) : (
				<div
					style={{ minHeight: "100vh", width: "100vw" }}
					className={fullLayout ? "bg-primary" : ""}
				>
					{sidebarComponent}
					<div>
						{navbarComponent}
						<main>{children}</main>
						{footerComponent}
					</div>
				</div>
			)}
		</>
	);
};

export default Layout;
