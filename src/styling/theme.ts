import { createTheme } from "@mui/material";
import { darkModeShadows } from "./darkModeShadows";

const defaultTheme = createTheme({});

export const lightTheme = createTheme({
	...defaultTheme,
	palette: {
		mode: "light",
	},
});

export const darkTheme = createTheme({
	...defaultTheme,
	palette: {
		mode: "dark",
		primary: {
			main: "#734d26",
		},
	},
	shadows: darkModeShadows,
});
