import { LoadingButton } from "@mui/lab";

type RoundedButtonProps = {
	children: React.ReactNode;
	type?: "reset" | "button" | "submit" | undefined;
	loading?: boolean;
	size?: "small" | "medium" | "large";
	borderWidth?: number;
	color?:
		| "primary"
		| "inherit"
		| "secondary"
		| "success"
		| "error"
		| "info"
		| "warning"
		| undefined;
	variant?: "contained" | "text" | "outlined";
	sx?: React.CSSProperties;
	onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function CustomButton({
	children,
	type,
	size,
	loading,
	borderWidth = 2,
	color = "primary",
	variant = "contained",
	sx,
	onClick,
}: RoundedButtonProps) {
	return (
		<LoadingButton
			size={size}
			type={type}
			disableElevation
			loading={loading}
			color={color}
			variant={variant}
			onClick={onClick}
			sx={{
				borderRadius: 0,
				paddingInline: "2rem",
				paddingBlock: "0.6rem",
				color: "var(--text-color)",
				textTransform: "none",
				lineHeight: "2.5ex",
				"&.MuiLoadingButton-root": {
					borderWidth: borderWidth,
				},
				...sx,
			}}
		>
			{children}
		</LoadingButton>
	);
}
