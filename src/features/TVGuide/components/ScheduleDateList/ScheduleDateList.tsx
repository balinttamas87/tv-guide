import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	selectDate,
	navigateSchedule,
	selectedDateIndex,
	selectScheduleDates,
} from "../../store/tvGuideSlice";
import ScheduleDate from "../ScheduleDate/ScheduleDate";
import styles from "./styles.module.css";

function ScheduleDates() {
	const dispatch = useDispatch();
	const scheduleDates = useSelector(selectScheduleDates);
	const selectedIndex = useSelector(selectedDateIndex);
	const selectedDate = scheduleDates[selectedIndex];

	const onSelectDate = (date: string) => {
		dispatch(selectDate(date));
	};

	const onNavigateSchedule = (direction: number) => {
		dispatch(navigateSchedule(direction));
	};

	return (
		<div className={styles["schedule-date-list-wrapper"]}>
			<button
				onClick={() => onNavigateSchedule(-1)}
				className={styles["schedule-date-list__navigation-button"]}
			>
				{"<"}
			</button>

			<ul className={styles["schedule-date-list"]}>
				{scheduleDates.map((date: string, index: number) => {
					return (
						<ScheduleDate
							key={date}
							onSelectDate={onSelectDate}
							selectedDate={selectedDate}
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
			>
				{">"}
			</button>
		</div>
	);
}

export default ScheduleDates;
