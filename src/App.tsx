import { AuthProvider } from "@/contexts/AuthContext";
import SnackbarProvider from "@/contexts/SnackbarContext/SnackbarProvider";
import EventsPage from "@pages/EventsPage";
import LandingPage from "@pages/LandingPage";
import LoginSignupPage from "@pages/LoginSignupPage";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "@utils/ScrollToTop";
import OtherContextProvider from "@/contexts/OtherContext";
import AccommodationPage from "@pages/AccommodationPage";
import MerchPage from "@pages/MerchPage";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#6B71F2",
			contrastText: "#ffffff",
		},
		secondary: {
			main: "#0FF2B2",
			contrastText: "#292929",
		},
	},
	typography: {
		fontFamily: [
			"Cera Pro",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

function App() {
	return (
		<AuthProvider>
			<OtherContextProvider>
				<SnackbarProvider>
					<ThemeProvider theme={theme}>
						<BrowserRouter>
							<ScrollToTop />
							<Routes>
								<Route
									path="/*"
									element={<LoginSignupPage />}
								/>
								<Route
									path="/events"
									element={<EventsPage />}
								/>
								<Route
									path="/merch"
									element={<MerchPage />}
								/>
								<Route
									path="/accommodation"
									element={<AccommodationPage />}
								/>
								<Route
									path="/"
									element={<LandingPage />}
								/>
							</Routes>
						</BrowserRouter>
					</ThemeProvider>
				</SnackbarProvider>
			</OtherContextProvider>
		</AuthProvider>
	);
}

export default App;
