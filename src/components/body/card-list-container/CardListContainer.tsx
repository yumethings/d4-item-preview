import { Container, Typography } from "@mui/material";
import { ClassName, Data, ItemRarity } from "../../../types/global.types";
import { CardList } from "../card-list/CardList";

interface CardListContainerProps {
	data: Data;
	selectedClassName: ClassName;
	selectedItemRarity: ItemRarity;
}

export const CardListContainer = ({ data, selectedClassName, selectedItemRarity }: CardListContainerProps) => {
	if (!selectedClassName) {
		return (
			<Container>
				<Typography variant="h1">{"Select a class"}</Typography>
			</Container>
		);
	}

	if (!selectedItemRarity)
		return (
			<Container>
				<Typography variant="h1">{"Select an item type"}</Typography>
			</Container>
		);

	return <CardList data={data} selectedClassName={selectedClassName} selectedItemRarity={selectedItemRarity} />;
};
