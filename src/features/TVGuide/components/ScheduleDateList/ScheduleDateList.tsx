import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	// actions
	selectDate,
	navigateSchedule,
	// selectors
	selectSelectedDateIndex,
	selectScheduleDates,
} from "../../store/tvGuideSlice";
import ScheduleDate from "../ScheduleDate/ScheduleDate";
import styles from "./styles.module.css";

function ScheduleDates() {
	const dispatch = useDispatch();
	const scheduleDates = useSelector(selectScheduleDates);
	const selectedIndex = useSelector(selectSelectedDateIndex);

	const onSelectDate = (date: string) => {
		dispatch(selectDate(date));
	};

	const onNavigateSchedule = (direction: number) => {
		dispatch(navigateSchedule(direction));
	};

	const isPreviousButtonDisabled = selectedIndex === 0;
	const lastScheduleIndex = scheduleDates.length - 1;
	const isNextButtonDisabled = selectedIndex === lastScheduleIndex;

	return (
		<div className={styles["schedule-date-list-wrapper"]}>
			<button
				onClick={() => onNavigateSchedule(-1)}
				className={styles["schedule-date-list__navigation-button"]}
				disabled={isPreviousButtonDisabled}
			>
				{"<"}
			</button>

			<ul className={styles["schedule-date-list"]}>
				{scheduleDates.map((date: string, index: number) => {
					return (
						<ScheduleDate
							key={date}
							onSelectDate={onSelectDate}
							date={date}
							index={index}
							selectedIndex={selectedIndex}
						/>
					);
				})}
			</ul>

			<button
				onClick={() => onNavigateSchedule(1)}
				className={styles["schedule-date-list__navigation-button"]}
				disabled={isNextButtonDisabled}
			>
				{">"}
			</button>
		</div>
	);
}

export default ScheduleDates;
