const sortByCategory = (data, category) => {
	if (category === "All") {
		return data;
	} else {
		return data.filter((video) => video.categoryName === category);
	}
};

export { sortByCategory };
