import { useOtherContext } from "@/contexts/OtherContext";
import { namesObj } from "@assets/ts/namesObj";
import { Add } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Divider,
	IconButton,
	Typography,
	styled,
} from "@mui/material";
import React from "react";

export default function MeetOurTeam() {
	const { isBigDevice } = useOtherContext();

	return (
		<Box
			id="MeetOurTeam"
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
					gap: "2rem",
					marginBlock: "2rem",
					gridTemplateColumns: isBigDevice
						? "repeat(2, 1fr)"
						: "auto",
				}}
			>
				{namesObj.map(({ name, imageUrl, socialLink }) => (
					<React.Fragment key={name}>
						<Box
							display="flex"
							// p={1.5}
							gap={2}
							sx={{ alignItems: "center" }}
						>
							<Box>
								<Avatar
									src={imageUrl}
									sx={{
										borderRadius: 0,
										width: 48,
										height: 48,
									}}
								/>
							</Box>
							<Box
								sx={{
									flex: "auto",
									display: "grid",
									gridTemplateRows: "1fr auto",
								}}
							>
								<Typography
									sx={{
										color: "#4d4b5f",
										lineHeight: 1.2,
										fontWeight: 700,
										marginBottom: "0.125rem",
									}}
								>
									{name}
								</Typography>
								<Typography
									sx={{
										color: "#4d4b5f",
										lineHeight: 1.2,
										fontWeight: 700,
										marginBottom: "0.125rem",
									}}
								>
									@
									{
										socialLink.split("/")[
											socialLink.split("/").length - 1
										]
									}
								</Typography>
							</Box>
							<Box ml={1}>
								<StyledIconButton
									size="small"
									onClick={() =>
										window.open(socialLink, "_blank")
									}
								>
									<Add />
								</StyledIconButton>
							</Box>
						</Box>
						{/* 
						<Card
							elevation={0}
							sx={{
								backgroundColor: "var(--accent-white)",
								color: "var(--text-color-dark)",
							}}
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
						</Card> */}
						{!isBigDevice && (
							<Divider
								flexItem
								variant="fullWidth"
								sx={{ backgroundColor: "var(--body-color)" }}
							/>
						)}
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
}

const StyledIconButton = styled(IconButton)(() => ({
	color: "rgba(0, 0, 0, 0.54)",
	"&:hover": {
		color: "#000",
	},
}));
