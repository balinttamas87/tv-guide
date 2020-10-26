import React, { useEffect, useState } from "react";
import TVGuide from "./features/TVGuide/TVGuide";
// import './App.css';

function App() {
	// const initialState: InitialState = {};
	const [services, setServices] = useState([]);
	const [schedules, setSchedules] = useState<any>([]);

	useEffect(() => {
		const servicesUrl =
			"https://cdn.skyq.sky.com/recruitment/tvguide/services.json";
		// const scheduleUrl =
		// 	"https://cdn.skyq.sky.com/recruitment/tvguide/schedule/20200129/2002.json";

		fetch(servicesUrl)
			.then((res) => res.json())
			.then((services) => {
				console.log({ services });
				setServices(services);
				Promise.all(
					services.map((service: any) =>
						fetch(
							`https://cdn.skyq.sky.com/recruitment/tvguide/schedule/20200129/${service.sid}.json`
						).then((res: any) => res.json())
					)
				).then((schedules) => {
					console.log({ schedules });
					setSchedules(schedules);
				});
			});

		// fetch(scheduleUrl)
		// 	.then((res) => res.json())
		// 	.then((schedule) => {
		// 		console.log({ schedule });
		// 		setSchedule(schedule);
		// 	});
	}, []);

	return (
		<div className="App">
			<TVGuide services={services} schedules={schedules} />
		</div>
	);
}

export default App;
