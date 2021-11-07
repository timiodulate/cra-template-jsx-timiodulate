import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(async () => {
		const response = await fetch(url);
		const jsonData = await response.json();
		const [item] = jsonData.results;
		setData(item);
		setLoading(false);
	}, []);

	return { data, loading };
};
