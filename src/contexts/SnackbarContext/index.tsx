import { createContext } from "react";

interface SnackbarContextProps {
	openSnackbar: (
		message: string,
		vertical?: "top" | "bottom",
		horizontal?: "left" | "right" | "center"
	) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
	openSnackbar: () => {},
});
