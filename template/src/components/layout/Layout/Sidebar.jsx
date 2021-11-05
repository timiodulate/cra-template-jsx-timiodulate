import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse, Dropdown } from "react-bootstrap";
// import { Trans } from "react-i18next";

class Sidebar extends Component {
	state = {};

	toggleMenuState(menuState) {
		if (this.state[menuState]) {
			this.setState({ [menuState]: false });
		} else if (Object.keys(this.state).length === 0) {
			this.setState({ [menuState]: true });
		} else {
			Object.keys(this.state).forEach((i) => {
				this.setState({ [i]: false });
			});
			this.setState({ [menuState]: true });
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.onRouteChanged();
		}
	}

	navData = () => [
		{ name: "Dashboard", path: "/dashboard" },
		{
			name: "Products",
			path: "/products",
			subPages: true,
			state: "productsMenuOpen",
		},
		{
			name: "Orders",
			path: "/orders",
			subPages: true,
			state: "ordersMenuOpen",
		},
		{
			name: "Customers",
			path: "/customers",
			subPages: true,
			state: "customersMenuOpen",
		},
		{ name: "Statistics", path: "/statistics" },
		{ name: "Reviews", path: "/reviews" },
		{ name: "Transactions", path: "/transactions" },
		{ name: "Sellers", path: "/sellers" },
		{ name: "Hot Offers", path: "/hot-offers" },
	];

	onRouteChanged() {
		document.querySelector("#sidebar").classList.remove("active");
		Object.keys(this.state).forEach((i) => {
			this.setState({ [i]: false });
		});

		const dropdownPaths = [...this.navData()];

		dropdownPaths.forEach((obj) => {
			if (this.isPathActive(obj.path)) {
				this.setState({ [obj.state]: true });
			}
		});
	}

	render() {
		return (
			<nav className="sidebar sidebar-offcanvas" id="sidebar">
				<div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
					<a className="sidebar-brand brand-logo" href="index.html">
						<img
							// src={require("../../assets/images/logo.svg")}
							alt="logo"
						/>
					</a>
					<a
						className="sidebar-brand brand-logo-mini"
						href="index.html"
					>
						<img
							// src={require("../../assets/images/logo-mini.svg")}
							alt="logo"
						/>
					</a>
				</div>
				<ul className="nav">
					<li className="nav-item nav-category">
						<span className="nav-link">
							{/* <Trans>Navigation</Trans> */}
						</span>
					</li>

					{this.navData().map((data) => (
						<li
							className={
								this.isPathActive(data.path)
									? "nav-item menu-items active"
									: "nav-item menu-items"
							}
						>
							{!data.subPages ? (
								<Link className="nav-link" to="/dashboard">
									<span className="menu-icon">
										<i className="mdi mdi-speedometer"></i>
									</span>
									<span className="menu-title">
										{/* <Trans>{data.name}</Trans> */}
									</span>
								</Link>
							) : (
								<>
									<div
										className={
											this.state[data.state]
												? "nav-link menu-expanded"
												: "nav-link"
										}
										onClick={() =>
											this.toggleMenuState(data.state)
										}
										data-toggle="collapse"
									>
										<span className="menu-icon">
											<i className="mdi mdi-laptop"></i>
										</span>
										<span className="menu-title">
											{/* <Trans>{data.name}</Trans> */}
										</span>
										<i className="menu-arrow"></i>
									</div>
									<Collapse in={this.state[data.state]}>
										<div>
											<ul className="nav flex-column sub-menu">
												<li className="nav-item">
													{" "}
													<Link
														className={
															this.isPathActive(
																"/basic-ui/buttons"
															)
																? "nav-link active"
																: "nav-link"
														}
														to="/basic-ui/buttons"
													>
														{/* <Trans>Buttons</Trans> */}
													</Link>
												</li>
												<li className="nav-item">
													{" "}
													<Link
														className={
															this.isPathActive(
																"/basic-ui/dropdowns"
															)
																? "nav-link active"
																: "nav-link"
														}
														to="/basic-ui/dropdowns"
													>
														{/* <Trans>Dropdowns</Trans> */}
													</Link>
												</li>
												<li className="nav-item">
													{" "}
													<Link
														className={
															this.isPathActive(
																"/basic-ui/typography"
															)
																? "nav-link active"
																: "nav-link"
														}
														to="/basic-ui/typography"
													>
														{/* <Trans> */}
														Typography
														{/* </Trans> */}
													</Link>
												</li>
											</ul>
										</div>
									</Collapse>
								</>
							)}
						</li>
					))}

					<li className="nav-item nav-category">
						<span className="nav-link">
							{/* <Trans>More</Trans> */}
						</span>
					</li>

					<li
						className={
							this.isPathActive("/error-pages")
								? "nav-item menu-items active"
								: "nav-item menu-items"
						}
					>
						<div
							className={
								this.state.errorPagesMenuOpen
									? "nav-link menu-expanded"
									: "nav-link"
							}
							onClick={() =>
								this.toggleMenuState("errorPagesMenuOpen")
							}
							data-toggle="collapse"
						>
							<span className="menu-icon">
								<i className="mdi mdi-lock"></i>
							</span>
							<span className="menu-title">
								{/* <Trans>Appearance</Trans> */}
							</span>
							<i className="menu-arrow"></i>
						</div>
						<Collapse in={this.state.errorPagesMenuOpen}>
							<div>
								<ul className="nav flex-column sub-menu">
									<li className="nav-item">
										{" "}
										<Link
											className={
												this.isPathActive(
													"/error-pages/error-404"
												)
													? "nav-link active"
													: "nav-link"
											}
											to="/error-pages/error-404"
										>
											404
										</Link>
									</li>
									<li className="nav-item">
										{" "}
										<Link
											className={
												this.isPathActive(
													"/error-pages/error-500"
												)
													? "nav-link active"
													: "nav-link"
											}
											to="/error-pages/error-500"
										>
											500
										</Link>
									</li>
								</ul>
							</div>
						</Collapse>
					</li>

					<li className="nav-item menu-items">
						<a
							className="nav-link"
							href="http://bootstrapdash.com/demo/corona-react-free/documentation/documentation.html"
							rel="noopener noreferrer"
							target="_blank"
						>
							<span className="menu-icon">
								<i className="mdi mdi-file-document-box"></i>
							</span>
							<span className="menu-title">
								{/* <Trans>Settings</Trans> */}
							</span>
						</a>
					</li>
				</ul>
			</nav>
		);
	}

	isPathActive(path) {
		return this.props.location.pathname.startsWith(path);
	}

	componentDidMount() {
		this.onRouteChanged();
		// add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
		const body = document.querySelector("body");
		document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
			el.addEventListener("mouseover", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.add("hover-open");
				}
			});
			el.addEventListener("mouseout", function () {
				if (body.classList.contains("sidebar-icon-only")) {
					el.classList.remove("hover-open");
				}
			});
		});
	}
}

export default withRouter(Sidebar);
