import MetaballsCanvas from "@landingpage/MetaballsCanvas";
import { Box } from "@mui/material";

export default function Background() {
	return (
		<Box
			sx={{
				position: "fixed",
				zIndex: -30,
				top: "0",
				left: "0",
				overflow: "hidden",
				height: "100vh",
				width: "100vw",
				margin: "auto",
				filter: "blur(124px) url(#noiseFilter) brightness(100%) contrast(125%)",
			}}
		>
			<MetaballsCanvas color2="#6B71F2" color1="#0FF2B2" />
			<svg display="none">
				<filter id="noiseFilter">
					<feTurbulence
						type="fractalNoise"
						baseFrequency="0.6"
						seed="2"
						numOctaves="6"
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
						mode="screen"
					/>
				</filter>
			</svg>
		</Box>
	);
}
