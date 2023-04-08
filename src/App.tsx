import "./App.css";
import { CardListContainer } from "./components/body/card-list-container/CardListContainer";
import { ControlPanel } from "./components/controls/control-panel/ControlPanel";
import { useFetchJsonData } from "./hooks/useFetchJsonData";
import { ClassName, Data, ItemRarity } from "./types/global.types";
import { useState } from "react";

function App() {
	const [selectedClassName, setSelectedClassName] = useState<ClassName>("Barbarian");
	const [selectedItemRarity, setSelectedItemRarity] = useState<ItemRarity>("Unique");
	const data: Data | null = useFetchJsonData("dataminedData.json");

	const classOptions: ClassName[] = ["Barbarian", "Druid", "Generic", "Necromancer", "Rogue", "Sorcerer"];
	const itemOptions: ItemRarity[] = ["Legendary", "Unique"];

	const handleOnClickClassButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ClassName) => {
		setSelectedClassName(newValue);
	};

	const handleOnClickItemButton = (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: ItemRarity) => {
		setSelectedItemRarity(newValue);
	};

	if (!data) return <div>Loading...</div>;

	return (
		<div className="App">
			<ControlPanel
				classOptions={classOptions}
				handleOnClickItemButton={handleOnClickItemButton}
				handleOnClickClassButton={handleOnClickClassButton}
				itemOptions={itemOptions}
				selectedClassName={selectedClassName}
				selectedItemRarity={selectedItemRarity}
			/>
			<CardListContainer data={data} selectedClassName={selectedClassName} selectedItemRarity={selectedItemRarity} />
		</div>
	);
}

export default App;
