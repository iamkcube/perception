/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

interface NavbarLinksProps {
	forDrawer?: boolean;
	isDrawerOpen?: boolean;
	setIsDrawerOpen?: (x: boolean) => void;
}

export default function NavbarLinks({
	forDrawer = false,
	isDrawerOpen,
	setIsDrawerOpen,
}: NavbarLinksProps) {
	const forDrawerLinkStyles = `
	width: 100%;
	background-color: color-mix(in srgb, var(--accent-white) 10%, transparent);
	border-radius: 8px;
	padding: 0.75rem;`;

	const linkStyle = css`
		position: relative;
		color: var(--text-color);
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		white-space: nowrap;
		transition: background-color 250ms ease-out;
		${forDrawer && forDrawerLinkStyles}
		&:hover {
			color: color-mix(
				in lab,
				var(--accent-primary),
				white ${forDrawer ? "0%" : "30%"}
			);
			${forDrawer &&
			"background-color: color-mix(in srgb, var(--accent-white) 5%, transparent);"}
		}
		&:before {
			${!forDrawer && 'content: "";'}
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

	return (
		<List
			sx={{
				display: "flex",
				flexDirection: forDrawer ? "column" : "row",
				listStyle: "none",
				width: forDrawer ? 250 : "auto",
				margin: "auto",
				padding: forDrawer ? "0.5rem" : "auto",
				...(forDrawer && {
					marginBlockStart: "4rem",
				}),
			}}
			onClick={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
			// onKeyDown={() => setIsDrawerOpen && setIsDrawerOpen(!isDrawerOpen)}
		>
			<ListItem>
				<Link
					to=""
					css={linkStyle}
					onClick={() => window.scrollTo(0, 0)}
				>
					Home
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to=""
					css={linkStyle}
					onClick={() =>
						document.getElementById("AboutUs")?.scrollIntoView()
					}
				>
					About
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to="./events"
					css={linkStyle}
				>
					Events
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to=""
					css={linkStyle}
					onClick={() =>
						document.getElementById("FAQ")?.scrollIntoView()
					}
				>
					FAQ
				</Link>
			</ListItem>
			<ListItem>
				<Link
					to=""
					css={linkStyle}
					onClick={() =>
						document.getElementById("HowToReach")?.scrollIntoView()
					}
				>
					How To Reach
				</Link>
			</ListItem>
			{/* <ListItem>
				<Link
					to="./accommodation"
					css={linkStyle}
				>
					Accommodation
				</Link>
			</ListItem> */}
			<ListItem>
				<Link
					to="./merch"
					css={linkStyle}
				>
					Merchandise
				</Link>
			</ListItem>{" "}
		</List>
	);
}
