import { useOtherContext } from "@/contexts/OtherContext";
import ImageMover from "@landingpage/ImageMover";
import { Box, Typography } from "@mui/material";

export default function LastYear() {
	const { isBigDevice } = useOtherContext();

	return (
		<Box
			id="imageMoverContainer"
			style={{
				display: "grid",
				position: "relative",
				gridTemplateColumns: isBigDevice ? "1fr 1fr" : "auto",
				gridTemplateRows: "auto 1fr",
				paddingInline: "clamp(2rem, 4vw + 1rem , 4rem)",
				paddingBlock: "3rem",
				rowGap: isBigDevice ? "3rem" : "1rem",
				overflow: "hidden",
			}}
		>
			<Typography
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50% , -50%)",
					bgcolor: "transparent",
					padding: "0.75ch 1.25ch",
					borderRadius: "100vmax",
					// boxShadow: "var(--box-shadow-primary)",
					// filter: "drop-shadow(0px 0.7px 100px color-mix(in lab, var(--accent-primary) 100%, transparent))",
					animation:
						"inc-box-shadow 3s ease-in-out infinite alternate",
				}}
			>
				{isBigDevice ? "Hover" : "Touch"} to reveal!
			</Typography>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				[04]
			</Typography>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				&#10010; [Previously on Perception]
			</Typography>
			<h1
				id="LastYear"
				style={{
					fontSize: "clamp(2.5rem, 4vw + 1rem , 4rem)",
				}}
			>
				Last Year
			</h1>
			<Box
				sx={{
					gridColumn: isBigDevice ? "1/3" : "auto",
					minHeight: "70vh",
				}}
			>
				<ImageMover />
			</Box>
		</Box>
	);
}
