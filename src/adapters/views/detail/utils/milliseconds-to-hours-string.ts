const millisecondsToHoursString = (milliseconds: number): string => {
  return `${Math.floor(milliseconds / 3600000)}h ${Math.floor(
    (milliseconds % 3600000) / 60000
  )}m ${Math.floor((milliseconds % 60000) / 1000)}s`;
};

export default millisecondsToHoursString;
