import { useOtherContext } from "@/contexts/OtherContext";
import { SnackbarContext } from "@/contexts/SnackbarContext";
import { Grow, GrowProps } from "@mui/material";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { ReactNode, useState } from "react";

interface State extends SnackbarOrigin {
	open: boolean;
}

export default function SnackbarProvider({
	children,
}: {
	children: ReactNode;
}) {
	const { isBigDevice } = useOtherContext();
	// const isBigDevice = false;
	const [state, setState] = useState<State>({
		open: false,
		vertical: isBigDevice ? "top" : "bottom",
		horizontal: "center",
	});
	const { vertical, horizontal, open } = state;
	const [message, setMessage] = useState("");

	function openSnackbar(
		newMessage: string,
		vertical: "top" | "bottom" = isBigDevice ? "top" : "bottom",
		horizontal: "left" | "right" | "center" = "center"
	) {
		setMessage(newMessage);
		handleClick({ vertical: vertical, horizontal: horizontal });
	}

	const handleClick = (newState: SnackbarOrigin) => {
		setState({ ...newState, open: true });
	};

	const handleClose = () => {
		setState({ ...state, open: false });
	};

	function GrowTransition(props: GrowProps) {
		return <Grow {...props} />;
	}

	return (
		<SnackbarContext.Provider value={{ openSnackbar }}>
			{children}
			<Snackbar
				anchorOrigin={{ vertical, horizontal }}
				open={open}
				onClose={handleClose}
				autoHideDuration={5000}
				TransitionComponent={GrowTransition}
				message={message}
				key={new Date().getTime()}
			/>
		</SnackbarContext.Provider>
	);
}
