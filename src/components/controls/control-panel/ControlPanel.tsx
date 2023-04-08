import { Box, Grid, IconButton, Paper } from "@mui/material";
import { NightsStay, LightModeRounded } from "@mui/icons-material";
import { ClassName, ItemRarity } from "../../../types/global.types";
import { useThemeContext } from "../../../context/ThemeContext";
import { TimerInfo } from "./TimerInfo";
import { OptionToggleButtonGroup } from "../shared/OptionToggleButtonGroup";

interface ControlPanelProps {
	classOptions: ClassName[];
	handleOnClickClassButton: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ClassName) => void;
	handleOnClickItemButton: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ItemRarity) => void;
	itemOptions: ItemRarity[];
	selectedClassName: ClassName;
	selectedItemRarity: ItemRarity;
}

export const ControlPanel = ({
	classOptions,
	handleOnClickItemButton,
	handleOnClickClassButton,
	itemOptions,
	selectedClassName,
	selectedItemRarity,
}: ControlPanelProps) => {
	const { themeMode, toggleThemeMode } = useThemeContext();
	const itemsInGrid = 3;
	const xs = 12;
	const sm = xs / itemsInGrid;

	return (
		<Paper elevation={3} sx={{ marginBottom: 3 }}>
			<Grid container justifyContent="center">
				<Grid item xs={xs} sm={sm}>
					<Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-start" }, pt: 1, pl: { sm: 1 } }}>
						<TimerInfo />
					</Box>
				</Grid>
				<Grid item xs={xs} sm={sm} sx={{ mb: 1 }}>
					<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<OptionToggleButtonGroup
							value={selectedClassName}
							options={classOptions}
							onChange={handleOnClickClassButton}
							toggleButtonGroupProps={{ sx: { justifyContent: "center", flexWrap: "wrap" } }}
						/>
						{selectedClassName && (
							<OptionToggleButtonGroup
								value={selectedItemRarity}
								options={itemOptions}
								onChange={handleOnClickItemButton}
								toggleButtonGroupProps={{ sx: { justifyContent: "center", flexWrap: "wrap" } }}
							/>
						)}
					</Box>
				</Grid>
				<Grid item xs={xs} sm={sm}>
					<Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "flex-end" }, pt: 1, pr: { sm: 1 } }}>
						<IconButton onClick={toggleThemeMode} color="inherit">
							{themeMode === "dark" ? <NightsStay /> : <LightModeRounded />}
						</IconButton>
					</Box>
				</Grid>
			</Grid>
		</Paper>
	);
};
