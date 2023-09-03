import { Database as DB } from "@/types/database.types";

type Image = DB["public"]["Tables"]["images"]["Row"];

declare global {
	type Database = DB;
	type ImageProps = Image;
	type ImageCategory = ImageProps["tags"][number];
	type ImageFilter = (snippet: ImageProps) => boolean;

	type ImageFilterValue = {
		searchQuery: string;
		category: ImageCategory | undefined;
	};
}
