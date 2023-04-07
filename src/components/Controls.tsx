import { Grid, IconButton, Paper, Stack, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { NightsStay, LightModeRounded } from "@mui/icons-material";
import { ClassName, ItemType } from "../types/types";
import { useThemeContext } from "../context/ThemeContext";
import { today } from "../utilities/dateUtilities";
import { differenceInCalendarDays } from "date-fns";
import { useEffect, useState } from "react";

interface ControlsProps {
	onChange: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ClassName) => void;
	options: ClassName[];
	selectedClass: ClassName;
	selectedItemType: ItemType;
	setSelectedItemType: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ItemType) => void;
	itemOptions: ItemType[];
}

export const Controls = ({
	onChange,
	options,
	selectedClass,
	selectedItemType,
	setSelectedItemType,
	itemOptions,
}: ControlsProps) => {
	const { themeMode, toggleThemeMode } = useThemeContext();
	const [daysLeftUntilRelease, setDaysLeftUntilRelease] = useState<number>(
		differenceInCalendarDays(new Date("2023-06-02"), today()),
	);
	const [counts, setCounts] = useState<number>(0);

	useEffect(() => {
		const id = setTimeout(() => {
			setDaysLeftUntilRelease(differenceInCalendarDays(new Date("2023-06-02"), today()));
		}, 3600000);

		return () => {
			clearTimeout(id);
		};
	}, [daysLeftUntilRelease]);

	useEffect(() => {
		const id = setTimeout(() => {
			setCounts((prevState) => prevState + 1);
		}, 1000);

		return () => clearTimeout(id);
	}, [counts]);

	return (
		<Paper elevation={3} sx={{ marginBottom: 3 }}>
			<Stack>
				<Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
					<Grid item sx={{ marginLeft: 1 }}>
						<Paper elevation={3} sx={{ padding: 1 }}>
							<Typography>{`${daysLeftUntilRelease} days left until early-access`}</Typography>
							<Typography>{`You have been on this page for ${counts} seconds`}</Typography>
						</Paper>
					</Grid>
					<Grid item>
						<ToggleButtonGroup color="primary" exclusive value={selectedClass} onChange={onChange}>
							{options.map((option, idx) => (
								<ToggleButton key={idx} value={option}>
									{option}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					</Grid>
					<Grid item>
						<IconButton sx={{ margin: 1 }} onClick={toggleThemeMode} color="inherit">
							{themeMode === "dark" ? <NightsStay /> : <LightModeRounded />}
						</IconButton>
					</Grid>
				</Stack>
				{selectedClass && (
					<Grid item>
						<ToggleButtonGroup color="primary" exclusive value={selectedItemType} onChange={setSelectedItemType}>
							{itemOptions.map((option, idx) => (
								<ToggleButton key={idx} value={option}>
									{option}
								</ToggleButton>
							))}
						</ToggleButtonGroup>
					</Grid>
				)}
			</Stack>
		</Paper>
	);
};
