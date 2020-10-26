const fetchSchedule = (serviceId: string) => {
	const scheduleUrl = `https://cdn.skyq.sky.com/recruitment/tvguide/schedule/20200129/${serviceId}.json`;

	return fetch(scheduleUrl);
};
export default fetchSchedule;
