import { Chip } from "@mui/material";
import { useState } from "react";

interface CustomChipProps {
	label: string;
	onClick: () => void;
}

export default function CustomChip({ label, onClick }: CustomChipProps) {
	const [isFilled, setIsFilled] = useState(false);
	return (
		<Chip
			label={label}
			color="primary"
			variant={isFilled ? "filled" : "outlined"}
			onClick={() => {
				setIsFilled(!isFilled);
				onClick();
			}}
		/>
	);
}
