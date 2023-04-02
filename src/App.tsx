import "./App.css";
import { Content } from "./components/Content";
import { Controls } from "./components/Controls";
import { useFetchJsonData } from "./hooks/useFetchJsonData";
import { Class, Data, Item } from "./types/types";
import { useState } from "react";

function App() {
	const [selectedClass, setSelectedClass] = useState<Class>("Barbarian");
	const [selectedItemType, setSelectedItemType] = useState<Item>("Unique");
	const data: Data | null = useFetchJsonData("dataminedData.json");

	const classOptions: Class[] = ["Barbarian", "Druid", "Generic", "Necromancer", "Rogue", "Sorcerer"];
	const itemOptions: Item[] = ["Legendary", "Unique"];

	const handleOnClickClassButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: Class) => {
		setSelectedClass(newValue);
	};

	const handleOnClickItemButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: Item) => {
		setSelectedItemType(newValue);
	};

	if (!data) return <div>Loading...</div>;

	return (
		<div className="App">
			<Controls
				selectedClass={selectedClass}
				selectedItemType={selectedItemType}
				setSelectedItemType={handleOnClickItemButton}
				onChange={handleOnClickClassButton}
				options={classOptions}
				itemOptions={itemOptions}
			/>
			<Content data={data} selectedClass={selectedClass} selectedItemType={selectedItemType} />
		</div>
	);
}

export default App;
