import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorBoundary from "./components/error/ErrorBoundary";

const AppWrapper = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<StrictMode>
				<ThemeProvider>
					<CssBaseline />
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</ThemeProvider>
			</StrictMode>
		</Suspense>
	);
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<AppWrapper />);
