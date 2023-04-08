import { Container, Grid, TextField } from "@mui/material";
import { ClassName, Data, ItemData, ItemRarity } from "../../../types/global.types";
import { CardItem } from "./CardItem";
import { sortAlphaNumericallyInObjects } from "../../../utilities/generalUtilities";
import { ChangeEvent, useMemo, useState } from "react";
import { filterItems } from "./cardList.utils";
import { useDebouncedValue } from "../../../hooks/useDebouncedValue";

interface CardListProps {
	data: Data;
	selectedClassName: ClassName;
	selectedItemRarity: ItemRarity;
}

export const CardList = ({ data, selectedClassName, selectedItemRarity }: CardListProps) => {
	const [searchValue, setSearchValue] = useState<string>("");
	const debouncedFilterString = useDebouncedValue(searchValue, 200);

	const items: Record<string, ItemData> = data[selectedClassName][selectedItemRarity] as ItemRarity extends "Unique"
		? Data[ClassName]["Unique"]
		: Data[ClassName]["Legendary"];

	const handleOnChangeInputField = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setSearchValue(e.target.value);
	};

	const filteredItemEntries = useMemo(() => filterItems(items, debouncedFilterString), [items, debouncedFilterString]);

	return (
		<Container>
			<TextField value={searchValue} onChange={handleOnChangeInputField} placeholder="Search..." />
			{filteredItemEntries
				.sort((a, b) => sortAlphaNumericallyInObjects(a[1], b[1], "name"))
				.map(([key, value], idx) => (
					<Grid item key={idx}>
						<CardItem key={key} itemType={key} itemData={value} />
					</Grid>
				))}
		</Container>
	);
};
