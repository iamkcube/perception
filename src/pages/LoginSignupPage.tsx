import validateEmail from "@/assets/ts/validateEmail";
import { useAuth } from "@/contexts/AuthContext";
import { useOtherContext } from "@/contexts/OtherContext";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import {
	handleLogin,
	handleSignOut,
	handleSignUp,
	handleSignUpWithGoogle,
	handleSignUpWithGoogleRedirect,
	ifRedirectMakeUser,
} from "@api/authAPI";
import LoginPage from "@loginsignuppage/LoginPage";
import SignupPage from "@loginsignuppage/SignupPage";
import { Box, Stack } from "@mui/material";
import Spline from "@splinetool/react-spline";
import { useMutation } from "@tanstack/react-query";
import CustomButton from "@utils/CustomButton";
import { useContext, useEffect, useRef } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

export default function LoginSignupPage() {
	const { isBigDevice } = useOtherContext();

	const location = useLocation();
	const navigate = useNavigate();
	const { userLoggedIn } = useAuth();
	const { openSnackbar } = useContext(SnackbarContext);

	const nameRef = useRef<HTMLInputElement>(null);
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const photoRef = useRef<HTMLInputElement>(null);

	const { mutate: mutateLogin, isPending: isLoadingLogin } = useMutation({
		mutationFn: () => {
			const email = emailRef?.current?.value;
			const password = passwordRef?.current?.value;

			if (!email || !password) {
				return Promise.reject(new Error("All fields are required."));
			} else if (!validateEmail(email)) {
				return Promise.reject(new Error("Invalid Email Id."));
			} else {
				return handleLogin(email, password);
			}
		},
		onSuccess: () => {
			navigate("../");
			openSnackbar("Login successful!");
		},
		onError(error) {
			if (
				error.message === "Firebase: Error (auth/invalid-credential)."
			) {
				openSnackbar("Invalid Email or Password.");
			} else openSnackbar(error.toString());
		},
	});

	const { mutate: mutateSignUp, isPending: isLoadingSignUp } = useMutation({
		mutationFn: () => {
			const name = nameRef?.current?.value;
			const email = emailRef?.current?.value;
			const password = passwordRef?.current?.value;

			if (!name || !email || !password) {
				return Promise.reject(new Error("All fields are required."));
			} else if (!validateEmail(email)) {
				return Promise.reject(new Error("Invalid Email Id."));
			} else {
				return handleSignUp(
					name,
					email,
					password,
					photoRef?.current?.files?.[0]
				);
			}
		},
		onSuccess: () => {
			navigate("../");
			openSnackbar("Sign Up successful!");
		},
		onError(error) {
			if (
				error.message === "Firebase: Error (auth/email-already-in-use)."
			) {
				openSnackbar("Already Signed Up. Try logging in.");
			} else openSnackbar(error.toString());
			console.log(error);
		},
	});

	const {
		mutate: mutateSignUpWithGoogle,
		isPending: isLoadingSignUpWithGoogle,
	} = useMutation({
		mutationFn: () => {
			return !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
				navigator.userAgent
			)
				? handleSignUpWithGoogleRedirect()
				: handleSignUpWithGoogle();
		},
		onSuccess: () => {
			navigate("../");
		},
		onError(error) {
			if (
				error.message ==
				"Firebase: IdP denied access. This usually happens when user refuses to grant permission. (auth/user-cancelled)."
			) {
				openSnackbar("Please grant the permissions first.");
			}
			console.log(error.message);
		},
	});

	useEffect(() => {
		const justRun = async () => {
			const isRedirected = await ifRedirectMakeUser();
			console.log("🚀 ~ justRun ~ isRedirected:", isRedirected);
			if (isRedirected) {
				navigate("../");
				openSnackbar("Sign In with Google successful!");
			}
		};
		justRun();
	}, []);

	const { mutate: mutateSignOut, isPending: isLoadingSignOut } = useMutation({
		mutationFn: () => handleSignOut(),
		onSuccess: () => {
			openSnackbar("Logged Out.");
		},
	});

	return (
		<Box
			sx={{
				display: "grid",
				placeContent: "center",
				minHeight: "100svh",
				position: "relative",
				overflow: "hidden",
				"&::before": {
					content: '""',
					position: "absolute",
					inset: 0,
					backgroundImage:
						"linear-gradient(to top, color-mix(in lab, var(--accent-primary) 30%, transparent), transparent 30%)",
				},
			}}
		>
			<Spline
				scene="https://prod.spline.design/hHFaVj0jlUF058eO/scene.splinecode"
				style={{
					position: "absolute",
					opacity: 0,
					// opacity: 0.4,
					animation: "fade-in 3s ease-in 2s forwards"
				}}
				onScroll={() => {}}
			/>
			<Stack
				justifyContent="space-between"
				alignItems="center"
				direction={isBigDevice ? "row" : "column"}
				marginBlockEnd={isBigDevice ? "2rem" : "1rem"}
			>
				<Box>
					<CustomButton
						variant="text"
						sx={{ color: "var(--accent-secondary)" }}
						onClick={() => navigate("../")}
					>
						Back to Home
					</CustomButton>
				</Box>

				<Box>
					<CustomButton
						variant="text"
						sx={{ color: "var(--accent-secondary)" }}
						onClick={() =>
							navigate(
								`../${
									location.pathname === "/login"
										? "signup"
										: "login"
								}`,
								{
									state: {
										email: emailRef?.current?.value,
										password: passwordRef?.current?.value,
									},
								}
							)
						}
					>
						{location.pathname === "/login"
							? "Sign Up Here"
							: "Log In Here"}
					</CustomButton>
				</Box>
			</Stack>

			<Box
				sx={{
					display: "grid",
					alignItems: "center",
					gridTemplateRows: "1fr 10% 1fr",
					gridTemplateAreas: `"top"
										"gap"
										"bottom"`,
				}}
			>
				<Routes>
					<Route
						path="/login"
						element={
							<LoginPage
								userLoggedIn={userLoggedIn}
								emailRef={emailRef}
								passwordRef={passwordRef}
								mutateLogin={mutateLogin}
								isLoadingLogin={isLoadingLogin}
								mutateSignUpWithGoogle={mutateSignUpWithGoogle}
								isLoadingSignUpWithGoogle={
									isLoadingSignUpWithGoogle
								}
								mutateSignOut={mutateSignOut}
								isLoadingSignOut={isLoadingSignOut}
							/>
						}
					/>
					<Route
						path="/signup"
						element={
							<SignupPage
								userLoggedIn={userLoggedIn}
								nameRef={nameRef}
								emailRef={emailRef}
								passwordRef={passwordRef}
								photoRef={photoRef}
								mutateSignUp={mutateSignUp}
								isLoadingSignUp={isLoadingSignUp}
								mutateSignUpWithGoogle={mutateSignUpWithGoogle}
								isLoadingSignUpWithGoogle={
									isLoadingSignUpWithGoogle
								}
								mutateSignOut={mutateSignOut}
								isLoadingSignOut={isLoadingSignOut}
							/>
						}
					/>
				</Routes>
			</Box>
		</Box>
	);
}
