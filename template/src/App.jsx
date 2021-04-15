import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import pages from "./pages";
import Layout from "./common";

const App = () => {
	return (
		<Router>
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
		</Router>
	);
};

export default App;
