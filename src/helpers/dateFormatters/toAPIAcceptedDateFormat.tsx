const toAPIAcceptedDateFormat = (dateObject: Date) => {
	const fullYear = dateObject.getFullYear();
	const month = dateObject.getMonth() + 1; // months are zero based
	const date = dateObject.getDate();
	const formattedMonth = String(month).padStart(2, "0");
	const formattedDate = String(date).padStart(2, "0");
	return `${fullYear}${formattedMonth}${formattedDate}`;
};

export default toAPIAcceptedDateFormat;
