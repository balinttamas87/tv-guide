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
	selectScheduleDates,
	selectedDateIndex,
} from "./store/tvGuideSlice";
import ScheduleDateList from "./components/ScheduleDateList/ScheduleDateList";

function TVGuide() {
	const dispatch = useDispatch();
	const services = useSelector(selectServices);
	const limitedNumberOfServices = services.slice(0, 20);
	const schedules = useSelector(selectSchedules);
	const scheduleDates = useSelector(selectScheduleDates);
	const selectedIndex = useSelector(selectedDateIndex);
	const date = scheduleDates[selectedIndex];

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getSchedules({ services, date }));
	}, [dispatch, services, date]);

	return (
		<>
			<ScheduleDateList />
			<TimeLine />

			<div style={{ display: "flex", flexDirection: "row", marginTop: "78px" }}>
				<ServiceBoxList services={limitedNumberOfServices} />
				<ServiceScheduleList schedules={schedules} />
			</div>
		</>
	);
}

export default TVGuide;
