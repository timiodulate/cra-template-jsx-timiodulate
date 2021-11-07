import { useState } from "react";
import { useRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

function useAuthCheck(fullPageLayout) {
	const router = useRouter();
	const [authenticated, setAuthenticated] = useState(false);
	const [cookies, setCookie, removeCookie] = useCookies(["token"]);

	function addCookie(data) {
		if (data) {
			setCookie("token", data, { path: "/" });
		}
	}

	const token = !!cookies.token;

	const resetCookie = () => {
		setTimeout(() => {
			removeCookie("token");
		}, 86400000);
	};

	function checkAuthentication() {
		if (token) {
			if (authenticated === false) {
				setAuthenticated(true);
			}
			if (fullPageLayout) {
				router.push("/");
			}
			resetCookie();
		} else if (!token && !fullPageLayout) {
			router.push("/login");
		}
	}

	return {
		cookies,
		token,
		addCookie,
		removeCookie,
		checkAuthentication,
	};
}
export default useAuthCheck;
