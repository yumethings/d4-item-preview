import "./App.css";
import { Content } from "./components/Content";
import { Controls } from "./components/Controls";
import { useFetchJsonData } from "./hooks/useFetchJsonData";
import { ClassName, Data, ItemType } from "./types/types";
import { useState } from "react";

function App() {
	const [selectedClassName, setSelectedClassName] = useState<ClassName>("Barbarian");
	const [selectedItemType, setSelectedItemType] = useState<ItemType>("Unique");
	const data: Data | null = useFetchJsonData("dataminedData.json");

	const classOptions: ClassName[] = ["Barbarian", "Druid", "Generic", "Necromancer", "Rogue", "Sorcerer"];
	const itemOptions: ItemType[] = ["Legendary", "Unique"];

	const handleOnClickClassButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ClassName) => {
		setSelectedClassName(newValue);
	};

	const handleOnClickItemButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ItemType) => {
		setSelectedItemType(newValue);
	};

	if (!data) return <div>Loading...</div>;

	return (
		<div className="App">
			<Controls
				classOptions={classOptions}
				handleOnClickItemButton={handleOnClickItemButton}
				handleOnClickClassButton={handleOnClickClassButton}
				itemOptions={itemOptions}
				selectedClassName={selectedClassName}
				selectedItemType={selectedItemType}
			/>
			<Content data={data} selectedClassName={selectedClassName} selectedItemType={selectedItemType} />
		</div>
	);
}

export default App;
