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
	serviceSelectors,
	scheduleSelectors,
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
	const servicesEntity = serviceSelectors.selectAll(services);
	const schedulesEntity = scheduleSelectors.selectAll(schedules);

	useEffect(() => {
		dispatch(getServices());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getSchedules({ services: servicesEntity, date }));
	}, [dispatch, servicesEntity, date]);

	return (
		<>
			<ScheduleDateList />
			<TimeLine />
			<ServiceScheduleList
				schedules={schedulesEntity}
				services={servicesEntity}
			/>
			<ProgramModal isOpen={isProgramModalOpen} />
		</>
	);
}

export default TVGuide;
