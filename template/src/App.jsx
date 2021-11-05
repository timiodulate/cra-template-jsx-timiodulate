import { useEffect } from "react";
import AppRoutes from "./pages";
import Layout from "./components/layout/Layout";
import { AuthContextWrapper } from "./context/AuthContext";
import "./styles/index.scss";

function App() {
	// const router = useRouter();
	// const [authenticated, setAuthenticated] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);

		// if (authenticated === false) {
		// 	router.push("/users/signup");
		// }
	}, []);

	return (
		<AuthContextWrapper>
			<Layout fullLayout={true}>
				<AppRoutes />
			</Layout>
		</AuthContextWrapper>
	);
}

export default App;
