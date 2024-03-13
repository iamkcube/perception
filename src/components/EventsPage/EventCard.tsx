import
	{
		Box,
		Card,
		CardActions,
		CardMedia,
		Divider,
		Stack,
		Typography,
		styled,
	} from "@mui/material";

export default function EventCard() {
	return (
		<Card
			sx={{
				backgroundColor: "var(--accent-white)",
				borderRadius: 0,
				padding: "1rem",
				color: "var(--text-color-dark)",
				position: "relative",
				containerType: "inline-size",
				"&:after": {
					content: '""',
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					height: "30%",
					backgroundImage:
						"linear-gradient(to top, color-mix(in lab, var(--deep-blue) 50%, transparent), transparent)",
				},
			}}
		>
			<Typography
				sx={{
					color: "var(--text-color-dark)",
					textAlign: "right",
					fontSize: "clamp(2rem, 3vw + 1rem ,4rem)",
					fontWeight: "bold",
				}}
			>
				SSE DAY
			</Typography>
			<Divider
				flexItem
				variant="fullWidth"
				sx={{ backgroundColor: "var(--body-color)" }}
			/>
			<Stack
				spacing="0.75rem"
				zIndex="1"
			>
				<Stack
					direction="row"
					justifyContent="space-between"
				>
					<MonoTyp>Course 1</MonoTyp>
					<MonoTyp>Tech/ Innovations.</MonoTyp>
				</Stack>
				<CardActions
					sx={{
						padding: 0,
					}}
				>
					<CardMedia
						component="img"
						src="https://unsplash.it/1080/720"
						alt="Event Image"
						sx={{
							width: "100%",
							aspectRatio: "16/9",
							objectFit: "cover",
						}}
					/>
				</CardActions>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						["@container (min-width: 500px)"]: {
							display: "grid",
							gridTemplateColumns: "1fr 1fr",
							gridTemplateRows: "1fr auto",
						},
					}}
				>
					<Stack
						spacing="0.25rem"
						gridRow="1/2"
					>
						<MonoTyp>Session [01]</MonoTyp>
						<Divider
							flexItem
							variant="fullWidth"
							sx={{ backgroundColor: "var(--body-color)" }}
						/>
						<MonoTyp
							sx={{
								fontSize: "1rem",
								fontWeight: "400",
							}}
						>
							Tuesday, [02.03.2024]
						</MonoTyp>
					</Stack>
					<Typography
						sx={{
							lineHeight: "2.5ex",
							fontSize: "0.9rem",
							gridRow: "1 / 3",
						}}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Itaque magnam obcaecati doloribus? Culpa commodi quidem
						saepe repudiandae quis minima eius.
					</Typography>
					{/* <Stack
						sx={{
							display: "flex",
							gap: "0.5rem",
							["@container (max-width: 500px)"]: {
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
							},
						}}
					>
						<CustomButton onClick={() => {}}>Register</CustomButton>
						<CustomButton
							color="inherit"
							onClick={() => {}}
						>
							Read More
						</CustomButton>
					</Stack> */}
				</Box>
			</Stack>
		</Card>
	);
}

const MonoTyp = styled(Typography)({
	fontFamily: "var(--monospace-font)",
	fontWeight: "500",
	fontSize: "clamp(1rem, 2vw + 0.5rem ,1.125rem)",
	lineHeight: "2.5ex",
});
