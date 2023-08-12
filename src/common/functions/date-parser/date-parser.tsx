export const dateParser = (date: string): string => {
	const aux = new Date(date);
	return `${aux.getDate()}/${aux.getMonth() + 1}/${aux.getFullYear()}`;
};
