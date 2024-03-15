import { useOtherContext } from "@/contexts/OtherContext";
import { FAQQuesAndAns } from "@assets/ts/faqQuesAndAns";
import AddIcon from "@mui/icons-material/Add";
import
	{
		Accordion,
		AccordionDetails,
		AccordionSummary,
		Box,
		Stack,
		Typography,
	} from "@mui/material";

export default function FAQ() {
	const { isBigDevice } = useOtherContext();

	return (
		<Box
			style={{
				display: "grid",
				gridTemplateColumns: isBigDevice ? "1fr 1fr" : "auto",
				gridTemplateRows: "auto 1fr",
				paddingInline: "clamp(2rem, 4vw + 1rem , 4rem)",
				paddingBlock: "3rem",
				rowGap: isBigDevice ? "3rem" : "1rem",
			}}
		>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				[02]
			</Typography>
			<Typography
				sx={{
					fontFamily: "var(--monospace-font)",
					fontWeight: "500",
				}}
			>
				&#10010; [Have any questions?]
			</Typography>
			<h1
				id="FAQ"
				style={{
					fontSize: "clamp(2.5rem, 4vw + 1rem , 4rem)",
				}}
			>
				FAQ
			</h1>
			<Stack spacing="2rem">
				<Stack>
					{FAQQuesAndAns.map(({ question, answer }, index) => (
						<Accordion
							key={index}
							sx={{
								backgroundColor: "var(--body-color)",
							}}
						>
							<AccordionSummary
								expandIcon={<AddIcon />}
								aria-controls={`panel${index}-content`}
								id={`panel${index}-header`}
							>
								{question}
							</AccordionSummary>
							<AccordionDetails>{answer}</AccordionDetails>
						</Accordion>
					))}
				</Stack>
				{/* <CustomButton
					color="inherit"
					sx={{
						alignSelf: "flex-start",
					}}
					onClick={() => {}}
				>
					See More
				</CustomButton> */}
			</Stack>
		</Box>
	);
}
