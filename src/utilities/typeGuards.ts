import { ItemValue, UniqueItem } from "../types/global.types";

export const isUniqueItem = (item: ItemValue): item is UniqueItem => {
	return "affixes" in item && "flavor" in item;
};
