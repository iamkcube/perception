export function timeFormatChanger(time: string) {
	// Parse hours and minutes
	let hours = parseInt(time.slice(0, 2), 10);
	let minutes = parseInt(time.slice(2), 10);

	// Create a Date object at the specified time
	let date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);

	// Use the Intl API to format the time
	let formattedTime = new Intl.DateTimeFormat("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	}).format(date);

	return formattedTime;
}
