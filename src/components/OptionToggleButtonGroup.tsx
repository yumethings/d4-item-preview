import { ToggleButtonGroup, ToggleButton } from "@mui/material";

interface OptionToggleButtonGroupProps<T extends string> {
	value: T;
	options: T[];
	onChange: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: T) => void;
}

export const OptionToggleButtonGroup = <T extends string>({
	value,
	options,
	onChange,
}: OptionToggleButtonGroupProps<T>) => (
	<ToggleButtonGroup color="primary" exclusive value={value} onChange={onChange}>
		{options.map((option, idx) => (
			<ToggleButton key={idx} value={option}>
				{option}
			</ToggleButton>
		))}
	</ToggleButtonGroup>
);
