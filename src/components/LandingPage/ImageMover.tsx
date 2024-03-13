import { useOtherContext } from "@/contexts/OtherContext";
import { lastYearImages } from "@assets/ts/lastYearImages";
import React, { useEffect, useState } from "react";

interface LastPosition {
	x: number;
	y: number;
}

export default function ImageMover() {
	const { isBigDevice } = useOtherContext();

	const [globalIndex, setGlobalIndex] = useState(0);
	const [last, setLast] = useState<LastPosition>({ x: 0, y: 0 });
	const [images, setImages] =
		useState<HTMLCollectionOf<HTMLImageElement> | null>(null);

	useEffect(() => {
		setImages(
			document.getElementsByClassName(
				"lastYearImages"
			) as HTMLCollectionOf<HTMLImageElement>
		);
	}, []);

	const activate = (image: HTMLImageElement, x: number, y: number) => {
		image.style.left = `${
			x -
			document
				.getElementById("imageMoverContainer")!
				.getBoundingClientRect().x
		}px`;
		image.style.top = `${
			y -
			document
				.getElementById("imageMoverContainer")!
				.getBoundingClientRect().y
		}px`;
		image.style.zIndex = `${globalIndex}`;
		// image.style.display = "block";
		image.setAttribute("data-visible", "active");

		setLast({ x, y });
	};

	const distanceFromLast = (x: number, y: number) => {
		return Math.hypot(x - last.x, y - last.y);
	};

	const handleMouseMove = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		if (
			images &&
			distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 30
		) {
			const lead = images[globalIndex % images.length];
			const tail = images[(globalIndex - 5) % images.length];

			activate(lead, e.clientX, e.clientY);

			// if (tail) tail.style.display = "none";
			if (tail) tail.setAttribute("data-visible", "inactive");

			setGlobalIndex(globalIndex + 1);
		}
	};

	const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
		const touch = e.touches[0];

		if (
			images &&
			distanceFromLast(touch.clientX, touch.clientY) >
				window.innerWidth / 30
		) {
			const lead = images[globalIndex % images.length];
			const tail = images[(globalIndex - 5) % images.length];

			activate(lead, touch.clientX, touch.clientY);

			// if (tail) tail.style.display = "none";
			if (tail) tail.setAttribute("data-visible", "inactive");

			setGlobalIndex(globalIndex + 1);
		}
	};

	return (
		<div
			onMouseMove={handleMouseMove}
			onTouchMove={handleTouchMove}
			style={{ height: "50vh" }}
		>
			{lastYearImages.map((src, index) => (
				<img
					key={index}
					className="lastYearImages"
					crossOrigin="anonymous"
					style={{
						width: "40vmin",
						position: "absolute",
						transform: isBigDevice
							? "translate(-50%, -50%)"
							: "auto",
						pointerEvents: "none",
						animation: "fade-in-full 100ms forwards",
					}}
					loading="lazy"
					data-index={index}
					data-visible="inactive"
					src={src}
				/>
			))}
		</div>
	);
}
