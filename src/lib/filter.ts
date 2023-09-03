import Fuse from "fuse.js";

export function getImageCategories(images: ImageProps[]) {
	const categorySet = images.reduce((acc, image) => {
		image.tags.forEach((tag) => acc.add(tag));
		return acc;
	}, new Set<ImageCategory>());

	return Array.from(categorySet);
}

export const defaultImageFilterValue: ImageFilterValue = {
	searchQuery: "",
	category: undefined,
};

export function getFilteredImages(
	images: ImageProps[],
	{ searchQuery, category }: ImageFilterValue
): ImageProps[] {
	const filters: ImageFilter[] = [];

	// filter based on the selected category
	if (category) {
		filters.push((image) => image.tags.includes(category));
	}

	// apply all filters
	const filteredImages = images.filter((image) =>
		filters.every((filter) => filter(image))
	);
	// no need to search, return filteredSnippets
	if (searchQuery === "") {
		return sortImagesDescending(filteredImages);
	}

	const fuse = new Fuse(filteredImages, { keys: ["title", "description"] });
	const searchResults = fuse.search(searchQuery);

	return searchResults.map((result) => result.item);
}

function sortImagesDescending(
	images: ImageProps[],
	limit?: number
): ImageProps[] {
	const sortedImages = images.sort((a, b) => {
		const dateA = new Date(a.created_at).getTime();
		const dateB = new Date(b.created_at).getTime();

		if (dateA !== dateB) {
			return dateB - dateA;
		}

		return a.title.localeCompare(b.title);
	});

	return limit ? sortedImages.slice(0, limit) : sortedImages;
}

export function dateSortDesc(a: string, b: string) {
	if (a > b) return -1;
	if (a < b) return 1;
	return 0;
}

export function sortedImageList(allSnippets: ImageProps[]) {
	return allSnippets.sort((a, b) => dateSortDesc(a.created_at, b.created_at));
}
