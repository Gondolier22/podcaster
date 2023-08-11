export const millisecondsToMinutes = (ms: number): string => {
	let seconds = Math.floor(ms / 1000);
	let minutes = Math.floor(seconds / 60);
	let hours = Math.floor(minutes / 60);
	seconds %= 60;
	minutes %= 60;
	hours %= 24;
	return `${hours > 0 ? `${hours < 10 ? `0${hours}` : hours}:` : ''}${
		minutes < 10 ? `0${minutes}` : minutes
	}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
