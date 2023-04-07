import {
	Container,
	Grid,
	Paper,
	Typography,
	Divider,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@mui/material";
import { variableKeys, replaceUnderscores } from "../../utilities/stringUtilities";
import {
	processValue,
	processDescription,
	replaceKeyWithValue,
	formatHeader,
	formatDescription,
} from "./itemList.utils";
import { ClassName, Data, ItemType } from "../../types/types";
import { isUniqueItem } from "../../utilities/typeGuards";

interface ItemsListProps {
	data: Data;
	selectedClassName: ClassName;
	itemType: ItemType;
}

export const ItemsList = ({ data, selectedClassName, itemType }: ItemsListProps) => {
	const items = data[selectedClassName][itemType] as ItemType extends "Unique"
		? Data[ClassName]["Unique"]
		: Data[ClassName]["Legendary"];
	const excludedCategories = ["category", "name", "values"];

	return (
		<Container>
			{Object.entries(items).map(([key, value], idx) => {
				const isUnique = isUniqueItem(value);
				const { desc, name, values } = value;
				const affixes = isUnique ? value.affixes : undefined;
				const flavor = isUnique ? value.flavor : undefined;

				const valueArray = values.map(processValue);
				const description = processDescription(desc);
				const currentKeys = variableKeys.filter((varKey) => description.includes(varKey));
				const formattedDescription = replaceKeyWithValue(description, currentKeys, valueArray);

				return (
					<Grid item key={idx}>
						<Paper variant={"outlined"} sx={{ height: "100%", marginTop: 2 }}>
							<Paper elevation={3} sx={{ height: "100%" }}>
								<Typography variant="h3">{`${name}`}</Typography>
								<Typography variant="h6">
									{`${replaceUnderscores(key).replace(/ .*/, "").replace(/1H/, "1H-").replace(/2H/, "2H-")}`}
								</Typography>
								<Divider />

								<TableContainer>
									<Table>
										<TableHead>
											<TableRow>
												{Object.keys(value)
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
							</Paper>
						</Paper>
					</Grid>
				);
			})}
		</Container>
	);
};
