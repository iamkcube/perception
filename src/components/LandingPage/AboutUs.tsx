import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Stack, Typography } from "@mui/material";
import CustomButton from "@utils/CustomButton";
import aboutUsPic from "@assets/images/about_us.webp";

export default function AboutUs() {
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
				[01]
			</Typography>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				&#10010; [Who we are]
			</Typography>
			<h1
				id="AboutUs"
				style={{
					fontSize: "clamp(2.5rem, 4vw + 1rem , 4rem)",
				}}
			>
				About us
			</h1>
			<Stack spacing="1rem">
				<img
					src={aboutUsPic}
					width={1080}
					height={720}
					loading="lazy"
					style={{
						width: "100%",
						height: "100%",
						aspectRatio: "4/3",
						objectFit: "cover",
					}}
					alt="techfest"
				/>
				<h2>Perception</h2>
				<Typography
					sx={{
						fontFamily: "var(--monospace-font)",
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
				<CustomButton
					color="inherit"
					sx={{
						alignSelf: "flex-start",
					}}
					onClick={() => {document.getElementById("MeetOurTeam")?.scrollIntoView()}}
				>
					Read More
				</CustomButton>
			</Stack>
		</Box>
	);
}
