import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { DownIcon } from "../../../../../assets/icons";
import {
	useOutsideClick,
	useMenuToggle,
} from "../../../../../assets/utils/hooks";
import CheckedLink from "../../../../reusables/CheckedLink";
import "./index.scss";

const MobileNavbar = ({ navData, togle }) => {
	const ref = useRef();
	useOutsideClick(ref, togle);

	const { toggleState, toggleMenuState } = useMenuToggle();

	return (
		<ul className="NavItems-mobile" ref={ref}>
			{navData?.map(({ title, path, subcategory, menuState }) => (
				<li className="NavItems-mobile-NavItem">
					<NavLink to={path} className="NavItems-NavItem-NavLink">
						{title}
					</NavLink>

					{subcategory && (
						<>
							<span
								className="navigator"
								onClick={() => {
									toggleMenuState(menuState);
								}}
								style={{ cursor: "pointer" }}
							>
								<DownIcon
									onClick={() => {
										toggleMenuState(menuState);
									}}
									style={{ cursor: "pointer" }}
								/>
							</span>

							{toggleState[menuState] && (
								<ul className="subcategories">
									{subcategory.map((category) => (
										<li className="subcategories_subcategory">
											<CheckedLink
												classname="subcategories_subcategory_link"
												link={category.path}
												navLink
											>
												{category.title}
											</CheckedLink>
										</li>
									))}
								</ul>
							)}
						</>
					)}
				</li>
			))}
		</ul>
	);
};

export default MobileNavbar;
