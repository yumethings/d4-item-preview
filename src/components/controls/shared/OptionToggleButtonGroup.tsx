import { ToggleButtonGroup, ToggleButton, ToggleButtonGroupProps } from "@mui/material";

interface OptionToggleButtonGroupProps<T extends string> {
	value: T;
	options: T[];
	onChange: (_e: React.MouseEvent<HTMLElement, MouseEvent>, newValue: T) => void;
	toggleButtonGroupProps?: ToggleButtonGroupProps;
}

export const OptionToggleButtonGroup = <T extends string>({
	value,
	options,
	onChange,
	toggleButtonGroupProps,
}: OptionToggleButtonGroupProps<T>) => (
	<ToggleButtonGroup color="primary" exclusive value={value} onChange={onChange} {...toggleButtonGroupProps}>
		{options.map((option, idx) => (
			<ToggleButton key={idx} value={option}>
				{option}
			</ToggleButton>
		))}
	</ToggleButtonGroup>
);
