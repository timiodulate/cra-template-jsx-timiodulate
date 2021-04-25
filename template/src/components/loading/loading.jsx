import React from "react";

function LoadingComponent({ children, loading }) {
	return (
		<div>
			{loading && <p>Loading...</p>}
			{children || <div />}
		</div>
	);
}

LoadingComponent.defaultProps = {
	fullScreen: true,
	zIndex: 10,
};

export default LoadingComponent;
