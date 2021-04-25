import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./common";

const PrivateRoutes = ({ pages }) => {
	return (
		<Suspense fallback={<LoadingComponent loading />}>
			<Switch>
				{pages.map((page, i) => {
					return (
						<Route
							key={i}
							path={page.path}
							exact
							children={(props) => (
								<Layout
									otherLayout={page.otherLayout}
									title={page.title}
									description={page.description}
								>
									<page.component {...props} />
								</Layout>
							)}
						/>
					);
				})}
			</Switch>
		</Suspense>
	);
};

{
	/* <Route exact path={SLUGS.dashboard} component={DashboardComponent} />  */
}

export default PrivateRoutes;
