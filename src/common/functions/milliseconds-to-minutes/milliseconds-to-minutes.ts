export const millisecondsToMinutes = (ms: number): string => {
	const minutes = ms / 1000 / 60;
	return `${minutes.toFixed(2).replace('.', ':')}`;
};
