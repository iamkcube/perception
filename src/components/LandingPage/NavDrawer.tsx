import NavbarLinks from "@landingpage/NavbarLinks";
import Drawer from "@mui/material/Drawer";

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
