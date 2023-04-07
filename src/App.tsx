import "./App.css";
import { Content } from "./components/Content";
import { Controls } from "./components/Controls";
import { useFetchJsonData } from "./hooks/useFetchJsonData";
import { ClassName, Data, ItemType } from "./types/types";
import { useState } from "react";

function App() {
	const [selectedClass, setSelectedClass] = useState<ClassName>("Barbarian");
	const [selectedItemType, setSelectedItemType] = useState<ItemType>("Unique");
	const data: Data | null = useFetchJsonData("dataminedData.json");

	const classOptions: ClassName[] = ["Barbarian", "Druid", "Generic", "Necromancer", "Rogue", "Sorcerer"];
	const itemOptions: ItemType[] = ["Legendary", "Unique"];

	const handleOnClickClassButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ClassName) => {
		setSelectedClass(newValue);
	};

	const handleOnClickItemButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ItemType) => {
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
