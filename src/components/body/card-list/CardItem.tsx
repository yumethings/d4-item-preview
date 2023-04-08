import { Paper, Typography, Divider } from "@mui/material";
import { replaceUnderscores } from "../../../utilities/stringUtilities";
import { isUniqueItem } from "../../../utilities/typeGuards";
import { ItemData } from "../../../types/global.types";
import { ItemDataTable } from "../item-data-table/ItemDataTable";

interface CardItemProps {
	itemType: string;
	itemData: ItemData;
}

export const CardItem = ({ itemType, itemData }: CardItemProps) => {
	const isUnique = isUniqueItem(itemData);
	const { name } = itemData;

	return (
		<Paper variant={"outlined"} sx={{ height: "100%", marginTop: 2 }}>
			<Paper elevation={3} sx={{ height: "100%" }}>
				<Typography variant="h3">{`${name}`}</Typography>
				<Typography variant="h6">
					{`${replaceUnderscores(itemType).replace(/ .*/, "").replace(/1H/, "1H-").replace(/2H/, "2H-")}`}
				</Typography>
				<Divider />
				<ItemDataTable itemData={itemData} isUnique={isUnique} />
			</Paper>
		</Paper>
	);
};
