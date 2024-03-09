import { useOtherContext } from "@/contexts/OtherContext";
import CountdownTimer from "@landingpage/CountdownTimer";
import { Box, Typography } from "@mui/material";
import CustomButton from "@utils/CustomButton";

export default function MainContent() {
	const { isBigDevice } = useOtherContext();

	return (
		<>
			<Box
				sx={{
					display: "grid",
					minHeight: "calc(100vh - var(--navbar-height))",
					gridTemplateColumns: "1fr auto",
					marginInline: "clamp(2rem, 4vw + 1rem , 4rem)",
				}}
			>
				<Box
					sx={{
						display: "grid",
						placeContent: "center",
						gap: "1rem",
						filter: `drop-shadow(0 0 40px var(--accent-primary)) 
							 drop-shadow(0 0 100px var(--deep-blue))`,
						animation:
							"heading-animation 10s ease-in-out infinite alternate",
					}}
				>
					<Typography
						variant="h1"
						align="center"
						letterSpacing={isBigDevice ? "0.3ch" : "0.05ch"}
						textTransform="uppercase"
						fontWeight="bold"
						fontSize="clamp(3rem, 10vw + 0.25rem, 8rem)"
						color="white"
						sx={{
							pointerEvents: "none",
						}}
					>
						Perception
					</Typography>
					<Typography
						variant="h1"
						align="center"
						fontSize="clamp(0.95rem, 3vw + 0.25rem, 2.5rem)"
						fontFamily="var(--monospace-font)"
						color="var(--accent-white)"
					>
						<CountdownTimer date="2024-03-19" /> left
					</Typography>
					<CustomButton
						onClick={() => {}}
						variant="outlined"
						color="secondary"
						sx={{
							justifySelf: "center",
							marginBlockStart: "4rem",
						}}
					>
						Register Now
					</CustomButton>
				</Box>
				<Box
					sx={{
						writingMode: "vertical-lr",
						display: "none",
						justifyContent: "space-evenly",
					}}
				>
					<Typography>hello</Typography>
					<Typography>hello</Typography>
				</Box>
			</Box>
		</>
	);
}
