import { Container, Typography } from "@mui/material";
import { ClassName, Data, ItemType } from "../types/types";
import { ItemsList } from "./item-list/ItemList";

interface ContentProps {
	data: Data;
	selectedClass: ClassName;
	selectedItemType: ItemType;
}

export const Content = ({ data, selectedClass, selectedItemType }: ContentProps) => {
	if (!selectedClass) {
		return (
			<Container>
				<Typography variant="h1">{"Select a class"}</Typography>
			</Container>
		);
	}

	if (!selectedItemType)
		return (
			<Container>
				<Typography variant="h1">{"Select an item type"}</Typography>
			</Container>
		);

	return <ItemsList data={data} selectedClass={selectedClass} itemType={selectedItemType} />;
};
