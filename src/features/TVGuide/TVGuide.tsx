import React from "react";
import ServiceBox from "./components/ServiceBox/ServiceBox";
import ServiceProgram from "./components/ServiceProgram/ServiceProgram";
import ServiceProgramList from "./components/ServiceProgramList/ServiceProgramList";
import ServiceScheduleList from "./components/ServiceScheduleList/ServiceScheduleList";

function TVGuide({ services, schedules }: any) {
	return (
		<div style={{ display: "flex", flexDirection: "row" }}>
			<div>
				{services.map((service: any) => (
					<ServiceBox
						key={service.sid}
						number={service.c}
						format={service.sf}
						genre={service.sg}
						id={service.sid}
						title={service.t}
					/>
				))}
			</div>
			<ServiceScheduleList>
				{schedules.map((schedule: any) => {
					return (
						<ServiceProgramList key={schedule.sid}>
							{schedule.events.map((event: any) => (
								<ServiceProgram event={event} key={event.eid} />
							))}
						</ServiceProgramList>
					);
				})}
			</ServiceScheduleList>
		</div>
	);
}

export default TVGuide;
