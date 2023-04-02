import { Container, Typography } from "@mui/material";
import { Class, Data, Item } from "../types/types";
import { Uniques } from "./Uniques";
import { Legendaries } from "./Legendaries";

interface ContentProps {
	data: Data;
	selectedClass: Class;
	selectedItemType: Item;
}

export const Content = ({ data, selectedClass, selectedItemType }: ContentProps) => {
	if (!selectedClass) {
		return (
			<Container>
				<Typography variant="h1">{"Select a class"}</Typography>
			</Container>
		);
	}

	return selectedItemType === "Unique" ? (
		<Uniques data={data} selectedClass={selectedClass} />
	) : (
		<Legendaries data={data} selectedClass={selectedClass} />
	);
};
