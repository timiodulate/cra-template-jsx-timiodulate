import React from "react";
import { Col, Row } from "react-bootstrap";
// import Welcome from "../Welcome";

const FullLayout = ({ children }) => {
	return (
		<main
			className="d-flex align-items-center justify-content-center  px-0 full-layout"
			style={{
				minHeight: "100vh",
				backgroundColor: "#F6F6F6",
			}}
		>
			<Row
				className="w-100"
				style={{
					minHeight: "100vh",
				}}
			>
				<Col xs="6">{children}</Col>
				<Col xs="6" className="p-0" />
			</Row>
		</main>
	);
};

export default FullLayout;
