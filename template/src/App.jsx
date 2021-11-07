import React, { useEffect } from "react";
import AppRoutes from "./pages";
import Layout from "./components/layout/Layout";
import { AuthContextWrapper } from "./context/AuthContext";
import "./styles/index.scss";

function App() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<AuthContextWrapper>
			<Layout>
				<AppRoutes />
			</Layout>
		</AuthContextWrapper>
	);
}

export default App;
