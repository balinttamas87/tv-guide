import React from "react";
import ServiceScheduleList from "./components/ServiceScheduleList/ServiceScheduleList";
import TimeLine from "./components/TimeLine/TimeLine";
import ServiceBoxList from "./components/ServiceBoxList/ServiceBoxList";

function TVGuide({ services, schedules }: any) {
	return (
		<div>
			<TimeLine />

			<div style={{ display: "flex", flexDirection: "row", marginTop: "26px" }}>
				<ServiceBoxList services={services} />
				<ServiceScheduleList schedules={schedules} />
			</div>
		</div>
	);
}

export default TVGuide;
