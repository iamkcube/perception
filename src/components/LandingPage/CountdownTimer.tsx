import { useEffect, useState } from "react";

interface TimeLeft {
	days?: number;
	hrs?: number;
	min?: number;
	sec?: number;
}

export default function CountdownTimer({ date }: { date: string }) {
	const calculateTimeLeft = (): TimeLeft => {
		const difference = +new Date(date) - +new Date();
		let timeLeft: TimeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
				min: Math.floor((difference / 1000 / 60) % 60),
				sec: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearTimeout(timer);
	});

	const timerComponents: JSX.Element[] = [];

	Object.keys(timeLeft).forEach((interval) => {
		if (!timeLeft[interval as keyof TimeLeft]) {
			return;
		}

		timerComponents.push(
			<span key={interval}>
				{timeLeft[interval as keyof TimeLeft]}
				<span
					style={{
						opacity: 0.8,
					}}
				>
					{" "}
					{interval}{" "}
				</span>{" "}
			</span>
		);
	});

	return (
		<>
			{timerComponents.length ? (
				<>
					{timerComponents} <span>left</span>
				</>
			) : (
				<span>The Event is ON!</span>
			)}
		</>
	);
}
