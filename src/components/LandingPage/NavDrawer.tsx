import NavbarLinks from "@landingpage/NavbarLinks";
import { Drawer } from "@mui/material";

interface NavDrawerProps {
	isDrawerOpen: boolean;
	setIsDrawerOpen: (x: boolean) => void;
}

export default function NavDrawer({
	isDrawerOpen,
	setIsDrawerOpen,
}: NavDrawerProps) {
	return (
		<>
			<Drawer
				anchor={"right"}
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}
				disableRestoreFocus
				PaperProps={{
					style: {
						backgroundColor:
							"color-mix(in lab, var(--body-color), transparent)",
						backdropFilter: "blur(8px)",
					},
				}}
			>
				<NavbarLinks
					forDrawer
					isDrawerOpen={isDrawerOpen}
					setIsDrawerOpen={setIsDrawerOpen}
				/>
			</Drawer>
		</>
	);
}
