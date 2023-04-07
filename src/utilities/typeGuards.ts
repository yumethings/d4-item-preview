import { ClassName, ItemType, ItemValue, UniqueItem } from "../types/types";

export const isUniqueItem = (item: ItemValue): item is UniqueItem => {
	return "affixes" in item && "flavor" in item;
};

export const isClassName = (item: ClassName | ItemType): item is ClassName => {
	return ["Barbarian", "Druid", "Generic", "Necromancer", "Rogue" || "Sorcerer"].includes(item);
};
