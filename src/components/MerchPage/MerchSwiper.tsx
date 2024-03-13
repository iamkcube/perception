import { useOtherContext } from "@/contexts/OtherContext";
import tshirt1 from "@assets/images/tshirt1-remove1.webp";
import tshirt2 from "@assets/images/tshirt1-remove2.webp";
import { Box, Stack } from "@mui/material";

export default function MerchSwiper() {
	const { isBigDevice } = useOtherContext();

	return (
		<Stack
			direction="row"
			justifyContent="center"
			gap="clamp(3rem, 10vw + 0.25rem, 8rem)"
			// width="100%"
		>
			{isBigDevice && (
				<img
					src={tshirt1}
					alt="tshirt1"
					width="20%"
					style={{ objectFit: "contain" }}
				/>
			)}
			<Box
				sx={{
					display: "grid",
					gridTemplateAreas: '"center"',
					width: "min(80%, 20rem)",
					// margin: "auto",
				}}
			>
				{/* <Box
					sx={{
						width: "50vw",
					}}
				>
					<Spline
						scene="https://prod.spline.design/EAFsQDo-ndOtC6JT/scene.splinecode"
						style={{
							objectFit: "contain",
						}}
					/>
				</Box> */}
				<img
					src={tshirt1}
					alt="Front Tshirt"
					style={{
						gridArea: "center",
						transform: "rotateY(0deg)",
						zIndex: "2",
						animation: "animation1 4s ease-in-out infinite",
					}}
				/>
				<img
					src={tshirt2}
					alt="Front Tshirt"
					style={{
						gridArea: "center",
						transform: "rotateY(180deg)",
						zIndex: "1",
						animation: "animation2 4s ease-in-out infinite",
					}}
				/>
			</Box>
			{isBigDevice && (
				<img
					src={tshirt2}
					alt="tshirt2"
					width="20%"
					style={{ objectFit: "contain" }}
				/>
			)}
		</Stack>
	);
}
