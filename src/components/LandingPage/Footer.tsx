/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconButton, Stack, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useOtherContext } from "@/contexts/OtherContext";
import { Link } from "react-router-dom";

export default function Footer() {
	const { isBigDevice } = useOtherContext();

	return (
		<Stack
			direction={isBigDevice ? "row" : "column-reverse"}
			justifyContent="space-between"
			alignItems="center"
			width="80vw"
			gap={isBigDevice ? "auto" : "0.25rem"}
			marginInline="auto"
			marginBlock="2rem 1rem"
		>
			<Link
				to="./termsandconditions"
				style={{
					textDecoration: "none",
					color: "var(--accent-primary)",
				}}
			>
				&copy; All Rights Reserved
			</Link>
			<Stack
				alignItems="center"
				spacing={0.25}
			>
				<Typography color="var(--accent-blue)">
					Made with ❤️ by{" "}
					<span css={mainLinkStyles}>
						<a
							target="_blank"
							href="http://github.com/iamkcube"
							css={linkStyle}
						>
							iamkcube
						</a>
					</span>{" "}
					& team
				</Typography>
			</Stack>
			<Stack
				direction="row"
				marginBlockEnd={isBigDevice ? "auto" : "1rem"}
				gap="0.25rem"
			>
				<IconButton
					color="primary"
					onClick={() =>
						window.open(
							"https://www.instagram.com/perception_outr",
							"_blank"
						)
					}
				>
					<InstagramIcon />
				</IconButton>
				<IconButton
					color="primary"
					onClick={() =>
						window.open(
							"https://www.facebook.com/perception.cetb/",
							"_blank"
						)
					}
				>
					<FacebookIcon />
				</IconButton>
				<IconButton
					color="primary"
					onClick={() =>
						window.open("https://youtu.be/fR-0O85IlSE", "_blank")
					}
				>
					<YouTubeIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
}
const linkStyle = css`
	color: var(--accent-primary);
	text-decoration: none;
	text-transform: none;
`;

const mainLinkStyles = css`
	position: relative;
	text-decoration: none;
	&:before {
		content: "";
		display: inline-block;
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 2px;
		background-color: var(--accent-primary);
		scale: 0% 50%;
		transform-origin: right;
		transition: scale 0.3s ease-in-out;
	}
	&:hover:before {
		scale: 100% 50%;
		transform-origin: left;
		height: 2px;
	}
`;
