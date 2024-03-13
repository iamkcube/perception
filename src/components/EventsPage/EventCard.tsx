import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import { handleAddRemoveUserEvent } from "@api/dbAPI";
import { timeFormatChanger } from "@assets/ts/timeFormatChanger";
import {
	Box,
	Card,
	CardActionArea,
	CardMedia,
	Divider,
	Stack,
	Typography,
	styled,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CustomButton from "@utils/CustomButton";
import { useContext } from "react";

interface EventCardTypes {
	name: string;
	club: string;
	description: string;
	start_time: string;
	end_time: string;
}

export default function EventCard({
	name,
	club,
	description,
	start_time,
	end_time,
}: EventCardTypes) {
	const { isSmallDevice } = useOtherContext();

	const queryClient = useQueryClient();
	const { userDoc } = useAuth();
	const { openSnackbar } = useContext(SnackbarContext);

	const {
		mutate: mutateRegisterForEvent,
		isPending: isLoadingRegisterForEvent,
	} = useMutation({
		mutationFn: async (isRegistered: boolean) => {
			if (userDoc && userDoc?.email) {
				await handleAddRemoveUserEvent(
					isRegistered,
					userDoc.email,
					name
				);

				queryClient.invalidateQueries({ queryKey: ["eventsList"] });
				queryClient.invalidateQueries({ queryKey: ["userDoc"] });

				openSnackbar(
					`You have successfully ${
						isRegistered ? "deregistered" : "registered"
					} for ${name}`
				);
			} else {
				openSnackbar(`Log In first!`);
			}
		},
		onError(error) {
			console.error(error);
		},
	});

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
				{name.toUpperCase()}
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
					<MonoTyp>{club}</MonoTyp>
					<MonoTyp>Tech/ Innovations.</MonoTyp>
				</Stack>
				<CardActionArea
					sx={CardActionAreaStyles(
						(userDoc?.userEvents ?? []).includes(name)
					)}
					onClick={() => {
						if (isSmallDevice) return;

						mutateRegisterForEvent(
							(userDoc?.userEvents ?? []).includes(name)
						);
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
				</CardActionArea>
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
							Tuesday, {timeFormatChanger(start_time)} -{" "}
							{timeFormatChanger(end_time)}
						</MonoTyp>
					</Stack>
					<Typography
						sx={{
							lineHeight: "2.5ex",
							fontSize: "0.9rem",
							gridRow: "1 / 3",
						}}
					>
						{description}
					</Typography>
					{true && (
						<Stack
							sx={{
								display: "flex",
								gap: "0.5rem",
								["@container (max-width: 500px)"]: {
									display: "grid",
									gridTemplateColumns: "1fr",
								},
							}}
						>
							<CustomButton
								onClick={() => {
									mutateRegisterForEvent(
										(userDoc?.userEvents ?? []).includes(
											name
										)
									);
								}}
								loading={isLoadingRegisterForEvent}
								color={
									(userDoc?.userEvents ?? []).includes(name)
										? "inherit"
										: "primary"
								}
							>
								{(userDoc?.userEvents ?? []).includes(name)
									? "Deregister"
									: "Register"}
							</CustomButton>
							{/* <CustomButton
							color="inherit"
							onClick={() => {}}
						>
							Read More
						</CustomButton> */}
						</Stack>
					)}
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

const CardActionAreaStyles = (isRegistered: boolean) => {
	return {
		padding: 0,
		transition: "filter 250ms ease-in-out",
		position: "relative",
		"&:hover": {
			// filter: "brightness(80%)",
		},
		"&::before": {
			content: '""',
			position: "absolute",
			inset: 0,
			backgroundColor: "transparent",
			transition: "background-color 250ms ease-in-out",
			zIndex: 1,
		},
		"&::after": {
			content: `"Click to ${isRegistered ? "Deregister" : "Register"}"`,
			position: "absolute",
			top: "50%",
			left: "50%",
			transform: "translate(-50% , -50%)",
			color: "var(--text-color)",
			fontSize: "1.2rem",
			textAlign: "center",
			opacity: 0,
			transition: "opacity 250ms ease-in-out",
			zIndex: 2,
		},
		"&:hover:before": {
			backgroundColor:
				"color-mix(in lab, var(--body-color) 60%, transparent)",
		},
		"&:hover:after": {
			opacity: 1,
		},
	};
};
