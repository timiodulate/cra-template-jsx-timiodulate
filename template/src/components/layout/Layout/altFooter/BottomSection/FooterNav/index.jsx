import React from "react";
import { CheckedLink } from "../../../../../reusables";
import "./index.scss";

export default function FooterNav({ children, data }) {
	return (
		<div className="bottom-section_nav">
			<h4 className="bottom-section_nav_heading">{data.heading}</h4>

			<ul className="bottom-section_nav_NavItems">
				{data.links?.map(({ title, path }) => (
					<li
						className="bottom-section_nav_NavItems-NavItem"
						key={title}
					>
						<CheckedLink
							link={path}
							classname="bottom-section_nav_NavItems-NavItem-NavLink"
							navLink
						>
							{title}
						</CheckedLink>
						{children}
					</li>
				))}
			</ul>
		</div>
	);
}
