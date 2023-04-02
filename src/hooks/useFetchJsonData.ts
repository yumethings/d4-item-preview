import { useEffect, useState } from "react";
import { Data } from "../types/types";

export const useFetchJsonData = (filename: string) => {
	const [data, setData] = useState<Data | null>(null);

	useEffect(() => {
		fetch(filename)
			.then((res) => res.json())
			.then((parsedData) => {
				setData(parsedData);
			});
	}, [filename]);

	return data;
};
