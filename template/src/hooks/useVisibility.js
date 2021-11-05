import { useState } from "react";

export const useVisibility = () => {
	const [isVisible, setIsVisible] = useState(false);

	function toggle() {
		setIsVisible(!isVisible);
	}

	return {
		isVisible,
		toggle,
	};
};
