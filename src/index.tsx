import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./context/ThemeContext";

const AppWrapper = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<StrictMode>
				<ThemeProvider>
					<CssBaseline />
					<App />
				</ThemeProvider>
			</StrictMode>
		</Suspense>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<AppWrapper />);
