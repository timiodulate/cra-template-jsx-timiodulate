import React from "react";
import { BrandLogo, Button } from "../../../..";
import FooterNav from "./FooterNav";
import { companyNavData, contactNavData } from "../navData";
import {
	InstagramIcon,
	LinkedInIcon,
	FacebookIcon,
	YoutubeIcon,
	ShareTwitter,
} from "../../../../../assets/icons";
import "./index.scss";

const BottomSection = (props) => {
	return (
		<section className="bottom-section">
			<BrandLogo anotherLogo />

			<FooterNav data={companyNavData} />

			<FooterNav data={contactNavData} />

			<div className="bottom-section_nav">
				<h4 className="bottom-section_nav_heading">Contact</h4>

				<ul className="bottom-section_nav_NavItems">
					<li className="bottom-section_nav_NavItems-NavItem">
						<a href="/" className="email">
							inquiryto3hfoundation@gmail.com
						</a>
					</li>

					<li className="bottom-section_nav_NavItems-NavItem socialButtons">
						<a
							title="Instagram link"
							href="https://www.instagram.com/headhearthand_foundation"
						>
							<InstagramIcon />
						</a>
						<a
							title="linkedIn link"
							href="https://www.linkedin.com/company/headhearthand-foundation"
						>
							<LinkedInIcon />
						</a>
						<a
							title="facebook link"
							href="https://www.facebook.com/HeadHeartHandFoundation"
						>
							<FacebookIcon />
						</a>
						<a
							title="Youtube link"
							href="https://www.youtube.com/channel/UCl3dF7HZprXnpT65yNjRwoA"
						>
							<YoutubeIcon />
						</a>
						<a title="Twitter link" href="!#">
							<ShareTwitter />
						</a>
					</li>
				</ul>
			</div>

			<div className="bottom-section_nav">
				<h4 className="bottom-section_nav_heading">Support Us</h4>

				<ul className="bottom-section_nav_NavItems">
					<li className="bottom-section_nav_NavItems-NavItem--desc">
						<span>We appreciate you support and donation</span>
					</li>

					<li className="bottom-section_nav_NavItems-NavItem">
						<Button background="#F8AD58" uppercase linkTo="/donate">
							Donate
						</Button>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default BottomSection;
