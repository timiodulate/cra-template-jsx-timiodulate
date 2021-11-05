import { useEffect } from "react";

const useOutsideClose = (ref, callback) => {
	useEffect(() => {
		document.addEventListener("mousedown", (event) => {
			if (ref.current) {
				if (!ref.current.contains(event.target)) {
					callback();
				}
			}
		});
	});
};

export default useOutsideClose;
