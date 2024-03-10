import AboutUs from "@landingpage/AboutUs";
import Background from "@landingpage/Background";
import FAQ from "@landingpage/FAQ";
import Footer from "@landingpage/Footer";
import HowToReach from "@landingpage/HowToReach";
import LastYear from "@landingpage/LastYear";
import MainContent from "@landingpage/MainContent";
import MeetOurTeam from "@landingpage/MeetOurTeam";
import Navbar from "@landingpage/Navbar";
import { Box } from "@mui/material";
// import bgObject from "@/assets/images/bgObject.png";
// import Spline from "@splinetool/react-spline";

export default function LandingPage() {
	return (
		<Box>
			<Background />
			<Navbar />
			<MainContent />
			<AboutUs />
			<FAQ />
			<HowToReach />
			<LastYear />
			<MeetOurTeam />
			<Footer />
			{/* <Spline scene="https://prod.spline.design/hHFaVj0jlUF058eO/scene.splinecode" /> */}
		</Box>
	);
}
