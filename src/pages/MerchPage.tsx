import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import MerchSwiper from "@merchpage/MerchSwiper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import CustomButton from "@utils/CustomButton";
import { Link, useNavigate } from "react-router-dom";

export default function MerchPage() {
	const { isBigDevice } = useOtherContext();

	const navigate = useNavigate();
	const { userLoggedIn, userDoc, currentUser } = useAuth();

	// const {
	// 	data: eventsList,
	// 	// isLoading,
	// 	// isError,
	// } = useQuery({
	// 	queryFn: async () => await handleGetAllEvents(),
	// 	queryKey: ["eventsList"],
	// });

	const headingFontStyles = {
		fontFamily: "var(--monospace-font)",
		fontSize: "clamp(2rem, 3vw + 1rem, 4rem)",
		paddingInline: isBigDevice ? "0.25rem" : "0.2rem",
		textAlign: "center",
	};

	return (
		<Box
			width={
				isBigDevice ? "min(100% - 4rem, 1400px)" : "calc(100% - 2rem)"
			}
			marginInline={isBigDevice ? "auto" : "auto"}
			marginBlock="4rem"
			paddingBlockEnd="4rem"
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
				<Typography sx={headingFontStyles}>Merchandise</Typography>
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
			<Box
				sx={{
					display: "grid",
					gap: "2.5rem",
				}}
			>
				<Typography sx={{ textAlign: "center", opacity: 0.75 }}>
					100% COTTON
				</Typography>
				<MerchSwiper />
				<CustomButton
					size="large"
					onClick={() => {
						window.open(
							"https://docs.google.com/forms/d/e/1FAIpQLScJVPIJT_IbgEbR6c7Q9kk2T9oM8StcsttY4CME06E4rx1Flg/viewform",
							"_blank"
						);
					}}
					sx={{
						justifySelf: "center",
						boxShadow: "var(--box-shadow-primary)",
					}}
				>
					Buy Now!
				</CustomButton>
			</Box>
		</Box>
	);
}
