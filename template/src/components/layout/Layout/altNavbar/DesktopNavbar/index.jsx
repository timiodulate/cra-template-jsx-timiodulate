import React from "react";
import { NavLink } from "react-router-dom";
import { DownIcon } from "../../../../../assets/icons";
import CheckedLink from "../../../../reusables/CheckedLink";
import "./index.scss";

const DesktopNavbar = ({ navData }) => {
	return (
		<ul className="NavItems">
			{navData?.map(({ title, path, subcategory }) => (
				<li className="NavItems-NavItem" key={title}>
					<NavLink to={path} className="NavItems-NavItem-NavLink">
						{title}
					</NavLink>

					{subcategory && (
						<span className="navigator">
							<DownIcon />
						</span>
					)}

					{subcategory && (
						<ul className="subcategories">
							{subcategory.map((category) => (
								<li
									className="subcategories_subcategory"
									key={category.title}
								>
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
				</li>
			))}
		</ul>
	);
};

export default DesktopNavbar;
