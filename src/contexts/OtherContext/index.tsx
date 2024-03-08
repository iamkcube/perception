import { useMediaQuery, useTheme } from "@mui/material";
import { ReactNode, createContext, useContext } from "react";

interface OtherContextProps {
	isBigDevice: boolean;
	isSmallDevice: boolean;
}

const OtherContext = createContext<OtherContextProps | undefined>(undefined);

export function useOtherContext() {
	const context = useContext(OtherContext);
	if (!context) {
		throw new Error("useOtherContext must be used within an OtherContextProvider");
	}
	return context;
}

export default function OtherContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	const theme = useTheme();
	const isBigDevice = useMediaQuery(theme.breakpoints.up("md"));
	const isSmallDevice = useMediaQuery(theme.breakpoints.down("md"));

	const value = { isBigDevice, isSmallDevice };

	return (
		<OtherContext.Provider value={value}>{children}</OtherContext.Provider>
	);
}
