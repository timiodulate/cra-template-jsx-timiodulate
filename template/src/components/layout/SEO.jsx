import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({ title }) {
	// const domain = 'https://site-domain'
	const formattedTitle = title && `${title} - 3hFoundation`;

	const description = "3hFoundation";
	const keywords = "3hFoundation";

	// url path
	// const url = url && url.path ? url.path : undefined

	// url path to home
	// const cononical = url && url === '/' ? domain : domain + url
	// const featuredImage = domain + image

	return (
		<Helmet>
			<title>{formattedTitle}</title>
			<meta name="description" content={description} />
			{keywords && <meta name="keywords" content={keywords} />}
			{/* {url && <link property="canonical" content={cononical}/>} */}
			<meta property="og:title" content={formattedTitle} />
			<meta property="og:decription" content={description} />
			{/* <meta property="og:url" content={canonical} /> */}
			{/* {featuredImage && (
				<>
					<meta property="og:image" content={featuredImage} />
					<meta property="og:image:alt" content={description} />
				</>
			)} */}
		</Helmet>
	);
}
