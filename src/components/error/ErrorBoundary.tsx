import { Box, Container, Typography } from "@mui/material";
import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

type ErrorBoundaryState = {
	error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { error: null };
	}

	static getDerivedStateFromError(err: Error): ErrorBoundaryState {
		return { error: err };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error("Uncaught error:", error, errorInfo);
	}

	render() {
		if (this.state.error) {
			return (
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100vh",
					}}
				>
					<Container sx={{ margin: 1, textAlign: "center" }}>
						<Typography variant="h1">{`Something went wrong`}</Typography>
						<Typography variant="h3">{`Please try refreshing the page.`}</Typography>
						<Typography variant="body1" sx={{}}>{`${this.state.error.message}`}</Typography>
					</Container>
				</Box>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
