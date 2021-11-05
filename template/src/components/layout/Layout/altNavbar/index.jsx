import React, { useRef } from "react";
import SLUGS from "../../../../assets/data/slugs";
import { CloseIcon, HamburgerIcon } from "../../../../assets/icons";
import { useVisibility, useOutsideClick } from "../../../../assets/utils/hooks";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { BrandLogo, Button } from "../../../reusables";
import "./index.scss";

const Navbar = () => {
	const ref = useRef();
	const { isVisible, toggle } = useVisibility();
	useOutsideClick(ref, toggle);

	return (
		<nav className="nav">
			<BrandLogo />

			<div>
				<Button uppercase transparent linkTo="/donate">
					Donate
				</Button>

				<button
					className="navbar-toggle-container"
					aria-hidden="true"
					onClick={toggle}
				>
					{!isVisible ? <HamburgerIcon /> : <CloseIcon />}
				</button>
			</div>

			<DesktopNavbar navData={SLUGS} />
			{isVisible && <MobileNavbar navData={SLUGS} togle={toggle} />}
		</nav>
	);
};

export default Navbar;
