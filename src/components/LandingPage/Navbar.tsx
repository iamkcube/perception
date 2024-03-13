import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import NavDrawer from "@landingpage/NavDrawer";
import NavbarLinks from "@landingpage/NavbarLinks";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Avatar, Box } from "@mui/material";
import CustomButton from "@utils/CustomButton";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
	const navigate = useNavigate();
	const { userLoggedIn, currentUser, userDoc } = useAuth();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const { isBigDevice, isSmallDevice } = useOtherContext();

	return (
		<Box
			role="navigation"
			sx={{
				"--background":
					"color-mix(in lab, var(--body-color) 40%, transparent)",
				position: "sticky",
				top: 0,
				display: "grid",
				gridTemplateColumns: `repeat(${userLoggedIn ? 4 : 3}, auto)`,
				gridTemplateAreas: `"left center right"`,
				justifyContent: "space-between",
				alignItems: "center",
				minHeight: "var(--navbar-height)",
				marginInline: "clamp(2rem, 4vw + 1rem , 4rem)",
				backgroundColor: "var(--background)",
				zIndex: 100,
				// full-bleed
				boxShadow: "0 0 0 100vmax var(--background)",
				clipPath: "inset(0 -100vmax)",
			}}
		>
			<IconButton
				// disableRipple
				sx={{ padding: 0 }}
				onClick={() => window.scrollTo(0, 0)}
			>
				<img
					src="/logo.png"
					alt="Logo"
					width={40}
				/>
			</IconButton>
			<NavDrawer
				isDrawerOpen={isDrawerOpen}
				setIsDrawerOpen={setIsDrawerOpen}
			/>

			{isBigDevice && <NavbarLinks />}
			<CustomButton
				onClick={() => {
					navigate(userLoggedIn ? "./events" : "./login");
				}}
				variant={isBigDevice ? "outlined" : "text"}
			>
				{userLoggedIn ? "Register" : "Log In"}
			</CustomButton>

			{userLoggedIn && (
				<Link to="./login">
					<Avatar
						src={
							userDoc?.photoUrl ||
							currentUser?.photoURL ||
							"https://www.unsplash.it/100/100"
						}
					></Avatar>
				</Link>
			)}
			{isSmallDevice && (
				<IconButton onClick={() => setIsDrawerOpen(true)}>
					<MenuIcon />
				</IconButton>
			)}
		</Box>
	);
}
