import Home from "./home";
import Login from "./login";

const routes = {
	private: [{ title: "Home", component: Home, path: "/" }],
	auth: [{ title: "Login", component: Login, path: "/login" }],
};

export default routes;
