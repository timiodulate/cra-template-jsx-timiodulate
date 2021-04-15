import React from "react";

const Context = React.createContext(null);

class ContextProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			details: {},
		};
	}

	setDetails = (details) => {
		this.setState({ details });
	};

	render() {
		return (
			<Context.Provider
				value={{
					details: this.state.details,
					setDetails: this.setDetails,
				}}
			>
				{this.props.children}
			</Context.Provider>
		);
	}
}

export { Context, ContextProvider as default };
