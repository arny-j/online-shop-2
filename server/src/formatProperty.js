const formatProperty = (property) => {
	return {
		id: property._id,
		description: property.description,
		address: property.address,
		title: property.title,
		img: property.img,
		askingPrice: property.askingPrice,
		createdBy: property.createdBy,
	};
};

module.exports = formatProperty;
