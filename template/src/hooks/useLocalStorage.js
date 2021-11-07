export function useLocalStorage() {
	// To store data
	localStorage.setItem("Name", "Rahul");

	// To retrieve data
	localStorage.getItem("Name");

	// To clear a specific item
	localStorage.removeItem("Name");

	// To clear the whole data stored in localStorage
	localStorage.clear();
}
