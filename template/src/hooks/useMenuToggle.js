import { useState } from "react";

export function useMenuToggle(params) {
    const [toggleState, setToggleState ] = useState({})

	function toggleMenuState(menuState) {
		if (toggleState[menuState]) {
			setToggleState({ [menuState]: false });
		} else if (Object.keys(toggleState).length === 0) {
			setToggleState({ [menuState]: true });
		} else {
			Object.keys(toggleState).forEach((i) => {
				setToggleState({ [i]: false });
			});
			setToggleState({ [menuState]: true });
		}
	}

    return {toggleState, toggleMenuState}
}

