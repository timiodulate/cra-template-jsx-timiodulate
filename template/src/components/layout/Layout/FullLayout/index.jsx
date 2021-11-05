import { Col, Row } from "react-bootstrap";

const FullLayout = () => {
	return (
		<main
			className="d-flex align-items-center justify-content-center auth px-0"
			style={{ minHeight: "100vh", backgroundColor: "#F6F6F6" }}
		>
			<Row>
				<Col xs="6"></Col>
				{/* <Welcome /> */}
			</Row>
		</main>
	);
};

export default FullLayout;
