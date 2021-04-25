import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import useWindowSize from 'hooks/useWindowSize';
import PrivateRoutes from "routes/PrivateSection";
import PublicRoutes from "routes/PublicRoutes";

export const pages = [{ title: "Home", component: Home, path: "/" }];

function Routes() {
	const { pathname } = useLocation();
	// eslint-disable-next-line no-unused-vars
	// const [width, height] = useWindowSize();

	// useEffect(() => {
	//     window.scrollTo(0, 0);
	// }, [pathname]);

	const isUserLoggedIn = true;
	return isUserLoggedIn ? (
		<PrivateRoutes pages={pages} />
	) : (
		<PublicRoutes pages={pages} />
	);
}

export default Routes;
