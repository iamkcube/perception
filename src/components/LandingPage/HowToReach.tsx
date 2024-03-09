import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Stack, Typography } from "@mui/material";

export default function HowToReach() {
	const { isBigDevice } = useOtherContext();

	return (
		<Box
			style={{
				display: "grid",
				gridTemplateColumns: isBigDevice ? "1fr 1fr" : "auto",
				gridTemplateRows: "auto 1fr",
				backgroundColor: "var(--accent-white)",
				color: "var(--text-color-dark)",
				paddingInline: "clamp(2rem, 4vw + 1rem , 4rem)",
				paddingBlock: "3rem",
				rowGap: isBigDevice ? "3rem" : "1rem",
			}}
		>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				[03]
			</Typography>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				&#10010; [Where we are]
			</Typography>
			<Stack spacing="1rem">
				<h1
					id="HowToReach"
					style={{
						fontSize: "3rem",
					}}
				>
					How to reach
				</h1>
				<Typography
					sx={{
						fontFamily: "var(--monospace-font)",
						maxWidth: "60ch",
					}}
				>
					Perception is the Annual Tech Fest of Odisha University of
					Technology and Research, Bhubaneswar. This is a three day
					long festival for technocrats with a bunch of technical and
					fun filled events. This premier inter college event of our
					esteemed University allows students from different corners
					of the state to challenge, compete and show their technical
					abundance.
				</Typography>
			</Stack>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.358729897278!2d85.776639!3d20.275845!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a7f9d486f7c3%3A0xde71ead59307dcca!2sOdisha%20University%20of%20Technology%20and%20Research!5e0!3m2!1sen!2sin!4v1709994524634!5m2!1sen!2sin"
				width="100%"
				allowFullScreen={true}
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				style={{
					border: 0,
					aspectRatio: isBigDevice ? "4/3" : "3/4",
				}}	
			/>
		</Box>
	);
}
