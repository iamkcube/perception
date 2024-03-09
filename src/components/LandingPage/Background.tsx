import MetaballsCanvas from "@landingpage/MetaballsCanvas";
import { Box } from "@mui/material";

export default function Background() {
	return (
		<Box
			sx={{
				position: "absolute",
				zIndex: -30,
				top: "0",
				left: "0",
				overflow: "hidden",
				height: "100vh",
				width: "100%",
				margin: "auto",
				filter: "blur(80px) url(#noiseFilter) brightness(100%) contrast(125%)",
			}}
		>
			<MetaballsCanvas
				color1="#6B71F2"
				color2="#6C2EF2"
				noOfBalls={7}
			/>
			<svg display="none">
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="1"
						seed="2"
						numOctaves="2"
						stitchTiles="stitch"
					/>
					<feColorMatrix
						in="colorNoise"
						type="matrix"
						values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"
					/>
					<feComposite
						operator="in"
						in2="SourceGraphic"
						result="monoNoise"
					/>
					<feBlend
						in="SourceGraphic"
						in2="monoNoise"
						mode="normal"
					/>
				</filter>
			</svg>
		</Box>
	);
}
