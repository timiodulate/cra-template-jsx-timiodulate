import { useState } from "react";
import { useRouter } from "react-router-dom";

function useLayoutCheck() {
	const router = useRouter();
	const [isFullPageLayout, setIsFullPageLayout] = useState(false);

	const fullPageLayoutRoutes = [
		"/login",
		"/signup",
		"/forgot-password",
		"/verification",
		"/profile",
		"/error-pages/error-404",
		"/error-pages/error-500",
		"/general-pages/landing-page",
	];

	function setLayoutType() {
		for (let i = 0; i < fullPageLayoutRoutes.length; i++) {
			if (router.route === fullPageLayoutRoutes[i]) {
				setIsFullPageLayout(true);
				break;
			} else {
				setIsFullPageLayout(false);
			}
		}
	}

	return {
		isFullPageLayout,
		setLayoutType,
	};
}
export default useLayoutCheck;
