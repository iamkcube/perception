import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import { clubList } from "@assets/ts/clubList";
import { eventList } from "@assets/ts/eventList";
import EventCard from "@eventspage/EventCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Box, Fab, IconButton, Stack, Typography } from "@mui/material";
import CustomChip from "@utils/CustomChip";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

type ClubRecord = Record<
	| "Central"
	| "Zairza"
	| "Spectrum"
	| "Energy"
	| "SAE"
	| "Codechef"
	| "GDSC"
	| "ASME"
	| "Aerospace"
	| "Biozo"
	| "Civicon",
	boolean
>;

export default function EventsPage() {
	const { isBigDevice } = useOtherContext();

	const navigate = useNavigate();
	const { userLoggedIn, userDoc, currentUser } = useAuth();

	const [filters, setFilters] = useState<ClubRecord>(
		clubList.reduce(
			(obj, club) => ({ ...obj, [club]: false }),
			{} as ClubRecord
		)
	);

	const filteredObject: EventList = {};
	for (const dayKey in eventList) {
		const day = eventList[dayKey as keyof typeof eventList];
		filteredObject[dayKey] = {
			date: day.date,
			events: day.events.filter((event: Event) => {
				const filterValues = Object.values(filters);
				if (
					filterValues.every((value) => value) ||
					filterValues.every((value) => !value)
				) {
					return true;
				}
				for (const filter in filters) {
					if (
						filters[filter as keyof ClubRecord] &&
						event.club === filter
					) {
						return true;
					}
				}
				return false;
			}),
		};
	}

	const headingFontStyles = {
		fontFamily: "var(--monospace-font)",
		fontSize: "clamp(2.5rem, 3vw + 1rem, 4rem)",
		paddingInline: isBigDevice ? "0.25rem" : "0.2rem",
		textAlign: "center",
	};

	return (
		<Box
			width={
				isBigDevice ? "min(100% - 4rem, 1400px)" : "calc(100% - 2rem)"
			}
			marginInline="auto"
			marginBlock="4rem"
		>
			<Box
				sx={{
					display: "grid",
					gridTemplateColumns: "1fr auto 1fr",
					justifyContent: "center",
					marginBlock: "2rem",
				}}
			>
				<IconButton
					onClick={() => navigate("../")}
					sx={{
						justifySelf: "start",
						alignSelf: "center",
					}}
				>
					<ArrowBackIcon />
				</IconButton>
				<Typography sx={headingFontStyles}>All Events</Typography>
				{userLoggedIn && (
					<Link
						to="../login"
						style={{
							alignSelf: "center",
							justifySelf: "end",
						}}
					>
						<Avatar
							src={
								userDoc?.photoUrl ||
								currentUser?.photoURL ||
								"https://www.unsplash.it/100/100"
							}
						></Avatar>
					</Link>
				)}
			</Box>
			<Stack
				direction={isBigDevice ? "row" : "column"}
				alignItems={isBigDevice ? "center" : "flex-start"}
				spacing={isBigDevice ? "1.5rem" : "0.5rem"}
			>
				<Typography sx={{ whiteSpace: "nowrap" }}>Filter by</Typography>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns:
							"repeat(auto-fit, minmax(9ch, 1fr))",
						alignItems: isBigDevice ? "center" : "flex-start",
						gap: "0.5rem",
						width: "100%",
					}}
				>
					{clubList.map((club, index) => (
						<CustomChip
							key={index}
							label={club}
							onClick={() => {
								setFilters((prevFilter) => {
									return {
										...prevFilter,
										[club]: !prevFilter[
											club as keyof ClubRecord
										],
									};
								});
							}}
						/>
					))}
				</Box>
			</Stack>
			{
				// eventsList
				// ?.sort((a, b) => a.date.seconds - b.date.seconds)
				Object.keys(filteredObject).map((key) => {
					return (
						<React.Fragment key={key}>
							{filteredObject[key].events.length ? (
								<Typography
									variant="h2"
									sx={{
										fontSize:
											"clamp(1.25rem, 5vw + 0.125rem, 2.5rem)",
										marginBlockStart: "3rem",
										fontFamily: "var(--monospace-font)",
									}}
								>
									{getTitleFromKey(filteredObject[key].date)}
								</Typography>
							) : null}
							<Box
								sx={{
									display: "grid",
									gridTemplateColumns: isBigDevice
										? "repeat(auto-fit, minmax( min(350px, 100%), 1fr ))"
										: "1fr",
									gap: "1rem",
									marginBlockStart: "1.69rem",
									"& > *:only-child": {
										maxWidth: "max(33%, 24rem)",
									},
									"& > *": {
										display: "flex",
										flexDirection: "column",
									},
								}}
							>
								{filteredObject[key].events
									?.sort(
										(a, b) => +a.start_time - +b.start_time
									)
									?.map((values, index) => {
										console.log(
											"🚀 ~ Object.keys ~ values:",
											values
										);
										return (
											<EventCard
												key={index}
												{...values}
											/>
										);
									})}
							</Box>
						</React.Fragment>
					);
				})
				// filteredEvents?.map((values, index) => {
				// 	return (
				// 		<EventCard
				// 			key={index}
				// 			{...values}
				// 		/>
				// 	);
				// })
			}
			<Fab
				color="primary"
				aria-label="up"
				onClick={() => window.scrollTo(0, 0)}
				sx={{
					position: "fixed",
					bottom: "2rem",
					right: "2rem",
				}}
			>
				<KeyboardDoubleArrowUpIcon />
			</Fab>
		</Box>
	);
}

function getTitleFromKey(key: string) {
	const dateParts = key.split("-");
	const formattedDate = new Date(
		Date.UTC(+dateParts[0], +dateParts[1] - 1, +dateParts[2])
	);
	return new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		day: "numeric",
		month: "long",
	}).format(formattedDate);
}

interface Event {
	name: string;
	club: string;
	description: string;
	start_time: string;
	end_time: string;
}

interface EventList {
	[key: string]: {
		date: string;
		events: Event[];
	};
}
