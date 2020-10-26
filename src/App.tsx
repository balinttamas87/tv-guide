import React, { useEffect, useState } from "react";
import TVGuide from "./features/TVGuide/TVGuide";

function App() {
	const [services, setServices] = useState([]);
	const [schedules, setSchedules] = useState<any>([]);

	useEffect(() => {
		const servicesUrl =
			"https://cdn.skyq.sky.com/recruitment/tvguide/services.json";

		fetch(servicesUrl)
			.then((res) => res.json())
			.then((services) => {
				setServices(services.slice(0, 20));
				Promise.all(
					services
						.slice(0, 20)
						.map((service: any) =>
							fetch(
								`https://cdn.skyq.sky.com/recruitment/tvguide/schedule/20200129/${service.sid}.json`
							).then((res: any) => res.json())
						)
				).then((schedules) => {
					setSchedules(schedules);
				});
			});
	}, []);

	return (
		<div className="App">
			<TVGuide services={services} schedules={schedules} />
		</div>
	);
}

export default App;
