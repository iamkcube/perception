import { useOtherContext } from "@/contexts/OtherContext";
import { Stack, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CustomButton from "@utils/CustomButton";

interface LoginPageProps {
	userLoggedIn: boolean;
	emailRef: React.RefObject<HTMLInputElement>;
	passwordRef: React.RefObject<HTMLInputElement>;
	mutateLogin: () => void;
	isLoadingLogin: boolean;
	mutateSignUpWithGoogle: () => void;
	isLoadingSignUpWithGoogle: boolean;
	mutateSignOut: () => void;
	isLoadingSignOut: boolean;
}

export default function LoginPage({
	userLoggedIn,
	emailRef,
	passwordRef,
	mutateLogin,
	isLoadingLogin,
	mutateSignUpWithGoogle,
	isLoadingSignUpWithGoogle,
	mutateSignOut,
	isLoadingSignOut,
}: LoginPageProps) {
	const { isBigDevice } = useOtherContext();

	const { state } = useLocation();
	useEffect(() => {
		emailRef.current!.value = state?.email || "";
		passwordRef.current!.value = state?.password || "";
	}, []);

	return (
		<form
			style={{
				marginInline: isBigDevice ? "auto" : "2rem",
				width: isBigDevice ? "40ch" : "90vw",
				display: "grid",
				placeItems: "center",
				gap: "1rem",
				gridArea: "top-start/ top-start / bottom-end / bottom-end",
			}}
		>
			<Stack
				direction="row"
				width="100%"
				alignItems="center"
				marginBlockEnd="0.5em"
				spacing={1}
			>
				<Typography
					fontFamily="var(--monospace-font)"
					fontSize="2rem"
					paddingInlineEnd={1}
				>
					Log In
				</Typography>
			</Stack>
			<TextField
				id="email"
				variant="outlined"
				label="Enter Email"
				inputRef={emailRef}
				fullWidth
				required
				InputProps={{
					style: {
						borderRadius: "100px",
					},
				}}
			/>
			<TextField
				id="password"
				type="password"
				variant="outlined"
				label="Enter Password"
				inputRef={passwordRef}
				fullWidth
				required
				InputProps={{
					style: {
						borderRadius: "100px",
					},
				}}
			/>
			<Stack
				direction="column"
				spacing={1}
			>
				<CustomButton
					type="submit"
					variant="outlined"
					color="secondary"
					onClick={(e) => {
						e.preventDefault();
						mutateLogin();
					}}
					loading={isLoadingLogin}
				>
					Log In
				</CustomButton>
				<CustomButton
					variant="outlined"
					color="secondary"
					onClick={mutateSignUpWithGoogle}
					loading={isLoadingSignUpWithGoogle}
				>
					Sign In with Google
				</CustomButton>
				{userLoggedIn && (
					<CustomButton
						variant="outlined"
						color="secondary"
						onClick={mutateSignOut}
						loading={isLoadingSignOut}
					>
						Sign Out
					</CustomButton>
				)}
			</Stack>
		</form>
	);
}
