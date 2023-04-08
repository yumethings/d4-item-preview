import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Typography } from "@mui/material";
import { ItemData, UniqueItem } from "../../../types/global.types";
import {
	processValue,
	processDescription,
	replaceKeyWithValue,
	formatHeader,
	formatDescription,
} from "./itemDataTable.utils";
import { replaceUnderscores, variableKeys } from "../../../utilities/stringUtilities";

interface ItemDataTableProps {
	itemData: ItemData;
	isUnique: boolean;
}

export const ItemDataTable = ({ itemData, isUnique }: ItemDataTableProps) => {
	const { desc, values } = itemData;
	const affixes = isUnique ? (itemData as UniqueItem).affixes : undefined;
	const flavor = isUnique ? (itemData as UniqueItem).flavor : undefined;

	const valueArray = values.map(processValue);
	const description = processDescription(desc);
	const currentKeys = variableKeys.filter((varKey) => description.includes(varKey));
	const formattedDescription = replaceKeyWithValue(description, currentKeys, valueArray);

	const excludedCategories = ["category", "name", "values"];

	return (
		<TableContainer>
			<Table>
				<TableHead>
					<TableRow>
						{Object.keys(itemData)
							.filter((key) => !excludedCategories.includes(key))
							.map((key, idx) => (
								<TableCell
									key={idx}
									align="center"
									sx={{ fontWeight: "bold", fontSize: 18, boxShadow: 1, width: "33%" }}
								>
									{formatHeader(key)}
								</TableCell>
							))}
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						{affixes && (
							<TableCell sx={{ textAlign: "center", boxShadow: 1, width: "33%" }}>
								{affixes.map((affix, idx) => (
									<Typography key={idx} align="center">
										{replaceUnderscores(affix)}
									</Typography>
								))}
							</TableCell>
						)}
						<TableCell sx={{ textAlign: "center", fontSize: 20, boxShadow: 1, width: "33%" }}>
							{formatDescription(formattedDescription)}
						</TableCell>
						{flavor && (
							<TableCell sx={{ textAlign: "center", boxShadow: 1, fontStyle: "italic", width: "33%" }}>
								{flavor?.split(`\n`).map((entry, idx) => (
									<Typography key={idx} align="center">
										{entry}
									</Typography>
								))}
							</TableCell>
						)}
					</TableRow>
				</TableBody>
			</Table>
		</TableContainer>
	);
};
