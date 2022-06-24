import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Lofi",
	},
	{
		_id: uuid(),
		categoryName: "Romantic",
	},
	{
		_id: uuid(),
		categoryName: "Mashup",
	},
	{
		_id: uuid(),
		categoryName: "English",
	},
];
