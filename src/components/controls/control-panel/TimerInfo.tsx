import { Paper, Typography } from "@mui/material";
import { differenceInCalendarDays } from "date-fns";
import { useState, useEffect } from "react";
import { today } from "../../../utilities/dateUtilities";

export const TimerInfo = () => {
	const [daysLeftUntilRelease, setDaysLeftUntilRelease] = useState<number>(
		differenceInCalendarDays(new Date("2023-06-02"), today()),
	);
	const [counts, setCounts] = useState<number>(0);

	useEffect(() => {
		const id = setInterval(() => {
			setDaysLeftUntilRelease(differenceInCalendarDays(new Date("2023-06-02"), today()));
		}, 3600000);

		return () => {
			clearInterval(id);
		};
	}, []);

	useEffect(() => {
		const startTime = Date.now();
		const id = setInterval(() => {
			setCounts(Math.floor((Date.now() - startTime) / 1000));
		}, 1000);

		return () => clearInterval(id);
	}, []);

	return (
		<Paper elevation={3} sx={{ padding: 1 }}>
			<Typography>{`${daysLeftUntilRelease} days left until early-access`}</Typography>
			<Typography>{`You have been on this page for ${counts} seconds`}</Typography>
		</Paper>
	);
};
