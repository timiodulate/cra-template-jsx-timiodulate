import React from "react";
// import { Button } from "../../../..";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { toast } from "react-toastify";
import "./index.scss";
import { CheckedLink } from "../../../../reusables";

const TopSection = (props) => {
	// const {
	// 	register,
	// 	handleSubmit,
	// 	formState: { errors },
	// 	reset,
	// } = useForm();

	// const onSubmit = async (data) => {
	// 	const config = {
	// 		method: "post",
	// 		url: "https://3h.stemtutorsonline.info/newsletter/create",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		data: data,
	// 	};
	// 	// //TODO post email(data) to api
	// 	try {
	// 		const response = await axios(config);
	// 		reset({ email: "" });
	// 		return (
	// 			response && toast.dark("You've subscribed to our newsletter!🎉")
	// 		);
	// 	} catch (error) {
	// 		const errorMessage = error.response.data.email[0];
	// 		reset({ email: "" });
	// 		return (
	// 			errorMessage === "Such email address already exists" &&
	// 			toast.dark("You're already subscribed!🎉")
	// 		);
	// 	}
	// };

	return (
		<section className="top-section">
			<h3 className="top-section_heading">Subscribe to our Newsletter</h3>

			<p className="top-section_description small">
				Subscribe to hear from us and learn about what we do
			</p>

			{/* <form
				className="top-section_subscribeForm"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div>
					<input
						type="email"
						placeholder="Email"
						{...register("email", { required: true })}
					/>
					errors will return when field validation fails 
					<Button noHover />
				</div>
				{errors.email && <span id="we">Enter a valid email</span>}
			</form> */}

			<p className="link-container">
				Click
				<CheckedLink link="https://bit.ly/3HNewsletter">
					here
				</CheckedLink>
				to subscribe for our newsletter
			</p>
		</section>
	);
};

export default TopSection;
