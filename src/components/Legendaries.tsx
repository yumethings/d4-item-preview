import {
	Container,
	Divider,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { Class, Data } from "../types/types";
import {
	removeCharactersBetweenCurlyBrackets,
	replaceUnderscores,
	removePipesAroundNumbers,
	removePipesAroundPercent,
	replaceStaticValueOne,
	replaceStaticValueTwo,
	replaceStaticValueZero,
	replaceSubString,
	variableKeys,
} from "../utilities/stringUtilities";

interface LegendariesProps {
	data: Data;
	selectedClass: Class;
}

export const Legendaries = ({ data, selectedClass }: LegendariesProps) => {
	const { Legendary } = data[selectedClass];

	return (
		<Container>
			{Object.entries(Legendary).map(([key, value], idx) => {
				// const { affixes, category, desc, flavor, name, values } = value;
				const { desc, name, values } = value;
				const excludedCategories: (keyof typeof value)[] = ["category", "name", "values"];

				const valueArray = values.map((val) => {
					return replaceSubString(
						replaceSubString(
							removeCharactersBetweenCurlyBrackets(
								replaceStaticValueTwo(replaceStaticValueOne(replaceStaticValueZero(String(val)))),
							),
							/FloatRandomRangeWithInterval\(\d+, /g,
							"(",
						),
						",",
						" - ",
					);
				});

				const description = replaceStaticValueTwo(
					replaceStaticValueOne(replaceStaticValueZero(removeCharactersBetweenCurlyBrackets(desc))),
				);

				const currentKeys = variableKeys.filter((varKey) => description.includes(varKey));
				let des = description;
				currentKeys.forEach((key, idx) => {
					des = replaceSubString(des, key, valueArray[idx]);
				});

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
													// @ts-ignore
													.filter((key) => !excludedCategories.includes(key))
													.map((key, idx) => {
														return (
															<TableCell
																key={idx}
																align="center"
																sx={{ fontWeight: "bold", fontSize: 18, boxShadow: 1 }}
															>
																{key.replace(key.charAt(0), key.charAt(0).toUpperCase())}
															</TableCell>
														);
													})}
											</TableRow>
										</TableHead>

										<TableBody>
											<TableRow>
												<TableCell sx={{ textAlign: "center", fontSize: 16, boxShadow: 1 }}>
													{removePipesAroundNumbers(
														removePipesAroundPercent(removeCharactersBetweenCurlyBrackets(des))
															.replaceAll("[", "")
															.replaceAll("]", "")
															.replaceAll("Round(", "")
															.replaceAll("))", ")"),
													)}
												</TableCell>
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
