import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./FullLayout/Footer";
// import SEO from "../SEO";
import { Col, Row } from "react-bootstrap";

const Layout = ({ children, fullLayout, otherLayout }) => {
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
			{/* <SEO /> */}
			{fullLayout ? (
				<main
					className="d-flex align-items-center justify-content-center auth px-0"
					style={{
						minHeight: "100vh",
						backgroundColor: "#F6F6F6",
					}}
				>
					{children}
				</main>
			) : (
				<div
					style={{ minHeight: "100vh", width: "100vw" }}
					className={fullLayout ? "bg-primary" : ""}
				>
					{sidebarComponent}
					<div>
						{navbarComponent}
						{children}
						{footerComponent}
					</div>
				</div>
			)}
		</>
	);
};

export default Layout;
