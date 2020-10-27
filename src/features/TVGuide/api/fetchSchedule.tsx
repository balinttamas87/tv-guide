const fetchSchedule = (serviceId: string, date: string) => {
	const scheduleUrl = `https://cdn.skyq.sky.com/recruitment/tvguide/schedule/${date}/${serviceId}.json`;

	return fetch(scheduleUrl);
};
export default fetchSchedule;
