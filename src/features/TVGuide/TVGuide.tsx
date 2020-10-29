import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ServiceScheduleList from "./components/ServiceScheduleList/ServiceScheduleList";
import TimeLine from "./components/TimeLine/TimeLine";
import {
	// thunks
	getServices,
	getSchedules,
	// selectors
	selectServices,
	selectSchedules,
	selectScheduleDates,
	selectSelectedDateIndex,
	selectIsProgramModalOpen,
} from "./store/tvGuideSlice";
import ScheduleDateList from "./components/ScheduleDateList/ScheduleDateList";
import ProgramModal from "../ProgramModal/ProgramModal";

function TVGuide() {
	const dispatch = useDispatch();
	const services = useSelector(selectServices);
	const schedules = useSelector(selectSchedules);
	const scheduleDates = useSelector(selectScheduleDates);
	const selectedIndex = useSelector(selectSelectedDateIndex);
	const date = scheduleDates[selectedIndex];
	const isProgramModalOpen = useSelector(selectIsProgramModalOpen);

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
				<ServiceScheduleList schedules={schedules} services={services} />
			</div>

			<ProgramModal isOpen={isProgramModalOpen} />
		</>
	);
}

export default TVGuide;
