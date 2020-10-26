import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceScheduleList from "./components/ServiceScheduleList/ServiceScheduleList";
import TimeLine from "./components/TimeLine/TimeLine";
import ServiceBoxList from "./components/ServiceBoxList/ServiceBoxList";
import {
	selectServices,
	getServices,
	selectSchedules,
	getSchedules,
} from "./store/tvGuideSlice";

function TVGuide() {
	const dispatch = useDispatch();
	const services = useSelector(selectServices);
	const limitedNumberOfServices = services.slice(0, 20);
	const schedules = useSelector(selectSchedules);

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getSchedules(services));
	}, [dispatch, services]);

	return (
		<div>
			<TimeLine />

			<div style={{ display: "flex", flexDirection: "row", marginTop: "26px" }}>
				<ServiceBoxList services={limitedNumberOfServices} />
				<ServiceScheduleList schedules={schedules} />
			</div>
		</div>
	);
}

export default TVGuide;
