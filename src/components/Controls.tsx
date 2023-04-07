import { Grid, IconButton, Paper, Stack } from "@mui/material";
import { NightsStay, LightModeRounded } from "@mui/icons-material";
import { ClassName, ItemType } from "../types/types";
import { useThemeContext } from "../context/ThemeContext";
import { TimerInfo } from "./TimerInfo";
import { OptionToggleButtonGroup } from "./OptionToggleButtonGroup";

interface ControlsProps {
	classOptions: ClassName[];
	handleOnClickClassButton: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ClassName) => void;
	handleOnClickItemButton: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ItemType) => void;
	itemOptions: ItemType[];
	selectedClassName: ClassName;
	selectedItemType: ItemType;
}

export const Controls = ({
	classOptions,
	handleOnClickItemButton,
	handleOnClickClassButton,
	itemOptions,
	selectedClassName,
	selectedItemType,
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
						<OptionToggleButtonGroup
							value={selectedClassName}
							options={classOptions}
							onChange={handleOnClickClassButton}
						/>
					</Grid>
					<Grid item>
						<IconButton sx={{ margin: 1 }} onClick={toggleThemeMode} color="inherit">
							{themeMode === "dark" ? <NightsStay /> : <LightModeRounded />}
						</IconButton>
					</Grid>
				</Stack>
				{selectedClassName && (
					<Grid item>
						<OptionToggleButtonGroup
							value={selectedItemType}
							options={itemOptions}
							onChange={handleOnClickItemButton}
						/>
					</Grid>
				)}
			</Stack>
		</Paper>
	);
};
