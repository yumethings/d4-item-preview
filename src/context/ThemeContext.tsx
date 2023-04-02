import { createContext, ReactNode, useContext, useState } from "react";
import { PaletteMode, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "../styling/theme";

type ThemeContextType = {
	themeMode: PaletteMode;
	toggleThemeMode: () => void;
};

type ThemeProviderProps = {
	children?: ReactNode;
};

const systemPrefTheme: PaletteMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const getInitialTheme = (): PaletteMode => systemPrefTheme;

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [themeMode, setThemeMode] = useState<PaletteMode>(getInitialTheme);

	const toggleThemeMode = () => {
		const newTheme: PaletteMode = themeMode === "light" ? "dark" : "light";
		setThemeMode(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
			<MuiThemeProvider theme={themeMode === "light" ? lightTheme : darkTheme}>{children}</MuiThemeProvider>
		</ThemeContext.Provider>
	);
};

export const useThemeContext = () => {
	const themeContext = useContext(ThemeContext);

	if (!themeContext) {
		throw new Error("No ThemeContext.Provider wrapper found when calling useThemeContext!");
	}

	return themeContext;
};
