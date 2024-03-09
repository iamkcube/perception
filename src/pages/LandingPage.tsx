import AboutUs from "@landingpage/AboutUs";
import Background from "@landingpage/Background";
import FAQ from "@landingpage/FAQ";
import HowToReach from "@landingpage/HowToReach";
import MeetOurTeam from '@landingpage/MeetOurTeam';
import { Box } from "@mui/material";
// import bgObject from "@/assets/images/bgObject.png";
// import Spline from "@splinetool/react-spline";

export default function LandingPage() {
	return (
		<Box>
			<Background />
			<AboutUs />
			<FAQ />
			<HowToReach />
			<MeetOurTeam />
			{/* <Spline scene="https://prod.spline.design/hHFaVj0jlUF058eO/scene.splinecode" /> */}
			
		</Box>
	);
}
