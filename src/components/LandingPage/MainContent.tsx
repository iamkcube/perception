import { useOtherContext } from "@/contexts/OtherContext";
import CountdownTimer from "@landingpage/CountdownTimer";
import { Box, Typography } from "@mui/material";
import CustomButton from "@utils/CustomButton";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const myText = "PERCEPTION";
let iteration = 0;

export default function MainContent() {
	const { isBigDevice } = useOtherContext();
	const navigate = useNavigate();
	const [text, setText] = useState("PERCEPTION");
	const [letterWidth, setLetterWidth] = useState<"1.1ch" | "auto">("1.1ch");
	const h1Ref = useRef<HTMLSpanElement | null>(null);

	const handleMouseOver = () => {
		const interval = setInterval(() => {
			setText((prevText) =>
				prevText
					.split("")
					.map((_, index) => {
						if (index < iteration) {
							return myText[index];
						}

						return letters[Math.floor(Math.random() * 26)];
					})
					.join("")
			);

			if (iteration >= text.length) {
				clearInterval(interval);
			}

			iteration += 1 / 9;
			if (iteration > 10) {
				setLetterWidth("auto");
			}
		}, 32);

		return () => {
			clearInterval(interval);
		};
	};

	useEffect(() => {
		return handleMouseOver();
	}, []);

	return (
		<>
			<Box
				sx={{
					display: "grid",
					minHeight: "calc(100svh - var(--navbar-height))",
					gridTemplateColumns: "1fr auto",
					marginInline: "clamp(2rem, 4vw + 1rem , 4rem)",
				}}
			>
				<Box
					sx={{
						display: "grid",
						placeContent: "center",
						gap: "1rem",
						filter: `drop-shadow(0 0 40px var(--accent-primary)) 
							 drop-shadow(0 0 100px var(--deep-blue))`,
						animation:
							"heading-animation 10s ease-in-out infinite alternate",
						// minWidth: "",
					}}
				>
					<Typography
						variant="h1"
						ref={h1Ref}
						align="center"
						letterSpacing={isBigDevice ? "0.15ch" : "0.025ch"}
						textTransform="uppercase"
						fontWeight="bold"
						// fontSize="clamp(3rem, 10vw + 0.25rem, 8rem)"
						// fontSize="clamp(5rem, 13vw + 1rem, 12rem)"
						fontSize="clamp(1.35rem, 5vw + 0.125rem, 5rem)"
						marginBlock="clamp(0.5rem, 2vw + 0.125rem, 2rem)"
						color="white"
						// fontFamily="Bebas Neue"
						fontFamily="designsystem"
						onMouseOver={handleMouseOver}
						sx={{
							pointerEvents: "none",
							display: "flex",
							justifyContent: "center",
							gap: isBigDevice ? "0.15ch" : "0.025ch",
						}}
					>
						{text.split("").map((letter, index) => (
							<span
								key={index}
								style={{
									display: "inline-block",
									width: letterWidth,
								}}
							>
								{letter}
							</span>
						))}
					</Typography>
					<Typography
						variant="h1"
						align="center"
						fontSize="clamp(0.95rem, 3vw + 0.25rem, 1.75rem)"
						fontFamily="var(--monospace-font)"
						color="var(--accent-white)"
					>
						<CountdownTimer date="2024-03-20" />
					</Typography>
					<CustomButton
						onClick={() => {
							navigate("./events");
						}}
						variant="outlined"
						color="secondary"
						sx={{
							justifySelf: "center",
							marginBlockStart: "4rem",
						}}
					>
						Register Now
					</CustomButton>
				</Box>
				{/* <Box
					sx={{
						writingMode: "vertical-lr",
						justifyContent: "space-evenly",
					}}
				>
					<Typography>hello</Typography>
					<Typography>hello</Typography>
				</Box> */}
			</Box>
		</>
	);
}
