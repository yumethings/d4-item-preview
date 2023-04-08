import { Container, Grid } from "@mui/material";
import { ClassName, Data, ItemRarity } from "../../../types/global.types";
import { CardItem } from "./CardItem";

interface CardListProps {
	data: Data;
	selectedClassName: ClassName;
	selectedItemRarity: ItemRarity;
}

export const CardList = ({ data, selectedClassName, selectedItemRarity }: CardListProps) => {
	const items = data[selectedClassName][selectedItemRarity] as ItemRarity extends "Unique"
		? Data[ClassName]["Unique"]
		: Data[ClassName]["Legendary"];

	return (
		<Container>
			{Object.entries(items).map(([key, value], idx) => (
				<Grid item key={idx}>
					<CardItem key={key} itemType={key} itemData={value} />
				</Grid>
			))}
		</Container>
	);
};
