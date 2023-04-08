import { ItemData } from "../../../types/global.types";
import { isUniqueItem } from "../../../utilities/typeGuards";

export const filterItems = (items: Record<string, ItemData>, searchValue: string) => {
	const includessearch = (str: string) => str.toLowerCase().includes(searchValue.toLowerCase());

	if (!searchValue) return Object.entries(items); // return all if search empty

	return Object.entries(items).filter(([key, value]) => {
		if (includessearch(key) || includessearch(value.name) || includessearch(value.desc)) {
			return true;
		}

		if (!isUniqueItem(value)) return false;

		return value.affixes.some(includessearch) || includessearch(value.flavor);
	});
};
