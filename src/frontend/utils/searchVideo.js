const searchVideo = (data, query) => {
	if (query) {
		query = query.toLowerCase();
		return data.filter(
			(video) =>
				video.title.toLowerCase().includes(query) ||
				video.creator.toLowerCase().includes(query) ||
				video.categoryName.toLowerCase().includes(query)
		);
	}
	return data;
};

export { searchVideo };
