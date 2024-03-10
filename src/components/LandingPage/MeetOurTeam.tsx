import { useOtherContext } from "@/contexts/OtherContext";
import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

export default function MeetOurTeam() {
	const { isBigDevice } = useOtherContext();

	const namesObj = [
		{
			name: "Kalinga Kumar Khatua",
			imageUrl: "https:source.unsplash.com/480x480?profile,humana",
		},
		{
			name: "Smruti Soumyak Pradhan",
			imageUrl: "https:source.unsplash.com/480x480?profile,humanm",
		},
		{
			name: "Ankita Sahu",
			imageUrl: "https:source.unsplash.com/480x480?profile,humanu",
		},
		{
			name: "Madhusmita Pradhan",
			imageUrl: "https:source.unsplash.com/480x480?profile,humann",
		},
		{
			name: "Ankita Sunani",
			imageUrl: "https:source.unsplash.com/480x480?profile,humani",
		},
		{
			name: "SmrutiBinda Khuntia",
			imageUrl: "https:source.unsplash.com/480x480?profile,humane",
		},
		{
			name: "Debasis Sahoo",
			imageUrl: "https:source.unsplash.com/480x480?profile,humano",
		},
	];

	return (
		<Box
			style={{
				position: "relative",
				display: "grid",
				backgroundColor: "var(--accent-white)",
				color: "var(--text-color-dark)",
				gridTemplateColumns: isBigDevice ? "1fr 1fr" : "auto",
				gridTemplateRows: "auto 1fr",
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
				[05]
			</Typography>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				&#10010; [It's us]
			</Typography>
			<h1
				id="MeetOurTeam"
				style={{
					fontSize: "clamp(2.5rem, 4vw + 1rem , 4rem)",
				}}
			>
				Meet our team
			</h1>
			<Box
				sx={{
					// gridColumn: isBigDevice ? "1/3" : "auto",
					display: "grid",
					gridTemplateColumns: isBigDevice
						? "repeat(3, 1fr)"
						: "auto",
				}}
			>
				{namesObj.map(({ name, imageUrl }) => (
					<React.Fragment key={name}>
						<Stack
							direction={isBigDevice ? "column" : "row"}
							alignItems={isBigDevice ? "start" : "end"}
							padding="1rem"
							spacing="1rem"
						>
							<Box maxWidth="30%">
								<img
									src={imageUrl}
									width={400}
									height={400}
									style={{
										width: "100%",
										height: "100%",
										aspectRatio: "1/1",
										objectFit: "cover",
									}}
									alt={name}
								/>
							</Box>
							<Typography
								fontSize="clamp(0.9rem , 3vw , 1.05rem)"
								fontFamily="var(--monospace-font)"
								fontWeight="500"
								lineHeight="2ch"
							>
								{name}
							</Typography>
						</Stack>
						{!isBigDevice && (
							<Divider
								flexItem
								variant="inset"
								sx={{ backgroundColor: "var(--body-color)" }}
							/>
						)}
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
}
