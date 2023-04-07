import { Grid, IconButton, Paper, Stack } from "@mui/material";
import { NightsStay, LightModeRounded } from "@mui/icons-material";
import { ClassName, ItemType } from "../types/types";
import { useThemeContext } from "../context/ThemeContext";
import { TimerInfo } from "./TimerInfo";
import { OptionToggleButtonGroup } from "./OptionToggleButtonGroup";

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

	return (
		<Paper elevation={3} sx={{ marginBottom: 3 }}>
			<Stack>
				<Stack direction="row" justifyContent={"space-between"} alignItems={"center"}>
					<Grid item sx={{ marginLeft: 1 }}>
						<TimerInfo />
					</Grid>
					<Grid item>
						<OptionToggleButtonGroup value={selectedClass} options={options} onChange={onChange} />
					</Grid>
					<Grid item>
						<IconButton sx={{ margin: 1 }} onClick={toggleThemeMode} color="inherit">
							{themeMode === "dark" ? <NightsStay /> : <LightModeRounded />}
						</IconButton>
					</Grid>
				</Stack>
				{selectedClass && (
					<Grid item>
						<OptionToggleButtonGroup value={selectedItemType} options={itemOptions} onChange={setSelectedItemType} />
					</Grid>
				)}
			</Stack>
		</Paper>
	);
};
